import React from "react";
import CollgeIcon from "../General/CollgeIcon";
// This is the OurCommunity component that displays the "Our Community" section
const OurCommunity = () => {
  return (
    <div className="relative rounded-lg my-24 h-[400px] p-4 mx-12 bg-gradient-to-tl from-[#EEE9FF] to-[#CEE8FF] font-poppins text-2xl font-semibold flex flex-col gap-8 justify-center items-center">
      <CollgeIcon imgSrc="/csuf.svg" position="left-[10%] top-[-3rem]" />
      <CollgeIcon imgSrc="/csulb.svg" position="right-[-10%] top-[0rem]" />
      <CollgeIcon imgSrc="/uci.svg" position="left-[-10%] top-[30%]" />
      <CollgeIcon imgSrc="/ucla.svg" position="right-[-10%] bottom-[20%]" />
      <CollgeIcon imgSrc="/ucsd.svg" position="right-[38%] bottom-[-10%]" />
      <p className="">Our Community</p>
      <div className="drop-shadow-[10px_20px_24px_rgba(249,225,221,1)] flex flex-col items-center text-center justify-center w-32 h-32 rounded-lg bg-white">
        <p className="text-3xl"> 50+ </p>
        <p className="text-xs font-normal p-2"> Clubs & Organizations </p>
      </div>
    </div>
  );
};

export default OurCommunity;
