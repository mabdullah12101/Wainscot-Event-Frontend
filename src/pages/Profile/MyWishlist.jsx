import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
// import { getAllWishlishtByUserId } from "../../stores/actions/wishlist";
import moment from "moment";
import {
  deleteWishlist,
  getAllWishlishtByUserId,
} from "../../stores/actions/wishlist";

function MyWishlist() {
  const [profileSidebar, setProfileSideBar] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  const [wishlistId, setWishlistId] = useState("");
  const [nameEvent, setNameEvent] = useState("");
  const [toast, setToast] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const wishlists = useSelector((state) => state.wishlists);
  const role = user.data.role;
  const navigate = useNavigate();
  console.log(wishlists);
  // const [dataUser, setDataUser] = useState(user.data);

  // useEffect(() => {
  //   dispatch(getAllWishlishtByUserId(user.data.userId));
  // }, []);

  const handleSidebar = (sidebar) => {
    switch (sidebar) {
      case "profile":
        setProfileSideBar(profileSidebar ? false : true);
        break;

      default:
        break;
    }
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

  const handleDeleteModal = (wishlistId, nameEvent) => {
    setDeleteModal(true);
    setWishlistId(wishlistId);
    setNameEvent(nameEvent);
  };

  const handleDeleteWishlist = () => {
    setToast(true);
    dispatch(deleteWishlist(wishlistId)).then(() => {
      setDeleteModal(false);
      if (!wishlists.isError) {
        dispatch(getAllWishlishtByUserId(user.data.userId));
      }
    });
  };

  const resetWishlistId = () => {
    setWishlistId("");
    setNameEvent("");
    setToast(false);
    setDeleteModal(false);
  };

  return (
    <div className="xl:bg-young-blue">
      <div
        id="toast"
        className={`${
          wishlists.message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            wishlists.isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {wishlists.isError ? (
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
        <div className="ml-3 text-sm font-normal">{wishlists.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={resetWishlistId}
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
        id="popup-modal"
        tabIndex="-1"
        className={`${
          deleteModal ? "" : "hidden"
        } overflow-y-auto overflow-x-hidden fixed w-fit z-50 mx-auto left-0 right-0 top-20`}
      >
        <div className="relative p-4 w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              className={`${
                wishlists.isLoading ? "hidden" : ""
              } absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white`}
              data-modal-toggle="popup-modal"
              onClick={resetWishlistId}
            >
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-6 text-center">
              <svg
                aria-hidden="true"
                className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400 mx-10">
                {`Are you sure you want to delete ${nameEvent} ?`}
              </h3>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600"
                onClick={handleDeleteWishlist}
                disabled={wishlists.isLoading ? true : false}
              >
                {wishlists.isLoading ? (
                  <div role="status">
                    <svg
                      className="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Yes, I'm sure"
                )}
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white"
                onClick={resetWishlistId}
                disabled={wishlists.isLoading ? true : false}
              >
                {wishlists.isLoading ? (
                  <div role="status">
                    <svg
                      className="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "No, cancel"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <div className="flex xl:mx-16 xl:mt-12 xl:flex-row flex-col px-8">
        <section className="xl:basis-3/12 hidden xl:block">
          <div className="flex items-center">
            <div className="w-11 h-11 rounded-full outline outline-offset-2 outline-[3px] outline-main-blue overflow-hidden">
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
            <div className="ml-3">
              <p className="font-bold tracking-wider text-sm">
                {user.data.name ? user.data.name : "Anonymous"}
              </p>
              <p className="text-xs opacity-75">{user.data.profession}</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 mt-12" id="sidebar">
            <div id="sidebar-profile">
              <button
                className="flex items-center"
                onClick={() => handleSidebar("profile")}
              >
                <Icon
                  className="text-2xl bg-main-gray text-white rounded-full"
                  icon="healthicons:ui-user-profile"
                />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  Profile
                </div>
              </button>

              <div
                className={`${
                  profileSidebar ? "" : "hidden"
                } grid ml-6 gap-y-8 mt-8`}
              >
                <button
                  className="flex items-center"
                  onClick={() => navigate("/edit-profile")}
                >
                  <Icon
                    className="text-2xl text-main-gray"
                    icon="ant-design:edit-filled"
                  />
                  <div className="w-fit text-sm font-bold tracking-wider ml-6">
                    Edit Profile
                  </div>
                </button>

                <button
                  className="flex items-center"
                  onClick={() => navigate("/change-password")}
                >
                  <Icon
                    className="text-2xl text-main-gray"
                    icon="bxs:lock-open-alt"
                  />
                  <div className="w-fit text-sm font-bold tracking-wider ml-6">
                    Change Password
                  </div>
                </button>
              </div>
            </div>

            {role === "admin" ? (
              <div id="sidebar-create_event">
                <button
                  className="flex items-center"
                  onClick={() => navigate("/manage-event")}
                >
                  <Icon
                    className="text-2xl text-main-gray"
                    icon="ic:round-add-circle"
                  />
                  <div className="w-fit text-sm font-bold tracking-wider ml-6">
                    Create Event
                  </div>
                </button>
              </div>
            ) : (
              ""
            )}

            <div id="sidebar-my_booking">
              <button
                className="flex items-center"
                onClick={() => navigate("/my-booking")}
              >
                <Icon
                  className="text-2xl text-main-gray"
                  icon="jam:task-list-f"
                />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  My Booking
                </div>
              </button>
            </div>

            <div id="sidebar-my_wishlist">
              <button
                className="flex items-center text-main-blue"
                onClick={() => navigate("/my-wishlist")}
              >
                <Icon className="text-2xl" icon="ant-design:heart-filled" />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  My Wishlists
                </div>
              </button>
            </div>

            <div id="sidebar-settings">
              <button
                className="flex items-center"
                onClick={() => navigate("/setting")}
              >
                <Icon
                  className="text-2xl text-main-gray"
                  icon="clarity:settings-solid"
                />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  Settings
                </div>
              </button>
            </div>

            <div id="sidebar-logout">
              <button
                className="flex items-center text-red-500"
                onClick={handleLogout}
              >
                <Icon className="text-2xl" icon="carbon:logout" />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  Logout
                </div>
              </button>
            </div>
          </div>
        </section>

        <section
          className={`xl:basis-9/12 bg-white rounded-3xl pt-11 pb-14 xl:px-12 xl:block flex flex-col ${
            wishlists.data.length > 0 ? "xl:h-[880px]" : "xl:h-[560px]"
          }`}
        >
          <h2 className="font-bold text-xl tracking-wider">My Wishlist</h2>

          {wishlists.data.length > 0 ? (
            <div className="mt-14 flex flex-col gap-y-5">
              {wishlists.data.map((item) => (
                <div
                  className="flex gap-x-9 border-b pb-7"
                  key={item.wishlistId}
                >
                  <div className="text-center mt-4 w-10">
                    <div className="text-sm text-[#FF8900] font-bold">
                      {moment(item.event.dateTimeShow).format("DD")}
                    </div>
                    <small className="text-xs text-[#C1C5D0]">
                      {moment(item.event.dateTimeShow).format("ddd")}
                    </small>
                  </div>

                  <div>
                    <h2 className="font-bold text-2xl tracking-widest">
                      {item.event.name}
                    </h2>

                    <div className="text-xs tracking-wide text-[#373A42BF] mt-4">
                      <p className="mb-2">{item.event.location}</p>
                      <p className="mb-3">
                        {moment(item.event.dataTimeShow).format(
                          "ddd, DD MMM, hh A"
                        )}
                      </p>
                    </div>
                  </div>

                  <button
                    className={"ml-auto self-start text-main-blue text-[35px]"}
                    onClick={() =>
                      handleDeleteModal(item.wishlistId, item.event.name)
                    }
                  >
                    <Icon icon={"ant-design:heart-outlined"} />
                  </button>
                  {/* <Icon
                    icon={"ant-design:heart-outlined"}
                    className={"ml-auto text-main-blue text-[35px]"}
                  /> */}
                </div>
                // <hr />
              ))}

              {/* <div className="flex gap-x-9">
                <div className="text-center mt-4">
                  <div className="text-sm text-[#FF8900] font-bold">15</div>
                  <small className="text-xs text-[#C1C5D0]">Wed</small>
                </div>

                <div>
                  <h2 className="font-bold text-2xl tracking-widest">
                    Sights & Sounds Exhibition
                  </h2>

                  <div className="text-xs tracking-wide text-[#373A42BF] mt-4">
                    <p className="mb-2">Jakarta, Indonesia</p>
                    <p className="mb-3">Wed, 15 Nov, 4:00 PM</p>
                    <p className="font-medium text-main-blue">Detail</p>
                  </div>
                </div>

                <Icon
                  icon={"ant-design:heart-outlined"}
                  className={"ml-auto text-main-blue text-[35px]"}
                />
              </div>
              <hr />

              <div className="flex gap-x-9">
                <div className="text-center mt-4">
                  <div className="text-sm text-[#FF8900] font-bold">15</div>
                  <small className="text-xs text-[#C1C5D0]">Wed</small>
                </div>

                <div>
                  <h2 className="font-bold text-2xl tracking-widest">
                    Sights & Sounds Exhibition
                  </h2>

                  <div className="text-xs tracking-wide text-[#373A42BF] mt-4">
                    <p className="mb-2">Jakarta, Indonesia</p>
                    <p className="mb-3">Wed, 15 Nov, 4:00 PM</p>
                    <p className="font-medium text-main-blue">Detail</p>
                  </div>
                </div>

                <Icon
                  icon={"ant-design:heart-outlined"}
                  className={"ml-auto text-main-blue text-[35px]"}
                />
              </div>
              <hr />

              <div className="flex gap-x-9">
                <div className="text-center mt-4">
                  <div className="text-sm text-[#FF8900] font-bold">15</div>
                  <small className="text-xs text-[#C1C5D0]">Wed</small>
                </div>

                <div>
                  <h2 className="font-bold text-2xl tracking-widest">
                    Sights & Sounds Exhibition
                  </h2>

                  <div className="text-xs tracking-wide text-[#373A42BF] mt-4">
                    <p className="mb-2">Jakarta, Indonesia</p>
                    <p className="mb-3">Wed, 15 Nov, 4:00 PM</p>
                    <p className="font-medium text-main-blue">Detail</p>
                  </div>
                </div>

                <Icon
                  icon={"ant-design:heart-outlined"}
                  className={"ml-auto text-main-blue text-[35px]"}
                />
              </div> */}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full xl:mt-0 mt-36">
              <div className="text-center">
                <h2 className="font-bold text-2xl tracking-wider">
                  No tickets bought
                </h2>
                <p className="text-sm text-[#B3B8B8] font-medium max-w-xs tracking-wide mt-4">
                  It appears you haven’t bought any tickets yet. Maybe try
                  searching these?
                </p>
              </div>
            </div>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default MyWishlist;
