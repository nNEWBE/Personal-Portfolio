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
import nextjs from "../../assets/nextjs.svg";
import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import tailwind from "../../assets/tailwind.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";
import typescript from "../../assets/typescript.svg";
import { AvatarCircles } from "./avatar-circles";
import { BsCursorFill } from "react-icons/bs";
import Link from "next/link";

export const projects = [
  {
    id: 1,
    name: "As Mart",
    description:
      "As Mart is a feature-rich e-commerce web application designed to provide users with a seamless online shopping experience. With a modern and responsive UI, the platform supports browsing, filtering, and purchasing of products. It also integrates backend APIs for managing inventory, user accounts, and secure transactions, making it suitable for both small businesses and personal portfolio demonstrations.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/As-Mart_pwlel9.png",
    technologyUsed: [nextjs, tailwind, typescript, mongodb, express],
    technologies: ["nextjs", "tailwind", "typescript", "mongodb", "express"],
    liveURL: "https://asmart-project.vercel.app/",
    gitHubURLs: {
      frontend: "https://github.com/nNEWBE/as-mart-project/tree/main/Frontend",

      backend: "https://github.com/nNEWBE/as-mart-project/tree/main/Backend",
    },
    features: [
      "Dynamic product listings with category filtering and search functionality.",
      "Fully responsive UI using Tailwind CSS for a smooth mobile and desktop experience.",
      "Integration with backend APIs for cart, checkout, and user sessions.",
      "Server-side rendering for better SEO and faster loading times.",
      "User authentication and persistent cart management.",
    ],
    goals: [
      "Gain practical experience in building full-stack e-commerce apps.",
      "Explore integration between frontend (Next.js) and backend (Express).",
      "Improve UI/UX design with Tailwind CSS and component structuring.",
      "Implement robust routing and state management with TypeScript.",
    ],
  },
  {
    id: 2,
    name: "iLuxe Shop",
    description:
      "iLuxe Shop is a premium e-commerce platform tailored for luxury product shopping. The application emphasizes performance, user personalization, and secure payments. It features a robust cart management system, user authentication, and Stripe integration for real-time payment processing. Designed for scalability, the frontend and backend are decoupled, making it a production-ready architecture for commercial use cases.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/iLuxe-Shop_djmrqq.png",
    technologyUsed: [react, tailwind, typescript, mongodb, express, redux],
    technologies: [
      "react",
      "tailwind",
      "typescript",
      "mongodb",
      "express",
      "redux",
    ],
    liveURL: "https://iluxe-shop-frontend.vercel.app/",
    gitHubURLs: {
      frontend: "https://github.com/nNEWBE/iluxe-shop-frontend",

      backend: "https://github.com/nNEWBE/iluxe-shop-backend",
    },

    features: [
      "Advanced cart system with quantity management and persistent sessions.",
      "Secure Stripe payment gateway for real-time transactions.",
      "Redux-based state management for optimized performance and global state sync.",
      "Fully responsive and accessible UI with consistent branding.",
      "User account dashboard with order history and profile management.",
    ],
    goals: [
      "Build a commercial-grade e-commerce experience with secure payment flows.",
      "Learn to manage global state with Redux and asynchronous actions.",
      "Practice frontend-backend integration with protected API routes.",
      "Deliver a polished, luxury-focused UI with Tailwind CSS.",
    ],
  },
  {
    id: 3,
    name: "Study Mate",
    description:
      "Study Mate is an educational web platform created to enhance academic productivity by enabling students and educators to exchange, submit, and review assignments. With a simple and intuitive interface, users can manage submissions, provide feedback, and track deadlines. The app focuses on collaboration and transparency, fostering a digital classroom environment for modern learning.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/Study-Mate_iwztvz.png",
    technologyUsed: [react, tailwind, mongodb, express],
    technologies: ["react", "tailwind", "mongodb", "express"],
    liveURL: "https://study-mate-project.netlify.app/",
    gitHubURLs: {
      frontend: "https://github.com/nNEWBE/study-mate-client",

      backend: "https://github.com/nNEWBE/study-mate-server",
    },

    features: [
      "Assignment submission with file upload and validation.",
      "Instructor dashboard for reviewing and grading assignments.",
      "Student dashboard to view due dates, feedback, and progress.",
      "Responsive layout optimized for both students and teachers.",
      "Secure backend with user roles and access control.",
    ],
    goals: [
      "Address real-world use cases in academic collaboration tools.",
      "Design role-based user flows with secure backend validation.",
      "Enhance experience with file handling and user interaction tracking.",
      "Experiment with backend logic for feedback loops and grading workflows.",
    ],
  },
];

export default function LensDemo() {
  return (
    <div
      id="Projects"
      className="grid grid-cols-1 sm:mx-10 mx-3 gap-5 my-10 sm:grid-cols-2 md:grid-cols-3"
    >
      {projects.map((project: any) => (
        <Card
          key={project.id}
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
                src={project.imageURL}
                alt="image placeholder"
                width={500}
                height={500}
              />
            </Lens>
          </CardHeader>
          <CardContent>
            <CardTitle className="text-2xl">{project.name}</CardTitle>
            <CardDescription>
              {project.description.length > 100
                ? project.description.slice(0, 100) + "..."
                : project.description}
            </CardDescription>
          </CardContent>
          <CardFooter>
            <div>
              <AvatarCircles icons={project.technologyUsed} />
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="text-sm font-madimi sm:mt-0 mt-2 flex items-center gap-1 cursor-pointer text-gray-500"
            >
              <p>View Details</p>
              <BsCursorFill />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
