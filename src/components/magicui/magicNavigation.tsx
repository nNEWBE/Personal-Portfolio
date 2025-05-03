"use client";

import { useEffect, useState } from "react";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MdOutlinePerson } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./dock";
import { ModeToggle } from "./model-toggle";
import { GoProjectRoadmap } from "react-icons/go";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [{ href: "#Home", icon: HomeIcon, label: "Home" }],
  contact: {
    social: {
      About: {
        name: "About",
        url: "#About",
        icon: MdOutlinePerson,
      },
      Expertise: {
        name: "Expertise",
        url: "#Expertise",
        icon: RiStackLine,
      },
      Projects: {
        name: "Projects",
        url: "#Projects",
        icon: GoProjectRoadmap,
      },
    },
  },
};

export default function DockDemo() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setVisible(true);
      } else {
        // Scrolling up
        setVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={cn(
        "transition-all duration-500 flex flex-col fixed w-full z-50 bottom-5 items-center justify-center",
        visible ? "translate-y-0" : "translate-y-20 pointer-events-none"
      )}
    >
      <TooltipProvider>
        <Dock direction="middle">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full py-2" />
          <DockIcon>
            <ModeToggle className="rounded-full" />
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
}
