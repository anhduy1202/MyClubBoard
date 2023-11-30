import React, { useEffect, useReducer, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loading from "../General/Loading";
import { useRouter } from "next/router";
import SchoolSuggestion from "./SchoolSuggestion";
import { usUniveristies } from "./usuni";

const schema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phone: yup
      .string()
      .matches(
        /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
        "Invalid phone number format",
      ),
    major: yup.string().required("Major is required"),
    school: yup.string().required("School is required"),
    gradYear: yup
      .number()
      .typeError("Must be number")
      .positive()
      .integer()
      .min(2023, "Invalid grad year")
      .max(2030),
    response: yup
      .string()
      .test("wordCount50", "Must be at least 50 words", (value) => {
        if (value) {
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount >= 50;
        }
        return false;
      })
      .test("wordCount500", "Must be less than 500 words", (value) => {
        if (value) {
          const wordCount = value.trim().split(/\s+/).length;
          return wordCount <= 500;
        }
        return false;
      }),
  })
  .required();

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  pronouns: "",
  phone: "",
  major: "",
  school: "",
  education: "Bachelor",
  gradYear: "",
  response: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SAVE_DRAFT":
      const { name, value } = action.payload;
      localStorage.setItem(name, value);
      return { ...state, [name]: value };
    case "LOAD_DRAFT":
      const data = localStorage.getItem("formData");
      if (data) {
        const parsedData = JSON.parse(data);
        return {
          ...state,
          ...parsedData,
        };
      }
      return state;
    case "SET_FIRSTNAME":
      return { ...state, firstName: action.payload };
    case "SET_LASTNAME":
      return { ...state, lastName: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PRONOUNS":
      return { ...state, pronouns: action.payload };
    case "SET_GRADYEAR":
      return { ...state, gradYear: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_MAJOR":
      return { ...state, major: action.payload };
    case "SET_SCHOOL":
      return { ...state, school: action.payload };
    case "SET_EDUCATION":
      return { ...state, education: action.payload };
    case "SET_RESPONSE":
      return { ...state, response: action.payload };
    default:
      return state;
  }
};

const Application = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [application, dispatch] = useReducer(
    reducer,
    initialState,
    (initialState) => {
      const persistedState = { ...initialState };
      if (typeof localStorage !== "undefined") {
        Object.entries(initialState).forEach(([key, value]) => {
          const persistedValue = localStorage.getItem(key);
          if (persistedValue) {
            persistedState[key] = persistedValue;
          }
        });
      }
      return persistedState;
    },
  );
  const [isLoading, setLoading] = useState(false);
  const universities = usUniveristies;
  const [filteredSchools, setFilteredSchools] = useState([]);
  const wordCount = application.response.trim().split(/\s+/).length;
  useEffect(() => {
    for (let key in initialState) {
      const value = localStorage.getItem(key);
      if (value !== null) {
        dispatch({
          type: "SAVE_DRAFT",
          payload: { name: key, value: value },
        });
      }
    }
  }, []);
  const onSubmit = async (data) => {
    setLoading(true);
    const formData = {
      ...data,
      firstName: props.user?.firstName,
      lastName: props.user?.lastName,
      email: props?.user.emailAddresses[0].emailAddress,
    };
    setLoading(false);
    console.log(formData);
  };
  const handleSchoolChange = (e) => {
    setFilteredSchools(
      universities.filter((school) =>
        school.institution.toLowerCase().includes(e.toLowerCase()),
      ),
    );
    dispatch({ type: "SET_SCHOOL", payload: e });
    dispatch({ type: "SAVE_DRAFT", payload: { name: "school", value: e } });
    console.log(filteredSchools);
  };

  return (
    <form className="mt-10 flex w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full">
        <p className="mt-10 mb-6 text-2xl md:text-3xl font-semibold">
          Application
        </p>
        <p>First Name</p>
        <input
          {...register("firstName")}
          name="firstName"
          value={application.firstName}
          onChange={(e) => {
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "firstName", value: e.target.value },
            });
            dispatch({ type: "SET_FIRSTNAME", payload: e.target.value });
          }}
          className={`form-input ${errors.firstName ? "error-form" : ""}`}
          type="text"
          placeholder="John"
        />
        <p className="error-msg">{errors.firstName?.message}</p>
        <p>Last Name</p>
        <input
          {...register("lastName")}
          name="lastName"
          value={application.lastName}
          onChange={(e) => {
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "lastName", value: e.target.value },
            });
            dispatch({ type: "SET_LASTNAME", payload: e.target.value });
          }}
          className={`form-input ${errors.lastName ? "error-form" : ""}`}
          type="text"
          placeholder="Doe"
        />
        <p className="error-msg">{errors.lastName?.message}</p>
        <p>Email</p>
        <input
          {...register("email")}
          name="email"
          value={props.user?.emailAddresses[0].emailAddress}
          onChange={(e) => {
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "email", value: e.target.value },
            });
            dispatch({ type: "SET_EMAIL", payload: e.target.value });
          }}
          className={`form-input ${errors.email ? "error-form" : ""}`}
          type="text"
        />
        <p className="error-msg">{errors.email?.message}</p>
        <p>Pronouns</p>
        <select
          onChange={(e) => {
            dispatch({ type: "SET_PRONOUNS", payload: e.target.value });
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "pronouns", value: e.target.value },
            });
          }}
          name="pronouns"
          value={application.pronouns}
          className="form-input"
        >
          <option value="she/her">she/her</option>
          <option value="he/him">he/him</option>
          <option value="they/them">they/them</option>
          <option value="other">other</option>
        </select>
        <p>Phone number</p>
        <input
          {...register("phone")}
          name="phone"
          value={application.phone}
          onChange={(e) => {
            dispatch({ type: "SET_PHONE", payload: e.target.value });
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "phone", value: e.target.value },
            });
          }}
          className={`form-input ${errors.phone ? "error-form" : ""}`}
          type="text"
          placeholder="000-111-2222"
        />
        <p className="error-msg">{errors.phone?.message}</p>
        <p>Major</p>
        <input
          {...register("major")}
          name="major"
          value={application.major}
          onChange={(e) => {
            dispatch({ type: "SET_MAJOR", payload: e.target.value });
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "major", value: e.target.value },
            });
          }}
          className={`form-input ${errors.major ? "error-form" : ""}`}
          type="text"
          placeholder="Computer Science"
        />
        <p className="error-msg">{errors.major?.message}</p>
        <p>Graduation year</p>
        <input
          {...register("gradYear")}
          name="gradYear"
          value={application.gradYear}
          onChange={(e) => {
            dispatch({ type: "SET_GRADYEAR", payload: e.target.value });
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "gradYear", value: e.target.value },
            });
          }}
          className={`form-input ${errors.gradYear ? "error-form" : ""}`}
          type="text"
          placeholder="2025"
        />
        <p className="error-msg">{errors.gradYear?.message}</p>
        <p>School</p>
        <input
          {...register("school")}
          name="school"
          value={application.school}
          onChange={(e) => handleSchoolChange(e.target.value)}
          className={`form-input ${errors.school ? "error-form" : ""}`}
          type="text"
          placeholder="University of California, Berkeley"
        />
        <p className="error-msg">{errors.school?.message}</p>
        {filteredSchools.length > 0 && filteredSchools.length < 100 && (
          <div className="max-h-[300px] overflow-scroll bg-white border-none mt-[-1rem]">
            {filteredSchools.map((school, id) => (
              <p
                key={"#" + id}
                onClick={() => {
                  dispatch({ type: "SET_SCHOOL", payload: school.institution });
                  dispatch({
                    type: "SAVE_DRAFT",
                    payload: { name: "school", value: school.institution },
                  });
                  setFilteredSchools([]);
                }}
                className="w-full cursor-pointer hover:bg-gray-100 p-2"
              >
                <p>{school.institution}</p>
              </p>
            ))}
          </div>
        )}

        <p>Education level</p>
        <select
          onChange={(e) => {
            dispatch({ type: "SET_EDUCATION", payload: e.target.value });
            dispatch({
              type: "SAVE_DRAFT",
              payload: { name: "education", value: e.target.value },
            });
          }}
          value={application.education}
          name="education"
          className="form-input"
        >
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
        </select>
        <p>Why do you want to apply for this position?</p>
        <div className="flex flex-col relative">
          <textarea
            {...register("response")}
            value={application.response}
            name="response"
            className={`form-input ${errors.response ? "error-form" : ""}`}
            onChange={(e) => {
              dispatch({ type: "SET_RESPONSE", payload: e.target.value });
              dispatch({
                type: "SAVE_DRAFT",
                payload: { name: "response", value: e.target.value },
              });
            }}
            placeholder="50-500 words"
          />
          <p className="absolute bottom-6 right-4">{wordCount} words</p>
          <p className="error-msg">{errors.response?.message}</p>
        </div>
        {isLoading ? (
          <button className="mt-8 w-[100px] flex justify-center mr-auto p-2 bg-purple_300 hover:bg-purple_hover hover:text-white hover:ease-in-out hover:duration-200 rounded-md font-semibold">
            <Loading />
          </button>
        ) : (
          <button className="self-start mt-8 w-[100px] text-white p-2 bg-dark_blue hover:bg-purple_hover hover:text-white hover:ease-in-out hover:duration-200 rounded-md font-semibold">
            Submit
          </button>
        )}
      </div>
    </form>
  );
};

export default Application;
