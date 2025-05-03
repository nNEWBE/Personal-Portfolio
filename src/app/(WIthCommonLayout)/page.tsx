import About from "@/components/combined/About";
import Blog from "@/components/combined/Blog";
import Footer from "@/components/combined/Footer";
import Project from "@/components/combined/Project";
import Skills from "@/components/combined/Skills";
// import MagicCardDemo from "@/components/magicui/magicCard";
// import MarqueeDemo from "@/components/magicui/magicMarquee";
import DockDemo from "@/components/magicui/magicNavigation";
import HeroHighlightDemo from "@/components/ui/acHero";
// import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
// import { testimonials } from "@/utils";
import { ClientOnly } from "@/utils/ClientOnly";
import Link from "next/link";

export type IconProps = React.HTMLAttributes<SVGElement>;
export default function Home() {
  return (
    <div>
      <div className="fixed z-50 w-full mt-3">
        <div className="flex justify-between max-w-[97rem] mx-auto px-5 py-2">
          <Link
            href="/"
            className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md "
          >
            Shuvo.
          </Link>
          <Link
            href="/projects"
            className="sm:text-2xl text-xl  font-lobster px-3 py-2 border cursor-pointer rounded-xl backdrop-blur-md "
          >
            Projects
          </Link>
        </div>
      </div>

      <ClientOnly>
        <HeroHighlightDemo />
        {/* <AnimatedTestimonials testimonials={testimonials} /> */}
        <DockDemo />
        <About />
        {/* <MagicCardDemo /> */}
        <Skills />
        {/* <MarqueeDemo /> */}
        <Project />
        <Blog />
        <Footer />
      </ClientOnly>
    </div>
  );
}
