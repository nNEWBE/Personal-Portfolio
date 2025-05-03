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

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children: StaticImageData }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 sm:size-14 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex h-[350px] w-full items-center justify-center overflow-hidden p-10"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[300px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>{Icons.nextjs}</Circle>
          <Circle ref={div5Ref}>{Icons.react}</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>{Icons.redux}</Circle>
          <Circle ref={div4Ref} className="sm:size-24 size-16">
            {Icons.profile}
          </Circle>
          <Circle ref={div6Ref}>{Icons.mongodb}</Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>{Icons.mongoose}</Circle>
          <Circle ref={div7Ref}>{Icons.express}</Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
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
        curvature={75}
        endYOffset={10}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
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
        curvature={75}
        endYOffset={10}
        reverse
      />
    </div>
  );
}

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
