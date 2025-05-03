"use client";
import { cn } from "@/lib/utils";
import { useMotionValue, motion, useMotionTemplate } from "motion/react";
import Image from "next/image";
import nextjs from "../../assets/nextjs.svg";
import react from "../../assets/react.svg";
import node from "../../assets/node.svg";
import mongodb from "../../assets/mongodb.svg";
import mongoose from "../../assets/mongoose.svg";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux.svg";
import typescript from "../../assets/typescript.svg";
import React from "react";

export const HeroHighlight = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotPatterns = {
    light: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23d4d4d4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%236366f1' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
    dark: {
      default: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%23404040' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
      hover: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238183f4' id='pattern-circle' cx='10' cy='10' r='2.5'%3E%3C/circle%3E%3C/svg%3E")`,
    },
  };

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    if (!currentTarget) return;
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative flex h-screen w-full items-center justify-center bg-white dark:bg-[#09090b]",
        containerClassName
      )}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* React */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="absolute top-[17%] sm:top-[15%] sm:left-24 md:left-32 left-10"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #61DAFB" }}
          >
            <Image
              src={react}
              alt="react"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>

        {/* Node.js */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute top-[35%] left-10 hidden md:block"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #3C873A" }}
          >
            <Image src={node} alt="node.js" className="w-12 h-12" />
          </div>
        </motion.div>

        {/* Mongoose */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-[55%] left-10 hidden lg:block"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #800000" }}
          >
            <Image
              src={mongoose}
              alt="mongoose"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>
        {/* TypeScript */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-[75%] sm:left-24 md:left-32 left-10 "
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #3178C6" }}
          >
            <Image
              src={typescript}
              alt="typescript"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>
        {/* Tailwind */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute top-[17%] sm:top-[15%] sm:right-24 md:right-32 right-10"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #38BDF8" }}
          >
            <Image
              src={tailwind}
              alt="tailwind"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>
        {/* Redux */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          className="absolute top-[35%] right-10 hidden md:block"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #764ABC" }}
          >
            <Image src={redux} alt="redux" className="w-12 h-12" />
          </div>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute top-[55%] right-10 hidden lg:block"
        >
          <div
            className="p-2 rounded-full"
            style={{ boxShadow: "0 0 15px #47A248" }}
          >
            <Image
              src={mongodb}
              alt="mongodb"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>

        {/* Next.js */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[75%] sm:right-24 md:right-32 right-10"
        >
          <div
            className="p-2 rounded-full bg-white"
            style={{ boxShadow: "0 0 15px #FFFFFF" }}
          >
            <Image
              src={nextjs}
              alt="nextjs"
              className="sm:w-12 sm:h-12 w-9 h-9"
            />
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.default,
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 hidden dark:block"
        style={{
          backgroundImage: dotPatterns.dark.default,
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at center, black 0%, transparent 100%)",
        }}
      />

      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 dark:hidden"
        style={{
          backgroundImage: dotPatterns.light.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />
      <motion.div
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 dark:block"
        style={{
          backgroundImage: dotPatterns.dark.hover,
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              200px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
        }}
      />

      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 2,
        ease: "linear",
        delay: 0.5,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
      }}
      className={cn(
        `relative text-xs sm:text-xl w-fit rounded-lg bg-gradient-to-r from-[#ffaa40] to-[#9c40ff] px-1 pb-1 dark:from-[#ffaa40] dark:to-[#9c40ff]`,
        className
      )}
    >
      {children}
    </motion.span>
  );
};
