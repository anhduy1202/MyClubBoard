import React, { useReducer, useState } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "../General/Loading";

const schema = yup
  .object({
    title: yup.string().required("Position title is required"),
    qualification: yup.string().required("Qualification is required"),
    tools: yup.string().required("Tools is required"),
    responsibilities: yup.string().required("Responsibilities is required"),
    applyLink: yup.string().required("Apply link is required"),
  })
  .required();

const initialState = {
  title: "",
  qualification: "",
  tools: "",
  responsibilities: "",
  applyLink: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_QUALIFICATION":
      return { ...state, qualification: action.payload };
    case "SET_TOOLS":
      return { ...state, tools: action.payload };
    case "SET_RESPONSIBILITIES":
      return { ...state, responsibilities: action.payload };
    case "SET_APPLYLINK":
      return { ...state, applyLink: action.payload };
    default:
      return state;
  }
};

const PostingForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { open, setPopup, token, clubId, user } = props;
  const [application, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setLoading] = useState(false);
  const onSubmit = async () => {
    const positionData = {
      ...application,
      club_id: clubId,
      posted_by: user?.emailAddresses[0].emailAddress,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lead/create-posting/${clubId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(positionData),
      },
    );
    const data = res;
    if (data.error) {
      alert(data.error);
    }
    setPopup(false);
  };
  return (
    <Popup open={open} onClose={() => setPopup(false)} position="center center">
      {(close) => (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`bg-white w-[800px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] text-black m-4 text-center rounded-xl p-4 text-xl overflow-scroll h-[600px]`}
        >
          <div className="">
            <div className="flex justify-center mb-4 flex-row">
              <h1 className="text-2xl font-bold text-center">
                Create a new posting
              </h1>
              <button
                onClick={close}
                className="text-3xl font-bold text-gray-400 absolute right-10"
              >
                X
              </button>
            </div>
            <div className="flex flex-col justify-center text-start">
              <p> Position Title </p>
              <input
                {...register("title")}
                name="title"
                value={application.title}
                onChange={(e) => {
                  dispatch({ type: "SET_TITLE", payload: e.target.value });
                }}
                className={`form-input ${errors.title ? "error-form" : ""}`}
                type="text"
                placeholder="Web Developer"
              />
              <p className="error-msg">{errors.title?.message}</p>
              <p> Qualification </p>
              <input
                {...register("qualification")}
                name="qualification"
                value={application.qualification}
                onChange={(e) => {
                  dispatch({
                    type: "SET_QUALIFICATION",
                    payload: e.target.value,
                  });
                }}
                className={`form-input ${
                  errors.qualification ? "error-form" : ""
                }`}
                type="text"
                placeholder="Type something..."
              />
              <p className="error-msg">{errors.qualification?.message}</p>
              <p> Tools </p>
              <input
                {...register("tools")}
                name="tools"
                value={application.tools}
                onChange={(e) => {
                  dispatch({ type: "SET_TOOLS", payload: e.target.value });
                }}
                className={`form-input ${errors.tools ? "error-form" : ""}`}
                type="text"
                placeholder="Type something..."
              />
              <p className="error-msg">{errors.tools?.message}</p>
              <p> Responsibilities </p>
              <input
                {...register("responsibilities")}
                name="responsibilities"
                value={application.responsibilities}
                onChange={(e) => {
                  dispatch({
                    type: "SET_RESPONSIBILITIES",
                    payload: e.target.value,
                  });
                }}
                className={`form-input ${
                  errors.responsibilities ? "error-form" : ""
                }`}
                type="text"
                placeholder="Type something..."
              />
              <p className="error-msg">{errors.responsibilities?.message}</p>
              <p> Apply Link </p>
              <input
                {...register("applyLink")}
                name="applyLink"
                value={application.applyLink}
                onChange={(e) => {
                  dispatch({ type: "SET_APPLYLINK", payload: e.target.value });
                }}
                className={`form-input ${errors.applyLink ? "error-form" : ""}`}
                type="text"
                placeholder="https://docs.google.com/forms..."
              />
              <p className="error-msg">{errors.applyLink?.message}</p>
              {isLoading ? (
                <button className="mt-8 w-[100px] flex justify-center mr-auto p-2 bg-purple_300 hover:bg-purple_hover hover:text-white hover:ease-in-out hover:duration-200 rounded-md font-semibold">
                  <Loading />
                </button>
              ) : (
                <button className="self-start mt-8 w-[100px] text-white p-2 apply-btn hover:bg-purple_hover hover:text-white hover:ease-in-out hover:duration-200 rounded-md font-semibold">
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </Popup>
  );
};

export default PostingForm;
