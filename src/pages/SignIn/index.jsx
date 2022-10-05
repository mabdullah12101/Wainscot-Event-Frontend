import React from "react";
import { useState } from "react";
import axios from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import { Eye } from "react-feather";
import { EyeOff } from "react-feather";
import logo from "../../assets/img/logo.png";
import imgPeople from "../../assets/img/img-people.png";

export default function SignIn() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post("auth/login", form);
      console.log(result);
      localStorage.setItem("idUser", result.data.data[0].userId);
      localStorage.setItem("token", result.data.data[0].token);
      alert(result.data.message);
      navigate("/");
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

        <h2 className="text-2xl font-bold">Sign In</h2>
        <span className="mt-4 mb-10 text-sm">Hi, Welcome back to wainscot</span>

        <form className="flex flex-col">
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
              className="absolute right-0 mt-4 mr-2 text-[#3366ff]"
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

          <span className="text-center text-sm mt-8 mb-5">or sign in with</span>
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
  );
}
