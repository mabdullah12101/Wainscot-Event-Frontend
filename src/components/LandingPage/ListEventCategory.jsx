function ListEventCategory() {
  return (
    <>
      <div className="flex items-center gap-x-20 xl:self-auto self-start pl-8 xl:pl-0">
        <button className="text-main-gray text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block">
          <i className="iconify" data-icon="akar-icons:arrow-left"></i>
        </button>
        <div className="flex gap-x-7 mt-14">
          <div className="bg-[url('assets/img/event1.png')] w-[300px] h-[350px] rounded-[40px] flex items-end overflow-hidden bg-center bg-no-repeat bg-cover text-white">
            <div className="bg-main-blue pl-6 pt-10 w-full relative">
              <div className="flex absolute -top-4">
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
                  62+
                </div>
              </div>
              <span className="block font-medium text-sm tracking-wider mb-3">
                Thu, 16 Nov, 7:00 PM
              </span>
              <h3 className="font-bold text-2xl tracking-widest mb-7 max-w-[220px]">
                Sight & Sounds Exhibition
              </h3>
            </div>
          </div>
          <div className="bg-[url('assets/img/event2.png')] w-[300px] h-[350px] rounded-[40px] flex items-end overflow-hidden bg-center bg-no-repeat bg-cover text-white">
            <div className="bg-main-blue pl-6 pt-10 w-full relative">
              <div className="flex absolute -top-4">
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
                  62+
                </div>
              </div>
              <span className="block font-medium text-sm tracking-wider mb-3">
                Thu, 16 Nov, 7:00 PM
              </span>
              <h3 className="font-bold text-2xl tracking-widest mb-7 max-w-[220px]">
                Sight & Sounds Exhibition
              </h3>
            </div>
          </div>
          <div className="bg-[url('assets/img/event1.png')] w-[300px] h-[350px] rounded-[40px] flex items-end overflow-hidden bg-center bg-no-repeat bg-cover text-white">
            <div className="bg-main-blue pl-6 pt-10 w-full relative">
              <div className="flex absolute -top-4">
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar1.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar2.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar3.png')] bg-cover -mr-2"></div>
                <div className="rounded-full w-7 h-7 bg-[url('./assets/img/avatar4.png')] bg-cover -mr-2 text-[10px] flex justify-center items-center">
                  62+
                </div>
              </div>
              <span className="block font-medium text-sm tracking-wider mb-3">
                Thu, 16 Nov, 7:00 PM
              </span>
              <h3 className="font-bold text-2xl tracking-widest mb-7 max-w-[220px]">
                Sight & Sounds Exhibition
              </h3>
            </div>
          </div>
        </div>
        <button className="bg-main-blue text-white text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block">
          <i className="iconify" data-icon="akar-icons:arrow-right"></i>
        </button>
      </div>

      <div className="flex gap-x-14 mt-10 xl:hidden">
        <button className="text-main-gray text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)]">
          <i className="iconify" data-icon="akar-icons:arrow-left"></i>
        </button>
        <button className="bg-main-blue text-white text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)]">
          <i className="iconify" data-icon="akar-icons:arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default ListEventCategory;
