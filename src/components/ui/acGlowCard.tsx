"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import profile from "../../assets/Github DP.jpg";

export default function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] overflow-hidden size-40 max-w-sm bg-white dark:bg-zinc-900">
        <Image
          src={profile}
          className="size-40 object-cover"
          alt="profile"
          width={160}
          height={160}
        />
      </BackgroundGradient>
    </div>
  );
}
