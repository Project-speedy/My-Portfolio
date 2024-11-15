import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  githubUrl: string;
}

const ProjectCard = ({ src, title, description, githubUrl }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]" style={{ textDecoration: 'none', zIndex: 100 }}>
      <div className="relative w-full h-[300px]"> {/* Set fixed height for image */}
        <Image
          src={src}
          alt={title}
          layout="fill" // Automatically fills the container
          objectFit="cover" // Ensures the image covers the container area
          className="rounded-t-lg"
        />
      </div>

      <div className="relative p-4">
      <h1 className="text-2xl font-semibold text-white">
        <a
            href="https://github.com/AnushaSingh12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center mt-4 cursor-pointer hover:text-blue-400 transition-colors duration-327 ease-in-out"
            style={{ textDecoration: 'none', zIndex: 100 }}
          >{
            title}
            </a>
          </h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;



