import { AwardIcon, ExternalLinkIcon } from "./icons";

const QUADRANTS = [
  {
    kicker: "01 // PLATFORM",
    title: "Adobe Core",
    desc: "Technical execution across Classic v7 & v8 architectures, routing topologies, and delivery servers.",
    tags: ["ACC v7 • v8", "AEM", "Data Schemas", "ETL", "HTML/CSS", "REST APIs", "OAuth 2.0"],
  },
  {
    kicker: "02 // SCRIPTING",
    title: "Languages & Logic",
    desc: "Server-side logic execution, business validation algorithms, and format conversion scripts.",
    tags: ["JavaScript", "JSSP", "SQL Queries", "Python", "XML / JSON"],
  },
  {
    kicker: "03 // INFRASTRUCTURE",
    title: "Cloud & Pipelines",
    desc: "Ingestion orchestration, cloud bucket synchronizations, schema indexes, and compliance boundaries.",
    tags: [
      "Google Cloud (GCP)",
      "ETL Staging",
      "PII Encryption",
      "PostgreSQL/Oracle",
    ],
  },
  {
    kicker: "04 // QUALITY & QA",
    title: "Governance & Audit",
    desc: "Pre/post migration regression audits, spam score mitigation, and campaign delivery validation.",
    tags: ["A/B Testing", "Regression QA", "Deliverability", "GDPR Compliance"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="flex flex-col gap-8">
        <div className="apple-blur-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
              // 03. Capabilities Matrix
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-1">
              MarTech Arsenal &amp; Technical Stack
            </h2>
          </div>
          <p className="text-sm text-[#52504C] max-w-md">
            A focused technical stack refined through 4+ years of enterprise
            production deployments, migrations, and delivery governance.
          </p>
        </div>

        {/* Adobe Certification Spotlight */}
        <div className="apple-blur-reveal tech-card p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#111111] text-white flex items-center justify-center shrink-0">
              <AwardIcon className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#111111] text-white text-[10px] font-mono font-bold uppercase">
                  Officially Certified
                </span>
                <span className="text-xs font-mono text-[#52504C] font-semibold">
                  Active Through 2026
                </span>
              </div>
              <h3 className="text-base font-bold text-[#111111] mt-1">
                Adobe Campaign Classic Business Practitioner Expert
              </h3>
              <p className="text-xs text-[#52504C] mt-0.5">
                Verified mastery in Campaign Topology, Technical Workflow
                Design, Delivery Templates, Deliverability Audits, and
                Relational Schema Definitions.
              </p>
            </div>
          </div>
          <a
            className="px-4 py-2 rounded-xl bg-white/80 border border-[#E2DDD5] text-[#111111] text-xs font-mono font-semibold hover:bg-white transition-all flex items-center gap-1.5 shrink-0"
            href="https://linkedin.com/in/shiyonthomas"
            rel="noreferrer"
            target="_blank"
          >
            <span>Verify Credential</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-[#52504C]" />
          </a>
        </div>

        {/* 4 Stack Quadrants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {QUADRANTS.map((quadrant) => (
            <div
              key={quadrant.kicker}
              className="apple-blur-reveal tech-card p-5 rounded-xl flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#111111] font-bold uppercase">
                  {quadrant.kicker}
                </div>
                <h3 className="text-sm font-bold text-[#111111]">
                  {quadrant.title}
                </h3>
                <p className="text-xs text-[#52504C]">{quadrant.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E2DDD5]">
                {quadrant.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EFEAE1]/70 text-[#111111] border border-[#E2DDD5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
