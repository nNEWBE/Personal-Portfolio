import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ShimmerButtonDemo } from "../ui/acGrid";
import SharedBackgroundCards from "../ui/mpCard";

const Blog = () => {
  return (
    <div id="Blogs" className="relative mt-10">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY Blogs" />
      </div>
      <SharedBackgroundCards />
      <Link href="/blogs" className="flex justify-center">
        <ShimmerButtonDemo text="View All" />
      </Link>
    </div>
  );
};

export default Blog;
