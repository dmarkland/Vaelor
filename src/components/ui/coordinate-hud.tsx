"use client";

import { useState, useEffect } from "react";

function fmt(d: Date) {
  return d.toUTCString().slice(17, 25) + "Z";
}

export function CoordinateHUD() {
  const [time, setTime] = useState<string | null>(null);
  const [latDrift, setLatDrift] = useState(0);
  const [lonDrift, setLonDrift] = useState(0);

  useEffect(() => {
    setTime(fmt(new Date()));
    const clock = setInterval(() => setTime(fmt(new Date())), 1000);
    const drift = setInterval(() => {
      setLatDrift((p) => p + (Math.random() - 0.5) * 0.0003);
      setLonDrift((p) => p + (Math.random() - 0.5) * 0.0003);
    }, 3500);
    return () => {
      clearInterval(clock);
      clearInterval(drift);
    };
  }, []);

  if (!time) return null;

  const lat = (38.8951 + latDrift).toFixed(4);
  const lon = (77.0364 + lonDrift).toFixed(4);

  return (
    <>
      {/* Top-left telemetry */}
      <div className="absolute top-20 left-6 font-mono text-[8px] text-[#1e5280]/55 tracking-[0.14em] leading-[2] pointer-events-none select-none hidden md:block">
        <div>LAT {lat}° N</div>
        <div>LON {lon}° W</div>
        <div>ALT 243m MSL</div>
      </div>

      {/* Top-right status */}
      <div className="absolute top-20 right-6 font-mono text-[8px] text-[#1e5280]/55 tracking-[0.14em] leading-[2] text-right pointer-events-none select-none hidden md:block">
        <div>UTC {time}</div>
        <div>SYS NOMINAL</div>
        <div>LINK SECURE</div>
      </div>

      {/* Bottom-left signature */}
      <div className="absolute bottom-20 left-6 font-mono text-[7px] text-[#1e5280]/30 tracking-[0.18em] pointer-events-none select-none hidden md:block">
        VAELOR // DIGITAL INFRASTRUCTURE
      </div>

      {/* Bottom-right encryption */}
      <div className="absolute bottom-20 right-6 font-mono text-[7px] text-[#1e5280]/30 tracking-[0.18em] text-right pointer-events-none select-none hidden md:block">
        AES-256 // CHANNEL SECURE
      </div>
    </>
  );
}
