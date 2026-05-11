"use client";

import { motion } from "framer-motion";
import { RadarBackground } from "@/components/ui/radar-bg";
import { CoordinateHUD } from "@/components/ui/coordinate-hud";
import { ScanLine } from "@/components/ui/scan-line";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { IntakeModal } from "@/components/ui/intake-modal";

const INDUSTRY_TAGS = [
  "SAM.gov", "GSA Schedule", "IDIQ / GWAC", "CMMC", "Section 508", "8(a)", "SDVOSB",
];

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">

      <RadarBackground className="z-[1] opacity-90" />

      <div className="absolute inset-0 z-[2] opacity-25">
        <WebGLShader />
      </div>

      <div className="absolute inset-0 z-[3] bg-gradient-to-b from-black/60 via-black/10 to-black pointer-events-none" />

      <ScanLine className="z-[4]" />
      <CoordinateHUD />

      {/* Content */}
      <div className="relative z-[10] h-full flex flex-col items-center justify-center px-6 text-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-14"
        >
          <div className="h-px w-8 bg-white/10" />
          <p className="text-[10px] font-mono tracking-[0.28em] uppercase text-[#555]">
            Defense Industrial Base · Digital Modernization
          </p>
          <div className="h-px w-8 bg-white/10" />
        </motion.div>

        {/* Headline */}
        <div className="max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[5.2rem] font-extralight tracking-[-0.03em] leading-[1.06] text-[#e8e8e8]"
          >
            The Evaluation Begins Online.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-[5.2rem] font-extralight tracking-[-0.03em] leading-[1.06] text-[#555]"
          >
            Most Contractor Sites Fail It.
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 max-w-md text-sm md:text-[15px] font-light leading-[1.75] text-[#666]"
        >
          Contracting officers, teaming partners, and cleared candidates assess
          your digital presence before any formal engagement. We build the sites
          that pass that evaluation.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-6"
        >
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
              Request a Modernization Review
            </button>
          </IntakeModal>

          <p className="text-[10px] tracking-[0.15em] uppercase text-[#444] font-mono">
            Exclusively serving defense contractors &amp; DoD-aligned firms
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
            {INDUSTRY_TAGS.map((tag, i) => (
              <span key={tag} className="flex items-center gap-1">
                <span className="text-[9px] font-mono text-[#444] tracking-[0.1em]">{tag}</span>
                {i < INDUSTRY_TAGS.length - 1 && (
                  <span className="text-[9px] text-[#222] font-mono mx-1">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.0 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/15 to-white/5" />
          <p className="text-[9px] tracking-[0.2em] uppercase text-[#444] font-mono">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}
