import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "RestoGestion",
      image: "/images/RestoGestio-photo.jpg",
      technologies: ["React", "TypeScript", "Tailwind"],
      github: "https://github.com/tonUser/todo-app",
      demo: "https://todo-app.vercel.app",
    },
    {
      title: "Boutique E-commerce",
      image: "/images/E-commerce.jpg",
      technologies: ["Node.js", "Express", "PostgreSQL"],
      github: "https://github.com/tonUser/blog-api",
      demo: "https://todo-app.vercel.app",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center" id="projects">
      <h3 className="text-2xl font-bold text-blue-700 mb-10">Mes Projets</h3>
      <div className="flex justify-center items-center gap-7">
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
  );
};

export default Projects;
