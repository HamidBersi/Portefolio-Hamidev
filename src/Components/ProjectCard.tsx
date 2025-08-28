import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
}

const ProjectCard = ({
  title,
  image,
  technologies,
  github,
  demo,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-6 rounded-lg shadow-md border border-gray-200 gap-5 my-6x">
      <h2 className="font-bold text-xl text-gray-900 mb-2">{title}</h2>
      <img src={image} alt={image} className="w-[97%] m-auto h-60 rounded-xl" />
      <div className="flex justify-center items-center gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="px-2 py-1 bg-gray-200 text-sm rounded">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-3 justify-center items-center my-4">
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            <FaExternalLinkAlt size={14} />
            Demo
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            <FaGithub size={14} />
            Github
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
