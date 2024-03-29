import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";
import mylogo from "../assets/mylogo.png";

const NewNavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  // const removeMenu = () => {
  //   setActive(false);
  // };
  return (
    <header className="flex items-center justify-around bg-white md:shadow-sm fixed top-0 text-text-[#2d283e] w-full h-[60px] z-[1000]">
      <div className="justify-center items-center flex flex-col h-[40px]">
        <Link className="justify-center items-center " smooth to="#home">
          <img
            src={mylogo}
            className="md:w-12 md:h-12 sm:w-8 sm:h-8"
            alt="logo"
          />
        </Link>
      </div>
      <nav className=" h-[100%]">
        <div className="absolute right-[20vw] md:hidden sm:top-4 md:top-6 md:scale-150 cursor-pointer">
          <AiOutlineMenu
            onClick={showMenu}
            className="h-[20px] w-[20px] mb-5"
          />
        </div>
        <ul className="hidden md:flex justify-center items-center gap-6 p-4 font-poppins font-[300] text-[15px] ">
          <li>
            <Link
              className="text-[#424242] hover:text-purple-900  hover:bg-purple-200"
              smooth
              to="#home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="text-[#424242] hover:text-purple-900   hover:bg-purple-200 active:text-purple-900 "
              smooth
              to="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-[#424242] hover:text-purple-900  hover:bg-purple-200"
              smooth
              to="#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="text-[#424242] hover:text-purple-900  hover:bg-purple-200"
              smooth
              to="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900  hover:bg-purple-200"
              smooth
              to="#contactMe"
            >
              Contact
            </Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>

      <a
        target="_blank"
        rel="noreferrer noopener"
        href="https://drive.google.com/file/d/1GPtL8wpfv-hfeSelIkfCyfLsI_mpmB1E/view?usp=sharing"
      >
        <button className=" hidden md:block bg-purple-800 hover:bg-purple-800/70 active:bg-purple-300 px-4 py-2 text-white rounded-md font-poppins font-[700]">
          Resume
        </button>
      </a>
    </header>
  );
};

export default NewNavBar;
