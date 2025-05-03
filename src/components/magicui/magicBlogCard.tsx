/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import Image from "next/image";
import { BsCursorFill } from "react-icons/bs";
// import { AvatarCircles } from "./avatar-circles";
// import { BsCursorFill } from "react-icons/bs";
// import Link from "next/link";

export const blogs = [
  {
    id: 1,
    title: "Mastering React in 2025",
    description:
      "React continues to be one of the most powerful and flexible libraries for building dynamic user interfaces in 2025. With the introduction of new hooks, better server-side rendering support, and streamlined developer tooling, React is more efficient than ever. This blog covers everything from setting up your first project to optimizing performance in large-scale applications. Whether you're a beginner or looking to sharpen your skills, this comprehensive guide will walk you through state management, component design patterns, and integrating React with modern backends like Firebase and GraphQL.",
    imageURL:
      "https://th.bing.com/th/id/OIP.IT6jOagfJGpgJdgPvG46RQHaEO?rs=1&pid=ImgDetMain",
  },
  {
    id: 2,
    title: "Why Tailwind CSS Is Dominating Modern UI Design",
    description:
      "Tailwind CSS has rapidly become the go-to utility-first framework for front-end developers seeking speed and consistency. Its approach eliminates the need for writing custom CSS by providing low-level utility classes that allow rapid UI development with full control. In this article, we'll explore why Tailwind CSS is considered a game changer in 2025, how it integrates seamlessly with tools like React and Next.js, and how it enhances design systems for teams. Learn how Tailwind promotes scalability, reduces CSS bloat, and offers an intuitive developer experience for crafting beautiful, responsive UIs.",
    imageURL:
      "https://hackernoon.imgix.net/images/HT6CQZaJUrNuIT41gYj8XNtrJAz2-4nb3iy9.webp",
  },
  {
    id: 3,
    title: "Top 10 VS Code Extensions for Developers",
    description:
      "Visual Studio Code remains the most popular code editor for developers worldwide, thanks to its rich ecosystem of extensions. In this article, we highlight the top 10 VS Code extensions that every developer should install in 2025. From tools that streamline Git workflows and improve JavaScript debugging to AI-assisted coding with extensions like GitHub Copilot, we cover how each extension can boost your productivity. Whether you're working in web development, DevOps, or data science, these extensions are curated to help you write cleaner code, faster—while enhancing your overall development workflow.",
    imageURL:
      "https://codedamn-blog.s3.amazonaws.com/wp-content/uploads/2022/12/23011134/Minimalist-Beige-Cream-Brand-Proposal-Presentation-1.jpg",
  },
];

export default function BlogsLensDemo() {
  return (
    <div
      id="Projects"
      className="grid grid-cols-1 sm:mx-10 mx-3 gap-5 my-10 sm:grid-cols-2 md:grid-cols-3"
    >
      {blogs.map((blog: any) => (
        <Card
          key={blog.id}
          className="relative font-poppins max-w-md shadow-none"
        >
          <CardHeader>
            <Lens
              zoomFactor={2}
              lensSize={150}
              isStatic={false}
              ariaLabel="Zoom Area"
            >
              <Image
                src={blog.imageURL}
                alt="image placeholder"
                width={500}
                height={500}
                className="object-cover h-40 w-full"
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{blog.title}</CardTitle>
            <CardDescription>
              {blog.description.length > 100
                ? blog.description.slice(0, 100) + "..."
                : blog.description}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div>{/* <AvatarCircles icons={project.technologyUsed} /> */}</div>
            <a
              href=""
              className="text-sm font-madimi flex items-center gap-1 cursor-pointer text-gray-500"
            >
              <p>View Details </p>
              <BsCursorFill />
            </a>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
