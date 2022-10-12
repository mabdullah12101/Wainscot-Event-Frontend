import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "../../utils/axios";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isLogin = localStorage.getItem("token");
  const [dropdownProfile, setDropdownProfile] = useState(false);

  const handleNavigateBrand = () => {
    navigate("/");
  };

  const handleNavigateAuthentication = (authentication) => {
    navigate(`/${authentication}`);
  };

  const handleLogout = async () => {
    try {
      await axios.post("/auth/logout", {
        refreshtoken: localStorage.getItem("refreshToken"),
      });
      localStorage.clear();
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* HEADER */}
      <header className="xl:px-14 xl:py-4 px-6 py-2 bg-white">
        {/*  NAV  */}
        <nav className="flex flex-wrap justify-between items-center">
          <button
            className="flex items-center text-sm"
            onClick={handleNavigateBrand}
          >
            <img src={logo} alt="Logo" />
            <span className="xl:text-2xl text-xl font-bold text-main-blue">
              Wain<span className="text-main-pink">scot</span>
            </span>
          </button>
          <div className="hidden xl:block">
            <ul className="flex gap-x-14 font-bold tracking-wider">
              <li>
                <a href="" className="text-main-blue">
                  Home
                </a>
                <hr className="border-t-4 border-main-blue rounded-2xl mx-3 mt-3" />
              </li>
              <li>
                <a href="">Create Event</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
            </ul>
          </div>

          {isLogin ? (
            <div className="relative">
              <button
                className="hidden xl:flex items-center gap-x-5"
                onClick={() => {
                  dropdownProfile
                    ? setDropdownProfile(false)
                    : setDropdownProfile(true);
                }}
              >
                <div className="w-11 h-11 rounded-full bg-[url('./assets/img/profile.png')] bg-cover outline outline-offset-2 outline-[3px] outline-main-blue"></div>
                <span className="font-bold tracking-wider text-sm">
                  {user.data.name ? user.data.name : "Anonymous"}
                </span>
                <span
                  className="iconify text-xl"
                  data-icon="ep:arrow-down-bold"
                ></span>
              </button>

              <div
                id="dropdown"
                className={`${
                  dropdownProfile ? "" : "hidden"
                } z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute right-0`}
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={handleLogout}
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="hidden xl:block text-sm">
              <button
                className="font-bold tracking-widest py-3 px-5 mr-5"
                onClick={() => handleNavigateAuthentication("signin")}
              >
                Log In
              </button>
              <button
                className="bg-main-blue text-white font-bold tracking-widest py-3 px-14 rounded-xl"
                onClick={() => handleNavigateAuthentication("signup")}
              >
                Sign Up
              </button>
            </div>
          )}

          {/*  HAMBURGER MENU */}
          <div className="text-2xl sm:hidden">
            <button>
              <i className="iconify" data-icon="bytesize:menu"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
