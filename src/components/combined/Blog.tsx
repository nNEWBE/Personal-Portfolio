import Link from "next/link";
import BlogsLensDemo from "../magicui/magicBlogCard";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { ShimmerButtonDemo } from "../ui/acGrid";

const Blog = () => {
  return (
    <div id="Blogs" className="relative mt-10">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY Blogs" />
      </div>
      <BlogsLensDemo />
      <Link href="/blogs" className="flex justify-center">
        <ShimmerButtonDemo text="View All" />
      </Link>
    </div>
  );
};

export default Blog;
