"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#0f0f0f]" style={{ isolation: "auto" }}>
      <div className="mx-auto max-w-5xl px-6 py-20 flex flex-col items-center gap-10" style={{ isolation: "auto" }}>

        {/* Logo + wordmark */}
        <div className="flex flex-col items-center gap-6 w-full text-center">
          <Image
            src="/logo.png"
            alt="Vaelor"
            width={56}
            height={56}
            className="opacity-95 mx-auto"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/vaelor.png"
            alt="Vaelor"
            style={{
              height: "28px",
              width: "auto",
              mixBlendMode: "lighten",
            }}
          />
        </div>

        {/* Tagline */}
        <p className="text-sm font-light text-[#666] tracking-wide text-center max-w-sm leading-relaxed">
          Strategic digital modernization for the defense industrial base.
        </p>

        {/* Nav links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-mono tracking-[0.15em] uppercase text-[#555] hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-[#0f0f0f]" />

        {/* Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-3">
          <p className="text-xs text-[#444] font-mono">
            © 2026 Vaelor. All rights reserved.
          </p>
          <a
            href="mailto:support@vaelor.com"
            className="text-xs text-[#444] font-mono hover:text-[#888] transition-colors duration-200"
          >
            support@vaelor.com
          </a>
        </div>

      </div>
    </footer>
  );
}
