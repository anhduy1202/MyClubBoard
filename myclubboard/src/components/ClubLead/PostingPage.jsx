import { MainLayout } from "@/components/Layout/layout";
import PostingClubPage from "@/components/Posting Page/PostingClubPage";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUser } from "@clerk/nextjs";
import { IoMdAddCircleOutline } from "react-icons/io";
import PostingForm from "./PostingForm";
import ClubLeadForm from "./ClubLeadForm";
import { ToastContainer, toast } from "react-toastify";

const PostingPage = () => {
  const router = useRouter();
  const { user } = useUser();
  const [token, setToken] = useState(null);
  const [isClubLeadPopup, setClubLeadPopup] = useState(false);
  const [postingSuccess, setPostingSuccess] = useState(null);
  const [clubLeadSuccess, setClubLeadSuccess] = useState(null);
  const [isPostingPopup, setPostingPopup] = useState(false);
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
  useEffect(() => {
    if (postingSuccess === false) {
      toast.error("Posting creation failed!");
      setPostingSuccess(null);
    }
    if (clubLeadSuccess === false) {
      toast.error("Club lead addition failed!");
      setClubLeadSuccess(null);
    }
    if (postingSuccess === true) {
      toast.success("Posting created successfully!");
      setPostingSuccess(null);
    }
    if (clubLeadSuccess === true) {
      toast.success("Club lead added successfully!");
      setClubLeadSuccess(null);
    }
  }, [postingSuccess, clubLeadSuccess]);

  return (
    <MainLayout>
      <PostingClubPage id={id}>
        <ToastContainer />
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <IoMdAddCircleOutline
              onClick={() => setPostingPopup(true)}
              className="cursor-pointer text-[#B49AFF] hover:text-red-200 transition-all duration-300"
              size={42}
            />
            <p className="text-[#B49AFF] font-semibold">Create new posting </p>
          </div>
          <div className="flex items-center gap-4">
            <IoMdAddCircleOutline
              onClick={() => setClubLeadPopup(true)}
              className="cursor-pointer text-[#05A3FF] hover:text-red-200 transition-all duration-300"
              size={42}
            />
            <p className="text-[#05A3FF] font-semibold"> Add club lead </p>
          </div>
        </div>
        <PostingForm
          open={isPostingPopup}
          setPopup={setPostingPopup}
          token={token}
          clubId={id}
          user={user}
          setSuccess={setPostingSuccess}
        />
        <ClubLeadForm
          open={isClubLeadPopup}
          setPopup={setClubLeadPopup}
          token={token}
          clubId={id}
          user={user}
          setSuccess={setClubLeadSuccess}
        />
      </PostingClubPage>
    </MainLayout>
  );
};

export default PostingPage;
