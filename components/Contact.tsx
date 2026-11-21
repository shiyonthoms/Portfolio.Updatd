"use client";

import { useRef, useState } from "react";
import {
  PhoneIcon,
  CopyIcon,
  ExternalLinkIcon,
  ArrowRightIcon,
  CheckIcon,
} from "./icons";

const EMAIL = "shiyonthoms@gmail.com";

export default function Contact() {
  const [copyLabel, setCopyLabel] = useState("Copy");
  const [status, setStatus] = useState<"idle" | "processing" | "transmitted">(
    "idle"
  );
  const formRef = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopyLabel("Copied");
        setTimeout(() => setCopyLabel("Copy"), 2000);
      })
      .catch(() => {
        setCopyLabel("Copied");
      });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("processing");
    setTimeout(() => {
      setStatus("transmitted");
      formRef.current?.reset();
      setTimeout(() => setStatus("idle"), 4000);
    }, 600);
  };

  return (
    <section id="contact">
      <div className="flex flex-col gap-8">
        <div className="apple-blur-reveal">
          <span className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">
            // 05. Direct Transmission
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#111111] mt-1">
            Get in Touch
          </h2>
          <p className="text-sm text-[#52504C] max-w-xl mt-1">
            Whether you are planning an Adobe Campaign v7 to v8 migration,
            designing custom JSSP dynamic modules, or seeking an enterprise
            MarTech specialist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="apple-blur-reveal tech-card p-6 rounded-2xl flex flex-col gap-5">
              {/* Direct Mobile */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-[#52504C] uppercase font-semibold">
                  Direct Mobile / WhatsApp
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5]">
                  <a
                    className="text-sm font-mono font-bold text-[#111111] hover:opacity-75 transition-opacity"
                    href="tel:+918075195107"
                  >
                    +91 - 8075195107
                  </a>
                  <a
                    className="p-1.5 rounded-md bg-white border border-[#E2DDD5] text-[#111111] hover:bg-[#EFEAE1] transition-colors"
                    href="tel:+918075195107"
                    title="Call"
                  >
                    <PhoneIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Email Inquiries */}
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-mono text-[#52504C] uppercase font-semibold">
                  Primary Email Address
                </span>
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5]">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#111111] select-all">
                    {EMAIL}
                  </span>
                  <button
                    className="px-2.5 py-1 rounded bg-white border border-[#E2DDD5] text-xs font-mono text-[#111111] hover:bg-[#EFEAE1] transition-all flex items-center gap-1"
                    onClick={copyEmail}
                    type="button"
                  >
                    <CopyIcon className="w-3.5 h-3.5" />
                    <span>{copyLabel}</span>
                  </button>
                </div>
              </div>

              {/* Professional Profile Link */}
              <div className="flex flex-col gap-1 pt-2 border-t border-[#E2DDD5]">
                <span className="text-[11px] font-mono text-[#52504C] uppercase font-semibold">
                  Verified Professional Nodes
                </span>
                <div className="grid grid-cols-2 gap-2 mt-1">
                  <a
                    className="p-3 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5] text-[#111111] hover:border-[#111111] text-xs font-mono font-semibold transition-all flex items-center justify-between"
                    href="https://linkedin.com/in/shiyonthomas"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 text-[#52504C]" />
                  </a>
                  <a
                    className="p-3 rounded-xl bg-[#EFEAE1]/55 border border-[#E2DDD5] text-[#111111] hover:border-[#111111] text-xs font-mono font-semibold transition-all flex items-center justify-between"
                    href={`mailto:${EMAIL}`}
                  >
                    <span>Direct Mailto</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 text-[#52504C]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Dispatch Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="apple-blur-reveal tech-card p-6 md:p-8 rounded-2xl flex flex-col gap-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs text-[#111111] font-semibold uppercase"
                    htmlFor="contact-name"
                  >
                    Your Name / Organization *
                  </label>
                  <input
                    className="w-full px-3.5 py-2 rounded-xl bg-white/80 border border-[#E2DDD5] text-[#111111] placeholder:text-[#52504C]/60 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] text-sm transition-all"
                    id="contact-name"
                    placeholder="e.g. Alex Morgan (Enterprise IT)"
                    required
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="font-mono text-xs text-[#111111] font-semibold uppercase"
                    htmlFor="contact-email"
                  >
                    Work Email Address *
                  </label>
                  <input
                    className="w-full px-3.5 py-2 rounded-xl bg-white/80 border border-[#E2DDD5] text-[#111111] placeholder:text-[#52504C]/60 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] text-sm transition-all"
                    id="contact-email"
                    placeholder="amorgan@company.com"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-xs text-[#111111] font-semibold uppercase"
                  htmlFor="scope-type"
                >
                  Project Scope / Engagement Type
                </label>
                <select
                  className="w-full px-3.5 py-2 rounded-xl bg-white/80 border border-[#E2DDD5] text-[#111111] focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] text-sm transition-all"
                  id="scope-type"
                >
                  <option value="migration">
                    Adobe Campaign Classic v7 to v8 Platform Migration
                  </option>
                  <option value="developer-role">
                    Adobe Campaign Developer / MarTech Lead Engagement
                  </option>
                  <option value="schema-jssp">
                    Custom Schema & JSSP Logic Implementation
                  </option>
                  <option value="gcp-pipeline">
                    GCP & Data Lakehouse Integration
                  </option>
                  <option value="consultation">
                    Technical Advisory / General Consultation
                  </option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  className="font-mono text-xs text-[#111111] font-semibold uppercase"
                  htmlFor="contact-message"
                >
                  Technical Specifications / Objectives *
                </label>
                <textarea
                  className="w-full px-3.5 py-2 rounded-xl bg-white/80 border border-[#E2DDD5] text-[#111111] placeholder:text-[#52504C]/60 focus:outline-none focus:border-[#111111] focus:ring-1 focus:ring-[#111111] text-sm resize-none transition-all"
                  id="contact-message"
                  placeholder="Detail your campaign stack requirements, migration timeline, delivery volumes, or project milestones..."
                  required
                  rows={4}
                />
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <span className="text-xs font-mono text-[#52504C] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
                  <span>Direct transmission to Shiyon Thomas</span>
                </span>
                <button
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-[#111111] hover:bg-[#2a2927] text-white font-mono font-semibold text-xs transition-colors shadow-sm"
                  disabled={status === "processing"}
                  type="submit"
                >
                  {status === "idle" ? (
                    <>
                      <span>Dispatch Transmission</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </>
                  ) : status === "processing" ? (
                    <span>Processing Transmission...</span>
                  ) : (
                    <span>Transmitted</span>
                  )}
                </button>
              </div>
              <div
                className={`${
                  status === "transmitted" ? "flex" : "hidden"
                } p-3.5 rounded-xl bg-[#EFEAE1] border border-[#E2DDD5] text-[#111111] font-mono text-xs items-center gap-2`}
              >
                <CheckIcon className="w-4 h-4 text-[#111111] shrink-0" />
                <span>
                  Message received. Shiyon will review your specifications and
                  follow up promptly.
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
