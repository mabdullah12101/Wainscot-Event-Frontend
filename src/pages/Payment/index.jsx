import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [toast, setToast] = useState("");
  const [message, setMessage] = useState("");

  const dataBooking = Object.fromEntries(
    Object.entries(state).filter(([key]) => key !== "nameEvent")
  );

  const handlePayment = async () => {
    try {
      const result = await axios.post("/booking", dataBooking);
      setMessage(result.data.message);
      setToast("success");
    } catch (error) {
      setMessage(error.response.data.message);
      setToast("failed");
    }
  };

  return (
    <div className="xl:bg-young-blue">
      <div
        id="toast-success"
        className={`${
          toast === "success" ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10`}
        role="alert"
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
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
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={() => navigate("/")}
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
        id="toast-danger"
        className={`${
          toast === "failed" ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 absolute mx-auto left-0 right-0 top-10`}
        role="alert"
        onClick={() => setToast("")}
      >
        <div className="inline-flex flex-shrink-0 justify-center items-center w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
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
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-danger"
          aria-label="Close"
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
      <main>
        <section className="grid bg-white rounded-3xl xl:mx-32 xl:mt-12 xl:py-32 px-8 mt-8">
          <div className="h-fit xl:w-1/2 xl:mx-auto">
            <h3 className="text-xl font-bold tracking-wider mb-10">Tickets</h3>

            {/* <div className="grid grid-cols-2 xl:mt-16 mt-5"> */}
            <div className="text-sm font-bold flex justify-between items-center mt-4">
              <span>Event</span>
              <span className="text-sm font-bold text-main-blue">
                {state.nameEvent}
              </span>
            </div>
            <div className="text-sm font-bold flex justify-between items-center mt-4">
              <span>Ticket Section</span>
              <span className="text-sm font-bold text-main-blue">
                {state.ticketSection.map((item) => `${item} `)}
              </span>
            </div>
            <div className="text-sm font-bold flex justify-between items-center mt-4">
              <span>Quantity</span>
              <span className="text-sm font-bold text-main-blue">
                {state.totalTicket}
              </span>
            </div>
            <div className="text-sm font-bold flex justify-between items-center mt-4">
              <span>Total Payment</span>
              <span className="text-sm font-bold text-main-blue">
                {state.totalPayment}
              </span>
            </div>

            <button
              className={`${
                toast ? "cursor-not-allowed" : ""
              } mt-14 bg-main-blue text-white font-bold tracking-wider py-4 w-full rounded-2xl shadow-md shadow-blue-300 disabled:opacity-50`}
              onClick={handlePayment}
              disabled={toast ? true : false}
            >
              Payment
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Payment;
