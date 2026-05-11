"use client";

import { WebGLShader } from "@/components/ui/web-gl-shader";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import { RadarBackground } from "@/components/ui/radar-bg";
import { CoordinateHUD } from "@/components/ui/coordinate-hud";
import { ScanLine } from "@/components/ui/scan-line";
import { IntakeModal } from "@/components/ui/intake-modal";

const INDUSTRY_TAGS = [
  "SAM.gov", "GSA Schedule", "IDIQ / GWAC", "CMMC", "Section 508", "8(a)", "SDVOSB",
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* Radar / tactical grid layer */}
      <RadarBackground className="z-[1] opacity-90" />

      {/* WebGL background */}
      <div className="absolute inset-0 z-[2] opacity-30">
        <WebGLShader />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/50 via-black/10 to-black pointer-events-none" />

      {/* Scan line — single sweep on load */}
      <ScanLine className="z-[4]" />

      {/* Coordinate HUD */}
      <CoordinateHUD />

      {/* Content */}
      <div className="relative z-[10] h-full flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div className="animate-fade-in-down flex items-center gap-3 mb-12">
          <div className="h-px w-8 bg-white/10" />
          <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#777]">
            Defense Industrial Base · Digital Modernization
          </p>
          <div className="h-px w-8 bg-white/10" />
        </div>

        {/* Headline — enlarged for authority */}
        <div className="max-w-6xl mx-auto animate-fade-in-up animation-delay-200">
          <AnimatedText
            text="Your Mission Demands"
            gradientColors="linear-gradient(90deg, #888, #e8e8e8, #888)"
            gradientAnimationDuration={9}
            className="leading-[1.06]"
            textClassName="text-4xl md:text-6xl lg:text-[5.5rem] font-extralight tracking-[-0.03em]"
          />
          <AnimatedText
            text="a Presence That Matches It."
            gradientColors="linear-gradient(90deg, #444, #777, #444)"
            gradientAnimationDuration={9}
            className="leading-[1.06]"
            textClassName="text-4xl md:text-6xl lg:text-[5.5rem] font-extralight tracking-[-0.03em]"
          />
        </div>

        {/* Subtitle */}
        <p className="mt-10 max-w-sm text-sm md:text-[15px] font-light leading-[1.7] text-[#888] animate-fade-in-up animation-delay-600">
          You win contracts. You hold clearances. You operate at the highest levels of federal
          procurement. Your digital presence should be held to the same standard.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-6 animate-fade-in-up animation-delay-800">
          <IntakeModal>
            <button
              className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-mono tracking-[0.18em] uppercase text-white transition-all duration-300 cursor-pointer"
              style={{
                background: "var(--accent-blue)",
                boxShadow: "0 0 0 1px rgba(42,114,181,0.3)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-blue-bright)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 30px var(--accent-blue-glow), 0 0 60px rgba(30,82,128,0.2)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = "var(--accent-blue)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 1px rgba(42,114,181,0.3)";
              }}
            >
              Request a Digital Assessment
            </button>
          </IntakeModal>

          <p className="text-[10px] tracking-[0.15em] uppercase text-[#555] font-mono">
            Exclusively serving defense contractors &amp; DoD-aligned firms
          </p>

          {/* Industry tags — readable signal */}
          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {INDUSTRY_TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-1">
                <span className="text-[9px] font-mono text-[#555] tracking-[0.1em]">{tag}</span>
                {i < INDUSTRY_TAGS.length - 1 && (
                  <span className="text-[9px] text-[#2a2a2a] font-mono mx-1">·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-1000">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/5" />
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#555] font-mono">Scroll</p>
      </div>
    </section>
  );
}
