import { React, useEffect, useState } from "react";
import "../App.css";
import Home from "./Home";
import NewNavBar from "./NewNavBar";
import About from "./about/About";
import Skills from "./Skills";
import Projects from "./Projects";
import { ContactMe } from "./ContactMe";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiLinkedinLine, RiMailLine, RiGithubFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

function LandingPage() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);

  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="relative md:bg-[#f7f7f7] sm:bg-white  flex flex-col  items-center">
      {scrollUp && (
        <button
          onClick={bottomToTop}
          className="fixed rounded-full shadow-xl  z-50 font-poppins text-lg md:top-[85%] sm:top-[80%] sm:left-[80%] md:left-[90%]"
        >
          <div className="rounded-full   h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <AiOutlineArrowUp className="text-black" />
          </div>
        </button>
      )}

      <NewNavBar />
      <div className="md:bg-[#f7f7f7] sm:bg-white">
        <Home />
      </div>
      <div className="bg-white flex justify-center items-center">
        <About />
      </div>
      <div className=" bg-[#f7f7f7] w-full ">
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
      <div className="w-full h-auto flex justify-center items-center bg-[#f7f7f7]">
        <footer className="sm:w-[90%] md:w-[60%]  h-auto p-10 flex flex-col justify-center mb-10 items-center">
          <div className="flex justify-evenly bg-white md:shadow-xl sm:shadow-md mb-5 hover:backdrop-blur-sm rounded-lg sm:w-[100%] md:w-[60%]  ">
            <a
              href="https://linkedin.com/in/victor-olorunsola-93037a197"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
                <RiLinkedinLine className="text-black" />
              </div>
            </a>
            <a
              href="https://github.com/Olorunsolavictor"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
                <RiGithubFill className="text-black" />
              </div>
            </a>
            <a
              href="https://twitter.com/Olorunsola_MD"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
                <TiSocialTwitter className="text-black" />
              </div>
            </a>
            <a href="mailto:olorunsolavictorp@gmail.com">
              <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
                <RiMailLine className="text-black" />
              </div>
            </a>
          </div>

          <p className=" font-poppins font[300]  text-gray-400 sm:text-[14px]">
            Designed with React.js by Olorunsola | 2021
          </p>
        </footer>
      </div>
    </div>
  );
}

export default LandingPage;
