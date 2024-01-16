import NavBar from "../components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <section className="flex items-center min-h-full p-[9%] pt-[18%]">
        <div className="max-w-[60rem]">
          <h1 className="text-[5.6rem] font-bold leading-[1.3]">
            Oi, eu sou <span>o Pansutti</span>
          </h1>
          <div className="relative w-[32.8rem]">
            <h3 className="text-[3.2rem] font-bold text-transparent font-outline">
              Frontend Developer
            </h3>
          </div>
          <p className="text-2xl mt-[2rem] mr-0 mb-[4rem]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
            temporibus quae consequatur repudiandae accusantium iusto alias
            commodi consequuntur, sint cumque debitis libero? Laboriosam
            incidunt dicta minus quaerat eum quia maxime!
          </p>

          <div className="relative flex justify-between w-[34.5rem] h-[5rem]">
            <a
              className="relative h-full bg-blue-300 inline-flex justify-center items-center w-[15rem] border-solid border-black border-2 rounded-xl text-2xl font-semibold z-1 overflow-hidden group"
              href="/"
            >
              <span className="absolute inset-0 bg-blue-500 transition-all transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <span className="relative z-10">Contato</span>
            </a>
            <a
              className="relative h-full bg-blue-300 inline-flex justify-center items-center w-[15rem] border-solid border-black border-2 rounded-xl text-2xl font-semibold z-1 overflow-hidden group"
              href="/"
            >
              <span className="absolute inset-0 bg-blue-500 transition-all transform scale-x-0 origin-left group-hover:scale-x-100"></span>
              <span className="relative z-10">Meu CV</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
