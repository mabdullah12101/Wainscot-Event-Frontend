// import "./styles.css";
import { useState, useEffect } from "react";

import SeatPosition from "../../components/SeatPosition";

import ticketREG from "../../assets/img/reg.png";
import ticketVIP from "../../assets/img/vip.png";
import ticketVVIP from "../../assets/img/vvip.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// LIST SECTION
// VVIP = VVIP(1...4)-1
// VIP = VIP(1...4)-(1...7)
// REG = REG(1...4)-(1...9)

export default function Order() {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const userId = useSelector((state) => state.user.data.userId);
  const [fullSeat, setFullSeat] = useState([]); // DI GUNAKAN UNTUK MENAMPUNG SEAT YANG FULL
  const [activeSeat, setActiveSeat] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SEDANG DIPILIH
  const [dataOrder, setDataOrder] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG SEAT YANG SUDAH TERPILIH
  const [listBooking, setListBooking] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG LIST DATA SEAT YANG SUDAH DI BOOKING
  const [dataEvent, setDataEvent] = useState([]); // DIGUNAKAN UNTUK MENAMPUNG DATA EVENT
  const [totalPrice, setTotalPrice] = useState(0);
  const [ticketSection, setTicketSection] = useState([]);
  const [section, setSection] = useState([]);

  useEffect(() => {
    getDataBooking();
    getDataEvent();
  }, []);

  useEffect(() => {
    getTotalPayment();
    getTicketSection();
    getSection();
  }, [dataOrder]);

  const getDataBooking = async () => {
    try {
      const result = await axios.get(`/booking/section/${eventId}`);
      let dataFullSeat = result.data.data.filter((item) => item.statusFull);
      dataFullSeat = dataFullSeat.map((item) => item.section);
      setFullSeat(dataFullSeat);
      setListBooking(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataEvent = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      setDataEvent(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelectSeat = (seat) => {
    // PROSES PEMILIHAN SEAT
    const data = seat.split("-");
    if (!fullSeat.includes(seat)) {
      if (activeSeat.includes(seat)) {
        const deleteSeat = activeSeat.filter((item) => item !== seat);
        const deleteDataOrder = dataOrder.filter((item) => item.seat !== seat);
        setActiveSeat(deleteSeat);
        setDataOrder(deleteDataOrder);
      } else {
        setActiveSeat([...activeSeat, seat]);
        setDataOrder([
          ...dataOrder,
          {
            seat,
            qty: 1,
            price: data[0].includes("VVIP")
              ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
              : data[0].includes("VIP")
              ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
              : dataEvent[0].price, // HARGA TIDAK BERUBAH UNTUK REGULAR
          },
        ]);
      }
    }
  };

  const getTotalPayment = () => {
    let totalPayment = 0;
    dataOrder.map((item) => {
      totalPayment = totalPayment + item.price;
    });
    setTotalPrice(totalPayment);
  };

  const getTicketSection = () => {
    const section = [];
    const fixSection = [];
    dataOrder.map((item) => {
      section.push(item.seat.slice(0, -3));
    });
    const setSection = new Set(section);
    for (const item of setSection) {
      fixSection.push(item);
    }
    setTicketSection(fixSection);
  };

  const getSection = () => {
    const tempSection = [];
    dataOrder.map((item) => {
      for (let i = 0; i < item.qty; i++) {
        tempSection.push(item.seat);
      }
    });
    setSection(tempSection);
  };

  const handleOrderSeat = () => {
    navigate("/payment", {
      state: {
        userId: userId,
        eventId: eventId,
        totalTicket: section.length,
        totalPayment: totalPrice,
        section: section,
        nameEvent: dataEvent[0].name,
        ticketSection: ticketSection,
      },
    });
  };

  const clearOrderSeat = () => {
    setActiveSeat([]);
    setDataOrder([]);
  };

  const increaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    const price = section.seat.includes("VVIP")
      ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
      : section.seat.includes("VIP")
      ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
      : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
    findData.qty += 1;
    findData.price = price * findData.qty;
    setDataOrder([...dataOrder]);
  };

  const decreaseOrderSeat = (section) => {
    const findData = dataOrder.find((item) => item.seat === section.seat);
    if (findData.qty === 1) {
      const deleteData = dataOrder.filter((item) => item.seat !== section.seat);
      const deleteSeat = activeSeat.filter((item) => item !== section.seat);
      setDataOrder(deleteData);
      setActiveSeat(deleteSeat);
    } else {
      const price = section.seat.includes("VVIP")
        ? dataEvent[0].price * 3 // HARGA 3 KALI LIPAT UNTUK VVIP
        : section.seat.includes("VIP")
        ? dataEvent[0].price * 2 // HARGA 2 KALI LIPAT UNTUK VIP
        : dataEvent[0].price; // HARGA TIDAK BERUBAH UNTUK REGULAR
      findData.qty -= 1;
      findData.price = price * findData.qty;
      setDataOrder([...dataOrder]);
    }
  };

  return (
    <div className="xl:bg-young-blue">
      <Header />
      <main>
        <section className="grid xl:grid-cols-2 bg-white rounded-3xl xl:mx-32 xl:mt-12 xl:py-20 px-8 mt-20">
          <div className="xl:-rotate-45">
            <SeatPosition
              width="100%" // MEMBERIKAN BESARAN PADA POLA SEAT
              height="100%" // MEMBERIKAN TINGGI PADA POLA SEAT
              fullSeat={fullSeat}
              activeSeat={activeSeat}
              handleSelectSeat={handleSelectSeat}
            />
          </div>
          <div className="xl:mr-20 xl:ml-20">
            <div className="flex justify-between">
              <h3 className="text-xl font-bold tracking-wider">Tickets</h3>
              <div className="flex items-center">
                <span className="text-main-pink font-bold text-sm tracking-wider">
                  BY PRICE
                </span>
                <i
                  className="iconify text-3xl text-main-blue ml-7"
                  data-icon="ep:sort"
                ></i>
              </div>
            </div>

            {activeSeat.length > 0 ? (
              <div className="overflow-auto h-80 mt-10 pt-6 mb-5 pr-4">
                {dataOrder.map((item, index) => {
                  const data = item.seat.split("-");
                  const dataSeat = listBooking.filter(
                    (itemSeat) => itemSeat.section === item.seat
                  );
                  const seatAvailable =
                    dataSeat.length > 0
                      ? dataSeat[0].available
                      : data[0].includes("VVIP")
                      ? 10
                      : data[0].includes("VIP")
                      ? 20
                      : 30;

                  return (
                    <>
                      <div className="flex justify-between" key={index}>
                        <div className="flex items-center">
                          <img
                            src={
                              data[0].includes("VVIP")
                                ? ticketVVIP
                                : data[0].includes("VIP")
                                ? ticketVIP
                                : ticketREG
                            }
                            className="ticket-icon"
                            alt="ticket icon"
                          />
                          <div className="ml-4">
                            <h5 className="text-sm font-bold">
                              SECTION {data[0]}, ROW {data[1]}
                            </h5>
                            <span className="text-xs text-[#BDC0C4] font-medium">
                              {/* {dataSeat.length > 0
                                ? dataSeat[0].available
                                : data[0].includes("VVIP")
                                ? 10
                                : data[0].includes("VIP")
                                ? 20
                                : 30}{" "} */}
                              {`${seatAvailable} Seats available`}
                            </span>
                          </div>
                        </div>
                        <div className="font-bold tracking-wider">
                          ${item.price}
                          <span className="text-xs font-medium text-[#BDC0C4]">
                            /person
                          </span>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-5 mb-8">
                        <span className="text-xs font-bold tracking-wider ml-[60px]">
                          Quantity
                        </span>
                        <div className="flex items-center text-main-gray gap-x-8">
                          <button
                            className="border border-main-gray px-[1px] rounded-md"
                            onClick={() => decreaseOrderSeat(item)}
                          >
                            <i
                              className="iconify text-2xl"
                              data-icon="bx:minus"
                            ></i>
                          </button>
                          <span className="text-xs font-bold text-main-black">
                            {item.qty}
                          </span>
                          <button
                            className="border border-main-gray px-[1px] rounded-md disabled:cursor-not-allowed disabled:opacity-50"
                            onClick={() => increaseOrderSeat(item)}
                            disabled={seatAvailable === item.qty ? true : false}
                          >
                            <i
                              className="iconify text-2xl"
                              data-icon="bx:plus"
                            ></i>
                          </button>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            ) : (
              <div className="flex items-center justify-center h-56 font-bold">
                <h6>Select Seat</h6>
              </div>
            )}
            <hr />

            <div className="flex flex-col gap-y-4 mt-7 mb-10">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Ticket Section</span>
                <span className="text-sm font-bold text-main-blue">
                  {dataOrder.length > 0
                    ? ticketSection.map((item) => `${item} `)
                    : "None"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Quantity</span>
                <span className="text-sm font-bold text-main-blue">
                  {section.length}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold">Total Payment</span>
                <span className="text-sm font-bold text-main-blue">
                  {dataOrder.length > 0 ? totalPrice : 0}
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <button
                className={`${
                  activeSeat.length > 0 ? "" : "cursor-not-allowed"
                } mt-5 bg-main-blue text-white font-bold tracking-wider py-3 rounded-2xl shadow-md shadow-blue-300 disabled:opacity-50`}
                disabled={activeSeat.length > 0 ? false : true}
                onClick={handleOrderSeat}
              >
                Checkout
              </button>
              <button
                className="mt-3 bg-red-500 text-white font-bold tracking-wider py-3 rounded-2xl shadow-md shadow-red-300"
                onClick={clearOrderSeat}
              >
                Clear All
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
