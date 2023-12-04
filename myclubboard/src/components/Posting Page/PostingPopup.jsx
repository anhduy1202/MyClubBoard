import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

export const PostingDetail = ({ posting, date, isPopup }) => {
  posting.qualificationSplit = posting.qualification.split("#");
  posting.toolsSplit = posting.tools.split("#");
  posting.resSplit = posting.responsibilities.split("#");
  let new_url = window.location.href.includes("/uni")
    ? window.location.href.split("/uni")
    : window.location.href.split("/posting");
  const router = useRouter();
  const copyToClipboard = () => {
    navigator.clipboard.writeText(`${new_url[0]}/posting/${posting.id}`);
    toast("🦄 Copied", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-4 ">
        <img
          className="w-[60px] md:w-[120px] object-contain"
          src={posting.club_logo}
          alt="posting image"
        />
        <p className="font-medium text-sm md:text-3xl">{posting.club_name}</p>
        {isPopup && (
          <AiOutlineClose
            size={24}
            color="black"
            className="ml-auto cursor-pointer"
            onClick={() => {
              close();
            }}
          />
        )}

        <ToastContainer />
      </div>
      <div className={`mt-4 ${!isPopup && `text-center`}`}>
        <p className="font-bold md:text-xl">{posting.title}</p>
        <p className="text-sm md:text-lg font-light"> Posted on: {date} </p>
        <div
          onClick={copyToClipboard}
          className="cursor-pointer text-sm md:text-xl font-medium mt-4 gap-2 flex items-center justify-center"
        >
          <LuCopy size={24} color="grey" />
          <p>Copy</p>
        </div>
        <div className="text-start mt-6 md:text-2xl">
          <p className="font-semibold">Qualifications</p>
          <ul>
            {posting.qualificationSplit.map((p, id) => (
              <li key={`q-${id}`} className=" mt-2 text-sm md:text-xl">
                {p}
              </li>
            ))}
          </ul>
          <p className="font-semibold mt-4">Tools</p>
          <ul>
            {posting.toolsSplit.map((t, id) => (
              <li key={`t-${id}`} className=" mt-2 text-sm md:text-xl">
                {t}
              </li>
            ))}
          </ul>
          <p className="font-semibold mt-4">Responsibilities</p>
          <ul>
            {posting.resSplit.map((r, id) => (
              <li key={`r-${id}`} className=" mt-2 text-sm md:text-xl">
                {r}
              </li>
            ))}
          </ul>
        </div>
        {isPopup && (
          <button
            onClick={() => router.push(`/posting/${posting.id}`)}
            className="apply-btn"
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
};

const PostingPopup = ({ open, posting, date }) => {
  return (
    <Popup open={open} position="center center">
      {(close) => (
        <div
          className={`bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] text-black m-4 text-center rounded-xl p-4 text-xl overflow-scroll h-[600px]`}
        >
          <PostingDetail posting={posting} date={date} isPopup={true} />
        </div>
      )}
    </Popup>
  );
};

export default PostingPopup;
