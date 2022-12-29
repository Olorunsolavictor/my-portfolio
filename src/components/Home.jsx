import { Typography } from "antd";
import React from "react";
import "antd/dist/antd.css";
import { RiLinkedinLine, RiMailLine, RiGithubFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

const { Title } = Typography;

function Home() {
  return (
    <div
      className="flex flex-col w-full justify-center items-center h-[100vh]  "
      id="home"
    >
      <Title className="font-mont text-center">
        Hi, I'm <span className="text-purple-900 text-center">Olorunsola</span>
      </Title>
      <Title className="font-mont text-center ">A Frontend Web Developer</Title>
      <p className="text-center font-mont font-normal font-color">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <br /> Quaerat voluptates ratione perspiciatis debitis saepe quisquam{" "}
        <br />
        perferendis ad quibusdam deleniti commodi ex, doloremque.
      </p>
      <div className="flex flex-row justify-center items-center  min-w-[33%] ">
        <a href="https://linkedin.com/in/victor-olorunsola-93037a197">
          <div className="rounded-full h-16 w-16 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <RiLinkedinLine className="text-black" />
          </div>
        </a>
        <a href="https://github.com/Olorunsolavictor">
          <div className="rounded-full h-16 w-16 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <RiGithubFill className="text-black" />
          </div>
        </a>
        <a href="https://twitter.com/Olorunsola_MD">
          <div className="rounded-full h-16 w-16 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <TiSocialTwitter className="text-black" />
          </div>
        </a>
        <a href="https://victorolorunsola@rocketmail.com">
          <div className="rounded-full h-16 w-16 flex items-center justify-center mr-6 cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <RiMailLine className="text-black" />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Home;
