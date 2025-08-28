import { useTranslation } from "react-i18next";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: "RestoGestion",
      image: "/images/RestoGestio-photo.jpg",
      technologies: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/votre-username/resto-gestion",
      demo: "https://resto-gestion.vercel.app",
    },
    {
      title: "Boutique E-commerce",
      image: "/images/E-commerce.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/votre-username/e-commerce",
      demo: "https://e-commerce-demo.vercel.app",
    },
  ];

  return (
    <div className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          {t("projects.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
