// import { Container } from "@mui/material";
import React, { useState } from "react";
import MySkills from "./MySkills";
import { Typography } from "antd";
import { Fade } from "react-awesome-reveal";
import SoftSkills from "./SoftSkills";

// const { Title } = Typography;
function Skills() {
  const [page, setPage] = useState(1);
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
      <div className="sm:overflow-hidden  flex flex-col items-center md:mt-5 justify-center w-full">
        <Fade>
          <span className="text-gray-600 font-poppins font-[300]  sm:text-[22px] md:text-[25px]">
            Skills
          </span>
        </Fade>

        <hr className="w-[5%] h-[2px] bg-gray-300 rounded border-0" />
      </div>
      <div className="flex flex-row justify-around items-center sm:w-[100%] md:w-[50%] my-4 h-[50px]">
        <button
          className="text-[16px] shadow-md hover:shadow-lg font-[400]  hover:text-white text-gray-600  font-poppins bg-white rounded-md py-2 px-4 active:scale-105 active:bg-purple-300 hover:bg-purple-300 visited:bg-purple-300 "
          onClick={() => setPage(1)}
        >
          Tech skills
        </button>
        <button
          className="text-[16px] shadow-md hover:shadow-lg font-[400] hover:bg-purple-300 active hover:text-white text-gray-600  font-poppins bg-white rounded-md py-2 px-4 active:bg-purple-300 active:scale-105 after:bg-pink-400"
          onClick={() => setPage(!1)}
        >
          Soft skills
        </button>
      </div>

      {page === 1 ? <MySkills skills={skills} /> : <SoftSkills />}
    </div>
  );
}

export default Skills;
