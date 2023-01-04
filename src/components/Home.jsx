import { Typography } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { RiLinkedinLine, RiMailLine, RiGithubFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { Bounce } from "react-awesome-reveal";

function Home() {
  return (
    <div
      className="flex flex-col w-full justify-center text-center items-center sm:h-[500px] md:h-[100vh]  "
      id="home"
    >
      <h1 className=" sm:text-[28px] md:text-[35px] text-gray-600 font-thin">
        Hi, I am{" "}
        <span className="text-purple-900 font-poppins font-medium">
          Olorunsola
        </span>
        ,
        <br />a Frontend Developer from
        <br />
        <Bounce>
          <span className="text-yellow-500 font-normal">Lagos.</span>
        </Bounce>
      </h1>

      <p className="text-gray-900 md:font-[200] font-poppins md:text-[17px] sm:w-[92%]">
        I create functional and scalable frontend products with amazing user
        experiences.
      </p>
      <div className="flex justify-evenly bg-white md:shadow-xl sm:shadow-md  hover:backdrop-blur-sm rounded-lg sm:w-[95%] md:w-[100%]  ">
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
        <a
          href="https://victorolorunsola@rocketmail.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <RiMailLine className="text-black" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
