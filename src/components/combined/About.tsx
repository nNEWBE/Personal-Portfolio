import GlowingEffectDemoSecond from "../ui/acGrid";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const About = () => {
  return (
    <div id="About" className="relative">
      <div className="flex justify-center">
        <TextGenerateEffect words="ABOUT ME" />
      </div>
      <GlowingEffectDemoSecond />
    </div>
  );
};

export default About;
