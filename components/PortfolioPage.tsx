"use client";

import { useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import PipelineSimulator from "./PipelineSimulator";
import Architecture from "./Architecture";
import Blueprints from "./Blueprints";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";
import LightbulbWidget from "./LightbulbWidget";
import ChatbotWidget from "./ChatbotWidget";

export default function PortfolioPage() {
  useEffect(() => {
    const blurElements = document.querySelectorAll(".apple-blur-reveal");
    if ("IntersectionObserver" in window && blurElements.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "-30px 0px -40px 0px",
        }
      );

      blurElements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    } else {
      blurElements.forEach((el) => el.classList.add("in-view"));
    }
  }, []);

  return (
    <>
      {/* Subtle Warm Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[400px] bg-[#EFEAE1]/80 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="fixed top-1/2 right-10 w-[500px] h-[500px] bg-white/70 rounded-full blur-[160px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-10 left-10 w-[600px] h-[450px] bg-[#EFEAE1]/70 rounded-full blur-[150px] pointer-events-none -z-10"></div>

      <Header />

      <main className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 flex flex-col gap-20">
        <Hero />
        <PipelineSimulator />
        <Architecture />
        <Blueprints />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
      <LightbulbWidget />
      <ChatbotWidget />
    </>
  );
}
