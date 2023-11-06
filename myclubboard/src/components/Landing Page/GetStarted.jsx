import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Popup from "reactjs-popup";
// This is the GetStarted component that displays the "Explore positions from your fav school clubs" section
const GetStarted = () => {
  /*const handleClick = () => {
    console.log('testing 1 2 3')
  }*/

  return (
    <div className="flex-col font-poppins flex items-center justify-center bg-light_blue pb-8 opacity-50 blur-sm">
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
      <Popup
        className=""
        trigger={
          <button className="font-semibold bg-dark_blue rounded-md text-white text-xl p-2 px-4 mx-auto hover:bg-hover_blue">
            Get Started
          </button>
        }
        position="center center"
      >
        <div className="border-4 bg-white text-black text-center border-dark_blue rounded-xl pb-2 px-20 text-xl">
          <div className="pt-2 pb-6 font-semibold">Choose your role</div>
          <a
            href="/uni"
            className="bg-dark_blue text-white rounded-lg px-6 py-2 font-semibold"
          >
            Student
          </a>
          <div className="pb-6 pt-6 font-semibold">Or</div>
          <div className="pb-6 text-white ">
            <a
              href=""
              className=" bg-dark_blue rounded-lg px-6 py-2 font-semibold"
            >
              Club Lead
            </a>
          </div>
        </div>
      </Popup>
    </div>
  );
};

export default GetStarted;
