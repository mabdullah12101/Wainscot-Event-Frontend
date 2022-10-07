import { useLocation } from "react-router-dom";
import card from "../../assets/img/card.png";

function Payment() {
  const { state } = useLocation();
  console.log(state);
  return (
    <main>
      <section className="grid xl:grid-cols-2 bg-white rounded-3xl xl:mx-32 xl:mt-12 xl:py-20 px-8 mt-8">
        <div className="xl:ml-24">
          <h3 className="text-xl font-bold tracking-wider">Payment Method</h3>

          {/* <!-- START PAYMENT 1 --> */}
          <div className="flex items-center justify-between xl:mt-16 mt-8 xl:mr-52">
            <div className="flex items-center">
              <button className="rounded-full w-4 h-4 border border-main-blue flex items-center justify-center">
                <i
                  className="iconify text-main-blue"
                  data-icon="icon-park-outline:dot"
                ></i>
              </button>
              <div className="bg-[#F1EAFF] w-11 h-11 rounded-lg flex justify-center items-center ml-5">
                <i
                  className="iconify text-xl text-[#884DFF]"
                  data-icon="bi:credit-card-fill"
                ></i>
              </div>
              <span className="text-sm font-bold tracking-wider ml-4">
                Card
              </span>
            </div>
            <div>
              <button>
                <i className="iconify" data-icon="bytesize:chevron-top"></i>
              </button>
            </div>
          </div>

          <div className="flex items-center ml-10 mt-5">
            <img src={card} alt="Credit Card" />
            <button className="border-dashed border border-main-blue rounded-lg text-main-blue py-2 px-2 ml-3">
              <i className="iconify text-2xl" data-icon="bx:plus"></i>
            </button>
          </div>
          {/* <!-- END PAYMENT 2  --> */}

          {/* <!-- START PAYMENT 2 --> */}
          <div className="flex items-center justify-between mt-10 xl:mr-52">
            <div className="flex items-center">
              <button className="rounded-full w-4 h-4 border border-main-blue flex items-center justify-center"></button>
              <div className="bg-[#FFEAEF] w-11 h-11 rounded-lg flex justify-center items-center ml-5">
                <i
                  className="iconify text-xl text-[#FF3D71]"
                  data-icon="fluent:building-bank-16-filled"
                ></i>
              </div>
              <span className="text-sm font-bold tracking-wider ml-4">
                Bank Transfer
              </span>
            </div>
            <div>
              <button>
                <i className="iconify" data-icon="bytesize:chevron-bottom"></i>
              </button>
            </div>
          </div>
          {/* <!-- END PAYMENT 2 --> */}

          {/* <!-- START PAYMENT 3 --> */}
          <div className="flex items-center justify-between mt-10 xl:mr-52">
            <div className="flex items-center">
              <button className="rounded-full w-4 h-4 border border-main-blue flex items-center justify-center"></button>
              <div className="bg-[#FFF4E7] w-11 h-11 rounded-lg flex justify-center items-center ml-5">
                <i
                  className="iconify text-xl text-[#FF8900]"
                  data-icon="fluent:building-retail-more-20-filled"
                ></i>
              </div>
              <span className="text-sm font-bold tracking-wider ml-4">
                Retail
              </span>
            </div>
            <div>
              <button>
                <i className="iconify" data-icon="bytesize:chevron-bottom"></i>
              </button>
            </div>
          </div>
          {/* <!-- END PAYMENT 3 --> */}

          {/* <!-- START PAYMENT 3 --> */}
          <div className="flex items-center justify-between mt-10 xl:mr-52">
            <div className="flex items-center">
              <button className="rounded-full w-4 h-4 border border-main-blue flex items-center justify-center"></button>
              <div className="bg-young-blue w-11 h-11 rounded-lg flex justify-center items-center ml-5">
                <i
                  className="iconify text-xl text-main-blue"
                  data-icon="fa-solid:dollar-sign"
                ></i>
              </div>
              <span className="text-sm font-bold tracking-wider ml-4">
                E-Money
              </span>
            </div>
            <div>
              <button>
                <i className="iconify" data-icon="bytesize:chevron-bottom"></i>
              </button>
            </div>
          </div>
          {/* <!-- END PAYMENT 3 --> */}
        </div>
        <div className="xl:px-24 xl:border-l h-fit border-[#C1C5D040] mt-14">
          <h3 className="text-xl font-bold tracking-wider">Tickets</h3>

          <div className="grid grid-cols-2 xl:mt-16 mt-5">
            <div className="text-sm font-bold">
              <span className="block mt-4">Event</span>
              <span className="block mt-4">Ticket Section</span>
              <span className="block mt-4">Quantity</span>
              <span className="block mt-4">Total Payment</span>
            </div>
            <div className="text-right text-sm font-bold text-main-blue">
              <span className="block mt-4">Sight & Sounds Exhibition</span>
              <span className="block mt-4">VIP</span>
              <span className="block mt-4">{state.totalTicket}</span>
              <span className="block mt-4">{state.totalPayment}</span>
            </div>
          </div>

          <button className="mt-14 bg-main-blue text-white font-bold tracking-wider py-4 w-full rounded-2xl shadow-md shadow-blue-300">
            Payment
          </button>
        </div>
      </section>
    </main>
  );
}

export default Payment;
