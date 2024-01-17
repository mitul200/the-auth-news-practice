/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import Navber from "./Navber/navber";
const Header = () => {
  return (
    <div>
      <div className=" flex justify-center my-10">
        <div className=" w-[471px] container ">
          <img src={logo} alt="" />
          <p className=" text-gray-600 text-center font-semibold">
            Journalism Without Fear or Favour
          </p>
          <p className=" text-center text-2xl font-bold text-slate-600">
            Sunday, November 27, 2022
          </p>
        </div>
      </div>
      <div className=" w-[1140px] flex justify-center my-3 mx-auto">
        <div className="flex">
          <button className="btn btn-error px-6 py-2"> Latest</button>
          <Marquee className=" text-red-500 bg-slate-100">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </Marquee>
        </div>
      </div>
      <Navber></Navber>
    </div>
  );
};

export default Header;
