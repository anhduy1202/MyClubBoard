import React, { useEffect, useState } from "react";
import Loading from "../General/Loading";
import { Logo } from "../Landing Page/Heading";
import { MainLayout } from "../Layout/layout";
import { Universities } from "./Universities";

const UniversityPage = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getUniversities = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/universities`,
      );
      const data = await response.json();
      setUniversities(data);
      setLoading(false);
    };
    getUniversities();
  }, []);
  return (
    <MainLayout custom="bg-bg_white">
      <Logo />
      <p className="mt-4 self-start font-poppins font-semibold text-2xl">
        Universities
      </p>
      {isLoading ? <Loading /> : <Universities universities={universities} />}
    </MainLayout>
  );
};

export default UniversityPage;
