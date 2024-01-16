import { CiMenuBurger } from "react-icons/ci";

function NavBar() {
  return (
    <header className="fixed left-0 w-full p-8 pr-[9%] pl-[9%] bg-transparent flex justify-between items-center z-[100]">
      <a className="text-4xl font-bold" href="/">Pansutti.dev</a>
      <CiMenuBurger className="text-6xl cursor-pointer hidden"/>
      <nav className="text-2xl font-semibold">
        <a className="ml-10 transition-colors duration-300 hover:text-blue-500" href="/home">Home</a>
        <a className="ml-10 transition-colors duration-300 hover:text-blue-500" href="/about">Sobre</a>
        <a className="ml-10 transition-colors duration-300 hover:text-blue-500" href="/education">Formação</a>
        <a className="ml-10 transition-colors duration-300 hover:text-blue-500" href="/skills">Habilidades</a>
        <a className="ml-10 transition-colors duration-300 hover:text-blue-500" href="/contact">Contato</a>
      </nav>
    </header>
  );
}

export default NavBar;
