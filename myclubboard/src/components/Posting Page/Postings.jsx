import { useRouter } from "next/router";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Postings = ({ postings }) => {
  return (
    <section className="w-full">
      <div>
        {postings.map((posting) => {
          return <Posting key={posting.id} posting={posting} />;
        })}
      </div>
    </section>
  );
};

export default Postings;

const Posting = ({ posting }) => {
  const router = useRouter();
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
          <AiOutlineHome
            size={20}
            className="mr-[0.25rem] ml-auto"
            color="#115D9E"
          />
          <p className="">{posting.club_name} </p>
        </div>
      </div>
    </div>
  );
};
