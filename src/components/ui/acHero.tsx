"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import SparklesTextDemo from "../magicui/magicSparklesText";
import AnimatedShinyTextDemo from "../magicui/magicShinyText";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight containerClassName="relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: [20, -5, 0] }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
        className="text-center font-extrabold font-poppins leading-snug text-neutral-700 dark:text-white px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl max-w-4xl mx-auto relative z-10"
      >
        <SparklesTextDemo text="Hi, I'm Shuvo" />
      </motion.h1>

      <div className="mt-6 sm:mt-8 px-4 sm:px-6 md:px-8 text-center mx-auto font-poppins text-xs sm:text-lg lg:text-lg max-w-lg sm:max-w-3xl relative z-10">
        I&apos;m passionate about building modern web applications using
        <Highlight className="mx-1 text-black dark:text-white text-nowrap">
          TypeScript, Next.js
        </Highlight>
        React, Redux, Node.js, Tailwind, Express, MongoDB.
        <AnimatedShinyTextDemo text="Explore Now!" />
      </div>
    </HeroHighlight>
  );
}
