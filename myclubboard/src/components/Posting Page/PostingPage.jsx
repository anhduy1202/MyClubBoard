import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { UniversityContext } from "../Context/UniversityContext";
import Loading from "../General/Loading";
import { MainLayout } from "../Layout/layout";
import Postings from "./Postings";

const PostingPage = () => {
  const router = useRouter();
  const university = useContext(UniversityContext);
  const { id } = router.query;
  const [postings, setPostings] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    const getPostings = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/universities/${id}`,
        { next: { revalidate: 3600 } },
      );
      const data = await response.json();
      setPostings(data);
      setLoading(false);
    };
    // If no university in context, use data from local storage
    if (university.name === "" || university.logo === "") {
      const data = JSON.parse(localStorage.getItem("university"));
      university.name = data.name;
      university.logo = data.logo;
    }
    getPostings();
  }, [id]);
  return (
    <MainLayout custom="bg-bg_white">
      <div className="flex w-full items-center">
        <BiArrowBack
          onClick={() => router.back()}
          size={36}
          className="cursor-pointer mr-auto"
        />
        <img
          className="w-[60px] object-contain rounded-[50%] ml-auto"
          src={university.logo}
          alt={university.name}
        />
      </div>
      <p className="mt-4 text-center text-xl font-medium">{university.name}</p>
      {isLoading ? <Loading /> : <Postings postings={postings} />}
    </MainLayout>
  );
};

export default PostingPage;
