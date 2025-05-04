import Link from "next/link";
import LensDemo from "../magicui/magicLenseCard";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ShimmerButtonDemo } from "../ui/acGrid";

const Project = () => {
  return (
    <div id="Projects" className="relative my-10">
      <div className="flex justify-center mb-20">
        <TextGenerateEffect words="MY PROJECTS" />
      </div>
      <LensDemo />
      <Link href="/projects" className="flex justify-center">
        <ShimmerButtonDemo text="View All" />
      </Link>
    </div>
  );
};

export default Project;
