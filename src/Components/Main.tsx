import { useTranslation } from "react-i18next";
import Link from "./Button";

const Main = () => {
  const { t } = useTranslation();

  return (
    <main
      className="flex-1 flex flex-col lg:flex-row justify-center items-center px-10 gap-10
        bg-[linear-gradient(to_right,rgba(229,231,235,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.4)_2px,transparent_2px)]
        bg-[size:80px_80px] border-b-2 border-gray-200"
      id="main"
    >
      <div className="flex flex-col justify-center items-center max-w-lg">
        <h2 className="text-4xl font-bold text-gray-900 text-center md:text-left leading-tight">
          <span className="block md:inline">{t("main.hello")}</span>{" "}
          <span className="block md:inline bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hamid BERSI
          </span>
        </h2>
        <h3 className="text-2xl font-bold text-blue-700 mt-4">
          {t("header.subtitle")}
        </h3>
        <p className="my-6 text-center">{t("main.description")}</p>
        <Link label={t("buttons.projects")} href="#projects" />
      </div>
      <div>
        <img
          src="/images/photo de CV.jpg"
          alt="profil-image"
          className="w-60 h-60 md:w-80 md:h-80 rounded-full shadow-[0_14px_28px_rgba(0,0,0,0.45),_0_10px_10px_rgba(0,0,0,0.35)]
           hover:shadow-[0_24px_48px_rgba(0,0,0,0.55),_0_16px_16px_rgba(0,0,0,0.45)]
           transition-all ease-out hover:scale-105 duration-300"
        />
      </div>
    </main>
  );
};

export default Main;
