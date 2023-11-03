import React, { useState } from "react";
import { BsFilter } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { stateMap } from "./state";

const Filter = ({ state, setState, stateList }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="relative text-white">
      <div
        onClick={() => setOpen(!isOpen)}
        className="text-lg bg-[#017FC6] p-1 items-center cursor-pointer rounded-lg flex"
      >
        <p>{state[0]}</p>
        <BsFilter size={24} className="ml-2" />
      </div>
      {isOpen && (
        <FilterPopup
          isOpen={isOpen}
          setOpen={setOpen}
          state={state}
          stateList={stateList}
          setState={setState}
        />
      )}
    </div>
  );
};

const FilterPopup = ({ isOpen, setOpen, state, stateList, setState }) => {
  // Auto sugesstion when typing the state cahracters
  const [search, setSearch] = useState("");
  const [filteredState, setFilteredState] = useState(state);
  const handleChange = (e) => {
    setSearch(e.target.value);
    setFilteredState(
      stateList.filter((item) =>
        item.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
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
        {filteredState.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Filter;
