import Skills from "@/components/combined/Skills";
import MagicCardDemo from "@/components/magicui/magicCard";
import MarqueeDemo from "@/components/magicui/magicMarquee";
import DockDemo from "@/components/magicui/magicNavigation";
import GlowingEffectDemoSecond from "@/components/ui/acGrid";
import HeroHighlightDemo from "@/components/ui/acHero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/utils";
import { ClientOnly } from "@/utils/ClientOnly";

export type IconProps = React.HTMLAttributes<SVGElement>;
export default function Home() {
  return (
    <div className="h-[500vh]">
      <div className="fixed z-50 w-full mt-3">
        <div className="flex justify-between max-w-[97rem] mx-auto px-5 py-2">
          <h1 className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md ">
            Shuvo.
          </h1>
          <h1 className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md ">
            Projects
          </h1>
        </div>
      </div>

      <ClientOnly>
        <HeroHighlightDemo />
        <AnimatedTestimonials testimonials={testimonials} />
        <DockDemo />
        <MagicCardDemo />
        <Skills />
        <GlowingEffectDemoSecond />
        <MarqueeDemo />
      </ClientOnly>
    </div>
  );
}
