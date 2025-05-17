import { cn } from "@/lib/utils";
import React from "react";

type MarqueeProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  reverse?: boolean;
  vertical?: boolean;
  className?: string;
};

export const Marquee = ({
  children,
  direction = "left",
  pauseOnHover = false,
  reverse = false,
  vertical = false,
  className,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "group flex overflow-hidden [--duration:40s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--play-state:running] [animation:scroll_var(--duration)_linear_infinite]",
          vertical ? "flex-col" : "flex-row",
          pauseOnHover && "group-hover:[--play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [--play-state:running] [animation:scroll_var(--duration)_linear_infinite]",
          vertical ? "flex-col" : "flex-row",
          pauseOnHover && "group-hover:[--play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
      >
        {children}
        {children}
      </div>

      <style>
        {`
          @keyframes scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(calc(-100% - var(--gap)));
            }
          }
        `}
      </style>
    </div>
  );
}; 