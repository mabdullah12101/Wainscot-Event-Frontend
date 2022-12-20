import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "../../utils/axios";
import { getBookingByUserId } from "../../stores/actions/booking";
import moment from "moment";
import qs from "query-string";

function MyBooking() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [profileSidebar, setProfileSideBar] = useState(true);
  const user = useSelector((state) => state.user);
  const role = user.data.role;
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const paramsPage = params.page ? +params.page : 1;
  const [modalDetail, setModalDetail] = useState(false);
  const [detailBooking, setDetailBooking] = useState({});
  const bookings = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getBookingByUserId(user.data.userId, paramsPage));
  }, [paramsPage]);

  const useNavigateSearch = (data) => {
    let query = { ...params, ...data };
    if (query.page === 1) {
      delete query.page;
    }
    query = qs.stringify(query);
    navigate(`/my-booking?${query}`);
  };

  const handlePrevPage = () => {
    useNavigateSearch({ page: paramsPage - 1 });
  };

  const handleNextPage = () => {
    useNavigateSearch({ page: paramsPage + 1 });
  };

  const handleDetailBooking = (data) => {
    setModalDetail(true);
    setDetailBooking(data);
  };

  const handleCloseModal = () => {
    setModalDetail(false);
    setDetailBooking({});
  };

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

  return (
    <div className="xl:bg-young-blue">
      <div
        className={`${
          modalDetail ? "" : "hidden"
        }  inset-0 fixed bg-[rgba(0,0,0,0.4)] z-50`}
      >
        <div className="flex h-full items-center justify-center">
          <div className={`bg-white w-1/2 rounded-2xl pt-6 pb-10`}>
            <h2 className="text-center font-bold text-2xl tracking-wider relative">
              Detail Booking
              <button className="absolute right-4" onClick={handleCloseModal}>
                <Icon icon={"ci:close-big"} className={`text-2xl`} />
              </button>
            </h2>

            {Object.keys(detailBooking).length > 0 ? (
              <div id="modal-body" className="px-7 mt-16 grid gap-y-7">
                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Event</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.event.name}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Location</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.event.location}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Date Time Show</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {moment(detailBooking.event.dateTimeShow).format(
                      "ddd, DD MMM, hh A"
                    )}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Total Ticket</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.totalTicket}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Total Payment</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.totalPayment}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Total Payment</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.paymentMethod}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Status Payment</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.statusPayment}
                  </p>
                </div>

                <div className="flex items-center">
                  <p className="w-4/12 font-medium">Section</p>
                  <p className="w-8/12 font-medium text-end text-main-blue">
                    {detailBooking.bookingSection.map(
                      (item) => `${item.section} `
                    )}
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
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
                className="flex items-center text-main-blue"
                onClick={() => navigate("/my-booking")}
              >
                <Icon className="text-2xl" icon="jam:task-list-f" />
                <div className="w-fit text-sm font-bold tracking-wider ml-6">
                  My Booking
                </div>
              </button>
            </div>

            <div id="sidebar-my_wishlist">
              <button
                className="flex items-center"
                onClick={() => navigate("/my-wishlist")}
              >
                <Icon
                  className="text-2xl text-main-gray"
                  icon="ant-design:heart-filled"
                />
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
          className={`xl:basis-9/12 bg-white rounded-3xl pt-11 xl:px-12 xl:block flex flex-col`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl tracking-wider">My Booking</h2>
            <button className="flex items-center text-main-blue gap-x-2 bg-[#EAF1FF] px-6 py-4 rounded-xl">
              <Icon icon={"uim:calender"} className={"text-xl"} />
              <span className="text-xs font-medium tracking-wider">March</span>
            </button>
          </div>
          {bookings.isLoading ? (
            <div className="flex justify-center items-center h-full xl:mt-0 mt-36">
              <div className="text-center">
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    ></path>
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : bookings.data.length > 0 ? (
            <>
              <div className="mt-14 mb-20 flex flex-col gap-y-7 relative">
                {bookings.data.map((item) => (
                  <div key={item.bookingId}>
                    <div className="flex gap-x-9 mb-6">
                      <div className="text-center mt-4">
                        <div className="text-sm text-[#FF8900] font-bold">
                          {moment(item.createdAt).format("DD")}
                        </div>
                        <small className="text-xs text-[#C1C5D0]">
                          {moment(item.createdAt).format("ddd")}
                        </small>
                      </div>

                      <div>
                        <h2 className="font-bold text-2xl tracking-widest">
                          {item.event.name}
                        </h2>

                        <div className="text-xs tracking-wide text-[#373A42BF] mt-4">
                          <p className="mb-2">{item.event.location}</p>
                          <p className="mb-3">
                            {moment(item.event.dateTimeShow).format(
                              "ddd, DD MMM, hh A"
                            )}
                          </p>
                          <button
                            className="font-medium text-main-blue"
                            onClick={() => handleDetailBooking(item)}
                          >
                            Detail
                          </button>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                ))}
                <div className="absolute bottom-[-60px] flex justify-center w-full">
                  <div className="flex gap-x-5">
                    <button
                      className={`text-2xl bg-main-blue text-white rounded-lg px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      disabled={paramsPage === 1 ? true : false}
                      onClick={handlePrevPage}
                    >
                      <Icon icon={"akar-icons:arrow-left"} />
                    </button>
                    <button
                      className={`text-2xl bg-main-blue text-white rounded-lg px-5 py-2 disabled:cursor-not-allowed disabled:opacity-50`}
                      disabled={
                        paramsPage === bookings.pagination.totalPage
                          ? true
                          : false
                      }
                      onClick={handleNextPage}
                    >
                      <Icon icon={"akar-icons:arrow-right"} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-center items-center h-full xl:mt-0 mt-36">
              <div className="text-center">
                <h2 className="font-bold text-2xl tracking-wider">
                  No tickets bought
                </h2>
                <p className="text-sm text-[#B3B8B8] font-medium max-w-xs tracking-wide mt-4">
                  It appears you haven`t bought any tickets yet. Maybe try
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

export default MyBooking;
