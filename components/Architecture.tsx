import {
  ShieldCheckIcon,
  SwapIcon,
  CodeIcon,
  DatabaseIcon,
  MailIcon,
} from "./icons";

const PILLARS = [
  {
    icon: SwapIcon,
    title: "v7 to v8 Platform Migration",
    desc: "Workflow rebuilds, data model conversions, query re-engineering, and schema validation with comprehensive pre/post regression testing.",
  },
  {
    icon: CodeIcon,
    title: "JSSP & Server-Side Scripting",
    desc: "Custom server-side JavaScript logic, dynamic product grid engines, API integration middleware, and automated token injection.",
  },
  {
    icon: DatabaseIcon,
    title: "Data Schemas & GCP Pipelines",
    desc: "Relational data modeling, table extensions, SQL indexes, and bidirectional integration with Google Cloud Platform storage buckets.",
  },
  {
    icon: MailIcon,
    title: "Omni-Channel Lifecycle",
    desc: "Automated customer journeys across Email, SMS, and Push notification channels with multivariate split-testing and deliverability auditing.",
  },
];

export default function Architecture() {
  return (
    <section id="about">
      <div className="flex flex-col gap-8">
        <div className="apple-blur-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
              // 01. Core Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-1">
              Discipline &amp; Enterprise Foundations
            </h2>
          </div>
          <p className="text-sm text-[#52504C] max-w-md">
            Bridging the gap between enterprise data lakehouses and
            deterministic customer engagement systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Deep Dive Narrative Card */}
          <div className="apple-blur-reveal lg:col-span-6 tech-card p-6 md:p-8 rounded-2xl flex flex-col gap-5">
            <h3 className="text-lg md:text-xl font-bold text-[#111111] leading-snug">
              Deterministic campaign operations engineered for mission-critical
              deliverability.
            </h3>
            <p className="text-sm text-[#52504C] leading-relaxed">
              With{" "}
              <strong className="text-[#111111] font-semibold">
                4+ years of specialized experience
              </strong>{" "}
              in enterprise marketing technology stacks, I focus on the
              technical engineering layer within{" "}
              <strong className="text-[#111111] font-semibold">
                Adobe Campaign Classic (v7 and v8)
              </strong>
              . My focus centers on schema extensions, indexing strategies,
              complex JSSP scripting, and distributed delivery infrastructure.
            </p>
            <p className="text-sm text-[#52504C] leading-relaxed">
              From leading the zero-downtime platform upgrade at Capgemini to
              operating high-scale campaign engines for Fortune 50 healthcare
              and retail brands at TCS, I specialize in eliminating delivery
              bottlenecks, preserving PII compliance, and building resilient
              automated pipelines.
            </p>
            {/* Adobe Official Credential Box */}
            <div className="p-4 rounded-xl bg-[#EFEAE1]/60 border border-[#E2DDD5] flex items-start gap-3 mt-1">
              <div className="p-2 rounded-lg bg-[#111111] text-white shrink-0">
                <ShieldCheckIcon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-[#111111] uppercase">
                  Adobe Certified Expert (2026)
                </h4>
                <p className="text-xs text-[#52504C] mt-0.5">
                  Adobe Campaign Classic Business Practitioner Expert. Certified
                  in custom schema modeling, technical workflow topologies, MTA
                  deliverability rules, and omni-channel orchestration.
                </p>
              </div>
            </div>
          </div>

          {/* Right: 4 Engineering Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="apple-blur-reveal tech-card p-5 rounded-xl flex flex-col gap-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#EFEAE1] text-[#111111] border border-[#E2DDD5] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-[#111111]">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-[#52504C] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
