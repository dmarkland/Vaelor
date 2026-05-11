"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Layers, Zap, FileText, RefreshCw, Target } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const CAPABILITIES = [
  {
    id: 1,
    title: "Contractor Positioning",
    date: "Strategy",
    content: "We translate your past performance, clearance profile, and contract history into messaging that resonates with contracting officers, teaming partners, and agency procurement leads — not generic web visitors.",
    category: "Strategy",
    icon: Target,
    relatedIds: [2, 6],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Capability Architecture",
    date: "Design",
    content: "Information architecture built around your NAICS codes, contract vehicles, and past performance record. Every page has a structural purpose — no filler, no fluff, nothing a procurement officer can't use.",
    category: "Design",
    icon: Layers,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "508 & Compliance",
    date: "Architecture",
    content: "Section 508 accessibility conformance, WCAG 2.1 standards, and federal web best practices built in by default — so your site meets the baseline before any government review.",
    category: "Architecture",
    icon: Shield,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Technical Performance",
    date: "Engineering",
    content: "Fast load times, secure hosting, and clean architecture that holds up under scrutiny — whether that's a CIO's security review or a slow connection at a cleared facility.",
    category: "Engineering",
    icon: Zap,
    relatedIds: [3, 5],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "Past Performance Showcase",
    date: "Content",
    content: "Your wins, certifications, clearances, and contract vehicles — structured so procurement professionals can evaluate them quickly and confidently. Not buried in a PDF. Not on a generic About page.",
    category: "Content",
    icon: FileText,
    relatedIds: [4, 6],
    status: "completed" as const,
    energy: 75,
  },
  {
    id: 6,
    title: "Recompete Readiness",
    date: "Ongoing",
    content: "Ongoing support as your portfolio evolves. Quarterly reviews, content updates, agency-specific landing pages, and recompete preparation to keep your presence aligned with your pursuit pipeline.",
    category: "Support",
    icon: RefreshCw,
    relatedIds: [5, 1],
    status: "in-progress" as const,
    energy: 70,
  },
];

export default function Capabilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="capabilities" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden">

      {/* Header */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-6 bg-[#2a2a2a]" />
          <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
            Engagement Scope
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight max-w-2xl"
        >
          Built Around How Government Buyers Actually Evaluate You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-sm font-light text-[#999] max-w-xl leading-relaxed"
        >
          Every capability is architected around how government buyers evaluate, qualify, and select contractors — not how commercial websites are built.
        </motion.p>
      </div>

      {/* Orbital */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10"
      >
        <RadialOrbitalTimeline timelineData={CAPABILITIES} />
      </motion.div>
    </section>
  );
}
