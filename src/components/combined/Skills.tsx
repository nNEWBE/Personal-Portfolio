import AnimatedBeamDemo from "../magicui/magicBeam";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const Skills = () => {
  return (
    <div id="Expertise" className="relative my-10">
      <div className="flex justify-center mb-10">
        <TextGenerateEffect words="MY EXPERTISE" />
      </div>
      <BackgroundBeams />
      <div>
        <div>
          <AnimatedBeamDemo />
        </div>
      </div>
    </div>
  );
};

export default Skills;
