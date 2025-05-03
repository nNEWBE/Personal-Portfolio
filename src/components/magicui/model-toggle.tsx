"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

export const ModeToggle = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Button> & { className?: string }
>(({ className, ...props }, ref) => {
  const { theme, setTheme } = useTheme();
  const [isRotated, setIsRotated] = useState(false);
  const [pendingTheme, setPendingTheme] = useState<"light" | "dark" | null>(
    null
  );

  const handleClick = () => {
    setIsRotated(true);
    setPendingTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (!isRotated || !pendingTheme) return;

    const timer = setTimeout(() => {
      setTheme(pendingTheme);
      setIsRotated(false);
      setPendingTheme(null);
    }, 200);

    return () => clearTimeout(timer);
  }, [isRotated, pendingTheme, setTheme]);

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          ref={ref}
          variant="ghost"
          type="button"
          size="icon"
          className={cn("px-2 cursor-pointer", className)}
          aria-label="Toggle theme"
          onClick={handleClick}
          {...props}
        >
          <SunIcon
            className={cn(
              "size-[1.2rem] text-neutral-800 dark:hidden dark:text-neutral-200",
              "transition-transform duration-200",
              isRotated && "rotate-[180deg]"
            )}
          />
          <MoonIcon
            className={cn(
              "hidden size-[1.2rem] text-neutral-800 dark:block dark:text-neutral-200",
              "transition-transform duration-200",
              isRotated && "rotate-[180deg]"
            )}
          />
        </Button>
      </TooltipTrigger>
      <TooltipContent>{theme === "dark" ? "Light" : "Dark"}</TooltipContent>
    </Tooltip>
  );
});

ModeToggle.displayName = "ModeToggle";
