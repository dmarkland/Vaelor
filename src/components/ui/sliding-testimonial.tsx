"use client";

interface Testimonial {
  quote: string;
  role: string;
  firm: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "We had a capabilities brief that could win any room, and a website that made us look like a startup that ran out of money in 2011. Vaelor fixed that. Within 60 days of launch, we had three inbound teaming inquiries from firms that found us through Google.",
    role: "VP of Business Development",
    firm: "Defense Technology Firm",
  },
  {
    quote: "I was skeptical that a website would move the needle in our space. I was wrong. Our GSA schedule page alone has generated more qualified outreach than anything we'd done before.",
    role: "CEO",
    firm: "Federal IT Services Contractor",
  },
  {
    quote: "Vaelor understood our world immediately — clearances, contract vehicles, the way procurement people actually evaluate vendors. They didn't need a three-hour onboarding. They just got it.",
    role: "Director of Capture Management",
    firm: "Aerospace & Defense Firm",
  },
  {
    quote: "We were heading into a major recompete and our digital presence was embarrassing compared to the competition. Vaelor turned it around in eight weeks. The contracting officer actually mentioned our website during the debrief — in a good way.",
    role: "President",
    firm: "Logistics & Supply Chain Contractor",
  },
  {
    quote: "As an 8(a) firm, we needed to punch above our weight. Our old site looked like a hobby project. Now it looks like we belong in the same conversation as primes three times our size — because we do.",
    role: "Founder & CEO",
    firm: "Emerging Small Business Contractor",
  },
  {
    quote: "We'd worked with two agencies before Vaelor. Both produced generic sites that could've been for any industry. Vaelor built something that actually reflects what we do and who we sell to. Night and day.",
    role: "VP of Strategy",
    firm: "Cybersecurity & Intelligence Services Firm",
  },
  {
    quote: "Our BD team was spending time explaining our company from scratch on every call because our website wasn't doing the work. Now prospects show up to calls already warmed up. That alone was worth the investment.",
    role: "Chief Growth Officer",
    firm: "Defense Engineering Firm",
  },
  {
    quote: "I sent our new site to a teaming partner we'd been trying to land for two years. They came back the same week. I'm not saying it was just the website — but the timing wasn't a coincidence.",
    role: "COO",
    firm: "Federal Professional Services Firm",
  },
  {
    quote: "We operate in a highly sensitive sector and were nervous about how much to put online. Vaelor helped us find the right balance — credible and compelling without overexposing. They understood the nuance without us having to explain it twice.",
    role: "Director of Business Development",
    firm: "Intelligence & National Security Contractor",
  },
  {
    quote: "Three months post-launch we ranked on the first page of Google for two of our core service lines. We'd never had a single inbound lead from our website before. Now it's a consistent channel.",
    role: "Managing Partner",
    firm: "Federal Consulting Firm",
  },
];

const duplicated = [...TESTIMONIALS, ...TESTIMONIALS];

export default function SlidingTestimonial() {
  return (
    <div
      className="flex overflow-hidden w-full"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="flex animate-x-slider gap-5 w-max hover:[animation-play-state:paused]">
        {duplicated.map((t, i) => (
          <div
            key={i}
            className="flex flex-col justify-between border border-white/[0.07] bg-black shrink-0 w-[360px] sm:w-[440px] md:w-[480px] h-full transition-all duration-500 hover:bg-[#05080d] hover:ring-1 hover:ring-[#1e5280]/40 hover:shadow-[0_0_50px_rgba(30,82,128,0.12),0_0_100px_rgba(30,82,128,0.07),inset_0_0_50px_rgba(30,82,128,0.06)]"
          >
            <p className="px-6 pt-6 pb-5 text-base font-light text-[#e0e0e0] leading-relaxed tracking-tight"
              style={{ textShadow: "0 0 12px rgba(255,255,255,0.1)" }}>
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="border-t border-white/[0.07] px-6 py-4">
              <p className="text-sm font-light text-white" style={{ textShadow: "0 0 16px rgba(255,255,255,0.3)" }}>{t.role}</p>
              <p className="text-xs text-[#bbb] mt-0.5 font-mono tracking-wide">{t.firm}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
