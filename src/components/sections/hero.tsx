"use client";

import Link from "next/link";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      {/* WebGL background */}
      <div className="absolute inset-0 opacity-35">
        <WebGLShader />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <div className="animate-fade-in-down flex items-center gap-3 mb-10">
          <div className="h-px w-8 bg-white/10" />
          <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#555]">
            &#47;&#47; Contractor Digital Infrastructure
          </p>
          <div className="h-px w-8 bg-white/10" />
        </div>

        {/* Headline */}
        <div className="max-w-5xl mx-auto animate-fade-in-up animation-delay-200">
          <AnimatedText
            text="Your Mission Demands"
            gradientColors="linear-gradient(90deg, #999, #e8e8e8, #999)"
            gradientAnimationDuration={9}
            className="leading-[1.08]"
            textClassName="text-4xl md:text-6xl lg:text-[5.5rem] font-extralight tracking-[-0.03em]"
          />
          <AnimatedText
            text="a Presence That Matches It."
            gradientColors="linear-gradient(90deg, #555, #888, #555)"
            gradientAnimationDuration={9}
            className="leading-[1.08]"
            textClassName="text-4xl md:text-6xl lg:text-[5.5rem] font-extralight tracking-[-0.03em]"
          />
        </div>

        {/* Subtitle */}
        <p
          className="mt-8 max-w-md text-sm md:text-[15px] font-light leading-relaxed text-[#888] animate-fade-in-up animation-delay-600"
        >
          You win government contracts. You hold clearances. You operate at the highest
          levels of federal procurement. Your digital presence should reflect that standard.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-5 animate-fade-in-up animation-delay-800">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-[11px] font-mono tracking-[0.18em] uppercase text-white transition-all duration-300"
            style={{
              background: "var(--accent-blue)",
              boxShadow: "0 0 0 1px rgba(42,114,181,0.3)",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-blue-bright)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 30px var(--accent-blue-glow), 0 0 60px rgba(30,82,128,0.2)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-blue)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 1px rgba(42,114,181,0.3)";
            }}
          >
            See What&apos;s Possible
          </Link>
          <p className="text-[10px] tracking-[0.15em] uppercase text-[#444] font-mono">
            Trusted by defense contractors &amp; DoD-aligned firms
          </p>
          <p className="text-[9px] tracking-[0.12em] text-[#2a2a2a] font-mono">
            SAM.gov &nbsp;·&nbsp; GSA Schedule &nbsp;·&nbsp; IDIQ / GWAC &nbsp;·&nbsp; CMMC &nbsp;·&nbsp; Section 508 &nbsp;·&nbsp; 8(a) &nbsp;·&nbsp; SDVOSB
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up animation-delay-1000">
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-white/5" />
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#333] font-mono">Scroll</p>
      </div>
    </section>
  );
}
