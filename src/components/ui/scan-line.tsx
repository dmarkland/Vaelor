"use client";

export function ScanLine({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className ?? ""}`}
      aria-hidden
    >
      <div
        className="absolute inset-x-0 h-px animate-scan-line"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30,82,128,0.0) 10%, rgba(30,82,128,0.5) 30%, rgba(30,82,128,0.7) 50%, rgba(30,82,128,0.5) 70%, rgba(30,82,128,0.0) 90%, transparent 100%)",
        }}
      />
    </div>
  );
}
