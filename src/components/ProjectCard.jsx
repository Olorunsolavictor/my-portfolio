import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
// import handout from "../assets/handout.png";
import {
  CardActionArea,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
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

              <CardContent className="bg-white text-gray-900">
                {/* <Typography gutterBottom variant="h5" component="div">
                  {project.name}
                </Typography> */}
                <Typography className="text-gray-500" variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className="bg-white flex items-center h-[50px] justify-evenly  text-[25px] ">
              <a
                href={project.gitHub}
                className="text-gray-600 hover:text-purple-500"
              >
                <AiOutlineGithub />
              </a>
              <a
                href={project.link}
                className="text-gray-600 hover:text-purple-500"
              >
                <AiOutlineLink />
              </a>
            </CardActions>
          </div>
        </Fade>
      ))}
    </div>
  );
}

export default ProjectCard;
