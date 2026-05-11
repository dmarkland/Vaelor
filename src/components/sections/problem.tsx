"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PAIN_POINTS = [
  {
    title: "Contracting officers are vetting you before the first call.",
    body: "SAM.gov confirms you're registered. Your website tells them whether you're serious. In federal procurement, your digital presence is evaluated at every stage of the acquisition cycle — capability reviews, teaming assessments, source selection support. Most contractor websites fail that evaluation before a decision-maker scrolls past the fold.",
  },
  {
    title: "Your capability statement is outperforming your website.",
    body: "You've invested in your past performance narrative. It's detailed, credible, and ready for any IDIQ, GWAC, or OASIS proposal. Your website buries the same information — or doesn't show it at all. The credibility gap between your capabilities brief and your homepage is costing you qualified inbound.",
  },
  {
    title: "Teaming partners vet websites before they make contact.",
    body: "When a prime is assessing subcontractors, or an emerging firm is looking for a complementary capability on a set-aside pursuit, they research your digital presence before they call. A weak or dated website signals operational immaturity — and in a space where a teaming decision can be worth tens of millions, that impression carries weight.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative bg-black py-24 md:py-36 border-t border-[#0f0f0f]">
      <div className="mx-auto max-w-5xl px-6">

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
            className="mt-6 text-sm md:text-base font-light leading-relaxed text-[#999]"
          >
            Your past performance record is solid. Your NAICS codes are filed. Your contract
            vehicles are in place. But when a contracting officer, a procurement lead, or a
            potential teaming partner pulls up your website — what they see doesn&apos;t match
            the firm you actually are.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm md:text-base font-light leading-relaxed text-[#888]"
          >
            In federal procurement, that disconnect costs you more than first impressions.
            It costs you credibility at the stage when credibility matters most.
          </motion.p>
        </div>

        {/* Pain points — editorial numbered list */}
        <div className="mt-20 md:mt-24">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.35 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex gap-8 md:gap-14 border-t border-[#111] py-9">
                <span className="text-[10px] font-mono text-[#555] tracking-[0.25em] mt-1 shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col md:flex-row md:items-start md:gap-14 flex-1">
                  <h3 className="text-base md:text-[17px] font-light text-[#d8d8d8] leading-snug md:w-72 shrink-0">
                    {point.title}
                  </h3>
                  <p className="mt-3 md:mt-0 text-sm font-light text-[#888] leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-[#111]" />
        </div>

      </div>
    </section>
  );
}
