"use client";

import { useRef } from "react";

let audioCtx: AudioContext | null = null;

function initAudio(): AudioContext | null {
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function playNoiseBurst(
  ctx: AudioContext,
  startTime: number,
  duration: number,
  centerFreq: number,
  q: number,
  gainVal: number
) {
  const bufferSize = Math.floor(ctx.sampleRate * duration);
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }
  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;

  const bandpass = ctx.createBiquadFilter();
  bandpass.type = "bandpass";
  bandpass.frequency.setValueAtTime(centerFreq, startTime);
  bandpass.Q.setValueAtTime(q, startTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(gainVal, startTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

  whiteNoise.connect(bandpass);
  bandpass.connect(gain);
  gain.connect(ctx.destination);

  whiteNoise.start(startTime);
  whiteNoise.stop(startTime + duration);
}

function playSwitchMechanicalClick() {
  const ctx = initAudio();
  if (!ctx) return;

  const t = ctx.currentTime;

  // 1. Initial Contact Click
  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = "triangle";
  osc1.frequency.setValueAtTime(1650, t);
  osc1.frequency.exponentialRampToValueAtTime(540, t + 0.016);
  gain1.gain.setValueAtTime(0.38, t);
  gain1.gain.exponentialRampToValueAtTime(0.001, t + 0.018);
  osc1.connect(gain1);
  gain1.connect(ctx.destination);
  osc1.start(t);
  osc1.stop(t + 0.02);
  playNoiseBurst(ctx, t, 0.012, 2800, 3.2, 0.18);

  // 2. Secondary Latch Release Click
  const t2 = t + 0.025;
  const osc2 = ctx.createOscillator();
  const gain2 = ctx.createGain();
  osc2.type = "sine";
  osc2.frequency.setValueAtTime(1250, t2);
  osc2.frequency.exponentialRampToValueAtTime(320, t2 + 0.024);
  gain2.gain.setValueAtTime(0.26, t2);
  gain2.gain.exponentialRampToValueAtTime(0.001, t2 + 0.025);
  osc2.connect(gain2);
  gain2.connect(ctx.destination);
  osc2.start(t2);
  osc2.stop(t2 + 0.028);
  playNoiseBurst(ctx, t2, 0.018, 1950, 2.5, 0.12);
}

export default function LightbulbWidget() {
  const cordRef = useRef<HTMLDivElement>(null);

  const toggleMode = () => {
    playSwitchMechanicalClick();
    const cord = cordRef.current;
    if (cord) {
      cord.classList.remove("is-pulling");
      void cord.offsetWidth;
      cord.classList.add("is-pulling");
      setTimeout(() => {
        document.documentElement.classList.toggle("dark-mode");
        document.body.classList.toggle("dark-mode");
      }, 150);
      setTimeout(() => {
        cord.classList.remove("is-pulling");
      }, 500);
    }
  };

  return (
    <div
      className="fixed top-0 right-8 sm:right-12 z-50 hidden md:flex flex-col items-center select-none pointer-events-auto"
      id="vintage-lightbulb-widget"
      style={{ filter: "drop-shadow(rgba(0, 0, 0, 0.12) 0px 10px 18px)" }}
    >
      <div className="w-[2px] h-12 bg-gradient-to-b from-[#8C827A] to-[#3B3936]"></div>
      <div className="relative flex flex-col items-center">
        <div className="w-5 h-4 bg-[#706E6B] rounded-t-sm border-t border-x border-[#8E8B87] shadow-sm"></div>
        <div className="w-6 h-3 bg-[#B5A178] rounded-sm flex items-center justify-around px-0.5 border-y border-[#8E7950]">
          <span className="w-0.5 h-full bg-[#8E7950]/50"></span>
          <span className="w-0.5 h-full bg-[#8E7950]/50"></span>
          <span className="w-0.5 h-full bg-[#8E7950]/50"></span>
        </div>
        <div
          className="relative w-12 h-14 rounded-b-full rounded-t-lg bg-gradient-to-b from-amber-100/90 via-amber-200/95 to-amber-300/90 shadow-[0_0_28px_10px_rgba(251,191,36,0.45)] border border-amber-300/60 transition-all duration-300 flex items-center justify-center"
          id="bulb-glass"
        >
          <div
            className="w-5 h-7 border-2 border-amber-500 rounded-full opacity-90 shadow-[0_0_10px_#F59E0B] flex items-center justify-center"
            id="bulb-filament"
          >
            <span className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></span>
          </div>
          <div
            className="absolute -inset-4 bg-amber-400/25 rounded-full blur-xl pointer-events-none transition-opacity duration-300"
            id="bulb-glow-halo"
          ></div>
        </div>
        <div
          ref={cordRef}
          aria-label="Toggle Light / Dark Mode"
          className="absolute top-16 right-1 flex flex-col items-center cursor-pointer group"
          id="lamp-pull-cord"
          role="button"
          style={{ transformOrigin: "top center" }}
          tabIndex={0}
          onClick={toggleMode}
          onPointerDown={() => initAudio()}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggleMode();
            }
          }}
        >
          <div className="w-[1px] h-14 bg-gradient-to-b from-[#78716C] via-[#A8A29E] to-[#78716C] flex flex-col items-center justify-between py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E] shadow-sm"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E] shadow-sm"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E] shadow-sm"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E] shadow-sm"></span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#A8A29E] shadow-sm"></span>
          </div>
          <div
            className="w-3.5 h-5 rounded-b-full rounded-t-sm bg-gradient-to-b from-[#C4B5A5] via-[#A69584] to-[#786C5E] border border-[#524B43] shadow-md transition-transform duration-200 group-hover:scale-110 flex items-center justify-center"
            id="lamp-pull-acorn"
          >
            <span className="w-1 h-1 rounded-full bg-[#EFEAE1]/70"></span>
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity absolute top-20 right-0 whitespace-nowrap text-[9px] font-mono tracking-widest uppercase bg-[#111111] text-white px-1.5 py-0.5 rounded shadow pointer-events-none">
            Pull
          </span>
        </div>
      </div>
    </div>
  );
}
