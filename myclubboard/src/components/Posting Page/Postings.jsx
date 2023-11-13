import React, { useState } from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import PostingPopup from "./PostingPopup";

const Postings = ({ postings }) => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    // This function helps us keep track of the search bar value
    setSearch(e.target.value);
    console.log(e.target.value); //Open your console and type in the search bar to see the value change
  };
  return (
    <section className="w-full">
      <div>
        {/* This is the position/clubs search bar */}
        <div className="rounded-md mx-12 mt-4 p-2 bg-white flex items-center drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]">
          <input
            type="text"
            className="outline-none w-full text-black"
            placeholder="Search Positions/Clubs"
            value={search}
            onChange={handleChange}
          />
          <AiOutlineSearch size={24} color="black" className="" />
        </div>
        {postings.error ? (
          <div className="text-center text-2xl font-medium mt-8">
            No postings found
          </div>
        ) : (
          <>
            {postings?.map((posting) => {
              return <Posting key={posting.id} posting={posting} />;
            })}
          </>
        )}
      </div>
    </section>
  );
};

export default Postings;

const Posting = ({ posting }) => {
  const date = new Date(posting.posted_date);
  const [isOpen, setOpen] = useState(false);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", option);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer text-roboto rounded-lg flex w-100vw p-2 bg-white my-8 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
    >
      <PostingPopup open={isOpen} posting={posting} date={formattedDate} />
      <img
        className="w-[60px] object-contain rounded-[50%] mr-4"
        src={posting.club_logo}
        alt={posting.club_name}
      />
      <div className="flex flex-col w-full">
        <p className="font-medium">{posting.title}</p>
        <div className="flex items-center mt-2">
          <BiCalendar size={20} className="mr-[0.25rem]" color="#115D9E" />
          <p>{formattedDate}</p>
          <AiOutlineHome
            size={20}
            className="mr-[0.25rem] ml-auto"
            color="#115D9E"
          />
          <p className="mr-2">{posting.club_name} </p>
        </div>
      </div>
    </div>
  );
};
