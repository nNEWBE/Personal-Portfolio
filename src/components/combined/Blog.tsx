import { TextGenerateEffect } from "../ui/text-generate-effect";
import SharedBackgroundCards from "../ui/mpCard";

const Blog = () => {
  return (
    <div id="Blogs" className="relative my-10">
      <div className="flex justify-center mb-10">
        <TextGenerateEffect words="MY Blogs" />
      </div>
      <SharedBackgroundCards />
    </div>
  );
};

export default Blog;
