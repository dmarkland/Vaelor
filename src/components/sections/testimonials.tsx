"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SlidingTestimonial from "@/components/ui/sliding-testimonial";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="testimonials" className="relative bg-black border-t border-[#0f0f0f] overflow-hidden py-24 md:py-36">

      <div className="relative z-10">
        {/* Header */}
        <div className="mx-auto max-w-5xl px-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-6 bg-[#2a2a2a]" />
            <span className="text-[10px] tracking-[0.22em] text-[#555] uppercase font-mono">
              Client Results
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl md:text-4xl lg:text-5xl font-extralight text-[#e8e8e8] tracking-[-0.02em] leading-tight max-w-2xl"
          >
            What Happens After Launch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-sm font-light text-[#e0e0e0] max-w-xl leading-relaxed"
          >
            From defense primes to 8(a) firms — the pattern is consistent.
          </motion.p>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <SlidingTestimonial />
        </motion.div>
      </div>
    </section>
  );
}
