import React from "react";
import ProjectCard from "./ProjectCard";
import handoutLogo from "../assets/handoutLogo.png";
import thegyms from "../assets/thegyms.png";
import rotary from "../assets/rotary.png";
import fairfield from "../assets/fairfield.png";
import { Typography } from "antd";

function Projects() {
  const { Title } = Typography;
  const projectList = [
    {
      id: 1,
      name: "Handout",
      description: "A platform for giving out your old items.",
      image: handoutLogo,
      page: "/projectdetails",
      link: "https://handout-stutern.web.app",

      gitHub:
        "https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git",
    },
    {
      id: 2,
      name: "Rotary Club Phoenix",
      description: "An official non-profit website",
      image: rotary,
      page: "/shopout",
      link: "https://rcpphphoenix.org/",
      gitHub: "https://rcpphphoenix.org/",
    },
    {
      id: 3,
      name: "TheGyms Private Fitness",
      description: "A live fitness website",
      image: thegyms,
      link: "https://thegyms.ca/",
      gitHub: "https://thegyms.ca/",
    },
    {
      id: 4,
      name: "Fairfield",
      description: "An Architectural Firm Website",
      image: fairfield,
      link: "https://preview.webflow.com/preview/architecture-b036e6?utm_medium=preview_link&utm_source=dashboard&utm_content=architecture-b036e6&preview=6facf409b82b26898f3b4201d199d03f&workflow=preview",
      gitHub:
        "https://preview.webflow.com/preview/architecture-b036e6?utm_medium=preview_link&utm_source=dashboard&utm_content=architecture-b036e6&preview=6facf409b82b26898f3b4201d199d03f&workflow=preview",
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
