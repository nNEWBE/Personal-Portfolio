import AnimatedBeamDemo from "../magicui/magicBeam";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Skills = () => {
  return (
    <div id="Expertise" className="relative">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY EXPERTISE" />
      </div>
      <BackgroundBeams />
      <AnimatedBeamDemo />
    </div>
  );
};

export default Skills;
