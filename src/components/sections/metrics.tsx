"use client";

const METRICS = [
  {
    value: "$850B+",
    label: "Annual federal contracting market",
  },
  {
    value: "14 Days",
    label: "Strategic intake to live site",
  },
  {
    value: "8(a) · SDVOSB · HUBZone",
    label: "Set-aside programs supported",
  },
  {
    value: "100%",
    label: "Defense & government sector — no exceptions",
  },
];

export default function Metrics() {
  return (
    <div className="relative border-t border-b border-[#0f0f0f] bg-black overflow-hidden">
      {/* Corner brackets */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#1e5280]/25 pointer-events-none" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#1e5280]/25 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#1e5280]/25 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#1e5280]/25 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#0f0f0f]">
          {METRICS.map((m) => (
            <div key={m.label} className="px-6 py-10 first:pl-0 last:pr-0">
              <p className="text-2xl md:text-3xl font-extralight text-white tracking-tight tabular-nums">
                {m.value}
              </p>
              <p className="mt-2 text-[10px] font-mono text-[#777] tracking-[0.14em] uppercase leading-relaxed">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
