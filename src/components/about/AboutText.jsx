import { Fade } from "react-awesome-reveal";
import React from "react";

function AboutText() {
  return (
    <div className="flex-1 sm:py-10 md:py-5 font-mont sm:w-[90%] w-auto px-10 md:h-auto shadow-xl ">
      <Fade>
        <div className="text-center flex flex-col items-center md:mb-5">
          <span className="text-gray-600 font-poppins font-[200]  sm:text-[22px] md:text-[25px]">
            About Me
          </span>
          <hr className="w-[20%] h-[2px] bg-gray-300 rounded border-0" />
        </div>
        <p className="text-start text-gray-500 p-2 font-poppins font-[300] sm:text-start md:text-[13px] sm:text-[13px]">
          {/* Hi again! I am Victor Olorunsola, a budding Frontend Developer who
          loves to design and build the user interfaces of functional web
          applications while contributing to the success of the entire product.
          Although a licensed Medical doctor, my journey into Tech started in
          2019, being self-taught, I acquired basic skills in HTML, CSS and
          Wordpress that I have used as a freelancer at{" "}
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
          collaboration. I proficiently work with Wordpress, webflow
          TailwindCSS, Javascript and its frameworks like React.js and Vue.Js. I
          am an excellent communicator and collaborator, a lover of music,
          sports, and art, and a serial learner. */}
          Hey there! I'm Victor Olorunsola, an ambitious Frontend Developer. My
          journey into tech began in 2019, self-teaching HTML, CSS, and
          WordPress. I freelanced on Upwork, then pursued formal growth through
          a Frontend program at Stutern. Now, I'm proficient in WordPress,
          Webflow, TailwindCSS, and JavaScript with frameworks like React.js and
          Vue.js. I excel in UI design for functional web apps, and my
          collaborative spirit and communication skills amplify my capabilities.
          Beyond coding, I'm an art, music, and sports enthusiast, always
          seeking growth.
        </p>
        <Fade
          className="text-center text-gray-600 sm:text-[15px] md:text-[17px] whitespace-normal mb-5 lowercase font-poppins font-[200] "
          Fade
          delay={1e3}
          cascade
          damping={0.1}
        >
          Can we build something together?
        </Fade>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://drive.google.com/file/d/1GPtL8wpfv-hfeSelIkfCyfLsI_mpmB1E/view?usp=drive_link"
        >
          <button className=" block bg-purple-800 hover:bg-purple-800/70 active:bg-purple-300 px-4 py-2 text-white rounded-md font-poppins font-[700]">
            Resume
          </button>
        </a>
      </Fade>
    </div>
  );
}

export default AboutText;
