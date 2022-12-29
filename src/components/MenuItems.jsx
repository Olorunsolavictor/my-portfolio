import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineClose } from "react-icons/ai";

const MenuItems = ({ showMenu, active }) => {
  return (
    <ul
      className={
        active
          ? "flex flex-col fixed inset-0 left-1/4 bg-white/90 backdrop-blur-sm cursor-pointer gap-6 p-8 justify-center items-center md:hidden"
          : "hidden"
      }
    >
      <AiOutlineClose onClick={showMenu} />
      <li>
        <Link
          className="text-[#2d283e] hover:text-purple-900"
          smooth
          to="#home"
        >
          Home
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
      <a href="https://drive.google.com/file/d/1JESLLuXWtRk7XEbiGcK6ncCGWW1-eRnD/view?usp=sharing">
        <button className=" bg-[#2d283e] px-4 py-2 text-orange-600 rounded-md font-[700]">
          Resume
        </button>
      </a>
    </ul>
  );
};

export default MenuItems;
