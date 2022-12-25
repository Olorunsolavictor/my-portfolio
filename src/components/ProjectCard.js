import React from "react";
// import handout from "../assets/handout.png";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { Fade } from "react-awesome-reveal";

function ProjectCard({ projectList }) {
  return (
    <div className=" w-[80%] flex flex-col h-[500px] justify-center items-center ">
      <Grid
        container
        spacing={4}
        className=" flex flex-col  justify-center items-center"
      >
        {projectList.map((project) => (
          <Grid
            className="rounded-[10px]"
            item
            key={project.id}
            sx={12}
            md={6}
            lg={4}
          >
            <Fade>
              <Card
                sx={{ Width: 200 }}
                className="shadow-md hover:shadow-2xl font-mont rounded-[25px] "
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.image}
                    alt=""
                  />
                  <CardContent className="bg-[#05014a] text-white">
                    <Typography gutterBottom variant="h5" component="div">
                      {project.name}
                    </Typography>
                    <Typography variant="body2">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="bg-[#05014a] ">
                  <a href={project.link}>
                    <Button className=" " size="small">
                      <p className=" ">Visit site</p>
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProjectCard;
