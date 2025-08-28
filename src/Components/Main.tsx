import Link from "./Button";

const Main = () => {
  return (
    <main
      className="flex flex-1 justify-center items-center px-10
    bg-[linear-gradient(to_right,rgba(229,231,235,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.4)_2px,transparent_2px)]
    bg-[size:80px_80px] border-b-2 border-gray-200"
      id="main"
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-black-900">
          Bonjour, Je suis{" "}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Hamid BERSI
          </span>
        </h2>
        <h3 className="text-2xl text-bold text-blue-700 mt-4">
          Developpeur Fullstack
        </h3>
        <p className="my-6 w-2x w-120">
          Passionné par le développement web et en constante évolution dans mon
          apprentissage. J’aime créer des interfaces modernes, claires et
          fonctionnelles en explorant les dernières technologies pour donner vie
          à des projets uniques.
        </p>
        <Link label="Mes Projets" href="#projects" />
      </div>
      <div>
        <img
          src="/images/photo de CV.jpg"
          alt="profil-image"
          className="w-80 h-80 rounded-full shadow-xl transition-transform ease-out hover:scale-105 duration-300"
        />
      </div>
    </main>
  );
};

export default Main;
