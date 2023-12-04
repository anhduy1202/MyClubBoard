import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { UniversityContext } from "../Context/UniversityContext";
import Loading from "../General/Loading";
import { MainLayout } from "../Layout/layout";
import Postings from "./Postings";

// List all postings of a club
const PostingClubPage = (props) => {
  const router = useRouter();
  const { id, children } = props;
  const [postings, setPostings] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) {
      return;
    }
    const getPostings = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/lead/postings/${id}`,
        { next: { revalidate: 3600 } },
      );
      const data = await response.json();
      setPostings(data);
      setLoading(false);
    };
    getPostings();
  }, [id]);
  return (
    <MainLayout custom="bg-bg_white">
      <div className="flex w-[50vw] items-center">
        <BiArrowBack
          onClick={() => router.back()}
          size={36}
          className="cursor-pointer mr-auto"
        />
      </div>
      {isLoading ? <Loading /> : <Postings postings={postings} />}
      {children}
    </MainLayout>
  );
};

export default PostingClubPage;
