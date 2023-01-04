import { Typography } from "antd";
import { Fade } from "react-awesome-reveal";
import React from "react";

const { Title } = Typography;
function AboutText() {
  return (
    <div
      // xs={{ flex: '1' }}
      className="flex-1 sm:py-10 md:py-10 font-mont sm:w-[90%] w-auto px-10 md:h-auto shadow-xl "
    >
      <Fade>
        <div className="text-center flex flex-col items-center md:mb-5">
          <span className="text-gray-600 font-poppins font-[200]  sm:text-[22px] md:text-[25px]">
            About Me
          </span>
          <hr className="w-[20%] h-[2px] bg-gray-300 rounded border-0" />
        </div>
        <p className="text-start text-gray-500 font-poppins font-[200] sm:text-center md:text-[13px] sm:text-[12px]">
          Hi again! I am Victor Olorunsola, a budding Frontend Developer who
          loves to design and build the user interfaces of functional web
          applications while contributing to the success of the entire product.
          Although a licensed Medical doctor, my journey into Tech started in
          2019, being self-taught, I acquired basic skills in HTML and CSS that
          I have used as a freelancer at{" "}
          <a
            className="text-green-500 font-[500] hover:text-green-500/50"
            href="https://www.upwork.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Upwork
          </a>
          . Seeking more Knowledge, I enrolled and completed a Frontend
          development program at{" "}
          <a
            className="text-[#1bd3c6] font-[500] hover:text-[#1bd3c6]/50"
            href="https://www.stutern.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stutern
          </a>
          , where I worked on several projects individually and in
          collaboration. I proficiently work with TailwindCSS, Javascript,
          React.js, Rest APIs, and UI libraries like AntD and MUI. I am an
          excellent communicator and collaborator, a lover of music, sports, and
          art, and a serial learner.
        </p>
        <Fade
          className="text-center text-gray-600 text-[17px] whitespace-normal lowercase font-poppins font-[200] "
          Fade
          delay={1e3}
          cascade
          damping={0.1}
        >
          Can we build something together?
        </Fade>
      </Fade>
    </div>
  );
}

export default AboutText;
