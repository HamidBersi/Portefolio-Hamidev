import LanguageButton from "./LanguageButton";
import Link from "./Button";

const Header = () => {
  return (
    <header className="h-20 sticky top-0 z-50 flex justify-between items-center px-8 py-3 bg-white shadow-md">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold text-black-900 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hamid BERSI
        </h1>
        <h3 className="text-xl font-light ">Developpeur Fullstack</h3>
      </div>
      <div>
        <nav>
          <ul className="flex justify-between items-center gap-8 text-xl text-grey-400 font-medium">
            <li>
              <a
                className="
          relative
          text-gray-500 dark:text-gray-500
          hover:text-blue-500
          transition-colors
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
        "
                href="#"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="
          relative
          text-gray-700 dark:text-gray-500
          hover:text-blue-500
          transition-colors
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
        "
                href="#"
              >
                À Propos
              </a>
            </li>
            <li>
              <a
                className="
          relative
          text-gray-700 dark:text-gray-500
          hover:text-blue-500
          transition-colors
          after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px]
          after:bg-blue-500 after:scale-x-0 after:origin-left after:transition-transform after:duration-300
          hover:after:scale-x-100
        "
                href="#"
              >
                Projets
              </a>
            </li>
            <li>
              <LanguageButton />
            </li>
            <li>
              <Link label="Contactez-Moi" href="#" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
