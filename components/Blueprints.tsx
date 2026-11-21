"use client";

import { useState } from "react";

type Blueprint = {
  category: "migration" | "lifecycle" | "data-gcp";
  badge: string;
  status: string;
  statusHighlight: boolean;
  title: string;
  desc: string;
  criteriaTitle: string;
  criteria: string[];
  tags: string[];
  date: string;
};

const BLUEPRINTS: Blueprint[] = [
  {
    category: "migration",
    badge: "CAPGEMINI • ENTERPRISE CUTOVER",
    status: "Zero Downtime",
    statusHighlight: true,
    title: "Adobe Campaign v7 to v8 Full Architecture Migration",
    desc: "Technical workflow rebuilds, data model validation, custom relational schema conversions, and GCP storage synchronization from Adobe Campaign Classic v7 into v8 cloud infrastructure without marketing operational pauses.",
    criteriaTitle: "// Implementation Criteria",
    criteria: [
      "Refactored core schemas (nms:recipient, transaction logs)",
      "Automated pre/post migration regression query scripts",
      "Verified high-scale GCP import/export pipelines",
    ],
    tags: ["ACC v8", "GCP", "Schema XML"],
    date: "2025 - Present",
  },
  {
    category: "lifecycle",
    badge: "TCS • FORTUNE 50 HEALTHCARE",
    status: "15M+ Monthly",
    statusHighlight: false,
    title: "High-Velocity Omnichannel Customer Lifecycle Engine",
    desc: "Designed, scheduled, and maintained critical recurring marketing automation workflows across Email, SMS, and Push notification channels for large healthcare and retail enterprises, incorporating fatigue frequency capping and automated compliance checks.",
    criteriaTitle: "// Engine Metrics",
    criteria: [
      "Automated onboarding, behavioral reactivation & churn journeys",
      "Dynamic multivariate split tests with automated winner logic",
      "Strict fatigue rules preventing recipient saturation",
    ],
    tags: ["Adobe Campaign v7", "A/B Matrix", "Multi-Channel"],
    date: "2022 - 2025",
  },
  {
    category: "lifecycle",
    badge: "JSSP MODULE • SERVER-SIDE LOGIC",
    status: "Sub-millisecond",
    statusHighlight: false,
    title: "Dynamic Personalization & JSSP Scripting Framework",
    desc: "Designed custom server-side JavaScript (JSSP) modules that parse real-time XML data feeds, calculate customer propensity ranks, and render personalized promotional blocks with deterministic fallbacks to eliminate blank placeholders.",
    criteriaTitle: "// Script Architecture",
    criteria: [
      "Real-time dynamic XML parsing for item grids",
      "Recipient profile enrichment before MTA submission",
      "Fault-tolerant conditional rendering blocks",
    ],
    tags: ["JSSP", "JavaScript", "XML"],
    date: "Production Architecture",
  },
  {
    category: "data-gcp",
    badge: "GCP CLOUD • DATA PIPELINES",
    status: "Secure ETL",
    statusHighlight: true,
    title: "Automated Cloud Storage Ingestion & Sanitization",
    desc: "Architected scheduled technical ETL workflows that pull encrypted delta data from Google Cloud Platform into custom Adobe Campaign staging tables, validating schemas and triggering operational event notifications automatically.",
    criteriaTitle: "// Pipeline Stack",
    criteria: [
      "Google Cloud Storage bucket automated fetch & parse",
      "PII encryption hash matching & staging sanitization",
      "Operational webhook alerts upon error states",
    ],
    tags: ["Google Cloud (GCP)", "Python", "SQL ETL"],
    date: "Cloud Data Lake",
  },
];

const FILTERS = [
  { category: "all", label: "All Projects" },
  { category: "migration", label: "Platform Migration" },
  { category: "lifecycle", label: "Enterprise Journeys" },
  { category: "data-gcp", label: "Cloud & Schemas" },
] as const;

export default function Blueprints() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <section id="workflows">
      <div className="flex flex-col gap-8">
        <div className="apple-blur-reveal flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
              // 02. Technical Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-1">
              Featured Production Blueprints
            </h2>
          </div>
          {/* Filter Tabs */}
          <div className="inline-flex flex-wrap justify-center items-center gap-1 p-1 rounded-xl bg-[#EFEAE1]/80 border border-[#E2DDD5] text-xs font-mono">
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter.category;
              return (
                <button
                  key={filter.category}
                  className={`filter-tab px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? "active-tab font-semibold bg-[#111111] text-white shadow-sm"
                      : "font-medium text-[#52504C] hover:text-[#111111]"
                  }`}
                  onClick={() => setActiveFilter(filter.category)}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2x2 Grid of Production Blueprints */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLUEPRINTS.map((blueprint) => {
            const isVisible =
              activeFilter === "all" || blueprint.category === activeFilter;
            return (
              <div
                key={blueprint.title}
                className={`apple-blur-reveal blueprint-card tech-card p-6 rounded-2xl flex flex-col justify-between gap-5 ${
                  isVisible ? "" : "hidden"
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-[#EFEAE1] text-[#111111] border border-[#E2DDD5]">
                      {blueprint.badge}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-semibold flex items-center gap-1 ${
                        blueprint.statusHighlight
                          ? "text-[#111111]"
                          : "text-[#52504C]"
                      }`}
                    >
                      {blueprint.statusHighlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                      )}
                      {blueprint.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111111]">
                    {blueprint.title}
                  </h3>
                  <p className="text-xs text-[#52504C] leading-relaxed">
                    {blueprint.desc}
                  </p>
                  <div className="p-3 bg-[#EFEAE1]/55 rounded-xl border border-[#E2DDD5] text-xs font-mono space-y-1 text-[#52504C]">
                    <div className="text-[#111111] font-bold">
                      {blueprint.criteriaTitle}
                    </div>
                    {blueprint.criteria.map((criterion) => (
                      <p key={criterion}>• {criterion}</p>
                    ))}
                  </div>
                </div>
                <div className="pt-3 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-mono">
                  <div className="flex flex-wrap gap-1.5">
                    {blueprint.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/80 text-[#111111] border border-[#E2DDD5]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-[#52504C] font-medium">
                    {blueprint.date}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
