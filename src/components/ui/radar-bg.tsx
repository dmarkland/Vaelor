"use client";

export function RadarBackground({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      {/* Coordinate grid — very subtle */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(30,82,128,0.035) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(30,82,128,0.035) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* Concentric range rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {[220, 380, 540, 700].map((size) => (
          <div
            key={size}
            className="absolute rounded-full border border-[#1e5280]/[0.08] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ width: size, height: size }}
          />
        ))}

        {/* Radar sweep — slow conic rotation */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-radar-sweep"
          style={{
            width: 700,
            height: 700,
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(30,82,128,0.10) 0deg, rgba(30,82,128,0.03) 50deg, transparent 80deg)",
          }}
        />
      </div>

      {/* Cross hairs */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#1e5280]/[0.04] -translate-x-1/2" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1e5280]/[0.04] -translate-y-1/2" />
    </div>
  );
}
