import { CardMedia, Grid, Card, CardContent, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import React from "react";

function MySkills({ skills }) {
  return (
    <div className="text-center flex justify-center mt-[5px] items-center h-[550px]  ">
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <Grid
            className=" flex justify-center items-center w-[100%]"
            item
            key={skill.id}
            sx={12}
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

            {/* <Card
							className="flex-1"
							hoverable
							title={skill.name}
							style={{
								width: 'auto',
								height: 'auto',
								transition: 'all 0.5s',
							}}
							cover={<img alt="example" className="" src={skill.img} />}
						></Card> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MySkills;
