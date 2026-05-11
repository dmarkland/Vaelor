"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { TacticalGrid } from "@/components/ui/tactical-grid";

const PAIN_POINTS = [
  {
    num: "01",
    title: "Contracting officers are vetting you before the first call.",
    body: "SAM.gov confirms you're registered. Your website tells them whether you're serious. In federal procurement, your digital presence is evaluated at every stage of the acquisition cycle — capability reviews, teaming assessments, source selection support. Most contractor websites fail that evaluation before a decision-maker scrolls past the fold.",
  },
  {
    num: "02",
    title: "Your capability statement is outperforming your website.",
    body: "You've invested in your past performance narrative. It's detailed, credible, and ready for any IDIQ, GWAC, or OASIS proposal. Your website buries the same information — or doesn't show it at all. The credibility gap between your capabilities brief and your homepage is costing you qualified inbound.",
  },
  {
    num: "03",
    title: "Teaming partners vet websites before they make contact.",
    body: "When a prime is assessing subcontractors, or an emerging firm is looking for a complementary capability on a set-aside pursuit, they research your digital presence before they call. A weak or dated website signals operational immaturity — and in a space where a teaming decision can be worth tens of millions, that impression carries weight.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="relative bg-black py-24 md:py-36 border-t border-[#0f0f0f] overflow-hidden">
      <TacticalGrid />
      <div className="relative z-10 mx-auto max-w-5xl px-6">

        {/* Header */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-6 bg-[#2a2a2a]" />
            <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
              The Problem
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight"
          >
            The Gap Between Your Capabilities Brief and Your Digital Presence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-sm md:text-base font-light leading-relaxed text-[#888]"
          >
            Your past performance record is solid. Your NAICS codes are filed. Your contract
            vehicles are in place. But when a contracting officer, a procurement lead, or a
            potential teaming partner pulls up your website — what they see doesn&apos;t match
            the firm you actually are.
          </motion.p>
        </div>

        {/* Emphasized statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 border-l-2 border-[#1e5280] pl-6"
        >
          <p className="text-xl md:text-2xl lg:text-3xl font-extralight text-[#d8d8d8] tracking-[-0.01em] leading-tight">
            In federal procurement, that disconnect costs you more than first impressions.
          </p>
          <p className="mt-2 text-xl md:text-2xl lg:text-3xl font-extralight tracking-[-0.01em] leading-tight"
            style={{ color: "var(--accent-blue-bright)" }}>
            It costs you credibility at the stage when credibility matters most.
          </p>
        </motion.div>

        {/* Interactive pain point selector */}
        <div className="mt-20 md:mt-24 grid md:grid-cols-[1fr_1.4fr] gap-0">

          {/* Left — selectable items */}
          <div className="border-r border-[#111]">
            {PAIN_POINTS.map((point, i) => (
              <motion.button
                key={point.num}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.0, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActive(i)}
                className={`w-full text-left border-t border-[#111] px-0 py-8 pr-8 flex gap-6 items-start transition-all duration-300 cursor-pointer group ${i === PAIN_POINTS.length - 1 ? "border-b" : ""}`}
              >
                <span className={`text-[10px] font-mono tracking-[0.25em] mt-1 shrink-0 transition-colors duration-300 ${active === i ? "text-[#1e5280]" : "text-[#333] group-hover:text-[#555]"}`}>
                  {point.num}
                </span>
                <span className={`text-sm md:text-base font-light leading-snug transition-colors duration-300 ${active === i ? "text-white" : "text-[#555] group-hover:text-[#888]"}`}>
                  {point.title}
                </span>
                {active === i && (
                  <motion.div
                    layoutId="active-bar"
                    className="absolute right-0 top-0 bottom-0 w-px bg-[#1e5280]"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Right — body content */}
          <div className="md:pl-12 pt-8 md:pt-0 flex items-center min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-[10px] font-mono text-[#1e5280] tracking-[0.2em] mb-4">
                  {PAIN_POINTS[active].num} / 03
                </div>
                <p className="text-sm md:text-base font-light text-[#888] leading-[1.8]">
                  {PAIN_POINTS[active].body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
