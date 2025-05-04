"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Lens } from "../magicui/lens";
import { BsCursorFill } from "react-icons/bs";
import { blogs } from "@/utils";

export default function SharedBackgroundCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [bgStyle, setBgStyle] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    opacity: 0,
  });

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const container = containerRef.current;
    if (!card || !container) return;

    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setBgStyle({
      top: cardRect.top - containerRect.top + 2.5,
      left: cardRect.left - containerRect.left + 2.5,
      width: cardRect.width - 5,
      height: cardRect.height - 5,
      opacity: 1,
    });
  };

  const handleLeave = () => {
    setBgStyle((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-1 sm:mx-10 mx-3 sms:grid-cols-2 sml:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 py-10"
    >
      <motion.div
        className="absolute z-0 rounded-2xl bg-zinc-100 dark:bg-slate-800/[0.8] shadow-xl border border-zinc-300/40 dark:border-zinc-600/30 backdrop-blur-md"
        animate={bgStyle}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.5,
          bounce: 0.25,
        }}
        layoutId="hoverBackground"
        style={{ scale: 1.02 }}
      />

      {blogs.map((blog) => (
        <div
          key={blog.id}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="relative z-10 cursor-pointer bg-white p-2 transition duration-300 dark:bg-transparent"
        >
          <Card
            key={blog.id}
            className="relative gap-3 font-poppins shadow-none"
          >
            <CardHeader>
              <Lens
                zoomFactor={2}
                lensSize={150}
                isStatic={false}
                ariaLabel="Zoom Area"
              >
                <Image
                  src={blog.imageURL}
                  alt="image placeholder"
                  width={500}
                  height={500}
                  className="object-cover h-40 w-full"
                />
              </Lens>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className="text-xl">{blog.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <div></div>
              <a className="text-sm font-madimi flex items-center gap-1 cursor-pointer text-gray-500">
                <p>View Details </p>
                <BsCursorFill />
              </a>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}
