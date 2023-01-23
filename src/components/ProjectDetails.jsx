import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import dash from "../assets/mocks/dash.png";
import dashboardDesktop from "../assets/mocks/dashboardDesktop.jpg";
import browsee from "../assets/mocks/browsee.png";
import vali from "../assets/mocks/vali.png";
import add from "../assets/mocks/add.png";
import password from "../assets/mocks/password.png";
import success from "../assets/mocks/success.png";
import addPicture from "../assets/mocks/addPicture.jpg";
import inputs from "../assets/mocks/inputs.jpg";
import successDesktop from "../assets/mocks/successDesktop.jpg";
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
          Handout
        </span>
        <hr className="w-[20%] h-[2px] bg-gray-300 rounded border-0" />
      </div>
      <div className="sm:w-[80%]">
        <p className="mb-[10px] text-gray-600  font-poppins font-[400]  sm:text-[16px]">
          Handout is a platform for giving out unwanted personal items. This
          platform allows people to give out useful but <br />
          unwanted items to others who may need them
        </p>
      </div>

      <p className="mb-[10px]  text-gray-600 font-poppins font-[200] text-[18px]">
        <span className="font-[500]">Project Year:</span> 2021
      </p>
      <p className="mb-[100px]  text-gray-600 font-poppins font-[200] text-[18px]">
        <span className="font-[500]">Project Duration:</span> 6 Weeks
      </p>

      <div className="w-[80%] h-[350px] sm:flex sm:flex-col sm:mt-3 sm:mb-3  md:flex md:flex-row justify-evenly items-center ">
        <img src={dash} alt="dashboard" className="md:w-[20%] sm:w-[85%] " />
        <img
          src={dashboardDesktop}
          alt="dashboard-desktop"
          className="w-[70%] h-[504px] sm:hidden md:flex"
        />
      </div>

      <div className="text-center md:h-auto sm:w-[90%] md:w-[60%] mt-[100px] bg-green-200/50 rounded-md shadow-xl p-10 mb-[100px]">
        <div className="text-center flex flex-col items-center mt-[0px] md:mb-[20px]">
          <span className="text-gray-600 font-poppins font-[200] sm:text-[22px] md:text-[30px]">
            Overview
          </span>
          <hr className="w-[5%] h-[2px] bg-gray-300 rounded border-0 " />
        </div>
        <p className="mb-[10px] text-start text-gray-600 font-poppins font-[400] ">
          Handout is a platform for giving out unwanted personal items. This
          platform allows people to give out useful but unwanted items to others
          who may need them. The aim of Handout is to allow users to create an
          account, log in, upload images of what they want to give out (at a
          giveaway price), and browse through all items listed on the platform
          if they wish to purchase. This project involved a team of Front end
          developers, Back-end developers, and Product designers guided by a
          Project manager. As a member of the frontend team, our task was to
          build a seamless interface that integrates the design with
          functionality, by consuming the endpoints provided by the Back-end
          team while also maintaining aesthetics and easy navigation through
          pages. Handout was built with React.js, TailwindCSS and UI libraries
          like MUI and AntD.
        </p>
      </div>
      <div className="text-center flex flex-col items-center mt-[0px] md:mb-[20px] ">
        <span className="text-gray-600 font-poppins font-[200] sm:text-[25px] md:text-[30px]">
          Problem Statements and Solutions
        </span>
        <hr className="w-[5%] h-[2px] bg-gray-300 rounded border-0 " />
      </div>
      <section className="flex md:flex-row sm:flex-col justify-evenly items-center h-auto sm:w-[90%] md:w-[60%] mb-[100px] font-poppins shadow-lg rounded-lg sm:py-5">
        <div className=" flex flex-col justify-start items-center  h-[100%] sm:w-[100%] md:w-[50%] ">
          <div className=" w-full p-5 text-start mb-0 mt-5">
            <p className=" font-[500] leading-3">Problem</p>
            <p>
              Users should be able navigate from one page to another while using
              the application and should only navigate through authenticated
              pages only when signed in.
            </p>
          </div>
          <div className=" w-full p-5 text-start  ">
            <p className=" font-[500] leading-3">Solution</p>
            <p>
              Using React Router, I defined multiple routes thereby handling the
              client-side routing in the application, so users Can display
              multiple views in a react application
            </p>
          </div>
          <div className=" w-full p-5 text-start ">
            <p className="font-[500]">Tools I used</p>
            <ul>
              <li>
                <p>React-Router-Dom(Routes, useNavigate, Links)</p>
              </li>
              <li>
                <p>Node.js</p>
              </li>
              <li>
                <p>Npm</p>
              </li>
              <li>
                <p> VS Code(IDE)</p>
              </li>
            </ul>
          </div>
        </div>

        <img src={browsee} className=" w-[250px] " alt="browse item " />
      </section>
      <section className="flex md:flex-row sm:flex-col justify-evenly items-center h-auto sm:w-[90%] md:w-[60%] mb-[100px] font-poppins shadow-lg rounded-lg sm:py-5">
        <div className="  flex flex-col justify-start items-center  h-[100%] sm:w-[100%] md:w-[50%] ">
          <div className=" w-full p-5 text-start mb-0 mt-5">
            <p className=" font-[500] leading-3">Problem</p>
            <p>
              Users should only submit forms with the required format and should
              see error messages if the specific input format is wrong.
            </p>
          </div>
          <div className=" w-full p-5 text-start  ">
            <p className=" font-[500] leading-3">Solution</p>
            <p>
              I validated the forms using Regular expressions and React Hooks.
            </p>
          </div>
          <div className=" w-full p-5 text-start ">
            <p className="font-[500]">Tools I used</p>
            <ul className=" leading-3">
              <li>
                <p>VS Code(IDE) </p>
              </li>
              <li>
                <p>Axios</p>
              </li>
              <li>
                <p>CSS</p>
              </li>
              <li>
                <p>Regex</p>
              </li>
            </ul>
          </div>
        </div>

        <img src={vali} className=" w-[250px] " alt="browse item " />
      </section>
      <section className="flex md:flex-row sm:flex-col justify-evenly items-center h-auto sm:w-[90%] md:w-[60%] mb-[100px] font-poppins shadow-lg rounded-lg sm:py-5">
        <div className="  flex flex-col justify-start items-center  h-[100%] sm:w-[100%] md:w-[50%] ">
          <div className=" w-full p-5 text-start mb-0 mt-5">
            <p className=" font-[500] leading-3">Problem</p>
            <p>
              Users should be able to view layout to reset password and they
              should be able to reset their password.
            </p>
          </div>
          <div className=" w-full p-5 text-start  ">
            <p className=" font-[500] leading-3">Solution</p>
            <p>
              I implemented all the responsive Layouts using Tailwind CSS. I
              also intergrated the layout with the "reset-password" endpoints
              provided in the back-end documentation. This way, I manage all
              requests made via the HTTP protocol in the application
            </p>
          </div>
          <div className=" w-full p-5 text-start ">
            <p className="font-[500]">Tools I used</p>
            <ul className=" leading-3">
              <li>
                <p>Tailwind CSS</p>
              </li>
              <li>
                <p>CSS </p>
              </li>
              <li>
                <p>Axios</p>
              </li>
              <li>
                <p>React-Router-Dom </p>
              </li>
              <li>
                <p>Swagger (documentation) </p>
              </li>
              <li>
                <p>Figma </p>
              </li>
              <li>
                <p>VS Code(IDE) </p>
              </li>
            </ul>
          </div>
        </div>

        <img src={password} className=" w-[250px] " alt="browse item " />
      </section>
      <div className="w-[80%] h-[350px] flex flex-row-reverse justify-evenly items-center md:mb-[100px] sm:mt-[100px] ">
        <img
          src={success}
          alt="dashboard"
          className="md:w-[20%] sm:w-[80%] sm:mb-10 "
        />
        <img
          src={successDesktop}
          alt="dashboard-desktop"
          className="w-[70%] h-[504px] sm:hidden md:flex"
        />
      </div>
      <section className="flex md:flex-row sm:flex-col justify-evenly items-center sm:mt-[100px] h-auto sm:w-[90%] md:w-[60%] mb-[100px] font-poppins shadow-lg rounded-lg sm:py-5">
        <div className="  flex flex-col justify-start items-center  h-[100%] sm:w-[100%] md:w-[50%] ">
          <div className=" w-full p-5 text-start mb-0 mt-5">
            <p className=" font-[500] leading-3">Problem</p>
            <p>
              Users should be able to add items to their listings by adding, at
              most, 7 images, a description, colour, condition, price and
              shipping optons for each item.
            </p>
          </div>
          <div className=" w-full p-5 text-start  ">
            <p className=" font-[500] leading-3">Solution</p>
            <p>
              I used the upload component from antD to allow users post images
              to the image endpoint provided in the SWagger documentation by the
              Back-end team. Using REact Hooks I organized all the input value
              from the the layout and sent them as a group to their various
              endpoints.I styled the page using TailwindCSS.
            </p>
          </div>
          <div className=" w-full p-5 text-start ">
            <p className="font-[500]">Tools I used</p>
            <ul className=" leading-3">
              <li>
                <p>Tailwind CSS</p>
              </li>
              <li>
                <p>AntDesign</p>
              </li>
              <li>
                <p>Axios</p>
              </li>
              <li>
                <p>Material UI </p>
              </li>
              <li>
                <p>Swagger (documentation) </p>
              </li>
              <li>
                <p>Figma </p>
              </li>
              <li>
                <p>VS Code(IDE) </p>
              </li>
            </ul>
          </div>
        </div>

        <img src={add} className=" w-[250px] " alt="browse item " />
      </section>
      <div className=" md:flex sm:hidden w-[80%]  h-auto flex flex-col justify-evenly items-center mt-[100px] ">
        <img src={addPicture} alt="dashboard" className="w-[70%] " />
        <img
          src={inputs}
          alt="dashboard-desktop"
          className="w-[70%] h-[504px]"
        />
      </div>
      <div className="text-center h-auto sm:w-[90%] md:w-[60%] bg-yellow-400/50 rounded-md shadow-xl p-10 mb-[100px]">
        <div className="text-center flex flex-col items-center mt-[0px] md:mb-[20px] sm:mb-[20px]">
          <span className="text-gray-600 font-poppins font-[200] sm:text-[22px] md:text-[30px]">
            Summary
          </span>
          <hr className="w-[5%] h-[2px] bg-gray-300 rounded border-0 " />
        </div>
        <p className="mb-[10px] text-start text-gray-600 font-poppins font-[400] ">
          The Handout project is a hypothetical product that solves a real-life
          problem and is a confidence booster for me. It has helped provide me
          with hands-on experience while working alongside other teams to
          achieve an outstanding product. At the time of writing this review,
          the project layout is complete however, there are still a few works to
          be done in terms of functionality, this includes implementing the
          dynamic display of products as a JSON server, and dummy data were used
          at some point. With what we learned, we will get Handout ready for use
          anytime from now.
        </p>
      </div>
      <div className="text-center h-auto sm:w-[90%] md:w-[60%]  bg-purple-400/80 rounded-md shadow-xl p-10 mb-[100px]">
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
          Designed from scratch by Olorunsola | 2021
        </p>
      </footer>
    </div>
  );
}

export default ProjectDetails;
