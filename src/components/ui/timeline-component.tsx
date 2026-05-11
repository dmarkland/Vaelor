import { cn } from "@/lib/utils";

interface TimelineEvent {
  period: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative max-w-2xl mx-auto py-12 px-4">
      {/* Vertical line */}
      <div className="absolute left-[18px] top-0 h-full w-[1px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

      <div className="space-y-10">
        {events.map((event, idx) => (
          <div key={idx} className="relative flex gap-8 items-start animate-fade-in">
            {/* Node */}
            <div className="relative z-10 mt-1 flex-shrink-0">
              <div
                className={cn(
                  "h-4 w-4 rounded-full border border-white/30",
                  "bg-black",
                  "shadow-[0_0_12px_rgba(255,255,255,0.25),0_0_24px_rgba(255,255,255,0.1)]",
                  "transition-all duration-200 hover:scale-110 hover:shadow-[0_0_16px_rgba(255,255,255,0.5)]"
                )}
              />
            </div>

            {/* Card */}
            <div
              className={cn(
                "flex-1 p-6 group cursor-default",
                "bg-black border border-white/[0.07]",
                "transition-all duration-500",
                "hover:bg-[#05080d] hover:ring-1 hover:ring-[#1e5280]/40",
                "hover:shadow-[0_0_50px_rgba(30,82,128,0.12),0_0_100px_rgba(30,82,128,0.07),inset_0_0_50px_rgba(30,82,128,0.06)]"
              )}
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#666]">
                {event.period}
              </span>
              <h3
                className="mt-2 text-lg font-extralight text-white tracking-[-0.01em] transition-all duration-300"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.15)" }}
              >
                {event.title}
              </h3>
              <p
                className="mt-2 text-sm font-light text-[#ccc] leading-relaxed group-hover:text-white transition-all duration-300"
                style={{ textShadow: "0 0 12px rgba(255,255,255,0.15)" }}
              >
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
