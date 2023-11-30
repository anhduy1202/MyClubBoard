import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { usUniveristies } from "./usuni";

const SchoolSuggestion = () => {
  const [search, setSearch] = useState("");
  const [filteredSchool, setfilteredSchool] = useState([]);
  const universites = usUniveristies;
  const handleChange = (e) => {
    setSearch(e.target.value);
    setfilteredSchool(
      universites.filter((item) =>
        item.institution.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
    console.log(filteredSchool);
  };
  return (
    <div className="absolute top-12 left-[-8em] bg-[#017FC6] p-4 z-[10] rounded-md w-[180px]">
      <div className="font-semibold">Filters</div>
      <div className="rounded-md mt-4 p-1 bg-white flex items-center">
        <input
          type="text"
          className="bg-white outline-none w-full text-black"
          placeholder="Search states"
          value={search}
          onChange={handleChange}
        />
        <AiOutlineSearch size={24} color="black" className="" />
      </div>
      <div className="mt-4 rounded-md">
        {/* {filteredSchool.map((item, index) => (
          <div
            onClick={() => {
              setSearch(item);
              setState([item]);
              setOpen(false);
            }}
            key={index}
            className="text-black cursor-pointer p-1 border border-t-1 bg-white font-semibold"
          >
            {stateMap.get(item)}, {item}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default SchoolSuggestion;
