"use client";

import type React from "react";
import { Box, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import profile from "../../assets/Github DP.jpg";
import {
  FaExternalLinkSquareAlt,
  FaFacebookSquare,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function ShimmerButtonDemo({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <ShimmerButton className="shadow-2xl">
      <span className="whitespace-pre-wrap font-poppins text-center text-sm font-medium leading-none tracking-tight dark:to-slate-900/10">
        {text}
        {children}
      </span>
    </ShimmerButton>
  );
}

export default function GlowingEffectDemoSecond() {
  return (
    <div className="flex flex-col justify-center py-10">
      <ul className="grid grid-cols-1 sm:mx-10 mx-3 gap-3 sm:gap-4 sms:grid-cols-12 xl:grid-rows-2">
        <GridItem
          area="sms:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/4]"
          icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Full-Stack Development"
          description="Skilled in building end-to-end applications using TypeScript, Mongoose, Express.js, and React."
        />
        <GridItem
          area="sms:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/4]"
          icon={
            <Settings className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="English Communication"
          description="Fluent in both written and verbal English with strong professional communication skills."
        />
        <GridItemForProfile
          area="sms:[grid-area:3/1/4/13] xl:[grid-area:1/4/3/9]"
          icon={
            <Image
              src={profile}
              alt="profile"
              className="h-16 w-16 md:h-20 md:w-20 object-cover rounded-lg border border-gray-600"
            />
          }
          title="Advancing Full-Stack Expertise"
          description="Over the past year, I've developed a strong foundation in the MERN stack and gained hands-on experience building dynamic, scalable applications. Looking ahead, my goal is to deepen my expertise by mastering modern technologies such as PostgreSQL, Prisma, GraphQL, Docker, and AWS. These tools will enable me to develop secure, high-performance solutions that address complex, real-world challenges. I am committed to continuous learning and staying current with emerging industry trends to broaden my capabilities and adaptability. Over the next 2 to 4 years, I aim to grow into a senior software developer role equipped with a comprehensive technical skill set and the leadership qualities necessary to drive projects from conception to completion with confidence and clarity."
        />
        <GridItem
          area="sms:[grid-area:2/7/3/13] xl:[grid-area:1/9/2/13]"
          icon={
            <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />
          }
          title="Modern Front-End"
          description="Experienced in React, Next.js, Tailwind CSS, and Redux for building responsive, modern interfaces."
        />
        <GridItem
          area="sms:[grid-area:2/1/3/7] xl:[grid-area:2/9/3/13]"
          icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Continuous Growth"
          description="Actively expanding expertise in PostgreSQL, Prisma, GraphQL, and Docker to stay ahead in tech trends."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 font-poppins relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-2 md:gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="-tracking-4 pt-0.5 text-base font-semibold text-balance text-black md:text-xl dark:text-white">
                {title}
              </h3>
              <h2 className="text-xs text-black md:text-sm dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const GridItemForProfile = ({
  area,
  icon,
  title,
  description,
}: GridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 font-poppins relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between gap-2 md:gap-3">
            <div className="flex gap-3 items-end">
              <div>{icon}</div>
              <div>
                <h2 className="-tracking-4 mb-1 pt-0.5 text-base font-semibold text-balance text-black md:text-2xl dark:text-white">
                  Shuvo Chandra Deb Nath
                </h2>
                <p className="text-xs text-black md:text-sm dark:text-neutral-400">
                  shuvochandra999@gmail.com
                </p>
              </div>
            </div>
            <div className="space-y-2 md:space-y-3">
              <h3 className="-tracking-4 pt-0.5 text-base font-semibold text-balance text-black md:text-xl dark:text-white">
                {title}
              </h3>
              <h2 className="text-xs text-black md:text-sm dark:text-neutral-400">
                {description}
              </h2>
              <div className="flex gap-2 items-center">
                <a
                  target="_blank"
                  href="https://www.facebook.com/shuvo.chandra.3745"
                  className="w-fit cursor-pointer rounded-lg border border-gray-600 p-2"
                >
                  <FaFacebookSquare className="h-4 w-4 text-black dark:text-neutral-400" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/shuvochandra/"
                  className="w-fit cursor-pointer rounded-lg border border-gray-600 p-2"
                >
                  <FaLinkedin className="h-4 w-4 text-black dark:text-neutral-400" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/nNEWBE"
                  className="w-fit cursor-pointer rounded-lg border border-gray-600 p-2"
                >
                  <FaGithub className="h-4 w-4 text-black dark:text-neutral-400" />
                </a>
                <a href="https://docs.google.com/document/d/1TCgrx0fquB7OzCsnyUaDgI5En3QBQY2BBKTbIOVFvHg/edit?usp=sharing">
                  <ShimmerButtonDemo text="Resume">
                    <FaExternalLinkSquareAlt className="dark:text-neutral-400 inline text-black ml-2" />
                  </ShimmerButtonDemo>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
