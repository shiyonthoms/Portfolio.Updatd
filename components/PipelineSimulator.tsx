"use client";

import { useState } from "react";
import { ChartIcon, CheckIcon } from "./icons";

type PipelineNode = {
  stage: string;
  title: string;
  type: string;
  desc: string;
  code: string;
  label: string;
  sub: string;
};

const NODES: PipelineNode[] = [
  {
    stage: "01",
    title: "GCP Lake Delta Ingestion",
    type: "SQL • Cloud Ingest",
    desc: "Scheduled query targeting delta recipients synchronized in Google Cloud Platform storage within the last 6-hour partition.",
    code: "queryDef schema='nms:recipient' operation='select' expr='@lastModified >= DaysAgo(1)'",
    label: "Query Delta",
    sub: "GCP Storage",
  },
  {
    stage: "02",
    title: "Dynamic Cohort Split",
    type: "Relational Partitioning",
    desc: "Partitioning incoming recipient set into propensity tiers (Gold / Platinum / Retention) based on extended schema attributes.",
    code: "split activity='tierSegment' condition='@tierCode IN ('P1','P2')' limit='noLimit'",
    label: "Split Activity",
    sub: "Cohort Tiers",
  },
  {
    stage: "03",
    title: "Multivariate A/B Testing",
    type: "Experiment Engine",
    desc: "Automated 50/50 test matrix with 4-hour deliverability / open evaluation window and automated dynamic fallback.",
    code: "testMatrix splitPercent='50/50' metric='CTR' evalWindow='4h' fallback='VariantA'",
    label: "A/B Testing",
    sub: "Split Matrices",
  },
  {
    stage: "04",
    title: "Server-Side JSSP Logic",
    type: "JavaScript • Personalization",
    desc: "Executing custom JSSP engine to fetch real-time personalization parameters and build dynamic product payload blocks.",
    code: "<% var items = nms.recommendation.get(recipient.id); ctx.vars.items = items; %>",
    label: "JSSP Script",
    sub: "Dynamic Engine",
  },
  {
    stage: "05",
    title: "Omni-Channel MTA Routing",
    type: "Delivery Engine",
    desc: "High-throughput batch dispatch routed across Email, SMS gateways, and Push Notification workers with strict rate throttling.",
    code: "deliveryMapping mta='enterprise-outbound' channels=['email','sms','push'] batchSize='50000'",
    label: "Delivery MTA",
    sub: "Email • SMS • Push",
  },
  {
    stage: "06",
    title: "Warehouse Feedback Ingest",
    type: "Analytics Lakehouse",
    desc: "Extracting broadLog and trackingLog deltas back into GCP BigQuery for closed-loop multi-touch attribution reporting.",
    code: "exportTrackingLogs schema='nms:trackingLogRcp' dest='gs://martech-lakehouse/logs/'",
    label: "GCP Sync",
    sub: "Tracking Logs",
  },
];

export default function PipelineSimulator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = NODES[activeIndex];

  return (
    <section className="apple-blur-reveal tech-card p-6 md:p-8 rounded-2xl relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E2DDD5]">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#111111] text-white flex items-center justify-center shrink-0">
            <ChartIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#111111]">
                System Topology
              </span>
              <span className="text-[#52504C]">•</span>
              <span className="text-[11px] font-mono text-[#111111] font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-ping"></span>{" "}
                Live Runtime
              </span>
            </div>
            <h2 className="text-lg font-bold text-[#111111]">
              Adobe Campaign Distributed Data Flow Architecture
            </h2>
            <p className="text-xs text-[#52504C] font-mono mt-0.5">
              Click any stage node to inspect payload definitions, query
              criteria, and execution code.
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#111111] bg-[#EFEAE1]/70 px-3 py-1.5 rounded-lg border border-[#E2DDD5]">
          <CheckIcon className="w-4 h-4 text-[#111111]" />
          <span>Zero-Downtime Cutover Active</span>
        </div>
      </div>

      {/* Animated Data Flow Indicator */}
      <div className="hidden lg:block w-full py-2">
        <svg
          className="w-full h-4"
          preserveAspectRatio="none"
          viewBox="0 0 1000 16"
        >
          <line stroke="#E2DDD5" strokeWidth="2" x1="20" x2="980" y1="8" y2="8" />
          <line
            className="flow-line"
            stroke="#111111"
            strokeWidth="2"
            x1="20"
            x2="980"
            y1="8"
            y2="8"
          />
        </svg>
      </div>

      {/* 6 Modular Pipeline Nodes */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-4">
        {NODES.map((node, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={node.stage}
              className={`pipeline-node p-3.5 rounded-xl text-left transition-all ${
                isActive
                  ? "active-node border-2 border-[#111111] bg-white/90 shadow-sm"
                  : "border border-[#E2DDD5] bg-white/60 hover:border-[#111111]/40"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              <div
                className={`text-[10px] font-mono font-bold ${
                  isActive ? "text-[#111111]" : "text-[#52504C]"
                }`}
              >
                NODE {node.stage}
              </div>
              <div className="text-xs font-bold text-[#111111] mt-1">
                {node.label}
              </div>
              <div className="text-[11px] font-mono text-[#52504C] mt-0.5">
                {node.sub}
              </div>
            </button>
          );
        })}
      </div>

      {/* Live Code & Description Inspector Terminal */}
      <div className="mt-4 p-4 rounded-xl bg-[#111111] text-[#EFEAE1] font-mono text-xs border border-[#111111] shadow-inner">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-white font-bold">
              STAGE {active.stage} • {active.title}
            </span>
            <span className="px-2 py-0.5 rounded text-[10px] bg-white/10 text-[#EFEAE1] border border-white/15">
              {active.type}
            </span>
          </div>
          <span className="text-[#E2DDD5]/70 text-[11px]">
            {"Execution Latency: <140ms"}
          </span>
        </div>
        <p className="text-[#E2DDD5] mt-3 text-xs leading-relaxed">
          {active.desc}
        </p>
        <div className="mt-3 p-3 rounded-lg bg-black/60 border border-white/10 text-white font-mono text-[11px] overflow-x-auto select-all">
          {active.code}
        </div>
      </div>
    </section>
  );
}
