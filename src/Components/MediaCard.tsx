import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function MediaCard() {
  return (
    <div className="h-145 w-[80%] md:w-[45%] mx-auto mt-10 p-6 bg-white shadow-2xl rounded-2xl text-center ">
      <h3 className="text-2xl font-semibold text-blue-600 mb-7">
        Travaillons ensemble ?
      </h3>
      <p className="text-gray-600 my-10">
        Je suis disponible pour des projets freelance et des opportuntés
        professionnlles. Parlons de votre projet !
      </p>
      <ul>
        <li className="my-4">
          <a
            href="mailto:hamidbersi1@gmail.com"
            target="_blank"
            className="flex w-[95%] m-auto gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300 ease-out"
          >
            <FaEnvelope className="text-red-500 w-6 h-6" />
            <span>Email</span>
          </a>
        </li>
        <li className="my-4">
          <a
            href="https://www.linkedin.com/in/hamid-bersi-71b944334/"
            target="blank"
            className="flex w-[95%] m-auto items-center gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300 ease-out"
          >
            <FaLinkedin className="text-blue-600 w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </li>
        <li className="my-4">
          <a
            href="https://github.com/HamidBersi"
            className="flex w-[95%] m-auto items-center gap-3 p-5 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors hover:-translate-y-1 duration-300 ease-out"
          >
            <FaGithub className="text-gray-800 w-6 h-6" />
            <span>GitHub</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MediaCard;
