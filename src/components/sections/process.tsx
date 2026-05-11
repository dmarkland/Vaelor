"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Timeline } from "@/components/ui/timeline-component";

const PROCESS_STEPS = [
  {
    period: "Day 1–2",
    title: "Strategic Intake",
    description:
      "We conduct a structured intake covering your contract history, clearance profile, NAICS codes, target agencies, active pursuit pipeline, and competitive landscape. This isn't an onboarding form — it's the intelligence brief that drives every positioning and design decision downstream.",
  },
  {
    period: "Day 3–5",
    title: "Positioning & Architecture",
    description:
      "We map your capability positioning, contract vehicle presentation, and information hierarchy. You'll know exactly how your past performance, certifications, and differentiators will be featured — before a single pixel is placed.",
  },
  {
    period: "Day 6–10",
    title: "Design & Build",
    description:
      "Custom design and development in parallel. No themes, no builders, no layouts repurposed from the commercial sector. Every element is built for the audience that matters: contracting officers, procurement leads, and teaming partners evaluating your firm.",
  },
  {
    period: "Day 11–12",
    title: "Review & Refinement",
    description:
      "You review a fully operational staging build. One focused feedback round covers messaging accuracy, capability presentation, and visual alignment. We move fast without compromising the precision your sector requires.",
  },
  {
    period: "Day 13–14",
    title: "Launch & Handoff",
    description:
      "We deploy to production, configure your domain, and hand off complete documentation. You own everything — code, content, credentials. Recompete support and ongoing retainer available if you want us in your corner through the next pursuit cycle.",
  },
];

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="process" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-6 bg-[#2a2a2a]" />
          <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
            How It Works
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight max-w-2xl"
        >
          From Strategic Intake to Live Site. Fourteen Days.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm font-light text-[#999] max-w-xl leading-relaxed"
        >
          Built for firms that move fast when the opportunity demands it.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10"
      >
        <Timeline events={PROCESS_STEPS} />
      </motion.div>
    </section>
  );
}
