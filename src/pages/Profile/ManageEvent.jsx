import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { useState } from "react";

function ManageEvent() {
  const user = useSelector((state) => state.user);
  const event = true;
  const [createModal, setCreateModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [detailModal, setDetailModal] = useState(false);
  // const [dataUser, setDataUser] = useState(user.data);

  const handleModal = (modal, data) => {
    switch (modal) {
      case "createModal":
        setCreateModal(data);
        break;
      case "updateModal":
        setUpdateModal(data);
        break;
      case "detailModal":
        setDetailModal(data);
        break;
      default:
        break;
    }
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

            <div className="flex items-center text-main-blue">
              <Icon className="text-2xl" icon="ic:round-add-circle" />
              <button className="w-fit text-sm font-bold tracking-wider ml-6">
                Create Event
              </button>
            </div>

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

        <section
          className={`xl:basis-9/12 bg-white rounded-3xl pt-11 pb-14 xl:px-12 xl:block flex flex-col ${
            event ? "xl:h-[880px]" : "xl:h-[560px]"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className="font-bold text-xl
             tracking-wider"
            >
              Manage Event
            </h2>
            <button
              className="text-main-blue bg-[#EAF1FF] px-10 py-3 rounded-xl"
              onClick={() => handleModal("createModal", true)}
            >
              <span className="text-xs font-medium tracking-wider">Create</span>
            </button>
          </div>

          {/* Modal Create Event */}
          <div
            className={`${
              createModal ? "" : "hidden"
            }  inset-0 fixed bg-[rgba(0,0,0,0.4)]`}
          >
            <div className="flex h-full items-center justify-center">
              <div className={`bg-white w-10/12 px-14 py-9  rounded-3xl`}>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-xl tracking-wider">
                    Create Event
                  </h2>
                  <button onClick={() => handleModal("createModal", false)}>
                    <Icon icon={"ci:close-big"} className={`text-2xl`} />
                  </button>
                </div>

                <form action="" className={`mt-11`}>
                  <div className="grid grid-cols-2 gap-x-16">
                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Name
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Input Name Event ..."
                          name="name"
                          id="name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Location
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Location"
                          name="location"
                          id="location"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Price
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="number"
                          placeholder="Input Price ..."
                          name="price"
                          id="price"
                        />
                      </div>
                    </section>

                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Category
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Category"
                          name="category"
                          id="category"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dateTimeShow"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Date Time Show
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="date"
                          name="dateTimeShow"
                          id="dateTimeShow"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="image"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Image
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="file"
                          name="image"
                          id="image"
                        />
                      </div>
                    </section>
                  </div>

                  <label
                    htmlFor="detail"
                    className="block text-sm tracking-wider mb-2 mt-8"
                  >
                    Detail
                  </label>
                  <textarea
                    name="detail"
                    id="detail"
                    // cols="30"
                    rows="3"
                    className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                    placeholder="Input Detail ..."
                  ></textarea>

                  <div className="flex justify-end">
                    <button className="mt-8 py-4 px-4 xl:w-72 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {event ? (
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

                    <div className="flex items-center gap-x-3">
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("detailModal", true)}
                      >
                        Detail
                      </button>
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("updateModal", true)}
                      >
                        Update
                      </button>
                      <button className="font-medium text-main-blue">
                        Delete
                      </button>
                    </div>
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

                    <div className="flex items-center gap-x-3">
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("detailModal", true)}
                      >
                        Detail
                      </button>
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("updateModal", true)}
                      >
                        Update
                      </button>
                      <button className="font-medium text-main-blue">
                        Delete
                      </button>
                    </div>
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

                    <div className="flex items-center gap-x-3">
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("detailModal", true)}
                      >
                        Detail
                      </button>
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("updateModal", true)}
                      >
                        Update
                      </button>
                      <button className="font-medium text-main-blue">
                        Delete
                      </button>
                    </div>
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

                    <div className="flex items-center gap-x-3">
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("detailModal", true)}
                      >
                        Detail
                      </button>
                      <button
                        className="font-medium text-main-blue"
                        onClick={() => handleModal("updateModal", true)}
                      >
                        Update
                      </button>
                      <button className="font-medium text-main-blue">
                        Delete
                      </button>
                    </div>
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

          {/* Modal Update Event */}
          <div
            className={`${
              updateModal ? "" : "hidden"
            }  inset-0 fixed bg-[rgba(0,0,0,0.4)]`}
          >
            <div className="flex h-full items-center justify-center">
              <div className={`bg-white w-10/12 px-14 py-9  rounded-3xl`}>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-xl tracking-wider">
                    Update Event
                  </h2>
                  <button onClick={() => handleModal("updateModal", false)}>
                    <Icon icon={"ci:close-big"} className={`text-2xl`} />
                  </button>
                </div>

                <form action="" className={`mt-11`}>
                  <div className="grid grid-cols-2 gap-x-16">
                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Name
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Input Name Event ..."
                          name="name"
                          id="name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Location
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Location"
                          name="location"
                          id="location"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Price
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="number"
                          placeholder="Input Price ..."
                          name="price"
                          id="price"
                        />
                      </div>
                    </section>

                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Category
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Category"
                          name="category"
                          id="category"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dateTimeShow"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Date Time Show
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="date"
                          name="dateTimeShow"
                          id="dateTimeShow"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="image"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Image
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="file"
                          name="image"
                          id="image"
                        />
                      </div>
                    </section>
                  </div>

                  <label
                    htmlFor="detail"
                    className="block text-sm tracking-wider mb-2 mt-8"
                  >
                    Detail
                  </label>
                  <textarea
                    name="detail"
                    id="detail"
                    // cols="30"
                    rows="3"
                    className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                    placeholder="Input Detail ..."
                  ></textarea>

                  <div className="flex justify-end">
                    <button className="mt-8 py-4 px-4 xl:w-72 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Modal Update Event */}
          <div
            className={`${
              detailModal ? "" : "hidden"
            }  inset-0 fixed bg-[rgba(0,0,0,0.4)]`}
          >
            <div className="flex h-full items-center justify-center">
              <div className={`bg-white w-10/12 px-14 py-9  rounded-3xl`}>
                <div className="flex justify-between items-center">
                  <h2 className="font-bold text-xl tracking-wider">
                    Detail Event
                  </h2>
                  <button onClick={() => handleModal("detailModal", false)}>
                    <Icon icon={"ci:close-big"} className={`text-2xl`} />
                  </button>
                </div>

                <form action="" className={`mt-11`}>
                  <div className="grid grid-cols-2 gap-x-16">
                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Name
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Input Name Event ..."
                          name="name"
                          id="name"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="location"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Location
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Location"
                          name="location"
                          id="location"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="price"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Price
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="number"
                          placeholder="Input Price ..."
                          name="price"
                          id="price"
                        />
                      </div>
                    </section>

                    <section className="grid gap-y-7">
                      <div>
                        <label
                          htmlFor="category"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Category
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="text"
                          placeholder="Select Category"
                          name="category"
                          id="category"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="dateTimeShow"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Date Time Show
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="date"
                          name="dateTimeShow"
                          id="dateTimeShow"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="image"
                          className="block text-sm tracking-wider mb-2"
                        >
                          Image
                        </label>
                        <input
                          className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                          type="file"
                          name="image"
                          id="image"
                        />
                      </div>
                    </section>
                  </div>

                  <label
                    htmlFor="detail"
                    className="block text-sm tracking-wider mb-2 mt-8"
                  >
                    Detail
                  </label>
                  <textarea
                    name="detail"
                    id="detail"
                    // cols="30"
                    rows="3"
                    className="focus:outline-blue-50 focus:ring-4 text-sm px-6 py-4 border border-main-gray rounded-2xl placeholder:text-gray-400 w-full"
                    placeholder="Input Detail ..."
                  ></textarea>

                  <div className="flex justify-end">
                    <button className="mt-8 py-4 px-4 xl:w-72 w-full bg-main-blue text-white font-bold border-none rounded-2xl shadow-md shadow-blue-900 hover:bg-blue-700">
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default ManageEvent;
