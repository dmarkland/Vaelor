"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TacticalGrid } from "@/components/ui/tactical-grid";

const INSIGHTS = [
  {
    id: "01",
    category: "Credibility · Presence",
    headline: "The gap between capability and digital presence is one of the most consequential — and most overlooked — vulnerabilities in federal contracting today.",
    body: "Many of the most technically capable contractors operating in the defense industrial base are represented online by infrastructure that no longer reflects the sophistication of their operations, the depth of their past performance, or the maturity of their organization.",
    featured: true,
  },
  {
    id: "02",
    category: "Procurement · Evaluation",
    headline: "Contracting officers form an impression before the first conversation.",
    body: "In federal procurement, your digital presence is evaluated at every stage of the acquisition cycle — capability reviews, teaming assessments, source selection support. The evaluation begins online, long before any formal engagement.",
    featured: false,
  },
  {
    id: "03",
    category: "Talent · Recruiting",
    headline: "Cleared professionals assess organizational credibility before they apply.",
    body: "Recruiting in the cleared community begins with digital research. A dated or underdeveloped presence signals organizational stagnation to the professionals you are competing to attract.",
    featured: false,
  },
  {
    id: "04",
    category: "Positioning · Strategy",
    headline: "The firms winning federal business are not always those with the strongest capability.",
    body: "They are those who communicate it most precisely. Digital presence has become a decisive variable in competitive federal contracting — and the gap between high-performing and high-presenting firms remains wide.",
    featured: false,
  },
  {
    id: "05",
    category: "Trust · Enterprise",
    headline: "Enterprise trust is established before the first meeting.",
    body: "Teaming partners, agency leads, and procurement officials conduct digital due diligence before any conversation begins. What they find shapes every subsequent interaction — including whether one happens at all.",
    featured: false,
  },
];

function InsightCard({
  insight,
  delay,
  featured = false,
}: {
  insight: typeof INSIGHTS[0];
  delay: number;
  featured?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.0, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative border border-[#0f0f0f] bg-black hover:bg-[#04080e] transition-colors duration-500 flex flex-col justify-between
        ${featured ? "p-10 md:p-12" : "p-7 md:p-8"}`}
    >
      {/* Hover glow — top edge */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1e5280]/0 to-transparent group-hover:via-[#1e5280]/40 transition-all duration-700" />

      <div>
        {/* ID + Category */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`font-mono text-[#1e5280] tracking-[0.2em] ${featured ? "text-[11px]" : "text-[9px]"}`}>
            {insight.id}
          </span>
          <div className="h-px flex-1 bg-[#111]" />
          <span className={`font-mono text-[#333] tracking-[0.16em] uppercase ${featured ? "text-[9px]" : "text-[8px]"}`}>
            {insight.category}
          </span>
        </div>

        {/* Headline */}
        <p className={`font-extralight text-[#d8d8d8] leading-snug tracking-[-0.01em]
          ${featured
            ? "text-xl md:text-2xl lg:text-[1.6rem]"
            : "text-sm md:text-base"
          }`}
        >
          {insight.headline}
        </p>
      </div>

      {/* Body */}
      <p className={`font-light text-[#555] leading-relaxed mt-5
        ${featured ? "text-sm md:text-[15px]" : "text-xs md:text-sm"}`}
      >
        {insight.body}
      </p>
    </motion.div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="testimonials" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden py-24 md:py-36">
      <TacticalGrid />

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
              Modernization Intelligence
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight"
          >
            What We Observe Across the Defense Industrial Base
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm font-light text-[#555] leading-relaxed max-w-lg"
          >
            Patterns observed across the defense industrial base — informing how we approach every modernization engagement.
          </motion.p>
        </div>

        {/* Insight grid — asymmetric layout */}
        <div className="flex flex-col gap-px">

          {/* Row 1: Featured (left, 60%) + secondary (right, 40%) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px">
            <div className="md:col-span-3">
              <InsightCard insight={INSIGHTS[0]} delay={0.3} featured />
            </div>
            <div className="md:col-span-2">
              <InsightCard insight={INSIGHTS[1]} delay={0.4} />
            </div>
          </div>

          {/* Row 2: Three equal columns */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px">
            <InsightCard insight={INSIGHTS[2]} delay={0.5} />
            <InsightCard insight={INSIGHTS[3]} delay={0.6} />
            <InsightCard insight={INSIGHTS[4]} delay={0.7} />
          </div>

        </div>

        {/* Closing authority line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex items-center gap-6"
        >
          <div className="h-px flex-1 bg-[#0f0f0f]" />
          <span className="text-[10px] font-mono text-[#2a2a2a] tracking-[0.2em] uppercase shrink-0">
            Vaelor · Modernization Authority · Defense Industrial Base
          </span>
          <div className="h-px flex-1 bg-[#0f0f0f]" />
        </motion.div>

      </div>
    </section>
  );
}
