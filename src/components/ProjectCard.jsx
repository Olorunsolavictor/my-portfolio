import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { CardActionArea, CardContent, CardActions } from "@mui/material";
import { Fade } from "react-awesome-reveal";

function ProjectCard({ projectList }) {
  const navigate = useNavigate();
  return (
    <div className=" w-full flex flex-col md:flex-row p-6   justify-evenly bg-white h-auto md:justify-evenly items-center  ">
      {projectList.map((project) => (
        <Fade key={project.id}>
          <div className="shadow-md hover:shadow-2xl font-month-[400px] sm:w-[300px] md:w-[300px] sm:my-[50px] ">
            <CardActionArea onClick={() => navigate(project.page)}>
              <div
                className="bg-white h-[250px] flex items-center  justify-center "
                component="img"
              >
                <img src={project.image} alt="logo" className="max-w-[60%]" />
              </div>

              <CardContent className="bg-white text-gray-900 text-center">
                <p className="text-gray-500 font-poppins" variant="body2">
                  {project.description}
                </p>
              </CardContent>
            </CardActionArea>

            <CardActions className="bg-white flex items-center h-[50px] justify-evenly  text-[25px] ">
              <a
                href={project.gitHub}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-400 hover:text-gray-500/50  active:scale-110"
              >
                <AiOutlineGithub />
              </a>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer noopener"
                className="text-gray-500 hover:text-gray-500/50  active:scale-110"
              >
                <FiExternalLink />
              </a>
            </CardActions>
          </div>
        </Fade>
      ))}
    </div>
  );
}

export default ProjectCard;
