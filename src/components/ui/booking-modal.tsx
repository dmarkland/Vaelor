"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, Video } from "lucide-react";

const DAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const CALENDLY_URL = "https://calendly.com/dannymarkland/1-1-w-danny";

function CalendarGrid() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const today = now.getDate();

  const monthName = now.toLocaleString("default", { month: "long" });
  const firstDayOfWeek = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: React.ReactNode[] = [];

  // Empty leading cells
  for (let i = 0; i < firstDayOfWeek; i++) {
    cells.push(<div key={`empty-${i}`} className="h-8 w-8" />);
  }

  // Day cells
  for (let d = 1; d <= daysInMonth; d++) {
    const isToday = d === today;
    const isPast = d < today;
    cells.push(
      <div
        key={d}
        className={`h-8 w-8 flex items-center justify-center rounded-md text-xs font-mono transition-colors duration-200
          ${isToday
            ? "bg-[#1e5280] text-white"
            : isPast
            ? "text-[#333] cursor-default"
            : "text-[#888] hover:bg-[#0d1a26] hover:text-white cursor-pointer"
          }`}
      >
        {d}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-baseline justify-between mb-5">
        <p className="text-sm font-light text-[#e8e8e8] tracking-wide">
          {monthName} <span className="text-[#555]">{year}</span>
        </p>
        <span className="text-[10px] font-mono text-[#1e5280] tracking-[0.18em] uppercase">
          30 min
        </span>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {DAY_NAMES.map((d) => (
          <div key={d} className="h-8 w-8 flex items-center justify-center">
            <span className="text-[9px] font-mono text-[#333] tracking-[0.12em]">{d}</span>
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells}
      </div>
    </div>
  );
}

interface BookingModalProps {
  children: React.ReactNode;
}

export function BookingModal({ children }: BookingModalProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>

      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            {/* Backdrop */}
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Dialog.Overlay>

            {/* Panel */}
            <Dialog.Content asChild>
              <motion.div
                className="fixed z-[101] top-1/2 left-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 outline-none"
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  className="relative bg-[#030507] border border-[#111] p-7"
                  style={{ boxShadow: "0 0 0 1px rgba(30,82,128,0.15), 0 32px 80px rgba(0,0,0,0.8)" }}
                >
                  {/* Corner brackets */}
                  <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#1e5280]/40 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#1e5280]/40 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#1e5280]/40 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#1e5280]/40 pointer-events-none" />

                  {/* Close */}
                  <Dialog.Close className="absolute top-4 right-4 text-[#444] hover:text-white transition-colors duration-200 cursor-pointer">
                    <X className="h-4 w-4" />
                  </Dialog.Close>

                  {/* Header */}
                  <div className="mb-6">
                    <span className="text-[10px] font-mono tracking-[0.22em] text-[#1e5280] uppercase">
                      Schedule a Call
                    </span>
                    <Dialog.Title className="mt-3 text-xl font-extralight text-[#e8e8e8] tracking-[-0.01em] leading-snug">
                      Discovery Call with Vaelor
                    </Dialog.Title>
                    <Dialog.Description className="mt-2 text-xs font-light text-[#666] leading-relaxed">
                      We&apos;ll review your current digital presence and outline exactly what a modernization engagement would look like for your firm.
                    </Dialog.Description>

                    {/* Meta */}
                    <div className="flex items-center gap-5 mt-4">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3 w-3 text-[#555]" />
                        <span className="text-[10px] font-mono text-[#555] tracking-wide">30 minutes</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Video className="h-3 w-3 text-[#555]" />
                        <span className="text-[10px] font-mono text-[#555] tracking-wide">Zoom</span>
                      </div>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-[#0f0f0f] mb-6" />

                  {/* Calendar */}
                  <CalendarGrid />

                  {/* Divider */}
                  <div className="h-px w-full bg-[#0f0f0f] mt-6 mb-6" />

                  {/* CTA */}
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 text-white text-[11px] font-mono tracking-[0.16em] uppercase px-6 py-3.5 transition-all duration-300 cursor-pointer"
                    style={{
                      background: "var(--accent-blue)",
                      boxShadow: "0 0 0 1px rgba(42,114,181,0.3)",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-blue-bright)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px var(--accent-blue-glow)";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = "var(--accent-blue)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 1px rgba(42,114,181,0.3)";
                    }}
                  >
                    Select a Time on Calendly
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>

                  <p className="text-center text-[10px] font-mono text-[#333] mt-3 tracking-wide">
                    No commitment required
                  </p>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
