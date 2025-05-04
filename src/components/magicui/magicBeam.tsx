"use client";

import type React from "react";
import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";
import nextjs from "../../assets/nextjs.svg";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import express from "../../assets/express.svg";
import mongodb from "../../assets/mongodb.svg";
import mongoose from "../../assets/mongoose.svg";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux.svg";
import typescript from "../../assets/typescript.svg";
import dp from "../../assets/Github DP.jpg";
import Image, { StaticImageData } from "next/image";

// Circle component
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children: StaticImageData }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 md:size-20 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      <Image
        src={children}
        alt="icon"
        className="size-full object-cover rounded-full"
      />
    </div>
  );
});

Circle.displayName = "Circle";

// Main component
export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null); // profile
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] flex items-center justify-center"
    >
      <div ref={div4Ref} className="absolute z-20">
        <Circle className="size-28 md:size-32">{Icons.profile}</Circle>
      </div>

      <div className="absolute top-5 left-1/2 -translate-x-1/2 z-20">
        <Circle ref={div1Ref}>{Icons.nextjs}</Circle>
      </div>

      <div className="absolute top-1/4 md:left-32 left-5 sm:left-10 z-20">
        <Circle ref={div2Ref}>{Icons.redux}</Circle>
      </div>

      <div className="absolute bottom-10 md:left-1/4 sm:left-20 left-7 z-20">
        <Circle ref={div3Ref}>{Icons.mongoose}</Circle>
      </div>

      <div className="absolute top-1/4 md:right-32 right-5 sm:right-10 z-20">
        <Circle ref={div5Ref}>{Icons.react}</Circle>
      </div>

      <div className="absolute bottom-10 md:right-1/4 sm:right-20 right-7 z-20">
        <Circle ref={div6Ref}>{Icons.mongodb}</Circle>
      </div>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <Circle ref={div7Ref}>{Icons.express}</Circle>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div4Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div4Ref}
        reverse
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        reverse
      />
    </div>
  );
}

// Icon assets
const Icons = {
  nextjs: nextjs,
  typescript: typescript,
  react: react,
  express: express,
  node: node,
  mongodb: mongodb,
  mongoose: mongoose,
  redux: redux,
  tailwind: tailwind,
  profile: dp,
};
