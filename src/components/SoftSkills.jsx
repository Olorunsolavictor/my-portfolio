// import { Grid } from "@mui/material";
import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Fade } from "react-awesome-reveal";

const SoftSkills = () => {
  const softSkills = [
    "Communication",
    "Teamwork",
    "Time Management",
    "Problem Solving",
    "Self Confidence",
    "Emotional Intelligence",
    "Work Ethic/ attitude",
    "Resilience",
  ];
  return (
    <div className="md:w-[45vw] sm:w-[88vw]">
      <Fade>
        <Grid container spacing={0} className="">
          {softSkills.map((softSkill) => (
            <Grid
              className=" flex justify-center items-center sm:w-[80%]  md:w-[50%] sm:h-[151px] md:h-[135px] "
              item
              key={softSkill}
              xs={6}
              md={4}
              lg={4}
              sx={{ width: "50%" }}
            >
              <Fade className="w-100%">
                <Card
                  className="shadow-lg  rounded-2xl hover:shadow-xl bg-yellow-300  font-mont"
                  sx={{ maxWidth: "auto", height: "50px" }}
                >
                  <CardContent
                    className="bg-purple-300 "
                    sx={{ maxWidth: "auto", height: "100%" }}
                  >
                    <p
                      className="font-poppins text-white sm:text-[12px] md:text-[15px]"
                      sx={{ fontSize: 17 }}
                    >
                      {softSkill}
                    </p>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* {softSkills.map((softSkill) => (
        
        // <div className=" flex justify-center bg-green-300 items-center w-[100%] h-[50px]">
        //   <div item className="bg-red-500 h-auto p-5">
        //     {softSkill}
        //   </div>
        // </div>
      ))} */}
      </Fade>
    </div>
  );
};

export default SoftSkills;
