import React, { useContext } from "react";
import { LuMapPin } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { useRouter } from "next/router";
import { UniversityDispatchContext } from "../Context/UniversityContext";

export const Universities = ({ universities }) => {
  return (
    <section className="w-full">
      <div>
        {universities.map((university) => {
          return <University key={university.id} university={university} />;
        })}
      </div>
    </section>
  );
};

const University = ({ university }) => {
  const router = useRouter();
  const dispatch = useContext(UniversityDispatchContext);
  const handleUniversity = () => {
    router.push(`/uni/${university.id}`);
    const data = {
      name: university.name,
      logo: university.logo,
    };

    dispatch({
      type: "update",
      name: university.name,
      logo: university.logo,
    });
    // Set Local Storage
    localStorage.setItem("university", JSON.stringify(data));
  };
  return (
    <div
      onClick={handleUniversity}
      className="cursor-pointer text-roboto rounded-lg flex w-100vw p-2 bg-white my-8 drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]"
    >
      <img
        className="w-[40px] object-contain rounded-[50%] mr-4"
        src={university.logo}
        alt={university.name}
      />
      <div className="flex flex-col w-full">
        <p className="font-medium">{university.name}</p>
        <div className="flex mt-2">
          <LuMapPin size={20} className="mr-[0.25rem]" color="#115D9E" />
          <p className="mr-4">
            {university.location}, {university.state}
          </p>
          <AiOutlineHome
            size={20}
            className="mr-[0.25rem] ml-auto"
            color="#115D9E"
          />
          <p className="">{university.num_clubs} Clubs </p>
        </div>
      </div>
    </div>
  );
};
