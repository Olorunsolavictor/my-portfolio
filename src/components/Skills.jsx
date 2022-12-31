// import { Container } from "@mui/material";
import React from "react";
import MySkills from "./MySkills";
import { Typography } from "antd";
import { Fade } from "react-awesome-reveal";

const { Title } = Typography;
function Skills() {
  const skills = [
    {
      name: "React.js",
      img: "https://logojinni.com/image/logos/react-446.svg",
      id: 1,
    },
    {
      name: "Javascript",
      img: "https://logojinni.com/image/logos/javascript-455.svg",
      id: 2,
    },
    {
      name: "HTML5",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvWjvz33kUB8vZsfdPkqdou0achtute3ksg&usqp=CAU",
      id: 3,
    },
    {
      name: "MUI",
      img: "https://mui.com/static/logo.png",
      id: 4,
    },
    {
      name: "GitHub",
      img: "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
      id: 5,
    },
    {
      name: "CSS3",
      img: "https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png",
      id: 6,
    },
    {
      name: "Tailwind CSS",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF_TO8GgFtLOmG9RCOo7brLSjoKitugo_5uJrelTTTGSz8x80c5lq81hUj99ozOmNjgOk&usqp=CAU",
      id: 7,
    },
    {
      name: "Ant Design",
      img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      id: 8,
    },
  ];
  // const skillList = skills.map(skill => <Skill skill={skill} />);

  return (
    <div
      sx={{ display: "flex" }}
      className="flex flex-col justify-center sm:h-[900px] md:h-[650px]  w-full  text-center items-center"
      id="skills"
    >
      <div className="sm:overflow-hidden w-full">
        <Title className="font-mont text-center text-purple-900 ">
          <Fade>
            <span className="text-purple-900 text-[30px] text-center">
              Skills
            </span>
          </Fade>
        </Title>
      </div>

      <MySkills skills={skills} />
    </div>
  );
}

export default Skills;
