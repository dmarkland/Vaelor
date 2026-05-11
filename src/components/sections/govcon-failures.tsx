"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const FAILURES = [
  {
    index: "01",
    title: "Outdated Design Signals Operational Risk",
    body: "A dated visual system communicates the same thing as a dated proposal template — the organization hasn't kept pace. Contracting officers and program managers read design as a proxy for operational maturity.",
  },
  {
    index: "02",
    title: "Recruiting Pipelines Stall at the Homepage",
    body: "Cleared talent vets potential employers before applying. When a site fails to communicate culture, technical depth, or growth trajectory, candidates self-select out before contact is ever made.",
  },
  {
    index: "03",
    title: "Mobile Experience Reflects Due Diligence",
    body: "Decision-makers review vendors on mobile during travel, at conferences, and between meetings. A broken or unresponsive mobile layout is read as negligence — not as a minor technical oversight.",
  },
  {
    index: "04",
    title: "Capabilities Are Present But Not Communicated",
    body: "Contract vehicles, clearance levels, and NAICS codes are buried or formatted for compliance — not comprehension. Procurement leads and teaming partners need to absorb your positioning in under 60 seconds.",
  },
  {
    index: "05",
    title: "Trust Signals Are Missing or Implausible",
    body: "Fabricated metrics, vague claims, and stock-photo teams destroy credibility with sophisticated buyers. Federal procurement audiences have calibrated BS detectors. Absence of proof is often better than unverifiable proof.",
  },
  {
    index: "06",
    title: "Cybersecurity Posture Is Not Reflected Online",
    body: "For firms pursuing CMMC certification or working in cleared environments, a website with no visible security posture — no HTTPS hardening, outdated dependencies, third-party scripts — creates a contradiction that evaluators notice.",
  },
];

export default function GovConFailures() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-black border-t border-[#0f0f0f] overflow-hidden py-24 md:py-36">
      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-6 bg-[#2a2a2a]" />
            <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
              Diagnostic
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight"
          >
            Why GovCon Websites Fail
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm font-light text-[#666] leading-relaxed"
          >
            The failure modes are consistent across firms. They are not design problems — they are positioning problems that manifest as design problems.
          </motion.p>
        </div>

        {/* Failure grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0d0d0d]">
          {FAILURES.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.25 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black px-6 py-7 group hover:bg-[#04070d] transition-colors duration-500"
            >
              <span className="text-[9px] font-mono text-[#2a2a2a] tracking-[0.28em] group-hover:text-[#1e5280] transition-colors duration-500">
                {item.index}
              </span>
              <h3 className="mt-4 text-[13px] font-light text-[#bbb] leading-snug tracking-[-0.01em] group-hover:text-white transition-colors duration-300">
                {item.title}
              </h3>
              <p className="mt-3 text-[11px] text-[#555] font-mono leading-[1.75] tracking-wide group-hover:text-[#666] transition-colors duration-300">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
