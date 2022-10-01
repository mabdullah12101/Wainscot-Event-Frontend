function EventSection() {
  return (
    <>
      <div className="flex items-center mb-10">
        <button className="text-main-gray text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block">
          <i className="iconify" data-icon="akar-icons:arrow-left"></i>
        </button>
        <div className="flex text-main-gray font-bold text-sm mx-16 xl:gap-x-20 gap-x-14 items-center">
          <button className="flex flex-col items-center">
            <span className="mb-1">13</span>
            <span>Mon</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="mb-1">14</span>
            <span>Tue</span>
          </button>
          <button className="flex flex-col items-center text-[#FF8900] ring-2 ring-[#FF8900] rounded-2xl pt-4 pb-1 px-2 after:content-['●']">
            <span className="mb-1">15</span>
            <span>Wed</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="mb-1">16</span>
            <span>Thu</span>
          </button>
          <button className="flex flex-col items-center">
            <span className="mb-1">17</span>
            <span>Fri</span>
          </button>
        </div>
        <button className="bg-main-blue text-white text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block">
          <i className="iconify" data-icon="akar-icons:arrow-right"></i>
        </button>
      </div>
      <div className="flex gap-x-14 mb-10 xl:hidden">
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

export default EventSection;
