import logo from "../../assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "../../utils/axios";
import Spinner from "../Spinner";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isLogin = localStorage.getItem("token");
  const role = user.data.role;
  const [dropdownProfile, setDropdownProfile] = useState(false);
  const [hamburger, setHamburger] = useState(false);

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
                <button
                  className="text-main-blue"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
                <hr className="border-t-4 border-main-blue rounded-2xl mx-3 mt-3" />
              </li>
              <li className={`${role === "admin" ? "" : "hidden"}`}>
                <button onClick={() => navigate("/manage-event")}>
                  Create Event
                </button>
              </li>
              <li>
                <button>Location</button>
              </li>
            </ul>
          </div>

          {isLogin ? (
            <div className="relative">
              {user.isLoading ? (
                <div className="hidden xl:block">
                  <Spinner />
                </div>
              ) : (
                <button
                  className="hidden xl:flex items-center gap-x-5"
                  onClick={() => {
                    dropdownProfile
                      ? setDropdownProfile(false)
                      : setDropdownProfile(true);
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-full outline outline-offset-2 outline-[3px] outline-main-blue overflow-hidden`}
                  >
                    <img
                      src={
                        user.data.image
                          ? process.env.REACT_APP_CLOUDINARY_URL_IMAGE +
                            user.data.image
                          : process.env.REACT_APP_CLOUDINARY_DEFAULT_IMAGE
                      }
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>

                  <span className="font-bold tracking-wider text-sm">
                    {user.data.name ? user.data.name : "Anonymous"}
                  </span>
                  <span
                    className="iconify text-xl"
                    data-icon="ep:arrow-down-bold"
                  ></span>
                </button>
              )}

              <div
                id="dropdown"
                className={`${
                  dropdownProfile ? "" : "hidden"
                } z-10 w-40 rounded divide-y divide-gray-100 shadow bg-gray-700 absolute right-0 mt-3`}
              >
                <ul
                  className="py-1 text-sm  text-gray-200"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                      onClick={() => navigate("/edit-profile")}
                    >
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                      onClick={() => navigate("/my-booking")}
                    >
                      My Booking
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                      onClick={() => navigate("/my-wishlist")}
                    >
                      My Wishlist
                    </a>
                  </li>
                  <li>
                    <a
                      className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
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
            <button onClick={() => setHamburger(!hamburger)}>
              <i className="iconify" data-icon="bytesize:menu"></i>
            </button>
          </div>
        </nav>

        <div className={`${hamburger ? "block" : "hidden"}`}>
          {isLogin ? (
            <div className="py-4">
              <ul className="py-1 text-sm text-main-black">
                <li>
                  <a
                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                    onClick={() => navigate("/edit-profile")}
                  >
                    My Profile
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                    onClick={() => navigate("/my-booking")}
                  >
                    My Booking
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                    onClick={() => navigate("/my-wishlist")}
                  >
                    My Wishlist
                  </a>
                </li>
                <li>
                  <a
                    className="block py-2 px-4 hover:bg-gray-600 hover:text-white cursor-pointer"
                    onClick={handleLogout}
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex justify-center text-xs py-10">
              <button
                className="w-40 font-bold border border-main-blue tracking-widest py-3 mr-5 rounded-xl"
                onClick={() => handleNavigateAuthentication("signin")}
              >
                Log In
              </button>
              <button
                className="w-40 bg-main-blue text-white font-bold tracking-widest py-3 rounded-xl"
                onClick={() => handleNavigateAuthentication("signup")}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
