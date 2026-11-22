import {
  ChevronDownIcon,
  ArrowRightSmIcon,
  LinkedInIcon,
  XIcon,
  InstagramIcon,
} from "./icons";

const PROFILE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBXJinC0TYHmsovGhSJfwek2CvV81WPkF41VhFWrWjKqeWRPe_1oOUgrwK7QfIdmOiwmr9h5IEVUR93aFfQoCWiX2TZM_W9SohUZRJ8_6rL691gCDlZzBU3TGNG0Cd_xKjlHi6QB0LlLJvQjpJx0ou2Og1xgnxroXlB_r37nmOuEOSZOu-MTXbLiQ3wktKgmziadgPfxIaR63gkXi7c2jOq1cpYRMki8SUO2QYvC3rx7Wui2tNxR4Wj";

const SPECS = [
  {
    kicker: "01 / DATA SCHEMAS",
    title: "Relational vs Cloud Lake",
    classic: "nms:recipient relational 3NF tables with localized disk indexes.",
    cloud:
      "Snowflake & GCP BigQuery partition keys with federated query layers.",
  },
  {
    kicker: "02 / SCRIPT ENGINE",
    title: "JSSP Server Processing",
    classic:
      "Single-threaded server JavaScript runtime with synchronous XML parsing.",
    cloud:
      "Asynchronous non-blocking microservices with streaming JSON ingestion.",
  },
  {
    kicker: "03 / DISPATCH MTA",
    title: "Omnichannel Routing",
    classic:
      "Manual IP pool warming with batch size rate limiter throttles.",
    cloud:
      "Elastic auto-scaling MTA instances with AI deliverability load distribution.",
  },
  {
    kicker: "04 / COMPLIANCE & PII",
    title: "Governance & Privacy",
    classic:
      "Custom SQL sanitization routines with scheduled GDPR purge scripts.",
    cloud:
      "Real-time automated encryption tokens, CCPA/GDPR zero-trust boundaries.",
  },
];

export default function Hero() {
  return (
    <>
      {/* 01. HERO SECTION */}
      <section className="pt-4" id="hero">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-6 pb-4">
          <div className="apple-blur-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-2xl border border-[#E2DDD5] shadow-liquid-glass text-xs font-mono text-[#111111] mb-6 in-view">
            <span className="w-2 h-2 rounded-full bg-[#111111] animate-ping"></span>
            <span>Adobe Certified Expert</span>
          </div>
          <h1 className="apple-blur-reveal text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#111111] tracking-tight leading-[1.08] mb-6 in-view">
            Developing
            <br />
            <span className="underline decoration-[#E2DDD5] decoration-4 underline-offset-8">
              Your MarTech Journey.
            </span>
          </h1>
          <p className="apple-blur-reveal text-lg sm:text-xl text-[#52504C] font-normal max-w-2xl leading-relaxed mb-8 in-view">
            Data. Automation. Personalization.
            I am{" "}
            <strong className="text-[#111111] font-semibold">
              Shiyon Thomas
            </strong>
            , Associate Consultant at Capgemini (ex-TCS), engineering the data pipelines, schema design and lifecycle journeys that power personalized campaigns at enterprise scale.
          </p>
          <div className="apple-blur-reveal flex flex-wrap items-center justify-center gap-4 mb-12 in-view">
            <a
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#111111] hover:bg-[#2a2927] text-white text-xs font-mono font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
              href="#workflows"
            >
              <span>Start the Journey</span>
              <ChevronDownIcon className="w-3.5 h-3.5" />
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-6 py-3 rounded-full bg-white/70 hover:bg-white text-[#111111] border border-[#E2DDD5] text-xs font-mono font-semibold tracking-wide transition-all shadow-liquid-glass"
              href="#skills"
            >
              <span>View Credentials</span>
              <ArrowRightSmIcon className="w-3.5 h-3.5 text-[#52504C]" />
            </a>
          </div>
        </div>

        {/* Flagship Architecture Terminal Card */}
        <div className="apple-blur-reveal relative max-w-5xl mx-auto tech-card p-4 sm:p-6 rounded-2xl md:rounded-3xl border border-[#E2DDD5] shadow-liquid-glass backdrop-blur-2xl overflow-visible in-view">
          <div className="flex items-center justify-between px-3 py-2 border-b border-[#E2DDD5]/80 text-[11px] font-mono text-[#52504C] mb-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E2DDD5]"></span>
              <span className="w-3 h-3 rounded-full bg-[#E2DDD5]"></span>
              <span className="w-3 h-3 rounded-full bg-[#E2DDD5]"></span>
              <span className="ml-2 font-semibold text-[#111111]">
                SHIYON_THOMAS
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="hidden sm:inline text-[#52504C]">
                Cluster: BLR | COK
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-5 relative flex items-center justify-center">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[580px] sm:h-[580px] pointer-events-none -z-10 overflow-visible hidden sm:flex items-center justify-center"></div>
              <div className="relative w-full aspect-square rounded-2xl bg-[#111111] border border-[#E2DDD5] shadow-liquid-glass group z-10">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="Shiyon Thomas"
                    className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                    src={PROFILE_IMAGE}
                  />
                </div>
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#111111]/85 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">
                      Shiyon Thomas
                    </div>
                    <div className="text-[10px] font-mono text-[#E2DDD5]">
                      Capgemini • ex-TCS
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-white/20 text-white border border-white/20">
                    Developer
                  </span>
                </div>
                <div className="absolute top-0 left-0 z-50 pointer-events-none">
                  <a
                    aria-label="LinkedIn"
                    className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg border border-[#E2DDD5] text-[#111111] opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:-translate-x-6 group-hover:-translate-y-7 hover:scale-110 hover:bg-[#111111] hover:text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    href="https://linkedin.com/in/shiyonthomas"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <LinkedInIcon className="w-4 h-4" />
                  </a>
                  <a
                    aria-label="X Twitter"
                    className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg border border-[#E2DDD5] text-[#111111] opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:translate-x-6 group-hover:-translate-y-10 hover:scale-110 hover:bg-[#111111] hover:text-white transition-all duration-300 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    href="https://twitter.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <XIcon className="w-3.5 h-3.5" />
                  </a>
                  <a
                    aria-label="Instagram"
                    className="absolute top-0 left-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-md shadow-lg border border-[#E2DDD5] text-[#111111] opacity-0 scale-50 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto group-hover:-translate-x-10 group-hover:translate-y-5 hover:scale-110 hover:bg-[#111111] hover:text-white transition-all duration-300 delay-75 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    href="https://instagram.com"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between gap-6">
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#52504C] font-semibold">
                  FLAGSHIP MIGRATION PROJECT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight">
                  Rebuilt the whole platform. Not one campaign missed a beat.
                </h3>
                <p className="text-xs sm:text-sm text-[#52504C] leading-relaxed">
                  Delivered an end-to-end Adobe Campaign v7 to v8 migration: workflow rebuilds, custom schema design, JSSP campaign logic and GCP data integration, fully regression-tested.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-[#E2DDD5]">
                <div className="p-3 bg-[#EFEAE1]/55 rounded-xl border border-[#E2DDD5]">
                  <div className="text-xl sm:text-3xl font-black text-[#111111] font-mono">
                    4+ YRS
                  </div>
                  <div className="text-[10px] font-mono text-[#52504C] uppercase tracking-wider mt-1">
                    MarTech Experience
                  </div>
                </div>
                <div className="p-3 bg-[#EFEAE1]/55 rounded-xl border border-[#E2DDD5]">
                  <div className="text-xl sm:text-3xl font-black text-[#111111] font-mono">
                    v7 → v8
                  </div>
                  <div className="text-[10px] font-mono text-[#52504C] uppercase tracking-wider mt-1">
                    E2E MIGRATION
                  </div>
                </div>
                <div className="p-3 bg-[#EFEAE1]/55 rounded-xl border border-[#E2DDD5]">
                  <div className="text-xl sm:text-3xl font-black text-[#111111] font-mono">
                    F50
                  </div>
                  <div className="text-[10px] font-mono text-[#52504C] uppercase tracking-wider mt-1">
                    Cleints Served
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
