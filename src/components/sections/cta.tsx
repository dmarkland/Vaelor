"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { ScanLine } from "@/components/ui/scan-line";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden py-32 md:py-48">
      <FallingPattern className="absolute inset-0 z-0" />
      <ScanLine className="z-[1]" />

      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 65% at 15% 85%, rgba(30,82,128,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono"
          >
            Get Started
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extralight text-[#e8e8e8] tracking-[-0.03em] leading-tight"
          >
            Your Capabilities Are Proven. Your Website Should Be Too.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm md:text-base font-light text-[#888] max-w-md leading-relaxed"
          >
            Schedule a discovery call. We&apos;ll audit your digital presence against the firms you&apos;re competing with — and give you a clear picture of what it would take to close the gap.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-8"
          >
            <button
              className="inline-flex items-center gap-2 text-white text-[11px] font-mono tracking-[0.16em] uppercase px-8 py-4 transition-all duration-300"
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
              Schedule a Discovery Call
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-xs text-[#333] font-mono tracking-wider hidden sm:block">
              No commitment. 30 minutes.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
