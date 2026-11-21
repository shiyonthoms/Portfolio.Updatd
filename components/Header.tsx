"use client";

import { useState } from "react";
import { MenuIcon, ArrowRightIcon } from "./icons";

const NAV_LINKS = [
  { href: "#hero", label: "Overview" },
  { href: "#about", label: "Architecture" },
  { href: "#workflows", label: "Blueprints" },
  { href: "#skills", label: "Tech Stack" },
  { href: "#experience", label: "Timeline" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 w-full z-50 px-4 flex justify-center pointer-events-none">
      <div className="group pointer-events-auto liquid-nav-pill rounded-2xl w-full max-w-2xl hover:max-w-5xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] px-5 py-3 overflow-hidden">
        {/* Default Collapsed Row */}
        <div className="flex items-center justify-between gap-4">
          <a className="flex items-center gap-2.5 shrink-0" href="#hero">
            <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
            <span className="font-bold text-[#111111] tracking-tight text-sm">
              Shiyon Thomas
            </span>
          </a>
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xs font-mono text-[#52504C] truncate min-w-0">
              Adobe Campaign Developer • Capgemini
            </span>
            <button
              aria-label="Toggle menu"
              className="md:hidden p-1.5 rounded-lg border border-[#E2DDD5] text-[#111111] hover:bg-white/80"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <MenuIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hover-to-Expand Desktop Drawer */}
        <div className="hidden md:grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="overflow-hidden">
            <div className="pt-3 mt-3 border-t border-[#E2DDD5]/80 flex items-center justify-between gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              <nav className="flex items-center gap-1 text-xs font-semibold text-[#52504C]">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    className="px-3 py-1.5 rounded-lg hover:text-[#111111] hover:bg-white/80 transition-all"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[#111111] hover:bg-[#2a2927] text-white text-xs font-semibold tracking-wide transition-colors shadow-sm shrink-0"
                href="#contact"
              >
                <span>Get in Touch</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        <div
          className={`${
            menuOpen ? "" : "hidden"
          } md:hidden pt-3 pb-1 border-t border-[#E2DDD5] mt-3 flex flex-col gap-1.5`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="px-3 py-2 text-sm font-medium rounded-lg hover:bg-white/80 text-[#111111]"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="mt-1 px-3 py-2 text-sm font-semibold rounded-lg bg-[#111111] text-white text-center"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
