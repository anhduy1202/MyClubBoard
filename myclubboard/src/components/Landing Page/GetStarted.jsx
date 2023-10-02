import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
// This is the GetStarted component that displays the "Explore positions from your fav school clubs" section
const GetStarted = () => {
  return (
    <div className="flex-col font-poppins flex items-center justify-center bg-light_blue pb-8">
      <p className="text-2xl text-center font-bold mt-10">
        Explore positions from your favorite school clubs
      </p>
      <img
        className="md:w-[640px] md:mx-4 w-[320px] shadow-2xl my-12 rounded-lg hover:transition-all hover:duration-200"
        src="/tablet.svg"
        alt=""
      />
      <div className="mx-auto mb-5 flex flex-col gap-4">
        <div className="flex items-center ">
          <BsFillCheckCircleFill size={26} color="#115D9E" />
          <p className="text-dark_blue text-xl font-semibold ml-3 w-full">
            No Login Required
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
      <button className="font-semibold bg-dark_blue rounded-md text-white text-xl p-2 px-4 mx-auto hover:bg-hover_blue">
        Get Started
      </button>
      {/* Code goes here */}
    </div>
  );
};

export default GetStarted;
