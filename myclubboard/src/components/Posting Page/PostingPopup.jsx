import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import { LuShare } from "react-icons/lu";

const PostingPopup = ({ posting, date }) => {
  return (
    <Popup open={true} position="center center">
      {(close) => (
        <div className={`bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] text-black m-4 text-center rounded-xl p-4 text-xl`}>
          <div className="flex items-center justify-center gap-4 ">
            <img
              className="w-[60px] h-[60px] object-contain"
              src={posting.club_logo}
              alt="posting image"
            />
            <p className="font-medium text-sm">{posting.club_name}</p>
            <AiOutlineClose
              size={24}
              color="black"
              className="ml-auto cursor-pointer"
              onClick={() => {
                close();
              }}
            />
          </div>
          <div className="mt-4">
            <p className="font-bold ">{posting.title}</p>
            <p className="text-sm font-light"> Posted on: {date} </p>
            <div className="text-sm font-medium mt-4 gap-2 flex items-center justify-center">
              <LuShare size={24} color="grey" />
              <p>Share</p>
            </div>
            <div className="text-start mt-6">
              <p>Qualifications</p>
              <p className="mt-2 text-sm">{posting.qualification}</p>
              <p className="mt-4">Tools</p>
              <p className="mt-2 text-sm">{posting.tools}</p>
              <p className="mt-4 ">Responsibilities</p>
              <p className="mt-2 text-sm">{posting.responsibilities}</p>
            </div>
            <button className="mt-8 mb-4 text-white font-semibold py-1 px-4 rounded-md bg-gradient-to-tl from-[#B49AFF] to-[#05A3FF]">
              Apply
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PostingPopup;
