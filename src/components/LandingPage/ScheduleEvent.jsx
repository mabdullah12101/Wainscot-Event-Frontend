import moment from "moment";

function ScheduleEvent({
  handleNextPage,
  handlePrevPage,
  page,
  pagination,
  listDateShow,
  selectDate,
}) {
  return (
    <>
      <div className="flex items-center mb-10">
        <button
          className={`text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block ${
            page === 1 ? "text-main-gray" : "bg-main-blue text-white"
          } disabled:cursor-not-allowed`}
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
        >
          <i className="iconify" data-icon="akar-icons:arrow-left"></i>
        </button>
        <div className="flex text-main-gray font-bold text-sm mx-16 xl:gap-x-20 gap-x-14 items-center">
          {listDateShow.map((item, index) => (
            <button
              className={`flex flex-col items-center ${
                index === 2
                  ? "text-[#FF8900] ring-2 ring-[#FF8900] rounded-2xl pt-4 pb-1 w-16 after:content-['●']"
                  : ""
              }`}
              key={index}
              onClick={() => {
                selectDate(moment(item).format("YYYY-MM-DD"));
              }}
            >
              <span className="mb-1">{moment(item).format("DD")}</span>
              <span>{moment(item).format("ddd")}</span>
            </button>
          ))}
        </div>
        <button
          className={` text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] hidden xl:block ${
            page >= pagination.totalPage
              ? "text-main-gray"
              : "bg-main-blue text-white"
          } disabled:cursor-not-allowed`}
          onClick={handleNextPage}
          disabled={page >= pagination.totalPage ? true : false}
        >
          <i className="iconify" data-icon="akar-icons:arrow-right"></i>
        </button>
      </div>
      <div className="flex gap-x-14 mb-10 xl:hidden">
        <button
          className={` text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] ${
            page === 1 ? "text-main-gray" : "bg-main-blue text-white"
          } disabled:cursor-not-allowed`}
          onClick={handlePrevPage}
          disabled={page === 1 ? true : false}
        >
          <i className="iconify" data-icon="akar-icons:arrow-left"></i>
        </button>
        <button
          className={` text-3xl h-fit p-2 rounded-lg shadow-md shadow-[rgba(26, 60, 68, 0.08)] ${
            page >= pagination.totalPage
              ? "text-main-gray"
              : "bg-main-blue text-white"
          } disabled:cursor-not-allowed`}
          onClick={handleNextPage}
          disabled={page >= pagination.totalPage ? true : false}
        >
          <i className="iconify" data-icon="akar-icons:arrow-right"></i>
        </button>
      </div>
    </>
  );
}

export default ScheduleEvent;
