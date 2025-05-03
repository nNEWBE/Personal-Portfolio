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
      "An e-commerce website for browsing and purchasing a variety of products with a smooth user interface.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/As-Mart_pwlel9.png",
    technologyUsed: [nextjs, tailwind, typescript, mongodb, express],
    liveURL: "https://asmart-project.vercel.app/",
  },
  {
    id: 2,
    name: "iLuxe Shop",
    description:
      "A premium e-commerce platform featuring cart management, secure checkout, and Stripe payment integration.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/iLuxe-Shop_djmrqq.png",
    technologyUsed: [react, tailwind, typescript, mongodb, express, redux],
    liveURL: "https://iluxe-shop-frontend.vercel.app/",
  },
  {
    id: 3,
    name: "Study Mate",
    description:
      "An educational platform for submitting and reviewing assignments, designed to streamline academic workflows.",
    imageURL:
      "https://res.cloudinary.com/dorjgyfdl/image/upload/v1746268538/Study-Mate_iwztvz.png",
    technologyUsed: [react, tailwind, mongodb, express],
    liveURL: "https://study-mate-project.netlify.app/",
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
            <CardDescription>{project.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <div>
              <AvatarCircles icons={project.technologyUsed} />
            </div>
            <Link
              href={project.liveURL}
              className="text-sm font-madimi flex items-center gap-1 cursor-pointer text-gray-500"
            >
              <p>Live Preview </p>
              <BsCursorFill />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
