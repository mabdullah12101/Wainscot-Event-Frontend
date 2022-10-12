import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useState } from "react";
import profile from "../../assets/img/profile.png";

function EditProfile() {
  const user = useSelector((state) => state.user);
  const isAdmin = true;
  const listProfession = [
    "Accountant",
    "Programmer",
    "Architect",
    "Farmer",
    "Journalist",
  ];
  const listNationality = [
    "Germany",
    "Japan",
    "Indonesia",
    "South Korea",
    "China",
  ];
  const [dataUser, setDataUser] = useState(user.data);

  const handleInput = (e) => {
    setDataUser({ ...user, [e.target.name]: e.target.value });
  };

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
                <div className="flex items-center text-main-blue">
                  <Icon className="text-2xl" icon="ant-design:edit-filled" />
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

        <section className="xl:basis-9/12 bg-white rounded-3xl pt-11 pb-14 xl:pl-12 xl:block flex flex-col xl:h-[880px]">
          <h2 className="font-bold text-xl tracking-wider">Profile</h2>

          <div className="flex xl:flex-row flex-col mt-12">
            <form
              action=""
              className="xl:pr-12 xl:basis-7/12 flex flex-col gap-y-6 order-2 xl:order-1"
            >
              <div className="flex xl:flex-row flex-col xl:items-center">
                <label
                  htmlFor="name"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Name
                </label>
                <input
                  className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                  type="text"
                  placeholder="Name"
                  name="name"
                  id="name"
                  value={dataUser.name}
                  onChange={handleInput}
                />
              </div>

              <div className="flex xl:flex-row flex-col xl:items-center">
                <label
                  htmlFor="username"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Username
                </label>
                <input
                  className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="username"
                  value={dataUser.username ? dataUser.username : ""}
                  onChange={handleInput}
                />
              </div>

              <div className="flex xl:flex-row flex-col xl:items-center">
                <label
                  htmlFor="email"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Email
                </label>
                <input
                  className="focus:outline-blue-50 focus:ring-4 text-sm cursor-not-allowed px-6 py-4 rounded-2xl bg-gray-200 border border-gray-300 text-gray-600 w-full"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={dataUser.email}
                  onChange={handleInput}
                  disabled={true}
                />
              </div>

              <div className="flex xl:flex-row flex-col xl:items-center">
                <label
                  htmlFor="phoneNumber"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Phone Number
                </label>
                <input
                  className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                  type="number"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  value={dataUser.phoneNumber ? dataUser.phoneNumber : ""}
                  onChange={handleInput}
                />
              </div>

              <fieldset className="my-3">
                <legend className="sr-only">Gender</legend>

                <div className="flex xl:flex-row flex-col xl:items-center">
                  <span className="text-sm tracking-wider w-40">Gender</span>

                  <div className="flex mt-5 xl:mt-0 gap-x-20 ">
                    <div className="flex items-center">
                      <input
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                        checked={dataUser.gender === "male" ? true : false}
                      />
                      <label
                        htmlFor="male"
                        className="block ml-2 text-sm font-medium text-gray-900"
                      >
                        Male
                      </label>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 "
                        checked={dataUser.gender === "female" ? true : false}
                      />
                      <label
                        htmlFor="female"
                        className="block ml-2 text-sm font-medium text-gray-900"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="flex xl:flex-row flex-col xl:items-center relative">
                <label
                  htmlFor="profession"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Profession
                </label>
                <Icon
                  icon="ep:arrow-down-bold"
                  className="absolute right-4 xl:top-auto top-10"
                />
                <select
                  name="profession"
                  id="profession"
                  className="appearance-none focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                >
                  {listProfession.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={dataUser.profession === item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex xl:flex-row flex-col xl:items-center relative">
                <label
                  htmlFor="nationality"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Nationality
                </label>
                <Icon
                  icon="ep:arrow-down-bold"
                  className="absolute right-4 xl:top-auto top-10"
                />
                <select
                  name="nationality"
                  id="nationality"
                  className="appearance-none focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                >
                  {listNationality.map((item, index) => (
                    <option
                      value={item}
                      key={index}
                      selected={dataUser.nationality === item ? true : false}
                    >
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex xl:flex-row flex-col xl:items-center">
                <label
                  htmlFor="dateOfBirth"
                  className="text-sm tracking-wider w-56 xl:mb-0 mb-3"
                >
                  Birthday Date
                </label>
                <input
                  className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                  type="date"
                  id="dateOfBirth"
                  placeholder="Date Of Birth"
                  name="dateOfBirth"
                  value={dataUser.dateOfBirth ? dataUser.dateOfBirth : ""}
                  onChange={handleInput}
                />
              </div>

              <button
                type="submit"
                className="mt-8 py-4 px-4 xl:w-72 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700"
              >
                Save
              </button>
            </form>

            <div className="xl:basis-5/12 xl:border-l h-fit xl:px-14 xl:mb-0 mb-10 order-1">
              <button className="mx-auto w-32 h-32 rounded-full border flex justify-center items-center outline outline-offset-8 outline-[5px] outline-main-blue">
                <Icon
                  icon={"ant-design:camera-filled"}
                  className={"absolute text-white text-3xl"}
                />
                <img src={profile} className="w-full" alt="" />
              </button>

              <button className="border border-main-blue text-main-blue text-sm font-bold w-full py-3 mt-14 rounded-lg xl:block hidden">
                Choose Photo
              </button>

              <div className="text-left text-xs mt-6 xl:block hidden">
                <p className="mb-3">Image size: max, 500 KB</p>
                <p>Image formats: .JPG, .JPEG, .PNG</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default EditProfile;
