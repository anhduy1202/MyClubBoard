import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";

const Postings = ({ postings }) => {
  return (
    <section className="w-full">
      <div>
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
  const router = useRouter();
  const date = new Date(posting.posted_date);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", option);
  return (
    <div
      onClick={() => router.push(`/posting/${posting.id}`)}
      className="cursor-pointer text-roboto rounded-lg flex w-100vw p-2 bg-white my-8 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
    >
      <img
        className="w-[60px] object-contain rounded-[50%] mr-4"
        src={posting.club_logo}
        alt={posting.club_name}
      />
      <div className="flex flex-col w-full">
        <p className="font-medium">{posting.title}</p>
        <div className="flex items-center mt-2">
          <BiCalendar
            size={20}
            className="mr-[0.25rem]"
            color="#115D9E"
          />
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
