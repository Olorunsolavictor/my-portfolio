import "./App.css";
import Home from "./components/Home";
import NewNavBar from "./components/NewNavBar";
import About from "./components/about/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineArrowUp } from "react-icons/ai";

function App() {
  return (
    <BrowserRouter>
      <div className="relative md:bg-[#f7f7f7] sm:bg-white h-screen flex flex-col  items-center">
        <Link
          to="#home"
          smooth
          className="fixed z-50 font-poppins text-lg md:top-[85%] sm:top-[80%] sm:left-[80%] md:left-[90%]"
        >
          <div className="rounded-full   h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <AiOutlineArrowUp className="text-black" />
          </div>
        </Link>

        <NewNavBar />
        <div className="md:bg-[#f7f7f7] sm:bg-white">
          <Home />
        </div>
        <div className="bg-white flex justify-center items-center">
          <About />
        </div>
        <div className=" bg-[#f7f7f7]   w-full ">
          <Skills />
        </div>
        <div className=" w-full flex  items-center justify-center md:h-auto sm:h-auto ">
          <Projects />
        </div>
        <div
          className=" bg-[#f7f7f7] w-full flex items-center justify-center sm:h-auto md:h-[900px] "
          id="contactMe"
        >
          <ContactMe />
        </div>
        <footer className="w-full flex justify-around  items-center h-[300px] bg-[#f7f7f7] ">
          <ul className="sm:hidden md:flex justify-evenly items-center min-w-[350px] font-poppins">
            <li>
              <Link
                className="text-gray-400 hover:text-purple-900"
                smooth
                to="#home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 hover:text-purple-900"
                smooth
                to="#about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 hover:text-purple-900"
                smooth
                to="#skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 hover:text-purple-900"
                smooth
                to="#projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-400 hover:text-purple-900"
                smooth
                to="#contactMe"
              >
                Contact
              </Link>
            </li>
            <a
              href="https://drive.google.com/file/d/1JESLLuXWtRk7XEbiGcK6ncCGWW1-eRnD/view?usp=sharing"
              className="text-gray-400"
            >
              Resume
            </a>
          </ul>

          <p className=" font-poppins font[300]  text-gray-400">
            designed by Olorunsola | 2021
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
