import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Loading from "../General/Loading";
import { MainLayout } from "../Layout/layout";
import Postings from "./Postings";

const PostingPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [postings, setPostings] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
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
    getPostings();
  }, []);
  return (
    <MainLayout custom="bg-bg_white">
      <BiArrowBack
        onClick={() => router.back()}
        size={36}
        className="cursor-pointer mr-auto"
      />
      {isLoading ? (
        <Loading />
      ) : (
        <Postings postings={postings} />
      )}
    </MainLayout>
  );
};

export default PostingPage;
