import React from "react";
import {BiSearchAlt} from "react-icons/bi"
import {GrSend} from "react-icons/gr"
import {TbViewfinder} from "react-icons/tb"
// This is the HowItWorks component that displays the "How it works" section
const HowItWorks = () => {
  return (
    <div className=" text-center font-poppins">
      <p className=" font-semibold text-2xl m-8">How it works</p>
      <div className="m-10">
        <div className="flex justify-center">
          <BiSearchAlt className=" bg-light_pink p-5 text-6xl rounded-3xl"></BiSearchAlt>
        </div>
        <p className=" font-semibold text-xl m-2">Browse</p>
        <p className=" text-sm">Search for any club positions you're interested in, especially from your college</p>
      </div>
      <div className="m-10">
        <div className="flex justify-center">
          <GrSend className= " bg-aqua p-5 text-6xl rounded-3xl "></GrSend>
        </div>
        <p className=" font-semibold text-xl m-2">Apply</p>
        <p className="text-sm">Submit your application with a verified email</p>
      </div>
      <div className="m-10">
        <div className="flex justify-center">
          <TbViewfinder className=" bg-light_purple p-5 text-6xl rounded-3xl "></TbViewfinder>
        </div>
        <p className=" font-semibold text-xl m-2">Track</p>
        <p className="text-sm">Keep track of your application after it's submitted</p>
      </div>
      {/* Code goes here */}
    </div>
  );
};

export default HowItWorks;
