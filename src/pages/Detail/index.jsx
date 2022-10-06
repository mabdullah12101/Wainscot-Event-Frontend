import Footer from "../../components/Footer";
import logo from "../../assets/img/logo.png";
import location from "../../assets/img/location.png";
import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { Heart, HeartFill } from "react-bootstrap-icons";

function Detail() {
  const navigate = useNavigate();
  const userId = useState(localStorage.getItem("idUser"));
  const [data, setData] = useState({});
  const [dataUser, setDataUser] = useState({});
  // const [dataWishlist, setDataWishlist] = useState([]);
  const [checkWishlist, setCheckWishlist] = useState();
  const { eventId } = useParams();

  useEffect(() => {
    getEventById();
    getUserById();
    getWishlistById();
    // wishlistSame();
  }, []);

  useEffect(() => {
    getWishlistById();
  }, [checkWishlist]);

  const getEventById = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    try {
      const result = await axios.get(`/user/${userId}`);
      setDataUser(result.data.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const getWishlistById = async () => {
    try {
      const result = await axios.get(`/wishlist/userId/${userId}`);
      // setDataWishlist(result.data.data);
      result.data.data.map((item) => {
        if (item.eventId === eventId) {
          setCheckWishlist(item.wishlistId);
        }
      });
      console.log(dataUser);
    } catch (error) {
      console.log(error);
    }
  };

  // const wishlistSame = () => {
  //   dataWishlist.map((item) => {
  //     if (item.eventId === eventId) {
  //       setCheckWishlist(true);
  //     }
  //   });
  // };

  const addWishlist = async () => {
    try {
      const result = await axios.post("/wishlist", {
        eventId: eventId,
        userId: userId,
      });
      setCheckWishlist(result.data.data[0].wishlistId);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteWishlist = async () => {
    try {
      await axios.delete(`/wishlist/${checkWishlist}`);
      setCheckWishlist("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleWishlist = async () => {
    try {
      if (!checkWishlist) {
        addWishlist();
      } else {
        deleteWishlist();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuyTicket = (eventId) => {
    navigate(`/order/${eventId}`);
  };

  return (
    <div className="xl:bg-young-blue">
      <section className="h-screen bg-white xl:hidden">
        {/* <!-- HEADER --> */}
        <header className="xl:px-14 xl:py-4 px-6 pt-2 pb-6 bg-white">
          {/* <!-- NAV --> */}
          <nav className="flex flex-wrap justify-between items-center">
            <div className="flex items-center">
              <img src={logo} alt="Logo" />
              <span className="xl:text-2xl text-xl font-bold text-main-blue">
                Wain<span className="text-main-pink">scot</span>
              </span>
            </div>
            <div className="hidden xl:block text-sm">
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
            <div className="hidden xl:flex items-center gap-x-5">
              <button className="w-11 h-11 rounded-full bg-[url('./assets/img/profile.png')] bg-cover outline outline-offset-2 outline-[3px] outline-main-blue"></button>
              <span className="font-bold tracking-wider text-sm">
                Jhon Tomson
              </span>
            </div>

            {/* <!-- HAMBURGER MENU --> */}
            <div className="text-2xl sm:hidden">
              <button>
                <i className="iconify" data-icon="bytesize:menu"></i>
              </button>
            </div>
          </nav>
        </header>

        <section className="h-5/6 text-white flex flex-col justify-center px-8 relative overflow-hidden w-full">
          <img
            src={`https://res.cloudinary.com/dra4ha50q/image/upload/v1664919867/${data.image}`}
            alt=""
            className="absolute w-full h-full right-0"
          />
          <div className="flex justify-between z-10">
            <h2 className="font-bold text-2xl tracking-widest leading-9 max-w-xs">
              {data.name}
            </h2>
            <button onClick={handleWishlist}>
              {checkWishlist ? (
                <HeartFill className="text-red-500 text-3xl" />
              ) : (
                <Heart className="text-3xl" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-x-2 mt-5 mb-3 z-10">
            <i
              className="iconify text-3xl text-red-600"
              data-icon="ep:location"
            ></i>
            <span className="text-sm tracking-wider">{data.location}</span>
          </div>

          <div className="flex items-center gap-x-2 z-10">
            <i
              className="iconify text-3xl text-red-600"
              data-icon="ant-design:clock-circle-outlined"
            ></i>
            <span className="text-sm tracking-wider">
              {moment(data.dateTimeShow).format("ddd, DD MMM, hh A")}
            </span>
          </div>

          <span className="block text-sm font-medium mt-8 z-10">Attendees</span>
          <div className="flex mt-3 mb-7 z-10">
            <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
            <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
            <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
            <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
              62+
            </div>
          </div>
        </section>
      </section>

      {/* <!-- HEADER --> */}
      <header className="xl:px-14 xl:py-4 px-6 pt-2 pb-6 bg-white hidden xl:block">
        {/* <!-- NAV --> */}
        <nav className="flex flex-wrap justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
            <span className="xl:text-2xl text-xl font-bold text-main-blue">
              We<span className="text-main-pink">tick</span>
            </span>
          </div>
          <div className="hidden xl:block text-sm">
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
          <div className="hidden xl:flex items-center gap-x-5">
            <button className="w-11 h-11 rounded-full bg-[url('./assets/img/profile.png')] bg-cover outline outline-offset-2 outline-[3px] outline-main-blue"></button>
            <span className="font-bold tracking-wider text-sm">
              Jhon Tomson
            </span>
          </div>

          {/* <!-- HAMBURGER MENU --> */}
          <div className="text-2xl sm:hidden">
            <button>
              <i className="iconify" data-icon="bytesize:menu"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* <!-- MAIN --> */}
      <main>
        <section className="grid xl:grid-cols-2 bg-white rounded-3xl xl:mx-32 xl:mt-12 xl:pt-20 pb-20 pt-6">
          <div className="xl:block hidden">
            <img
              src={`https://res.cloudinary.com/dra4ha50q/image/upload/v1664919867/${data.image}`}
              alt=""
              className="rounded-3xl mx-auto shadow-lg shadow-main-gray h-[500px] w-8/12 object-fill"
            />
            <div className="flex justify-center items-center gap-x-3 mt-10">
              <button onClick={handleWishlist}>
                {checkWishlist ? (
                  <HeartFill className="text-3xl text-red-500" />
                ) : (
                  <Heart className="text-3xl" />
                )}
              </button>
              <span className="font-medium text-xl tracking-wider">
                {checkWishlist ? "Remove to Wishlist" : "Add to Wishlist"}
              </span>
            </div>
          </div>
          <div className="px-8">
            <div className="xl:block hidden">
              <h2 className="font-bold text-2xl tracking-widest leading-9 max-w-xs">
                {data.name}
              </h2>

              <div className="grid grid-cols-2 mt-8 font-medium">
                <div className="flex items-center gap-x-2">
                  <i
                    className="iconify text-3xl text-red-600"
                    data-icon="ep:location"
                  ></i>
                  <span className="text-sm tracking-wider">
                    {data.location}
                  </span>
                </div>
                <div className="flex items-center gap-x-2">
                  <i
                    className="iconify text-3xl text-red-600"
                    data-icon="ant-design:clock-circle-outlined"
                  ></i>
                  <span className="text-sm tracking-wider">
                    {moment(data.dateTimeShow).format("ddd, DD MMM, hh A")}
                  </span>
                </div>
              </div>

              <span className="block text-sm font-medium mt-8">Attendees</span>
              <div className="flex mt-3 mb-7">
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
                  62+
                </div>
              </div>
            </div>

            <hr className="mr-24 mb-7 hidden xl:block" />

            <h2 className="font-bold text-2xl tracking-widest leading-9 max-w-xs">
              Event Detail
            </h2>
            <p className="text-sm text-gray-500 tracking-wider max-w-lg mt-5 mb-3">
              {data.detail}
            </p>
            <a href="" className="text-sm text-main-blue font-medium">
              Read More
            </a>

            <h2 className="font-bold text-2xl tracking-widest leading-9 max-w-xs mt-10 mb-5">
              Location
            </h2>
            <img src={location} className="w-full xl:w-auto" alt="" />
            <button
              className="mt-16 bg-main-blue text-white font-bold tracking-wider py-4 px-28 rounded-2xl shadow-md shadow-blue-300 w-full xl:w-auto"
              onClick={() => handleBuyTicket(eventId)}
            >
              Buy Tickets
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Detail;
