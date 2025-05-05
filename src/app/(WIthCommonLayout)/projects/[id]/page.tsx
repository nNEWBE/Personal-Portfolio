"use client";

import { projects } from "@/components/magicui/magicLenseCard";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useParams } from "next/navigation";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { ShimmerButtonDemo } from "@/components/ui/acGrid";
import { FaExternalLinkSquareAlt, FaGithub } from "react-icons/fa";

const GetSingleProject = () => {
  const params = useParams();
  const { id } = params;
  const project = projects.find((project) => {
    console.log("🚀 ~ GetSingleProject ~ project:", project);
    return project.id === Number(id);
  });
  if (!project) {
    return <div className="text-center mt-20">Project not found.</div>;
  }

  return (
    <div className="max-w-6xl font-poppins mx-auto px-4 py-12">
      {/* Project Title */}
      <div className="flex justify-center mb-10">
        <TextGenerateEffect words={project?.name} />
      </div>

      {/* Project Image */}
      <div className="rounded-xl overflow-hidden shadow-md mb-10">
        <Image
          src={project?.imageURL}
          alt={`${project?.name} Screenshot`}
          width={1200}
          height={675}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Project Description */}
      <p className="sm:text-lg text-sm  leading-relaxed mb-8">
        {project?.description}
      </p>

      {/* Technology Stack */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project?.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 border rounded-[5px] text-white-100 border-slate-600 text-[13px]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project?.features && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  style={{ width: "20px", height: "20px", minWidth: "20px" }}
                  className="text-blue-600 mt-1"
                />
                <span className="sm:text-base text-xs">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Goals Section */}
      {project?.goals && (
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Project Goals & Reflections
          </h2>
          <ul className="space-y-3">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle
                  className="text-blue-600 mt-1"
                  style={{ width: "20px", height: "20px", minWidth: "20px" }}
                />
                <span className="sm:text-base text-xs">{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Live Project Link */}
      <div className="flex items-center gap-2 flex-wrap">
        {project?.liveURL && (
          <div>
            <a href={project.liveURL} target="_blank">
              <ShimmerButtonDemo text="Live Site">
                <FaExternalLinkSquareAlt className="dark:text-neutral-400 inline text-black ml-2" />
              </ShimmerButtonDemo>
            </a>
          </div>
        )}
        {project?.gitHubURLs && (
          <div className="flex gap-2 flex-wrap">
            {project.gitHubURLs.frontend && (
              <a
                href={project.gitHubURLs.frontend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButtonDemo text="Frontend">
                  <FaGithub className="inline text-black dark:text-neutral-400 ml-2" />
                </ShimmerButtonDemo>
              </a>
            )}
            {project.gitHubURLs.backend && (
              <a
                href={project.gitHubURLs.backend}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ShimmerButtonDemo text="Backend">
                  <FaGithub className="inline text-black dark:text-neutral-400 ml-2" />
                </ShimmerButtonDemo>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetSingleProject;
