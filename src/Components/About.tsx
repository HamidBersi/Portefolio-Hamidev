import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";
import { FaHandshake, FaBookOpen, FaLightbulb, FaCog } from "react-icons/fa";
import { FaMobileAlt, FaDesktop } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import CompetenceCard from "./CompetenceCard";

const About = () => {
  const softSkills = [
    {
      title: "Travail d'équipe",
      description: "Collaboration efficace dans les projets de groupe",
      icon: <FaHandshake className="text-blue-500" />,
    },
    {
      title: "Apprentissage continu",
      description: "Passion pour l'apprentissage de nouvelles technologies",
      icon: <FaBookOpen className="text-green-500" />,
    },
    {
      title: "Créativité",
      description: "Approche innovante pour résoudre les problèmes",
      icon: <FaLightbulb className="text-yellow-500" />,
    },
    {
      title: "Adaptabilité",
      description: "Capacité à s'adapter rapidement aux changements",
      icon: <FaCog className="text-purple-500" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-20" id="about">
      <h2 className="text-3xl font-bold text-gray-900">À Propos de moi</h2>
      <p className="my-6 max-w-4xl text-center text-gray-500">
        Je suis un développeur FullStack récemment diplômé, passionné par la
        création de solutions numériques accessibles et performantes. J'ai
        récemment terminé mon stage chez HRnov.ai, une expérience enrichissante
        qui m'a permis de renforcer mes compétences techniques et de découvrir
        de nouvelles approches de développement. Actuellement, je travaille sur
        mon propre projet, où je mets en pratique mes connaissances et continue
        d'explorer de nouvelles technologies.
      </p>

      <h3 className="text-2xl font-bold text-blue-700 mt-4">
        Compétences techniques
      </h3>
      <div className="flex justify-between items-center gap-20 my-5">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">Front-end</h3>
          <div className="flex gap-5">
            <FaHtml5 className="text-orange-600 text-5xl" title="HTML5" />
            <FaCss3Alt className="text-blue-600 text-5xl" title="CSS" />
            <SiJavascript
              className="text-yellow-400 text-5xl"
              title="JavaScript"
            />
            <FaReact className="text-blue-400 text-5xl" title="React.js" />
            <SiTypescript
              className="text-[#3178C6] text-5xl"
              title="TypeScript"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">Back-end</h3>
          <div className="flex gap-5">
            <FaNodeJs className="text-green-600 text-5xl" title="Node.js" />
            <SiExpress className="text-gray-700 text-5xl" title="Express.js" />
            <SiPostgresql
              className="text-sky-700 text-7xl"
              title="PostgreSQL"
            />
            <SiSequelize className="text-blue-400 text-5xl" title="Sequelize" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">Design</h3>
          <div className="flex gap-5">
            <FaMobileAlt className="text-blue-500 text-5xl" title="mobile" />
            <FaDesktop className="text-blue-500 text-5xl" title="desktop" />
            <FiFigma className="text-[#F24E1E] text-5xl" title="Figma" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 my-6">
        Compétences douces
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 max-w-6xl">
        {softSkills.map((skill, index) => (
          <CompetenceCard
            key={index}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
