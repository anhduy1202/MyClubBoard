import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
// This is the GetStarted component that displays the "Explore positions from your fav school clubs" section
const GetStarted = () => {
  return (
    <div className="flex-col flex justify-center bg-light_blue">
      <p className="text-4xl font-bold mt-10">
        Explore positions from your favorite school clubs
      </p>
      <img src="/landing_tablet.svg" alt="" />
      <div className="mx-auto mb-5">
        <div className="flex items-center ">
          <BsFillCheckCircleFill size={26} color="#115D9E" />
          <p className="text-dark_blue text-xl font-semibold ml-3 w-full">
            No Long Required
          </p>
        </div>
        <div className="flex items-center ">
          <BsFillCheckCircleFill size={26} color="#115D9E" />
          <p className="text-dark_blue text-xl font-semibold ml-3 w-full">
            Easy Apply
          </p>
        </div>
        <div className="flex justify-center ">
          <BsFillCheckCircleFill size={26} color="#115D9E" />
          <p className="text-dark_blue text-xl font-semibold ml-3 w-full">
            Application Tracking
          </p>
        </div>
        <div className="flex justify-center mb-6 ">
          <BsFillCheckCircleFill size={26} color="#115D9E" />
          <p className="text-dark_blue text-xl font-semibold ml-3 w-full">
            Position Posting
          </p>
        </div>
      </div>
      <button className="bg-dark_blue rounded-md text-white text-3xl w-44	mx-auto ">
        Get Started
      </button>
      {/* Code goes here */}
    </div>
  );
};

export default GetStarted;
