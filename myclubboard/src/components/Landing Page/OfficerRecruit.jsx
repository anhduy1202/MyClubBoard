import React from "react";
import { BiSolidLock } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
// This is the OfficerRecruit component that displays the "Want to recruit officer for your club" section
const OfficerRecruit = () => {
  return (
    <div className="p-4 flex font-poppins flex-col items-center bg-light_blue mt-4">
      <p className="text-center font-semibold text-2xl">
        Want to recruit officer for your club?
      </p>
      <img
        className="md:w-[640px] md:mx-4 w-[320px] shadow-2xl my-12 rounded-lg hover:transition-all hover:duration-200"
        src="/post.svg"
        alt=""
      />
      <div className="flex flex-col my-8">
        <div className="flex">
          <BiSolidLock
            className="bg-dark_blue rounded-xl m-4 w-24 h-14 p-2"
            color="white"
          />
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Authenticate</p>
            <p className="font-roboto">
              Make sure you’ve been added as club officer so we can authenticate
              your email
            </p>
          </div>
        </div>
        <div className="flex mt-8">
          <AiFillHome
            className="bg-dark_blue rounded-xl m-4 w-20 h-14 p-2"
            color="white"
          />
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Club Home</p>
            <p className="font-roboto">
              After authenticate, you’ll have access to your club home page{" "}
            </p>
          </div>
        </div>
        <div className="flex mt-8">
          <BsSend
            className="bg-dark_blue rounded-xl m-4 w-20 h-14 p-2"
            color="white"
          />
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Start Posting</p>
            <p className="font-roboto">
              Now you can post board application to start recruiting{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficerRecruit;
