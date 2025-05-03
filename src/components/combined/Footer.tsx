import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { GridPatternLinearGradient } from "../magicui/magicGrid";
import { Highlight } from "../ui/hero-highlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ShimmerButtonDemo } from "../ui/acGrid";
import type { IconType } from "react-icons";
import BackgroundGradientDemo from "../ui/acGlowCard";

type FooterLink = {
  name: string;
  href: string;
  icon?: IconType;
  isButton?: boolean;
};

const footerLinks: FooterLink[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/shuvo.chandra.3745",
    icon: FaFacebookSquare,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shuvochandra/",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/nNEWBE",
    icon: FaGithub,
  },
  {
    name: "Resume",
    href: "https://docs.google.com/document/d/1TCgrx0fquB7OzCsnyUaDgI5En3QBQY2BBKTbIOVFvHg/edit?usp=sharing",
    isButton: true,
  },
];

const Footer = () => {
  return (
    <div className="relative mt-10 lg:h-[26rem] sm:h-[40rem] h-[44rem]">
      <GridPatternLinearGradient />
      <div className="absolute top-16 w-full">
        <div className="relative z-10 mx-4 flex flex-col items-center justify-center gap-12 lg:gap-32 text-center lg:mx-10 lg:flex-row lg:items-center lg:justify-center lg:text-left">
          {/* Left: Message + Resume */}
          <div className="max-w-xl">
            <TextGenerateEffect words="THANKS FOR VISITING" />
            <p className="mt-4 text-xs sm:text-lg">
              Crafted with passion to showcase my skills, projects, and journey
              as a
              <Highlight className="mx-1 text-black dark:text-white text-nowrap">
                Full Stack Developer
              </Highlight>
            </p>
            <div className="mt-8 flex justify-center gap-3 lg:justify-start">
              {footerLinks
                .filter((link) => link.isButton)
                .map((link, index) => (
                  <a
                    key={index}
                    target="_blank"
                    href={link.href}
                    rel="noopener noreferrer"
                  >
                    <ShimmerButtonDemo text="Resume" />
                  </a>
                ))}
            </div>
          </div>

          {/* Right: Glow card + icons below */}
          <div className="flex flex-col items-center justify-center gap-4">
            <BackgroundGradientDemo />
            <div className="flex gap-5">
              {footerLinks
                .filter((link) => link.icon)
                .map((link, index) => {
                  const Icon = link.icon;
                  return (
                    Icon && (
                      <a
                        key={index}
                        target="_blank"
                        href={link.href}
                        rel="noopener noreferrer"
                        className="w-fit cursor-pointer rounded-lg border border-gray-600 p-2"
                      >
                        <Icon className="h-5 w-5 text-black dark:text-neutral-400" />
                      </a>
                    )
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="py-5 text-center font-poppins text-neutral-400 text-xs sm:text-base">
          &copy; {new Date().getFullYear()} Shuvo Chandra Deb Nath. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
