const EXPERIENCES = [
  {
    dot: "bg-[#111111]",
    period: "DEC 2025 — PRESENT • CURRENT ROLE",
    periodColor: "text-[#111111]",
    role: "Associate Consultant",
    company: "at Capgemini",
    badge: "Fortune 50 Scale",
    badgeClass: "px-2.5 py-1 rounded-md bg-[#111111] text-white text-xs font-mono font-semibold",
    summary:
      "Technical execution of Adobe Campaign migration from v7 to v8 architecture, ensuring continuous campaign delivery with zero operational downtime for enterprise clients.",
    bulletColor: "text-[#111111]",
    bullets: [
      "Executed end-to-end migration of Adobe Campaign from v7 to v8; including technical workflow rebuilds, data model validation, and post-migration regression testing.",
      "Designed and validated custom schemas, tables, and views aligning with v8 database standards; built robust Google Cloud Platform (GCP) data import/export workflows.",
      "Coordinated cross-functionally across marketing, IT, and data analytics teams, ensuring zero disruption to live customer-facing campaigns.",
    ],
    tags: ["Adobe Campaign v8", "Data Schemas", "GCP Storage", "Regression Audits"],
  },
  {
    dot: "bg-[#52504C]",
    period: "JULY 2022 — AUG 2025 • 3+ YEARS",
    periodColor: "text-[#52504C]",
    role: "Systems Engineer",
    company: "at Tata Consultancy Services (TCS)",
    badge: "Fortune 50 Scale",
    badgeClass:
      "px-2.5 py-1 rounded-md bg-[#EFEAE1] text-[#111111] text-xs font-mono font-semibold border border-[#E2DDD5]",
    summary:
      "Developed, maintained, and scaled critical automation workflows powering recurring data-driven marketing communications across email, SMS, and push channels for Fortune 50 healthcare and retail clients.",
    bulletColor: "text-[#52504C]",
    bullets: [
      "Engineered end-to-end customer lifecycle campaign journeys (welcome onboarding, behavioral reactivation, churn mitigation) targeting millions of monthly recipients.",
      "Implemented automated A/B and multivariate split-testing logic within campaign workflows to measure deliverability, click-through rates, and message optimization.",
      "Validated schema updates, conducted strict production release QA, resolved delivery bottlenecks, and partnered closely with analytics and creative squads.",
    ],
    tags: [
      "Adobe Campaign v7",
      "JSSP Scripting",
      "A/B Matrix QA",
      "Omni-Channel Execution",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="flex flex-col gap-8">
        <div className="apple-blur-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
              // 04. Career Chronology
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-1">
              Professional Experience &amp; Journey
            </h2>
          </div>
          <p className="text-sm text-[#52504C] max-w-md">
            A timeline of technical engineering roles delivering enterprise
            MarTech solutions, migrations, and high-impact workflows.
          </p>
        </div>

        {/* Linear Timeline */}
        <div className="relative border-l-2 border-[#E2DDD5] ml-3 md:ml-6 pl-6 md:pl-8 space-y-8">
          {EXPERIENCES.map((exp) => (
            <div key={exp.role} className="relative">
              <div
                className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full ${exp.dot} ring-4 ring-[#F7F4EF] border-2 border-[#111111]`}
              ></div>
              <div className="apple-blur-reveal tech-card p-6 rounded-2xl flex flex-col gap-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <span
                      className={`text-xs font-mono font-bold ${exp.periodColor}`}
                    >
                      {exp.period}
                    </span>
                    <h3 className="text-base font-bold text-[#111111]">
                      {exp.role}{" "}
                      <span className="text-[#52504C] font-normal">
                        {exp.company}
                      </span>
                    </h3>
                  </div>
                  <span className={exp.badgeClass}>{exp.badge}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                  {exp.summary}
                </p>
                <div className="space-y-1.5 text-xs text-[#52504C] pt-1 font-sans">
                  {exp.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-start gap-2">
                      <span className={`${exp.bulletColor} font-bold`}>•</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#E2DDD5]">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#EFEAE1]/70 text-[#111111] border border-[#E2DDD5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Academic Node */}
          <div className="relative">
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white ring-4 ring-[#F7F4EF] border-2 border-[#111111]"></div>
            <div className="apple-blur-reveal tech-card p-6 rounded-2xl flex flex-col gap-4">
              <span className="text-xs font-mono font-bold text-[#52504C] uppercase">
                // ACADEMIC FOUNDATIONS
              </span>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5] flex flex-col justify-between gap-2">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#52504C]">2020 — 2022</span>
                      <span className="px-2 py-0.5 rounded bg-[#111111] text-white font-bold">
                        CGPA: 8.06
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111111] mt-1">
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs text-[#52504C]">
                      Amrita School of Engineering, Amritapuri, Kollam
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5] flex flex-col justify-between gap-2">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#52504C]">2017 — 2020</span>
                      <span className="px-2 py-0.5 rounded bg-white text-[#111111] border border-[#E2DDD5] font-bold">
                        CGPA: 7.0
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-[#111111] mt-1">
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs text-[#52504C]">
                      St. Philomena&apos;s College, Mysore
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
