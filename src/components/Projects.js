import React from "react";
import ProjectCard from "./ProjectCard";
import handout from "../assets/handout.png";
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
      image: handout,
      link: "https://stutern-handout.web.app/",
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
    <div className="bg-[#798CAD] w-[100%] h-[900px] flex flex-col items-center justify-center">
      <Title className="font-mont text-center text-purple-900 ">
        <span className=" text-center">Projects</span>
      </Title>
      <ProjectCard projectList={projectList} />
    </div>
  );
}

export default Projects;
