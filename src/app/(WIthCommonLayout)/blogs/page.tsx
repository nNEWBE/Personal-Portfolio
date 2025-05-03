import BlogsLensDemo from "@/components/magicui/magicBlogCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AllBlogs = () => {
  return (
    <div className="relative mt-10">
      <div className="flex justify-center">
        <TextGenerateEffect words="MY Blogs" />
      </div>
      <BlogsLensDemo />
    </div>
  );
};

export default AllBlogs;
