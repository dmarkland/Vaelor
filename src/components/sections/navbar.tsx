"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IntakeModal } from "@/components/ui/intake-modal";

const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        backgroundColor: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
      }}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="#" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Vaelor"
            width={28}
            height={28}
            className="opacity-90 group-hover:opacity-100 transition-opacity duration-200"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vaelor.png"
            alt="Vaelor"
            style={{
              height: "14px",
              width: "auto",
              mixBlendMode: "screen",
              opacity: 0.9,
            }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-[0.14em] uppercase text-[#777] hover:text-white transition-colors duration-200 font-mono"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <IntakeModal>
            <button
              className="text-[11px] tracking-[0.14em] uppercase font-mono px-5 py-2.5 text-white/80 hover:text-white transition-all duration-200 cursor-pointer"
              style={{ border: "1px solid var(--accent-blue)", boxShadow: "0 0 12px var(--accent-blue-subtle)" }}
            >
              Book a Call
            </button>
          </IntakeModal>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm tracking-[0.14em] uppercase text-[#999] hover:text-white transition-colors duration-200 font-mono"
            >
              {link.label}
            </Link>
          ))}
          <IntakeModal>
            <button
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full text-sm tracking-[0.14em] uppercase font-mono px-5 py-3 border border-white/20 text-white text-center hover:border-white/50 transition-all duration-200 cursor-pointer"
            >
              Book a Call
            </button>
          </IntakeModal>
        </div>
      )}
    </header>
  );
}
