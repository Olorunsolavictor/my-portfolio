import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import MenuItems from "./MenuItems";
import { AiOutlineMenu } from "react-icons/ai";

const NewNavBar = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  const removeMenu = () => {
    setActive(false);
  };
  return (
    <header className="flex items-center justify-around bg-white shadow-md fixed top-0 text-text-[#2d283e] w-full h-[60px] z-[1000]">
      <div className="justify-center items-centerflex flex-col h-[40px]">
        <Link
          className="text-[#2d283e] justify-center items-center hover:text-purple-900"
          smooth
          to="#home"
        >
          <p className="text-[22px] font-[500] cursor-pointer font-mont">
            Olorunsola.dev
          </p>
        </Link>
      </div>
      <nav>
        <div className="absolute right-6 md:hidden top-6 scale-150 cursor-pointer">
          <AiOutlineMenu
            onClick={showMenu}
            className="h-[20px] w-[20px] mb-5"
          />
        </div>
        <ul className="hidden md:flex gap-6 p-4 font-mont text-[15px] ">
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900"
              smooth
              to="#home"
            >
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900"
              smooth
              to="#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900"
              smooth
              to="#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900"
              smooth
              to="#projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-[#2d283e] hover:text-purple-900"
              smooth
              to="#contactMe"
            >
              Contact
            </Link>
          </li>
        </ul>
        <MenuItems showMenu={showMenu} active={active} />
      </nav>
      <a href="https://drive.google.com/file/d/1JESLLuXWtRk7XEbiGcK6ncCGWW1-eRnD/view?usp=sharing">
        <button className=" hidden md:block bg-[#2d283e] px-4 py-2 text-orange-600 rounded-md font-[700]">
          Resume
        </button>
      </a>
    </header>
  );
};

export default NewNavBar;
