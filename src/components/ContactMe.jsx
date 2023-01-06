import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { MdLocationPin } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";
import { BiWorld } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineCheckCircle } from "react-icons/ai";
import { RiMailSendFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import { MdReportGmailerrorred } from "react-icons/md";
import { notification } from "antd";

export const ContactMe = (result) => {
  const form = useRef();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  useEffect(() => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      );
    setValidEmail(emailRegex);
  }, [email]);
  const openNotification = () => {
    notification.open({
      message: "Success!!!",
      description: "Message sent",
      icon: <AiOutlineCheckCircle className="text-green-500" />,
      // onClick: () => {
      //   console.log("Notification Clicked!");
      // },
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setEmail("");
    setName("");
    setMessage("");
    openNotification();

    emailjs
      .sendForm(
        "service_oh16ycv",
        "template_3pbj5wo",
        form.current,
        "4RySP3leNDrIcQU4v"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          const errorMessage = error.text;

          console.log(errorMessage);
        }
      );
  };

  return (
    <div className="md:flex md:flex-col font-poppins lg:flex-row sm:flex sm:flex-col sm:h-[900px] overflow-hidden md:h-[530px] w-[90%] md:justify-center sm:justify-between sm:items-center mt-[100px] relative ">
      <div className="h-[470px] flex flex-col shadow-2xl hover:shadow-2xl rounded-lg lg:rounded-r-none sm:w-[95%] md:w-[35%] md:mb-[50px] sm:mb-[50px] bg-white">
        <header className="text-start md:ml-[40px] sm:text-center sm:mt-4 md:mt-10 mb-4">
          <h1 className="text-[24px] text-gray-600 md:mb-0 font-[300]  ">
            Contact Me
          </h1>
          <Fade
            Fade
            delay={1e3}
            cascade
            damping={0.1}
            className="text-[14px] font-[200] text-gray-400 "
          >
            {/* <p className="text-[14px] font-[300] text-yellow-400"> */}
            Please leave a message
            {/* </p> */}
          </Fade>
        </header>
        <main className="flex flex-col sm:px-3 justify-center items-center sm:h-[250px] md:h-[300px]">
          <section className=" w-[90%] flex justify-center items-center mb-4  ">
            <div className="rounded-full h-10 w-10 border-[1px] border-gray-200 flex items-center justify-center sm:mr-3 md:mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <MdLocationPin className="text-gray-600 text-[20px]" />
            </div>
            <p className="text-[14px] sm:font-[400] md:font-[700] w-[200px]">
              {/* <span className="sm:hidden font-[600] md:flex">Adress:</span> */}
              <span className="md:font-[400] sm:font-[400] ml-1 text-gray-600">
                Ajah, Lagos Nigeria.
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-4 ">
            <div className="rounded-full h-10 w-10 border-[1px] border-gray-200 flex items-center justify-center sm:mr-3 md:mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <BsTelephoneFill className="text-gray-600 text-[17px]" />
            </div>
            <p className="text-[14px] sm:font-[400] md:font-[700] w-[200px]  ">
              {/* <span className="sm:hidden md:flex">Phone:</span> */}
              <span className="text-gray-600 ml-1 md:font-[400] text-[14px]">
                + 234 908 056 6253
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-4  ">
            <div className="rounded-full h-10 w-10 border-[1px] border-gray-200  flex items-center justify-center sm:mr-3 md:mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <RiSendPlaneFill className="text-gray-600 text-[20px]" />
            </div>
            <p className="text-[14px] font-[700] w-[200px]">
              {/* <span className="sm:hidden md:flex">Email:</span> */}
              <span className="font-[400] ml-1 sm:whitespace-normal text-gray-600">
                olorunsolavictorp@gmail.com
              </span>
            </p>
          </section>
          <section className="w-[90%] flex justify-center items-center mb-4 ">
            <div className="rounded-full h-10 w-10 border-[1px] border-gray-200  flex items-center justify-center sm:mr-3 md:mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <BiWorld className="text-gray-600 text-[20px]" />
            </div>
            <p className="text-[14px] w-[200px] font-[700]">
              {/* <span className="sm:hidden md:flex">Website:</span> */}
              <span className="text-gray-600 font-[400] ml-1">
                olorunsola.netlify.app
              </span>
            </p>
          </section>
          <section className="w-[90%] md:flex sm:hidden justify-center items-center mb-4 ">
            <div className="rounded-full h-10 w-10 border-[1px] border-purple-200 flex items-center justify-center sm:mr-3 md:mr-6 cursor-pointer  active:bg-[#6408f947] bg-white  ">
              <AiOutlineGithub className="text-gray-600 text-[20px]" />
            </div>
            <p className="text-[14px] w-[200px] font-[700]">
              {/* <span className="sm:hidden md:flex">GitHub:</span> */}
              <span className="text-gray-600 font-[400] ml-1">
                github.com/Olorunsolavictor
              </span>
            </p>
          </section>
        </main>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col text-white  bg-[#2d283e] hover:shadow-2xl shadow-md md:w-[30%] sm:w-[97%] sm:h-[600px] md:h-[470px] justify-center items-center rounded-md lg:rounded-l-none  sm:mb-[100px] md:mb-[50px] "
      >
        <h1 className="text-[20px] text-[#802bb1] sm:ml-0 md:ml-[-90px] mt-8 font-[500]">
          Send me a message
        </h1>

        <input
          type="text"
          autoComplete="off"
          name="user_name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" border-l-0 placeholder-white placeholder:text-[14px] text-white border-r-0 border-t-0 pb-0 mb-0  w-[80%] h-[50px] text-[16px] border-[1px]  outline-none bg-[#2d283e] active:bg-[#2d283e] hover:bg-[#2d283e] "
        />

        <input
          type="email"
          autoComplete="off"
          name="user_email"
          placeholder="Email"
          className="border-l-0 border-r-0 placeholder-white placeholder:text-[14px] border-t-0  pb-0 mb-1 w-[80%]  h-[50px] text-[16px] bg-[#2d283e] border-[1px] outline-none active:bg-[#2d283e] hover:bg-[#2d283e]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
        />
        <div className="h-[20px] flex flex-col justify-center w-[80%] ">
          <span
            className={email && !validEmail && !emailFocus ? "flex" : "hidden"}
          >
            <Fade>
              <div className="text-orange-500 mt-2 mr-1 text-[12px]">
                <MdReportGmailerrorred />
              </div>

              <p className="invalid text-orange-600 text-[12px] mb-2 mt-1">
                Please, enter a valid Email
              </p>
            </Fade>
          </span>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="border-l-0 placeholder-white placeholder:text-[14px] border-r-0 border-t-0 w-[80%] bg-[#2d283e] text-[14px]  border-[1px]  outline-none active:bg-[#2d283e] hover:bg-[#2d283e]"
        />
        <div className="w-[80%] whitespace-nowrap">
          <button
            className=" w-[40%] text-center h-[55px] mt-5 cursor-pointer "
            type="submit"
            disabled={!validEmail || !name}
          >
            <p
              className={
                !validEmail || !name || !message ? "disabled" : "enabled"
              }
            >
              <span className="flex items-center justify-start">
                Send
                <RiMailSendFill className="ml-2 text-white" />
              </span>
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};
