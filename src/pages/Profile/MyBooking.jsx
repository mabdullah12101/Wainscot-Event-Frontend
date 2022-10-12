import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
// import { useState } from "react";

function MyBooking() {
  const user = useSelector((state) => state.user);
  const isAdmin = true;
  const booking = true;
  // const [dataUser, setDataUser] = useState(user.data);

  return (
    <div className="xl:bg-young-blue">
      <Header />
      <div className="flex xl:mx-16 xl:mt-12 xl:flex-row flex-col px-8">
        <section className="xl:basis-3/12 hidden xl:block">
          <div className="flex items-center">
            <div className="w-11 h-11 rounded-full bg-[url('./assets/img/profile.png')] bg-cover outline outline-offset-2 outline-[3px] outline-main-blue"></div>
            <div className="ml-3">
              <p className="font-bold tracking-wider text-sm">
                {user.data.name ? user.data.name : "Anonymous"}
              </p>
              <p className="text-xs opacity-75">Entrepeneur, ID</p>
            </div>
          </div>

          <div className="flex flex-col gap-y-8 mt-12">
            <div>
              <div className="flex items-center">
                <Icon
                  className="text-2xl bg-main-gray text-white rounded-full"
                  icon="healthicons:ui-user-profile"
                />
                <button className="w-fit text-sm font-bold tracking-wider ml-6">
                  Profile
                </button>
              </div>

              <div className="flex flex-col ml-6 gap-y-8 mt-8">
                <div className="flex items-center">
                  <Icon
                    className="text-2xl text-main-gray"
                    icon="ant-design:edit-filled"
                  />
                  <button className="w-fit text-sm font-bold tracking-wider ml-6">
                    Edit Profile
                  </button>
                </div>

                <div className="flex items-center">
                  <Icon
                    className="text-2xl text-main-gray"
                    icon="bxs:lock-open-alt"
                  />
                  <button className="w-fit text-sm font-bold tracking-wider ml-6">
                    Change Password
                  </button>
                </div>
              </div>
            </div>

            {isAdmin ? (
              <div className="flex items-center">
                <Icon
                  className="text-2xl text-main-gray"
                  icon="ic:round-add-circle"
                />
                <button className="w-fit text-sm font-bold tracking-wider ml-6">
                  Create Event
                </button>
              </div>
            ) : (
              ""
            )}

            <div className="flex items-center text-main-blue">
              <Icon className="text-2xl" icon="jam:task-list-f" />
              <button className="w-fit text-sm font-bold tracking-wider ml-6">
                My Booking
              </button>
            </div>

            <div className="flex items-center">
              <Icon
                className="text-2xl text-main-gray"
                icon="ant-design:heart-filled"
              />
              <button className="w-fit text-sm font-bold tracking-wider ml-6">
                My Wishlists
              </button>
            </div>

            <div className="flex items-center">
              <Icon
                className="text-2xl text-main-gray"
                icon="clarity:settings-solid"
              />
              <button className="w-fit text-sm font-bold tracking-wider ml-6">
                Settings
              </button>
            </div>

            <div className="flex items-center text-red-500">
              <Icon className="text-2xl" icon="carbon:logout" />
              <button className="w-fit text-sm font-bold tracking-wider ml-6">
                Logout
              </button>
            </div>
          </div>
        </section>

        <section
          className={`xl:basis-9/12 bg-white rounded-3xl pt-11 pb-14 xl:px-12 xl:block flex flex-col ${
            booking ? "xl:h-[880px]" : "xl:h-[560px]"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-xl tracking-wider">My Booking</h2>
            <button className="flex items-center text-main-blue gap-x-2 bg-[#EAF1FF] px-6 py-4 rounded-xl">
              <Icon icon={"uim:calender"} className={"text-xl"} />
              <span className="text-xs font-medium tracking-wider">March</span>
            </button>
          </div>

          {booking ? (
            <div className="mt-14 flex flex-col gap-y-7">
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
              </div>
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

export default MyBooking;
