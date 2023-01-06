import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { CardActionArea, CardContent, CardActions } from "@mui/material";
import { Fade } from "react-awesome-reveal";

function ProjectCard({ projectList }) {
  return (
    <div className=" w-full flex sm:flex-col md:flex-row  sm:justify-between sm:h-[900px] md:h-[400px]  md:justify-evenly items-center  ">
      {projectList.map((project) => (
        <Fade key={project.id}>
          <div className="shadow-md hover:shadow-2xl font-month-[400px] sm:w-[300px] md:w-[300px] sm:my-[50px] ">
            <CardActionArea>
              <div
                className="bg-white h-[250px] flex items-center  justify-center "
                component="img"
              >
                <img src={project.image} alt="logo" />
              </div>

              <CardContent className="bg-white text-gray-900 text-center">
                {/* <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography> */}
                <p className="text-gray-500 font-poppins" variant="body2">
                  {project.description}
                </p>
              </CardContent>
            </CardActionArea>
            <CardActions className="bg-white flex items-center h-[50px] justify-evenly  text-[25px] ">
              <a
                href={project.gitHub}
                className="text-gray-400 hover:text-gray-500/50  active:scale-110"
              >
                <AiOutlineGithub />
              </a>
              <a
                href={project.link}
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
