import React from "react";
import ProjectCard from "./ProjectCard";
import handoutLogo from "../assets/handoutLogo.png";
import commerce from "../assets/e-commerce.png";
import youtube from "../assets/youtube.png";
import { Typography } from "antd";

function Projects() {
  const { Title } = Typography;
  const projectList = [
    {
      id: 1,
      name: "Handout",
      description: "A platform for giving out your old items.",
      image: handoutLogo,
      link: "https://stutern-handout.web.app/",
      gitHub:
        "https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git",
    },
    {
      id: 2,
      name: "Shop it",
      description: "An e-commerce platform",
      image: commerce,
    },
    {
      id: 3,
      name: "Youtube and API",
      description: "A platform that functions like youtube.",
      image: youtube,
    },
  ];
  return (
    <div
      className="bg-[#f7f7f7] w-full py-10 sm:h-[1500px] md:h-[100%] lg:h-[650px] flex flex-col items-center lg:justify-center md:justify-evenly"
      id="projects"
    >
      <Title className="font-mont text-center  sm:mt-[-50px] mt-[50px]  ">
        <span className=" text-center text-[34px]  text-purple-900">
          Projects
        </span>
      </Title>
      <ProjectCard className="" projectList={projectList} />
    </div>
  );
}

export default Projects;
