import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { MainLayout } from "../Layout/layout";
import Loading from "../General/Loading";
import { PostingDetail } from "./PostingPopup";

const PostingDetailPage = () => {
  const router = useRouter();
  const [posting, setPosting] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const date = new Date(posting[0]?.posted_date);
  const option = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", option);

  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    const getPosting = async () => {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/posting/${id}`,
        { next: { revalidate: 3600 } },
      );
      const data = await response.json();
      console.log(data);
      setPosting(data);
      setLoading(false);
    };
    getPosting();
  }, [id]);
  return (
    <MainLayout custom="bg-bg_white">
      <div className="flex w-full items-center">
        <BiArrowBack
          onClick={() => router.push("/uni")}
          size={36}
          className="cursor-pointer mr-auto"
        />
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {posting[0]?.title && (
            <PostingDetail
              posting={posting[0]}
              date={formattedDate}
              isPopup={false}
            />
          )}
        </>
      )}
    </MainLayout>
  );
};

export default PostingDetailPage;
