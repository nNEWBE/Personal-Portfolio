"use client";

import { cn } from "@/lib/utils";
import { GridPattern } from "./grid-pattern";

export function GridPatternLinearGradient() {
  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20">
      <GridPattern
        width={70}
        height={70}
        x={0}
        y={0}
        className={cn(
          "[mask-image:radial-gradient(circle,white,transparent)]",
          "absolute inset-0"
        )}
      />
    </div>
  );
}
