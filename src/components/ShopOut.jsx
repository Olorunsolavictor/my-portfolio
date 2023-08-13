import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dash from "../assets/home-mobile.jpg";
import dashboardDesktop from "../assets/home.jpg";
// import browsee from "../assets/mocks/browsee.png";
// import vali from "../assets/mocks/vali.png";
// import add from "../assets/mocks/add.png";
import projects from "../assets/projects-mobile.jpg";
// import success from "../assets/mocks/success.png";
// import addPicture from "../assets/mocks/addPicture.jpg";
// import inputs from "../assets/mocks/inputs.jpg";
import projectDesktop from "../assets/projects.jpg";
import { AiOutlineArrowUp } from "react-icons/ai";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiLinkedinLine, RiMailLine, RiGithubFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";

function ProjectDetails() {
  const [scrollUp, setScrollUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 340) {
        setScrollUp(true);
      } else {
        setScrollUp(false);
      }
    });
  }, []);
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center  h-screen w-full  text-center">
      {scrollUp && (
        <button
          onClick={bottomToTop}
          className="fixed z-50 rounded-full shadow-xl font-poppins text-lg md:top-[80%] sm:top-[80%] sm:left-[80%] md:left-[90%]"
        >
          <div className="rounded-full   h-[68px] w-[69px] flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
            <AiOutlineArrowUp className="text-black" />
          </div>
        </button>
      )}

      <button
        onClick={() => navigate(-1)}
        smooth
        className="fixed rounded-full shadow-xl z-50 font-poppins text-lg md:top-[5%] sm:top-[5%] sm:left-[80%] md:left-[90%]"
      >
        <div className="rounded-full   h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
          <RiArrowGoBackFill className="text-black" />
        </div>
      </button>

      <div className="text-center flex flex-col items-center md:mt-[20px]  sm:mt-10 md:mb-[20px] sm:mb-3 ">
        <span className="text-gray-600 font-poppins font-[500] sm:text-[27px] md:text-[30px]">
          Rotary Club Of Port Harcourt phoenix official Website
        </span>
        <hr className="w-[20%] h-[2px] bg-gray-300 rounded border-0" />
      </div>
      <div className="sm:w-[60%] text-center">
        <p className="mb-[10px] text-gray-600  font-poppins font-[400]  sm:text-[16px]">
          The Roary Club of Port Harcourt Phoenix is a vibrant and active club
          that is making a difference in the lives of people in Port Harcourt
          and beyond.
        </p>
      </div>

      <p className="mb-[10px]  text-gray-600 font-poppins font-[200] text-[18px]">
        <span className="font-[500]">Project Year:</span> 2023
      </p>
      <p className="mb-[10px]  text-gray-600 font-poppins font-[200] text-[18px]">
        <span className="font-[500]">Project Duration:</span> 2 Weeks
      </p>
      <p className="mb-[100px]  text-gray-600 font-poppins font-[200] text-[18px]">
        <span className="font-[500]">Stack:</span> WordPress
      </p>

      <div className="w-[80%]  h-[350px] sm:flex sm:flex-col sm:mt-3 sm:mb-3  md:flex md:flex-row justify-evenly items-center ">
        <img src={dash} alt="dashboard" className="md:w-[20%] sm:w-[85%] " />
        <img
          src={dashboardDesktop}
          alt="dashboard-desktop"
          className="w-[50%] bg-slate-500  sm:hidden md:flex"
        />
      </div>

      <div className="text-center md:h-auto sm:w-[90%] md:w-[60%] mt-[100px] bg-[#25488d]/40 rounded-md shadow-xl p-10 mb-[100px]">
        <div className="text-center flex flex-col items-center mt-[0px] md:mb-[20px]">
          <span className="text-gray-600 font-poppins font-[200] sm:text-[22px] md:text-[30px]">
            Overview
          </span>
          <hr className="w-[5%] h-[2px] bg-[#f8a508] rounded border-0 " />
        </div>
        <p className="mb-[10px] text-start text-gray-600 font-poppins font-[400] ">
          The Rotary Club of Port Harcourt's website functions as a chapter hub
          With notable components such as a blog for story dissemination, a
          donation gateway for initiative backing, and a project exhibit
          spotlighting community influence, the site encourages engagement and
          effective communication. Additionally, it offers an events calendar,
          member directory, and resource repository to optimize interaction and
          knowledge sharing. Responsive design guarantees accessibility on
          various devices, enabling Rotary chapters to effectively amplify their
          community-driven initiatives. This was built with WordPressusing and
          intergrated Plugins including Paystack plugin, GiveWP Plugin, Calendar
          Plugin, Tidio chat Plugin and others.
        </p>
      </div>

      <div className="w-[80%] h-[350px] flex mb-40 flex-row-reverse justify-evenly items-center md:mb-[100px] sm:mt-[100px] ">
        <img
          src={projects}
          alt="dashboard"
          className="md:w-[20%] sm:w-[80%] sm:mb-10 "
        />
        <img
          src={projectDesktop}
          alt="dashboard-desktop"
          className="w-[50%] h-[504px] sm:hidden md:flex"
        />
      </div>

      <div className="text-center h-auto sm:w-[90%] md:w-[60%]  bg-[#f8a508]/40 rounded-md shadow-xl p-10 mb-[100px]">
        <div className="text-center flex flex-col items-center mt-[0px] md:mb-[20px] sm:mb-[20px]">
          <span className="text-white font-poppins font-[200] sm:text-[22px] md:text-[30px]">
            Closing Message
          </span>
          <hr className="w-[5%] h-[2px] bg-gray-300 rounded border-0 " />
        </div>
        <p className="mb-[10px] text-white font-poppins font-[400]">
          "Thank you for taking your time to view this project. I hope you found
          it informative and it gave you a sense of my skills and experience in
          Frontend Web Development. If you have any questions, or would like to
          discuss a pottential project, please do not hesitate to reach out to
          me. Thank you again for your interest in my work!"
        </p>
      </div>
      <footer className="sm:w-[90%] md:w-[60%] bg-gray-100 h-auto p-10 flex flex-col justify-center mb-10 items-center">
        <div className="flex justify-evenly bg-white md:shadow-xl sm:shadow-md mb-5 hover:backdrop-blur-sm rounded-lg sm:w-[100%] md:w-[60%]  ">
          <a
            href="https://linkedin.com/in/victor-olorunsola-93037a197"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="rounded-full h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
              <RiLinkedinLine className="text-black" />
            </div>
          </a>
          <a
            href="https://github.com/Olorunsolavictor"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
              <RiGithubFill className="text-black" />
            </div>
          </a>
          <a
            href="https://twitter.com/Olorunsola_MD"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
              <TiSocialTwitter className="text-black" />
            </div>
          </a>
          <a href="mailto:olorunsolavictorp@gmail.com">
            <div className="rounded-full h-16 w-16 flex items-center justify-center  cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500 active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
              <RiMailLine className="text-black" />
            </div>
          </a>
        </div>

        <p className=" font-poppins font[300]  text-gray-400">
          Designed with React.js by Olorunsola | 2021
        </p>
      </footer>
    </div>
  );
}

export default ProjectDetails;
