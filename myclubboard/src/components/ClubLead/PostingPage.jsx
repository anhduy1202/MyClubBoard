import { MainLayout } from "@/components/Layout/layout";
import PostingClubPage from "@/components/Posting Page/PostingClubPage";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import { IoMdAddCircleOutline } from "react-icons/io";
import PostingForm from "./PostingForm";

const PostingPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [token, setToken] = useState(null);
  const [isPopup, setPopup] = useState(false);
  const getToken = async () => {
    const token = await Clerk.session.getToken({ template: "UserJWT" });
    setToken(token);
  };
  useEffect(() => {
    if (user?.emailAddresses[0].emailAddress) {
      getToken();
    }
  }, [user?.emailAddresses[0].emailAddress]);

  const { id } = router.query;
  return (
    <MainLayout>
      <PostingClubPage id={id}>
        <IoMdAddCircleOutline
          onClick={() => setPopup(true)}
          className="cursor-pointer text-[#B49AFF] hover:text-red-200 transition-all duration-300"
          size={42}
        />
        <PostingForm
          open={isPopup}
          setPopup={setPopup}
          token={token}
          clubId={id}
          user={user}
        />
      </PostingClubPage>
    </MainLayout>
  );
};

export default PostingPage;
