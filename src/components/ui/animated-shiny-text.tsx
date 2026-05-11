"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  gradientColors?: string;
  gradientAnimationDuration?: number;
  className?: string;
  textClassName?: string;
}

const AnimatedText = React.forwardRef<HTMLSpanElement, AnimatedTextProps>(
  (
    {
      text,
      gradientColors = "linear-gradient(90deg, #888, #fff, #888)",
      gradientAnimationDuration = 4,
      className,
      textClassName,
      ...props
    },
    ref
  ) => {
    return (
      <span
        ref={ref}
        className={cn("block", className)}
        {...props}
      >
        <span
          className={cn("block", textClassName)}
          style={{
            background: gradientColors,
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            animation: `shimmer ${gradientAnimationDuration}s linear infinite`,
          }}
        >
          {text}
        </span>
      </span>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
