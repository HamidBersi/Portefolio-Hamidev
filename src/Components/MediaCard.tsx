import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function MediaCard() {
  const { t } = useTranslation();

  return (
    <div className="h-145 w-[80%] md:w-[45%]  mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl text-center">
      <h2 className="text-2xl font-semibold text-blue-600 mb-6">
        {t("contact.title")}
      </h2>

      <p className="text-gray-600 mb-9">{t("contact.description")}</p>

      <div className="space-y-4">
        <a
          href="mailto:hamidbersi@gmail.com"
          className="flex items-center gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <FaEnvelope className="w-5 h-5 text-purple-500" />
          <span className="text-gray-800 font-medium">
            hamidbersi@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/hamid-bersi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <FaLinkedin className="w-5 h-5 text-blue-600" />
          <span className="text-gray-800 font-medium">LinkedIn</span>
        </a>

        <a
          href="https://github.com/hamidev"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="w-5 h-5 text-gray-800" />
          <span className="text-gray-800 font-medium">GitHub</span>
        </a>
      </div>
    </div>
  );
}

export default MediaCard;
