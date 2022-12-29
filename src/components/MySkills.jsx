import { CardMedia, Grid, Card, CardContent, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import React from "react";

function MySkills({ skills }) {
  return (
    <div className="text-center flex justify-center mt-[5px] items-center  ">
      <Grid container spacing={0}>
        {skills.map((skill) => (
          <Grid
            className=" flex justify-center items-center w-[100%] h-[200px] "
            item
            key={skill.id}
            xs={4}
            md={4}
            lg={3}
          >
            <Fade>
              <Card
                className="shadow-md rounded-[50px] hover:shadow-xl font-mont"
                sx={{ maxWidth: 80, height: 150 }}
              >
                <CardMedia
                  component="img"
                  // height="70"
                  image={skill.img}
                  alt={skill.name}
                  sx={{
                    width: "200px",
                    height: "80px",
                    backgroundColor: "white",
                  }}
                ></CardMedia>
                <CardContent>
                  <Typography>
                    <p className="text-[13px]">{skill.name}</p>
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MySkills;
