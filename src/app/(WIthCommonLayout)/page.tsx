import About from "@/components/combined/About";
import Blog from "@/components/combined/Blog";
import Project from "@/components/combined/Project";
import Skills from "@/components/combined/Skills";
import HeroHighlightDemo from "@/components/ui/acHero";
import { ClientOnly } from "@/utils/ClientOnly";

export type IconProps = React.HTMLAttributes<SVGElement>;
export default function Home() {
  return (
    <div>
      <ClientOnly>
        <HeroHighlightDemo />
        <About />
        <Skills />
        <Project />
        <Blog />
      </ClientOnly>
    </div>
  );
}
