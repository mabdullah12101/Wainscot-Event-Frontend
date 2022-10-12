import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
// import { useState } from "react";

function ChangePassword() {
  const user = useSelector((state) => state.user);
  const isAdmin = true;
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

                <div className="flex items-center text-main-blue">
                  <Icon className="text-2xl" icon="bxs:lock-open-alt" />
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

            <div className="flex items-center">
              <Icon
                className="text-2xl text-main-gray"
                icon="jam:task-list-f"
              />
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

        <section className="xl:basis-9/12 bg-white rounded-3xl pt-11 pb-14 xl:px-12 xl:block flex flex-col xl:h-[880px]">
          <h2 className="font-bold text-xl tracking-wider">Change Password</h2>

          <form action="" className="mt-16 flex flex-col gap-y-8">
            <div className="flex xl:flex-row flex-col xl:items-center">
              <label
                htmlFor="oldPassword"
                className="text-sm tracking-wider w-64 xl:mb-0 mb-3"
              >
                Old Password
              </label>
              <input
                type="password"
                name="oldPassword"
                id="oldPassword"
                className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                placeholder="Input Old Password ..."
              />
            </div>

            <div className="flex xl:flex-row flex-col xl:items-center">
              <label
                htmlFor="newPassword"
                className="text-sm tracking-wider w-64 xl:mb-0 mb-3"
              >
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                placeholder="Input New Password ..."
              />
            </div>

            <div className="flex xl:flex-row flex-col xl:items-center">
              <label
                htmlFor="confirmPassword"
                className="text-sm tracking-wider w-64 xl:mb-0 mb-3"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                placeholder="Input Old Password ..."
              />
            </div>

            <button
              type="submit"
              className="mt-3 py-4 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700"
            >
              Update
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
