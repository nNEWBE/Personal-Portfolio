import LensDemo from "@/components/magicui/magicLenseCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AllProducts = () => {
  return (
    <div className="relative mt-10">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY PROJECTS" />
      </div>
      <LensDemo />
    </div>
  );
};

export default AllProducts;
