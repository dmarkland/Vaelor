"use client";

export function TacticalGrid({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      {/* Fine coordinate grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(30,82,128,0.04) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(30,82,128,0.04) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 0%, black 0%, transparent 100%)",
        }}
      />

      {/* Larger structural grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: [
            "linear-gradient(rgba(30,82,128,0.06) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(30,82,128,0.06) 1px, transparent 1px)",
          ].join(","),
          backgroundSize: "256px 256px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)",
        }}
      />
    </div>
  );
}
