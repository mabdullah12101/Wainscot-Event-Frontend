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
      alert(result.data.message);
      navigate("/signin");
    } catch (error) {
      alert(error.response.data.message);
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
  );
}
