import GlowingEffectDemoSecond from "../ui/acGrid";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const About = () => {
  return (
    <div id="About" className="relative my-10">
      <div className="flex justify-center mb-10">
        <TextGenerateEffect words="ABOUT ME" />
      </div>
      <GlowingEffectDemoSecond />
    </div>
  );
};

export default About;
