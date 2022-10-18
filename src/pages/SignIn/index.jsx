import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye } from "react-feather";
import { EyeOff } from "react-feather";
import logo from "../../assets/img/logo.png";
import imgPeople from "../../assets/img/img-people.png";
import { useDispatch, useSelector } from "react-redux";
import { getDataUserById } from "../../stores/actions/user";
import { login } from "../../stores/actions/auth";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [toast, setToast] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setToast(true);
    dispatch(login(form));
  };

  const handleChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword); // Set nilai kebalikan dari boolean
  };

  const handleCloseToast = () => {
    if (!auth.isError) {
      setToast(false);
      dispatch(getDataUserById(auth.data[0].userId));
      localStorage.setItem("token", auth.data[0].token);
      localStorage.setItem("refreshToken", auth.data[0].refreshToken);
      navigate("/");
    } else {
      setToast(false);
    }
  };

  return (
    <>
      <div
        id="toast"
        className={`${
          auth.message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            auth.isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {auth.isError ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        <div className="ml-3 text-sm font-normal">{auth.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={handleCloseToast}
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

          <h2 className="text-2xl font-bold">Sign In</h2>
          <span className="mt-4 mb-10 text-sm">
            Hi, Welcome back to wainscot
          </span>

          <form className="flex flex-col">
            <input
              className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeForm}
            />
            <div className="relative">
              <div
                onClick={handleShowPassword}
                className="absolute right-0 mt-4 mr-2 text-[#3366ff] cursor-pointer"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </div>
              <input
                className="focus:outline-blue-50 focus:ring-4 mb-5 px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChangeForm}
              />
            </div>
            <a
              href=""
              className="text-end no-underline font-bold text-main-blue mb-8"
            >
              <span>Forgot Password?</span>
            </a>
            <button
              type="submit"
              className="py-4 px-4 bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700"
              onClick={handleLogin}
            >
              Sign In
            </button>

            <span className="text-center text-sm mt-8 mb-5">
              or sign in with
            </span>
            <div className="flex justify-center">
              <button className="flex justify-center bg-white border border-main-blue rounded-md py-3 px-9 mr-3 text-2xl">
                <i className="iconify" data-icon="flat-color-icons:google"></i>
              </button>
              <button className="flex justify-center bg-white border border-main-blue rounded-md py-3 px-9 mr-3 text-2xl">
                <i className="iconify" data-icon="logos:facebook"></i>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
