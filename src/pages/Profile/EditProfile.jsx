import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useState } from "react";
// import profile from "../../assets/img/profile.png";
import { updateImage, updateProfileUser } from "../../stores/actions/user";
import { getDataUserById } from "../../stores/actions/user";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const role = user.data.role;
  const [profileSidebar, setProfileSideBar] = useState(true);
  const [toast, setToast] = useState(false);
  const listProfession = [
    "Select Profession",
    "Accountant",
    "Programmer",
    "Architect",
    "Farmer",
    "Journalist",
  ];
  const listNationality = [
    "Select Nationality",
    "Germany",
    "Japan",
    "Indonesia",
    "South Korea",
    "China",
  ];
  const [dataUser, setDataUser] = useState({
    name: user.data.name,
    username: user.data.username,
    email: user.data.email,
    phoneNumber: user.data.phoneNumber,
    gender: user.data.gender,
    profession: user.data.profession,
    nationality: user.data.nationality,
    dateOfBirth: user.data.dateOfBirth,
  });
  const [newImage, setNewImage] = useState({});
  const [imagePreview, setImagePreview] = useState("");
  const lengthImage = Object.keys(newImage).length;

  const handleInput = (e) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };

  const handleInputImage = (e) => {
    const { name, files } = e.target;
    setNewImage({ [name]: files[0] });
    setImagePreview(URL.createObjectURL(files[0]));
  };

  const handleUpdateProfile = () => {
    dispatch(updateProfileUser(user.data.userId, dataUser)).then(() => {
      setToast(true);
      if (!user.isError) {
        dispatch(getDataUserById(user.data.userId));
      }
    });
  };

  const handleUpdateImage = () => {
    const imageData = new FormData();
    imageData.append("image", newImage.image);
    dispatch(updateImage(user.data.userId, imageData)).then(() => {
      setToast(true);
      if (!user.isError) {
        dispatch(getDataUserById(user.data.userId));
      }
    });
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
        id="toast"
        className={`${
          user.message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            user.isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {user.isError ? (
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
        <div className="ml-3 text-sm font-normal">{user.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={() => setToast(false)}
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

      <Header />
      <div className="flex xl:mx-16 xl:mt-12 xl:flex-row flex-col px-8">
        <section className="xl:basis-3/12 hidden xl:block">
          <div className="flex items-center">
            <div className="w-11 h-11 rounded-full outline outline-offset-2 outline-[3px] outline-main-blue overflow-hidden">
              <img
                src={
                  process.env.REACT_APP_CLOUDINARY_URL_IMAGE + user.data.image
                }
                alt=""
                className="w-full rounded-full"
              />
            </div>
            <div className="ml-3">
              <p className="font-bold tracking-wider text-sm">
                {user.data.name ? user.data.name : "Anonymous"}
              </p>
              <p className="text-xs opacity-75">Entrepeneur, ID</p>
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
                  className="flex items-center text-main-blue"
                  onClick={() => navigate("/edit-profile")}
                >
                  <Icon className="text-2xl" icon="ant-design:edit-filled" />
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
                        onChange={handleInput}
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
                        onChange={handleInput}
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
                  value={
                    dataUser.profession
                      ? dataUser.profession
                      : "Select Profession"
                  }
                  onChange={handleInput}
                >
                  {listProfession.map((item, index) => (
                    <option
                      value={item === "Select Profession" ? "" : item}
                      key={index}
                      // selected={dataUser.profession === item ? true : false}
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
                  value={
                    dataUser.nationality
                      ? dataUser.nationality
                      : "Select Nationality"
                  }
                  onChange={handleInput}
                >
                  {listNationality.map((item, index) => (
                    <option
                      value={item === "Select Nationality" ? "" : item}
                      key={index}
                      // selected={dataUser.nationality === item ? true : false}
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
                type="button"
                className="mt-8 py-4 px-4 xl:w-72 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700"
                onClick={handleUpdateProfile}
                disabled={user.isLoading ? true : toast ? true : false}
              >
                {user.isLoading ? (
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
                  "Save"
                )}
              </button>
            </form>

            <div className="xl:basis-5/12 xl:border-l h-fit xl:px-14 xl:mb-0 mb-10 order-1">
              <label
                className="mx-auto w-32 h-32 rounded-full border flex justify-center items-center outline outline-offset-8 outline-[5px] outline-main-blue cursor-pointer overflow-hidden"
                htmlFor="image"
              >
                <Icon
                  icon={"ant-design:camera-filled"}
                  className={"absolute text-white text-3xl"}
                />
                <img
                  src={
                    lengthImage > 0
                      ? imagePreview
                      : process.env.REACT_APP_CLOUDINARY_URL_IMAGE +
                        user.data.image
                  }
                  className="rounded-full w-full"
                  alt=""
                />
                <input
                  type="file"
                  className="hidden"
                  id="image"
                  name="image"
                  onChange={handleInputImage}
                />
              </label>

              {lengthImage > 0 ? (
                <button
                  className="border border-main-blue text-main-blue text-sm font-bold w-full py-3 mt-14 rounded-lg xl:block hidden"
                  onClick={handleUpdateImage}
                >
                  Save
                </button>
              ) : (
                <label
                  htmlFor="image"
                  className="border border-main-blue text-main-blue text-sm font-bold w-full py-3 mt-14 rounded-lg xl:block hidden text-center cursor-pointer"
                >
                  Choose Photo
                  <input
                    type="file"
                    className="hidden"
                    id="image"
                    name="image"
                    onChange={handleInputImage}
                  />
                </label>
              )}

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
