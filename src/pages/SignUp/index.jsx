import React from "react";
import { useState } from "react";
import axios from "axios";
// import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Eye } from "react-feather";
import { EyeOff } from "react-feather";
import logo from "../../assets/img/logo.png";
import imgPeople from "../../assets/img/img-people.png";

export default function SignIn() {
  const navigate = useNavigate();
  const [toast, setToast] = useState("");
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        "http://localhost:3001/api/auth/register",
        form
      );
      setMessage(result.data.message);
      setToast("success");
    } catch (error) {
      setMessage(error.response.data.message);
      setToast("failed");
    }
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword); // Set nilai kebalikan dari boolean
  };

  return (
    <>
      <div
        id="toast-success"
        className={`${
          toast === "success" ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute mx-auto left-0 right-0 top-10`}
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Check icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={() => navigate("/signin")}
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div
        id="toast-danger"
        className={`${
          toast === "failed" ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute mx-auto left-0 right-0 top-10`}
        role="alert"
        onClick={() => setToast("")}
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Error icon</span>
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-danger"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <main className="flex">
        <section className="justify-center items-center xl:basis-8/12 bg-main-blue h-screen hidden xl:flex">
          <div>
            <img src={imgPeople} alt="" />
          </div>
        </section>
        <section className="flex xl:basis-4/12 basis-full h-screen xl:h-auto flex-col justify-center px-20">
          <div className="flex items-center mb-10">
            <img src={logo} alt="" />
            <span className="ml-1 text-main-blue">
              <h2 className="text-2xl font-bold">
                Wain<span className="text-main-pink">scot</span>
              </h2>
            </span>
          </div>

          <h2 className="text-2xl font-bold">Sign Up</h2>
          <span className="mt-4 mb-10 text-sm">
            Already have an account?
            <a
              href="signin"
              className="text-[#3366ff] ml-1 font-bold no-underline"
            >
              Log in
            </a>
          </span>

          <form className="flex flex-col">
            <input
              className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
              type="text"
              placeholder="Full Name"
              name="name"
              onChange={handleChangeForm}
            />
            <input
              className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeForm}
            />
            <div className="relative">
              <button
                onClick={handleShowPassword}
                className="absolute right-0 mt-4 mr-4 text-[#3366ff]"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              <input
                className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChangeForm}
              />
            </div>
            <div className="relative">
              <button
                onClick={handleShowPassword}
                className="absolute right-0 mt-4 mr-4 text-[#3366ff]"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
              <input
                className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChangeForm}
              />
            </div>

            <div className="flex items-center mb-5">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox" className="ml-3">
                Accept terms and condition
              </label>
            </div>

            <button
              type="submit"
              className="py-4 px-4 bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700"
              onClick={handleRegister}
            >
              Sign Up
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
