import { Typography } from "antd";
import { Fade } from "react-awesome-reveal";
import React from "react";

const { Title } = Typography;
function AboutText() {
  return (
    <div
      // xs={{ flex: '1' }}
      className="flex-1 p-20 font-mont shadow-xl "
    >
      <Fade>
        <Title>
          <span className="text-[#802bb1] text-center">About Me</span>
        </Title>
        <p className="text-start text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          voluptate quaerat veritatis totam nisi impedit, officia ex doloribus
          itaque commodi id delectus eligendi assumenda ad consequatur! Aut in
          dolores repudiandae? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Ad et culpa quibusdam sint quaerat, dolorem quod maxime impedit
          ducimus velit atque officiis fuga at voluptatibus enim rerum, eum
          eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Fade
          className="text-center text-[#802bb1] font-[500] "
          Fade
          delay={1e3}
          cascade
          damping={0.1}
        >
          WOULD YOU LIKE TO WORK WITH ME?
        </Fade>
      </Fade>
    </div>
  );
}

export default AboutText;
