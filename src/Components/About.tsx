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
import { useTranslation } from "react-i18next";
import CompetenceCard from "./SoftSkillCard";

const About = () => {
  const { t } = useTranslation();

  const softSkills = [
    {
      title: t("about.skills.teamwork.title"),
      description: t("about.skills.teamwork.description"),
      icon: <FaHandshake className="text-blue-500" />,
    },
    {
      title: t("about.skills.learning.title"),
      description: t("about.skills.learning.description"),
      icon: <FaBookOpen className="text-green-500" />,
    },
    {
      title: t("about.skills.creativity.title"),
      description: t("about.skills.creativity.description"),
      icon: <FaLightbulb className="text-yellow-500" />,
    },
    {
      title: t("about.skills.adaptability.title"),
      description: t("about.skills.adaptability.description"),
      icon: <FaCog className="text-purple-500" />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center my-20" id="about">
      <h2 className="text-3xl font-bold text-gray-900">{t("about.title")}</h2>
      <p className="my-6 max-w-4xl text-center text-gray-500">
        {t("about.description")}
      </p>

      <h3 className="text-2xl font-bold text-blue-700 mt-4">
        {t("about.technicalSkills")}
      </h3>
      <div className="flex flex-col md:flex-row justify-between items-center gap-5  md:gap-15 my-5">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">{t("about.frontend")}</h3>
          <div className="flex gap-5">
            <FaHtml5 className="text-orange-600 text-4xl" title="HTML5" />
            <FaCss3Alt className="text-blue-600 text-4xl" title="CSS" />
            <SiJavascript
              className="text-yellow-400 text-4xl"
              title="JavaScript"
            />
            <FaReact className="text-blue-400 text-4xl" title="React.js" />
            <SiTypescript
              className="text-[#3178C6] text-4xl"
              title="TypeScript"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">{t("about.backend")}</h3>
          <div className="flex gap-5">
            <FaNodeJs className="text-green-600 text-4xl" title="Node.js" />
            <SiExpress className="text-gray-700 text-4xl" title="Express.js" />
            <SiPostgresql
              className="text-sky-700 text-4xl"
              title="PostgreSQL"
            />
            <SiSequelize className="text-blue-400 text-4xl" title="Sequelize" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-xl text-gray-500 my-3">{t("about.design")}</h3>
          <div className="flex gap-5">
            <FaMobileAlt className="text-blue-500 text-4xl" title="mobile" />
            <FaDesktop className="text-blue-500 text-4xl" title="desktop" />
            <FiFigma className="text-[#F24E1E] text-4xl" title="Figma" />
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-blue-700 mt-4">
        {t("about.softSkills")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 max-w-6xl mx-12">
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
