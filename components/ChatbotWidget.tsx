"use client";

import { useEffect, useRef, useState } from "react";

type Message = { role: "user" | "bot"; text: string };

const ANSWERS = {
  migration:
    "Shiyon currently leads technical execution of Adobe Campaign migration from v7 to v8 at Capgemini. He specializes in zero-downtime cutovers, refactoring relational schemas (nms:recipient), and validating bidirectional GCP BigQuery & Cloud Storage pipelines.",
  jssp: "Shiyon writes high-performance server-side JavaScript (JSSP) modules for real-time personalization, complex XML parsing, dynamic product recommendations, and custom delivery MTA throughput tuning.",
  experience:
    "Shiyon has 4+ years of specialized MarTech experience: currently Associate Consultant at Capgemini (v8 Migration Lead), formerly Systems Engineer at TCS (3+ years managing Fortune 50 healthcare campaigns dispatching 15M+ messages/mo).",
  contact:
    "You can reach Shiyon directly at +91 8075195107 or via email at shiyonthoms@gmail.com. You can also connect on LinkedIn: linkedin.com/in/shiyonthomas.",
  default:
    "Thank you for asking! Shiyon specializes in Adobe Campaign Classic v7/v8 architecture, custom schemas, JSSP scripting, and enterprise GCP integrations. Feel free to reach out via the contact terminal!",
};

function matchAnswer(query: string): string {
  const q = query.toLowerCase();
  if (q.includes("v8") || q.includes("v7") || q.includes("migration"))
    return ANSWERS.migration;
  if (
    q.includes("jssp") ||
    q.includes("mta") ||
    q.includes("script") ||
    q.includes("tuning")
  )
    return ANSWERS.jssp;
  if (
    q.includes("capgemini") ||
    q.includes("tcs") ||
    q.includes("experience") ||
    q.includes("role")
  )
    return ANSWERS.experience;
  if (
    q.includes("contact") ||
    q.includes("touch") ||
    q.includes("phone") ||
    q.includes("email")
  )
    return ANSWERS.contact;
  return ANSWERS.default;
}

export default function ChatbotWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const sphereRef = useRef<HTMLDivElement>(null);
  const pupilLeftRef = useRef<HTMLDivElement>(null);
  const pupilRightRef = useRef<HTMLDivElement>(null);
  const eyesWrapRef = useRef<HTMLDivElement>(null);
  const mouthPathRef = useRef<SVGPathElement>(null);
  const cheekLeftRef = useRef<HTMLDivElement>(null);
  const cheekRightRef = useRef<HTMLDivElement>(null);
  const messagesBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when the popup opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Auto-scroll messages to bottom
  useEffect(() => {
    const box = messagesBoxRef.current;
    if (box) box.scrollTop = box.scrollHeight;
  }, [messages]);

  // Eye tracking + proximity-reactive smile / cheeks / eye squint
  useEffect(() => {
    const maxEyeRadius = 2.8;
    const proximityRadius = 380;

    const onMouseMove = (e: MouseEvent) => {
      const sphere = sphereRef.current;
      const pupilLeft = pupilLeftRef.current;
      const pupilRight = pupilRightRef.current;
      if (!sphere || !pupilLeft || !pupilRight) return;

      const rect = sphere.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.hypot(deltaX, deltaY);

      const offset = Math.min(maxEyeRadius, distance / 35);
      const pupilX = Math.cos(angle) * offset;
      const pupilY = Math.sin(angle) * offset;
      pupilLeft.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      pupilRight.style.transform = `translate(${pupilX}px, ${pupilY}px)`;

      const proximity = Math.max(0, Math.min(1, 1 - distance / proximityRadius));

      const mouth = mouthPathRef.current;
      if (mouth) {
        const startX = 4 - proximity * 1.2;
        const startY = 4.5 - proximity * 1.5;
        const endX = 16 + proximity * 1.2;
        const endY = startY;
        const midY = 5.2 + proximity * 5.3;
        mouth.setAttribute(
          "d",
          `M ${startX.toFixed(1)} ${startY.toFixed(1)} Q 10 ${midY.toFixed(
            1
          )} ${endX.toFixed(1)} ${endY.toFixed(1)}`
        );
        mouth.setAttribute("stroke-width", (1.7 + proximity * 0.5).toFixed(2));
      }

      const cheekOpacity = 0.28 + proximity * 0.55;
      if (cheekLeftRef.current)
        cheekLeftRef.current.style.opacity = cheekOpacity.toFixed(2);
      if (cheekRightRef.current)
        cheekRightRef.current.style.opacity = cheekOpacity.toFixed(2);

      const eyesWrap = eyesWrapRef.current;
      if (eyesWrap) {
        if (proximity > 0.75) {
          const eyeSquash = 1 - (proximity - 0.75) * 0.35;
          eyesWrap.style.transform = `scaleY(${eyeSquash.toFixed(2)})`;
        } else {
          eyesWrap.style.transform = "scaleY(1)";
        }
      }
    };

    const onMouseLeave = () => {
      if (mouthPathRef.current)
        mouthPathRef.current.setAttribute("d", "M 4 4.5 Q 10 5.2 16 4.5");
      if (cheekLeftRef.current) cheekLeftRef.current.style.opacity = "0.28";
      if (cheekRightRef.current) cheekRightRef.current.style.opacity = "0.28";
      if (eyesWrapRef.current) eyesWrapRef.current.style.transform = "scaleY(1)";
      if (pupilLeftRef.current)
        pupilLeftRef.current.style.transform = "translate(0px, 0px)";
      if (pupilRightRef.current)
        pupilRightRef.current.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const val = input.trim();
    if (!val || isTyping) return;

    const userMessage: Message = { role: "user", text: val };
    const history = [...messages, userMessage].map((m) => ({
      role: m.role === "bot" ? "assistant" : "user",
      content: m.text,
    }));

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok || !res.body) {
        throw new Error("Chat service unavailable.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      let started = false;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        if (!started) {
          started = true;
          setIsTyping(false);
          setMessages((prev) => [...prev, { role: "bot", text: acc }]);
        } else {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1] = { role: "bot", text: acc };
            return copy;
          });
        }
      }

      if (!started) {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          { role: "bot", text: matchAnswer(val) },
        ]);
      }
    } catch {
      // Graceful fallback to the built-in knowledge base.
      setIsTyping(false);
      setMessages((prev) => [...prev, { role: "bot", text: matchAnswer(val) }]);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 flex flex-col items-end pointer-events-none select-none">
      {/* Liquid Glass Chat Popup */}
      <div
        className={`chat-popup-window ${
          open ? "popup-open" : "popup-closed"
        } pointer-events-auto w-[92vw] sm:w-[380px] max-w-sm rounded-3xl border border-[#E2DDD5] dark:border-white/15 bg-white/90 dark:bg-[#141416]/95 backdrop-blur-2xl shadow-[0_22px_50px_-12px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.9)] dark:shadow-[0_22px_50px_-12px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.1)] overflow-hidden flex flex-col mb-3 max-h-[520px] transition-all`}
      >
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-[#E2DDD5]/80 flex items-center justify-between bg-white/40 dark:bg-white/5">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <div>
              <h3 className="text-xs font-bold text-[#111111] dark:text-[#EDE8E1] font-mono tracking-tight flex items-center gap-1.5">
                <span>Shiyon AI Companion</span>
                <span className="text-[9px] px-2 py-0.5 rounded font-mono font-bold tracking-wider bg-gradient-to-r from-emerald-500 to-teal-400 text-black shadow-sm">
                  v8.TURBO
                </span>
              </h3>
              <p className="text-[10px] text-[#52504C] dark:text-[#A8A39C] font-mono">
                Adobe Campaign Intelligence
              </p>
            </div>
          </div>
          <button
            aria-label="Close Chat"
            onClick={() => setOpen(false)}
            className="w-7 h-7 rounded-full flex items-center justify-center text-[#52504C] hover:text-[#111111] hover:bg-black/5 dark:hover:bg-white/10 dark:text-[#EDE8E1] transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div
          ref={messagesBoxRef}
          className="p-4 overflow-y-auto space-y-3 text-xs font-sans max-h-[300px] flex-1"
        >
          {/* Bot Greeting */}
          <div className="flex items-start gap-2.5">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-stone-400 via-stone-200 to-white dark:from-stone-600 dark:via-stone-700 dark:to-stone-800 border border-stone-300 dark:border-white/10 shadow-sm shrink-0 flex items-center justify-center text-[10px]">
              ✨
            </div>
            <div className="p-3.5 rounded-2xl rounded-tl-sm bg-[#EFEAE1]/80 dark:bg-white/10 text-[#111111] dark:text-[#EDE8E1] border border-[#E2DDD5] dark:border-white/10 shadow-sm space-y-1">
              <p className="font-bold text-xs tracking-tight flex items-center gap-1.5 text-[#111111] dark:text-white">
                <span>Greetings stranger!</span>
                <span className="text-[9px] font-mono font-normal text-[#52504C] dark:text-[#A8A39C]">
                  [ONLINE]
                </span>
              </p>
              <p className="text-[11px] leading-relaxed text-[#52504C] dark:text-[#C7C2BA]">
                How can I help you explore Shiyon&apos;s Adobe Campaign
                architecture, migrations, or MarTech systems today?
              </p>
            </div>
          </div>

          {/* Dynamic messages */}
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="p-3 rounded-2xl rounded-tr-sm bg-[#111111] text-white dark:bg-white dark:text-black max-w-[85%] text-[11px] shadow-sm">
                  {m.text}
                </div>
              </div>
            ) : (
              <div key={i} className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-stone-300 dark:bg-stone-700 shrink-0 flex items-center justify-center text-[9px] mt-0.5">
                  ✨
                </div>
                <div className="p-3 rounded-2xl rounded-tl-sm bg-[#EFEAE1]/80 dark:bg-white/10 text-[#111111] dark:text-[#EDE8E1] border border-[#E2DDD5] dark:border-white/10 max-w-[85%] text-[11px] leading-relaxed shadow-sm">
                  {m.text}
                </div>
              </div>
            )
          )}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-stone-300 dark:bg-stone-700 shrink-0 flex items-center justify-center text-[9px] mt-0.5">
                ✨
              </div>
              <div className="p-3 rounded-2xl rounded-tl-sm bg-[#EFEAE1]/80 dark:bg-white/10 border border-[#E2DDD5] dark:border-white/10 flex items-center gap-1 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#52504C] dark:bg-[#A8A39C] animate-bounce [animation-delay:0ms]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#52504C] dark:bg-[#A8A39C] animate-bounce [animation-delay:150ms]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#52504C] dark:bg-[#A8A39C] animate-bounce [animation-delay:300ms]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Footer */}
        <form
          onSubmit={handleSubmit}
          className="p-3 border-t border-[#E2DDD5]/80 bg-white/60 dark:bg-white/5 flex items-center gap-2"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 px-3 py-2 rounded-xl bg-white/80 dark:bg-white/10 border border-[#E2DDD5] dark:border-white/15 text-[#111111] dark:text-[#EDE8E1] placeholder:text-[#52504C]/60 text-xs focus:outline-none focus:border-[#111111] dark:focus:border-white transition-all font-sans"
            placeholder="Ask about Shiyon's architecture..."
            type="text"
          />
          <button
            aria-label="Send message"
            type="submit"
            disabled={isTyping}
            className="w-8 h-8 rounded-xl bg-[#111111] hover:bg-[#2a2927] text-white flex items-center justify-center transition-all shrink-0 dark:bg-white dark:text-black disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>

      {/* 3D Cute Ball Trigger */}
      <div className="relative flex flex-col items-center pointer-events-auto">
        <div className="floating-shadow w-11 h-2.5 bg-black/35 rounded-full blur-[3px] -mb-1"></div>
        <button
          aria-label="Open AI Assistant"
          onClick={() => setOpen((v) => !v)}
          className="chat-ball-btn relative group cursor-pointer focus:outline-none p-1.5"
        >
          {/* Speech bubble */}
          <div className="absolute -top-9 right-1/2 translate-x-1/2 px-2.5 py-1 rounded-xl bg-[#111111] dark:bg-white text-white dark:text-black text-[10px] font-mono font-semibold tracking-tight opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/20 dark:border-black/20 flex items-center gap-1.5 z-50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Ask me anything! ✨</span>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#111111] dark:bg-white rotate-45 border-b border-r border-white/20 dark:border-black/20"></div>
          </div>

          {/* Sphere */}
          <div
            ref={sphereRef}
            className="floating-ball relative w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-[0_16px_28px_-6px_rgba(0,0,0,0.38),inset_0_-6px_14px_rgba(0,0,0,0.28),inset_0_3px_10px_rgba(255,255,255,0.95)] transition-transform duration-150 ease-out"
            style={{
              background:
                "radial-gradient(circle at 35% 25%, rgb(255, 255, 255) 0%, rgb(236, 231, 223) 32%, rgb(213, 205, 193) 68%, rgb(142, 133, 118) 100%)",
            }}
          >
            {/* Specular highlight */}
            <div className="absolute top-1.5 left-2.5 w-4 h-2.5 rounded-full bg-white/90 blur-[1px] rotate-[-25deg] pointer-events-none z-20"></div>

            {/* Eyes */}
            <div
              ref={eyesWrapRef}
              className="eye-blink-wrapper relative flex items-center justify-center gap-2 z-10 w-full px-2 mt-0.5"
            >
              <div className="eye-socket relative w-3.5 h-5 bg-white rounded-full border border-black/20 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center">
                <div
                  ref={pupilLeftRef}
                  className="pupil-element relative w-2.5 h-3.5 bg-[#111111] rounded-full transition-transform duration-75 ease-out flex items-center justify-center"
                >
                  <span className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></span>
                  <span className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white/70 rounded-full"></span>
                </div>
              </div>
              <div className="eye-socket relative w-3.5 h-5 bg-white rounded-full border border-black/20 shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.35)] overflow-hidden flex items-center justify-center">
                <div
                  ref={pupilRightRef}
                  className="pupil-element relative w-2.5 h-3.5 bg-[#111111] rounded-full transition-transform duration-75 ease-out flex items-center justify-center"
                >
                  <span className="absolute top-0.5 right-0.5 w-1 h-1 bg-white rounded-full"></span>
                  <span className="absolute bottom-0.5 left-0.5 w-0.5 h-0.5 bg-white/70 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Mouth */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center pointer-events-none">
              <svg className="w-5 h-2.5 overflow-visible" viewBox="0 0 20 10">
                <path
                  ref={mouthPathRef}
                  d="M 4 4 Q 10 5.5 16 4"
                  fill="none"
                  stroke="#252320"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                />
              </svg>
            </div>

            {/* Cheeks */}
            <div
              ref={cheekLeftRef}
              className="absolute bottom-2.5 left-1.5 w-2 h-1.5 rounded-full bg-rose-400/30 blur-[0.8px] transition-opacity duration-150"
            ></div>
            <div
              ref={cheekRightRef}
              className="absolute bottom-2.5 right-1.5 w-2 h-1.5 rounded-full bg-rose-400/30 blur-[0.8px] transition-opacity duration-150"
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
}
