"use client";

import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

interface AvatarCirclesProps {
  icons: StaticImageData[];
  className?: string;
}

export const AvatarCircles = ({ icons, className }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {icons.map((url, index) => (
        <Image
          key={index}
          className="h-10 w-10 rounded-full border-2 p-2 bg-white dark:border-gray-800"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
    </div>
  );
};
