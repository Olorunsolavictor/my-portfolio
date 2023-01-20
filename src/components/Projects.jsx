import React from "react";
import ProjectCard from "./ProjectCard";
import handoutLogo from "../assets/handoutLogo.png";
// import commerce from "../assets/e-commerce.png";
import utube from "../assets/utube.jpg";
import shop from "../assets/shop.jpg";
import { Typography } from "antd";

function Projects() {
  const { Title } = Typography;
  const projectList = [
    {
      id: 1,
      name: "Handout",
      description: "A platform for giving out your old items.",
      image: handoutLogo,
      link: "/projectdetails",

      gitHub:
        "https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git",
    },
    {
      id: 2,
      name: "Shop it",
      description: "An e-commerce platform",
      image: shop,
      link: "https://shop-out.netlify.app/",
      gitHub: "https://github.com/Olorunsolavictor/shop-out",
    },
    {
      id: 3,
      name: "Youtube and API",
      description: "A platform that functions like youtube.",
      image: utube,
    },
  ];
  return (
    <div
      className="bg-white w-full py-10 sm:h-[1500px] md:h-[100%] lg:h-[650px] flex flex-col items-center lg:justify-center md:justify-evenly"
      id="projects"
    >
      <Title className="font-mont text-center flex flex-col  items-center justify-center md:mt-4  sm:mt-[50px] mt-[50px]  ">
        <span className=" text-center text-[28px] font-poppins font-[300] text-gray-500 mb-2">
          Projects
        </span>
        <hr className="w-[50%] h-[2px] bg-gray-300 rounded border-0 mb-10" />
      </Title>
      <ProjectCard className="" projectList={projectList} />
    </div>
  );
}

export default Projects;
