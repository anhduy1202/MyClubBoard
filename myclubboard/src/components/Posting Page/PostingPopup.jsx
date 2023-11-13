import React from "react";
import Popup from "reactjs-popup";
import { AiOutlineClose } from "react-icons/ai";
import { LuCopy } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";

const PostingPopup = ({ open, posting, date }) => {
  posting.qualificationSplit = posting.qualification.split("#");
  posting.toolsSplit = posting.tools.split("#");
  posting.resSplit = posting.responsibilities.split("#");
  let new_url = window.location.href.split("/uni");
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
    <Popup open={open} position="center center">
      {(close) => (
        <div
          className={`bg-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] text-black m-4 text-center rounded-xl p-4 text-xl overflow-scroll h-[600px]`}
        >
          <div className="flex items-center justify-center gap-4 ">
            <img
              className="w-[60px] h-[60px] object-contain"
              src={posting.club_logo}
              alt="posting image"
            />
            <p className="font-medium text-sm">{posting.club_name}</p>
            <AiOutlineClose
              size={24}
              color="black"
              className="ml-auto cursor-pointer"
              onClick={() => {
                close();
              }}
            />
            <ToastContainer />
          </div>
          <div className="mt-4">
            <p className="font-bold ">{posting.title}</p>
            <p className="text-sm font-light"> Posted on: {date} </p>
            <div
              onClick={copyToClipboard}
              className="cursor-pointer text-sm font-medium mt-4 gap-2 flex items-center justify-center"
            >
              <LuCopy size={24} color="grey" />
              <p>Copy</p>
            </div>
            <div className="text-start mt-6">
              <p className="font-semibold">Qualifications</p>
              <ul>
                {posting.qualificationSplit.map((p, id) => (
                  <li key={`q-${id}`} className="list-disc ml-4 mt-2 text-sm">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mt-4">Tools</p>
              <ul>
                {posting.toolsSplit.map((t, id) => (
                  <li key={`t-${id}`} className="list-disc ml-4 mt-2 text-sm">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="font-semibold mt-4 ">Responsibilities</p>
              <ul>
                {posting.resSplit.map((r, id) => (
                  <li key={`r-${id}`} className="list-disc ml-4 mt-2 text-sm">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => router.push(`/posting/${posting.id}`)}
              className="mt-8 mb-4 text-white font-semibold py-1 px-4 rounded-md bg-gradient-to-tl from-[#B49AFF] to-[#05A3FF]"
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};

export default PostingPopup;
