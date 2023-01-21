import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";

const ShopOut = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col  items-center justify-center h-screen w-full relative">
      <button
        onClick={() => navigate(-1)}
        smooth
        className="fixed rounded-full shadow-xl z-50 font-poppins text-lg md:top-[5%] sm:top-[5%] sm:left-[80%] md:left-[90%]"
      >
        <div className="rounded-full   h-16 w-16 flex items-center justify-center cursor-pointer  active:bg-[#6408f947] bg-white hover:scale-110 transition duration-500  active:text-white  hover:shadow-lg active:shadow-none shadow-xl">
          <RiArrowGoBackFill className="text-black" />
        </div>
      </button>
      <div className="rounded-md shadow-lg w-[60%] h-[200px] flex flex-col p-5 text-center justify-center items-center bg-purple-400/70">
        <p className="font-500 text-[35px] text-white">Coming Soon!!!</p>
      </div>
    </div>
  );
};

export default ShopOut;
