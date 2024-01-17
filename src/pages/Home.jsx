import NavBar from "../components/NavBar";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

function App() {
  return (
    <>
      <NavBar />
      <section className="flex items-center min-h-full p-[9%] pt-[30%] lg:pt-[12%]">
        <div className="max-w-[60rem]">
          <h1 className="text-[5.6rem] text-blue font-bold leading-[1.3]">
            Oi, eu sou o Pansutti
          </h1>
          <div className="relative w-[32.8rem]">
            <h3 className="text-[3.2rem] font-bold text-transparent font-outline">
              Frontend Developer
            </h3>
          </div>
          <p className="text-2xl mt-[2rem] mr-0 mb-[4rem] text-white">
          Apaixonado por tecnologia, participando de projetos freelances para aprimorar meus conhecimentos e conhecer novas linguagens.
          </p>

          <div className="relative flex justify-between w-[34.5rem] h-[5rem]">
            <a
              className="relative h-full bg-gray-300 inline-flex justify-center items-center w-[15rem] border-solid border-black border-2 rounded-xl text-2xl font-semibold z-1 overflow-hidden group hover:text-white"
              href="https://wa.me/5512974120790"
              target="_blank"
              rel="noreferrer"
              
            >
              <span className="absolute inset-0 bg-blue transition-all transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <span className="relative z-10">Contato</span>
            </a>
            <a
              className="relative h-full bg-gray-300 inline-flex justify-center items-center w-[15rem] border-solid border-black border-2 rounded-xl text-2xl font-semibold z-1 overflow-hidden group hover:text-white"
              href="https://docs.google.com/document/d/1O5Z7u_hwnDkD6rItiDm77_1-IGNSnnRvsOaJhv4dWIY/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="absolute inset-0 bg-blue transition-all transform scale-x-0 origin-left group-hover:scale-x-100 "></span>
              <span className="relative z-10 ">Meu CV</span>
            </a>
          </div>
        </div>
        <div className="absolute top-[51rem] w-[100px] flex justify-between">
          <a
            className="relative inline-flex justify-center items-center w-[40px] h-[40px] bg-transparent border-solid border-white rounded-[50%] text-[20px] z-1 overflow-hidden group"
            href="https://www.linkedin.com/in/luiz-gustavo-pansutti-torres/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute inset-0 bg-blue transition-all transform scale-x-0 origin-left group-hover:scale-x-100"></span>
            <i className="relative z-10">
              <FaLinkedinIn color="white" />
            </i>
          </a>
          <a
            className="relative inline-flex justify-center items-center w-[40px] h-[40px] bg-transparent border-solid border-white rounded-[50%] text-[20px] z-1 overflow-hidden group"
            href="https://github.com/pansutti"
            target="_blank"
            rel="noreferrer"
          >
            <span className="absolute inset-0 bg-blue transition-all transform scale-x-0 origin-left group-hover:scale-x-100"></span>
            <i className="relative z-10">
              <FaGithub color="white"/>
            </i>
          </a>
        </div>
        <div className="ml-auto flex-col sm:flex-row">
          <div>
            <img className="object-cover w-[512px] h-[512px] rounded-[50%] hidden xl:block" src="img/Photo1.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
