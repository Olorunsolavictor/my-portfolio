import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";
import { Slide } from "react-awesome-reveal";

const MenuItems = ({ showMenu, active }) => {
  return (
    <Slide direction="down">
      <ul
        className={
          active
            ? "flex flex-col fixed inset-0 left-[30%] bg-white/80 backdrop-blur-sm cursor-pointer gap-6 p-8 justify-center items-center md:hidden"
            : "hidden"
        }
      >
        <AiOutlineClose onClick={showMenu} />
        <li className="font-poppins font-[300]">
          <Link
            className="text-[#2d283e] hover:text-purple-900"
            smooth
            to="#home"
            onClick={showMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d283e] hover:text-purple-900"
            smooth
            to="#about"
            onClick={showMenu}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d283e] hover:text-purple-900"
            smooth
            to="#skills"
            onClick={showMenu}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d283e] hover:text-purple-900"
            smooth
            to="#projects"
            onClick={showMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="text-[#2d283e] hover:text-purple-900"
            smooth
            to="#contactMe"
            onClick={showMenu}
          >
            Contact
          </Link>
        </li>
        <a
          href="https://drive.google.com/file/d/1GPtL8wpfv-hfeSelIkfCyfLsI_mpmB1E/view?usp=drive_link"
          target="_blank"
          rel="noreferrer noopener"
        >
          <button
            className="  bg-purple-800 hover:bg-purple-800/70 active:bg-purple-300 px-4 py-2 text-white rounded-md font-poppins font-[700]"
            onClick={showMenu}
          >
            Resume
          </button>
        </a>
      </ul>
    </Slide>
  );
};

export default MenuItems;
