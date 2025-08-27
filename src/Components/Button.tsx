interface LinkProps {
  label: string;
  href: string;
}

const Link = ({ label, href }: LinkProps) => {
  return (
    <a
      href={href}
      className="
                inline-flex items-center
                bg-blue-700 text-white py-3 px-5 rounded-xl text-xl
                 transition-transform duration-300 ease-out bg-gradient-to-r
                hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 hover:translate-x-1 hover:-translate-y-1
              "
    >
      {label}
    </a>
  );
};

export default Link;
