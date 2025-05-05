import Link from "next/link";
import LensDemo from "../magicui/magicLenseCard";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ShimmerButtonDemo } from "../ui/acGrid";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div id="Projects" className="relative my-10">
      <div className="flex justify-center mb-20">
        <TextGenerateEffect words="MY PROJECTS" />
      </div>
      <LensDemo />
      <Link href="/projects" className="flex justify-center">
        <ShimmerButtonDemo text="View All">
          <FaExternalLinkSquareAlt className="dark:text-neutral-400 inline text-black ml-2" />
        </ShimmerButtonDemo>
      </Link>
    </div>
  );
};

export default Project;
