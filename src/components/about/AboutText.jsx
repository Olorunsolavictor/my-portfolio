import { Typography } from "antd";
import { Fade } from "react-awesome-reveal";
import React from "react";

const { Title } = Typography;
function AboutText() {
  return (
    <div
      // xs={{ flex: '1' }}
      className="flex-1 sm:py-10 md:pt-5 font-mont sm:w-[80%] w-auto px-10 md:h-[500px] shadow-xl "
    >
      <Fade>
        <Title>
          <span className="text-[#802bb1] sm:text-[22px] md:text-[25px] text-center">
            About Me
          </span>
        </Title>
        <p className="text-start text-gray-500 sm:text-center sm:text[15px]">
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
