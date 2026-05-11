"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    id: "item-1",
    question: "How long does it take?",
    answer: "Most projects go from kickoff to live site in 14 days. Discovery and strategy take the first two days, design and build run days three through ten, and the final four days are review, refinement, and launch. If your project has additional complexity — multiple service lines, a large content migration, or a custom capability — we'll scope that upfront.",
  },
  {
    id: "item-2",
    question: "Do you work with small businesses and 8(a) firms?",
    answer: "Yes, and we're good at it. We understand the challenge of competing with primes that have ten times your headcount and budget. We build sites that make emerging and small businesses look like they belong in the same room — because they do. We've worked with 8(a) firms, HUBZone companies, SDVOSBs, and WOSBs.",
  },
  {
    id: "item-3",
    question: "What makes you different from a general web agency?",
    answer: "We only work with government contractors, defense vendors, and aerospace firms. We know what a contracting officer looks for when they vet a vendor online. We understand contract vehicles, NAICS codes, clearance language, and the difference between a capabilities statement and a capabilities page. You won't spend hours explaining your world to us.",
  },
  {
    id: "item-4",
    question: "Do you write the copy too?",
    answer: "Yes. Copywriting is included. We don't hand you a blank template and ask you to fill it in. We conduct a strategic intake, learn your positioning, past performance, and differentiators, and write copy that speaks directly to government buyers and teaming partners. If you have existing materials — capabilities briefs, proposals, one-pagers — we incorporate them.",
  },
  {
    id: "item-5",
    question: "What happens after launch?",
    answer: "You own everything — the code, the domain, the content. We hand off full documentation. If you want ongoing support, we offer a monthly retainer that covers content updates, quarterly strategy reviews, SEO monitoring, and a dedicated point of contact. No retainer required, but most clients stay on.",
  },
  {
    id: "item-6",
    question: "What does it cost?",
    answer: "Projects are scoped individually based on complexity, number of pages, and content requirements. We don't publish pricing because a five-page firm site and a fifteen-page capabilities platform are different engagements. Schedule a discovery call and we'll give you a clear number — no range, no 'starting at.'",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="faq" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden py-24 md:py-36">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">

          {/* Left: header */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-6 bg-[#2a2a2a]" />
              <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
                FAQ
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-4xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight"
            >
              Questions We Get Before the First Call
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-sm font-light text-[#999] leading-relaxed"
            >
              If something isn&apos;t answered here, the discovery call will cover it.
            </motion.p>
          </div>

          {/* Right: accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-base">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
