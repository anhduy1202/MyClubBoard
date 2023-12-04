import React, { useState } from "react";
import Popup from "reactjs-popup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "../General/Loading";

const schema = yup
  .object({
    email: yup.string().email().required("Valid email is required"),
    name: yup.string().required("Name is required"),
  })
  .required();

const ClubLeadForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { open, setPopup, token, clubId, user, setSuccess } = props;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setLoading] = useState(false);
  const onSubmit = async () => {
    const positionData = {
      email,
      name,
      club_id: clubId,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/lead/add-lead/${clubId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(positionData),
      },
    );
    const data = await res.json();
    console.log(data);
    if (data.error) {
      setSuccess(false);
      return;
    } else {
      setSuccess(true);
    }
    setPopup(false);
  };
  return (
    <Popup open={open} onClose={() => setPopup(false)} position="center center">
      {(close) => (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`bg-white w-[320px] md:w-[800px] drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] text-black m-4 text-center rounded-xl p-4 text-xl overflow-scroll h-[600px]`}
        >
          <div className="">
            <div className="flex justify-center mb-4 flex-row">
              <h1 className="text-lg md:text-2xl font-bold text-center">
                Add club lead email
              </h1>
              <button
                onClick={close}
                className="text-xl md:text-3xl font-bold text-gray-400 absolute right-10"
              >
                X
              </button>
            </div>
            <div className="flex flex-col justify-center text-start">
              <p> Email </p>
              <input
                {...register("email")}
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className={`form-input ${errors.email ? "error-form" : ""}`}
                type="text"
                placeholder="john-doe@csu.fullerton.edu"
              />
              <p className="error-msg">{errors.email?.message}</p>
              <p> Full Name </p>
              <input
                {...register("name")}
                name="name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className={`form-input ${errors.name ? "error-form" : ""}`}
                type="text"
                placeholder="John Doe"
              />
              <p className="error-msg">{errors.name?.message}</p>

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

export default ClubLeadForm;
