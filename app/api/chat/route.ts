import { NextRequest } from "next/server";

/**
 * Server-side proxy for the DeepSeek Chat Completions API.
 *
 * The API key never reaches the browser: the client calls this route, and this
 * route calls DeepSeek with `DEEPSEEK_API_KEY` from the server environment.
 *
 * Required env var:  DEEPSEEK_API_KEY=sk-...
 * Optional env var:  DEEPSEEK_MODEL=deepseek-flash   (default: deepseek-flash)
 */
const DEEPSEEK_ENDPOINT = "https://api.deepseek.com/chat/completions";

const MAX_MESSAGES = 12;
const MAX_CONTENT_LENGTH = 4000;
const MAX_REQUESTS_PER_WINDOW = 20;
const RATE_WINDOW_MS = 60_000;

const SYSTEM_PROMPT = `You are "Shiyon AI Companion", the friendly assistant on the personal portfolio website of Shiyon Thomas.

Answer ONLY questions about Shiyon's professional profile: his career, experience, skills, projects, certifications, education, and how to get in touch. Be concise (2-4 sentences), warm, and professional. Do not invent facts. If you are asked something outside Shiyon's professional profile, or something not covered below, politely say you don't have that information and suggest using the contact section.

KEY FACTS ABOUT SHIYON:
- Full name: Shiyon Thomas.
- Role: Adobe Campaign Developer & MarTech Systems Architect.
- Current role: Associate Consultant at Capgemini (Dec 2025 - present), leading the Adobe Campaign v7 to v8 cloud migration with zero downtime.
- Previous role: Systems Engineer at Tata Consultancy Services (TCS), July 2022 - Aug 2025 (3+ years), managing critical marketing automation campaigns for Fortune 50 healthcare and retail clients.
- Certification: Adobe Certified Expert (2026) - Adobe Campaign Classic Business Practitioner Expert (schema modeling, technical workflows, MTA deliverability, omni-channel orchestration).
- Education: Master of Computer Applications (MCA), Amrita School of Engineering, Amritapuri (2020-2022, CGPA 8.06); Bachelor of Computer Applications (BCA), St. Philomena's College, Mysore (2017-2020, CGPA 7.0).
- Core skills: Adobe Campaign Classic v7/v8, technical workflows, data schemas, JSSP, server-side JavaScript, SQL, Python, XML/JSON, Google Cloud Platform (GCP), ETL pipelines, PII encryption, PostgreSQL/Oracle, A/B and multivariate testing, deliverability, regression QA, GDPR/CCPA compliance.
- Flagship work: zero-downtime ACC v7 to v8 migration; high-velocity omnichannel lifecycle engine (15M+ messages/month); JSSP personalization framework; GCP cloud-storage ETL ingestion and sanitization.
- Notable metrics: 15M+ messages dispatched per month, 99.98% SLA precision.
- Contact: mobile/WhatsApp +91 8075195107, email shiyonthoms@gmail.com, LinkedIn linkedin.com/in/shiyonthomas.

If the user greets you or asks a general opener, respond briefly and invite them to ask about Shiyon's architecture, experience, or contact details.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  entry.count += 1;
  return false;
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    return new Response(
      "Chatbot is not configured yet. Add DEEPSEEK_API_KEY to the environment.",
      { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } }
    );
  }

  // Best-effort abuse guard (per warm server instance).
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return new Response("Too many requests. Please try again shortly.", {
      status: 429,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  let payload: unknown;
  try {
    payload = await req.json();
  } catch {
    return new Response("Invalid JSON body.", { status: 400 });
  }

  const rawMessages = (payload as { messages?: unknown } | null)?.messages;
  if (!Array.isArray(rawMessages)) {
    return new Response("Missing messages.", { status: 400 });
  }

  const messages: ChatMessage[] = rawMessages
    .filter(
      (m): m is ChatMessage =>
        !!m &&
        typeof m === "object" &&
        ((m as ChatMessage).role === "user" ||
          (m as ChatMessage).role === "assistant") &&
        typeof (m as ChatMessage).content === "string" &&
        (m as ChatMessage).content.trim().length > 0
    )
    .slice(-MAX_MESSAGES)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_CONTENT_LENGTH),
    }));

  if (messages.length === 0) {
    return new Response("No valid messages.", { status: 400 });
  }

  const model = process.env.DEEPSEEK_MODEL || "deepseek-flash";

  let upstream: Response;
  try {
    upstream = await fetch(DEEPSEEK_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
        stream: true,
        thinking: { type: "disabled" },
        temperature: 0.6,
        max_tokens: 400,
      }),
    });
  } catch {
    return new Response("Could not reach the AI service.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  if (!upstream.ok || !upstream.body) {
    const detail = await upstream.text().catch(() => "");
    return new Response(detail || "The AI service returned an error.", {
      status: 502,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }

  const reader = upstream.body.getReader();
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();

  // Translate DeepSeek's SSE stream into a plain-text stream of the reply.
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed.startsWith("data:")) continue;
            const data = trimmed.slice(5).trim();
            if (data === "[DONE]") {
              controller.close();
              return;
            }
            try {
              const parsed = JSON.parse(data) as {
                choices?: { delta?: { content?: string | null } }[];
              };
              const delta = parsed.choices?.[0]?.delta?.content;
              if (typeof delta === "string" && delta.length > 0) {
                controller.enqueue(encoder.encode(delta));
              }
            } catch {
              // Ignore malformed chunks (e.g. partial JSON).
            }
          }
        }
        controller.close();
      } catch (err) {
        controller.error(err);
      }
    },
    cancel() {
      reader.cancel().catch(() => {});
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
