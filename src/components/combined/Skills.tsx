import AnimatedBeamDemo from "../magicui/magicBeam";
// import MarqueeDemo from "../magicui/magicMarquee";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Skills = () => {
  return (
    <div id="Expertise" className="relative">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY EXPERTISE" />
      </div>
      <BackgroundBeams />
      <div className="felx gap-10 items-center justify-between">
        <AnimatedBeamDemo />
        {/* <MarqueeDemo /> */}
      </div>
    </div>
  );
};

export default Skills;
