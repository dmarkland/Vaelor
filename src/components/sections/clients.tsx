"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SECTORS = [
  {
    code: "SB-01",
    label: "Prime Contractors",
    sub: "Full-service defense & federal integrators",
  },
  {
    code: "SB-02",
    label: "8(a) Certified Firms",
    sub: "SBA program & set-aside pursuit",
  },
  {
    code: "SB-03",
    label: "SDVOSB / VOSB",
    sub: "Service-disabled & veteran-owned businesses",
  },
  {
    code: "SB-04",
    label: "HUBZone Companies",
    sub: "Historically underutilized business zones",
  },
  {
    code: "SB-05",
    label: "Defense Technology",
    sub: "Autonomous systems, hardware & software",
  },
  {
    code: "SB-06",
    label: "Federal IT & Cybersecurity",
    sub: "FedRAMP, CMMC, Zero Trust, RMF",
  },
  {
    code: "SB-07",
    label: "Aerospace & Systems",
    sub: "Engineering, integration & platform firms",
  },
  {
    code: "SB-08",
    label: "Intelligence & NatSec",
    sub: "Cleared programs, sensitive environment work",
  },
];

export default function Clients() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-black border-t border-[#0f0f0f] py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-6 bg-[#2a2a2a]" />
            <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
              Sector Focus
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight"
          >
            Built Exclusively for Government Contractors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm font-light text-[#666] leading-relaxed"
          >
            We don&apos;t work with retail brands, SaaS startups, or e-commerce companies. Every engagement, every capability, every line of copy is built for one sector — the one you operate in.
          </motion.p>
        </div>

        {/* Sector grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0d0d0d]">
          {SECTORS.map((s, i) => (
            <motion.div
              key={s.code}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.25 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black px-5 py-6 group hover:bg-[#05080d] transition-colors duration-500"
            >
              <span className="text-[9px] font-mono text-[#555] tracking-[0.22em] group-hover:text-[#1e5280] transition-colors duration-500">
                {s.code}
              </span>
              <h3 className="mt-3 text-sm font-light text-[#bbb] leading-snug group-hover:text-white transition-colors duration-300">
                {s.label}
              </h3>
              <p className="mt-1.5 text-[10px] text-[#777] font-mono leading-relaxed tracking-wide group-hover:text-[#555] transition-colors duration-300">
                {s.sub}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
