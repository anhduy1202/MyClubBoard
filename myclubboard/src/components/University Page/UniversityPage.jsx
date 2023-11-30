import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Loading from "../General/Loading";
import { Logo } from "../Landing Page/Heading";
import { MainLayout } from "../Layout/layout";
import Filter from "./Filter";
import { Universities } from "./Universities";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [state, setState] = useState([]);
  const [stateList, setstateList] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);

  useEffect(() => {
    const getUniversities = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/universities`,
        { next: { revalidate: 3600 } },
      );
      const data = await response.json();
      setUniversities(data);
      setLoading(false);
      setState([...new Set(data.map((item) => item.state))]);
      setstateList([...new Set(data.map((item) => item.state))]);
    };
    getUniversities();
  }, []);
  useEffect(() => {
    if (state.length > 0) {
      setFilteredUniversities(
        universities.filter((item) => item.state === state[0]),
      );
    }
  }, [state]);

  return (
    <MainLayout custom="bg-bg_white">
      <div className="flex items-start w-full">
        <Logo />
        <div className="ml-auto">
          <UserButton />
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <p className="mt-4 self-start font-poppins font-semibold text-2xl">
          Universities
        </p>
        <Filter stateList={stateList} state={state} setState={setState} />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <Universities universities={filteredUniversities} />
      )}
    </MainLayout>
  );
};

export default UniversityPage;
