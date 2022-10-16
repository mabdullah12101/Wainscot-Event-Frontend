import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import axios from "../../utils/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../stores/actions/booking";

function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const bookings = useSelector((state) => state.bookings);
  const [toast, setToast] = useState(false);
  // const [message, setMessage] = useState("");

  const dataBooking = Object.fromEntries(
    Object.entries(state).filter(([key]) => key !== "nameEvent")
  );

  const handlePayment = () => {
    dispatch(createBooking(dataBooking)).then(() => {
      setToast(true);
    });
    // try {
    //   const result = await axios.post("/booking", dataBooking);
    //   setMessage(result.data.message);
    //   setToast("success");
    // } catch (error) {
    //   setMessage(error.response.data.message);
    //   setToast("failed");
    // }
  };

  const handleClose = () => {
    // setToast(false);
    if (bookings.isError) {
      setToast(false);
    } else {
      window.open(bookings.urlMidtrans, "_blank");
      navigate("/my-booking");
    }
  };
  console.log(state);

  return (
    <div className="xl:bg-young-blue">
      <div
        id="toast"
        className={`${
          bookings.message && toast ? "flex" : "hidden"
        } items-center p-4 mb-4 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed mx-auto left-0 right-0 top-10 z-50`}
        role="alert"
      >
        <div
          className={`inline-flex flex-shrink-0 justify-center items-center w-8 h-8 ${
            bookings.isError
              ? "text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200"
              : "text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200"
          } `}
        >
          {bookings.isError ? (
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
        <div className="ml-3 text-sm font-normal">{bookings.message}</div>
        <button
          type="button"
          className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          data-dismiss-target="#toast-success"
          aria-label="Close"
          onClick={handleClose}
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
              className={`mt-14 bg-main-blue text-white font-bold tracking-wider py-4 w-full rounded-2xl shadow-md shadow-blue-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              onClick={handlePayment}
              disabled={bookings.isLoading || toast ? true : false}
            >
              {bookings.isLoading ? (
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
                "Payment"
              )}
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Payment;
