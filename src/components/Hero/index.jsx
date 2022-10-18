import imgPeople from "../../assets/img/img-people.png";

function Hero({ searchEvent, handleSearch, handleChangeSearch }) {
  return (
    <section className="flex flex-wrap xl:items-center xl:flex-row flex-col items-center xl:h-auto h-5/6 xl:bg-none bg-[url('./assets/img/img-people.png')] bg-[length:500px] bg-no-repeat bg-bottom">
      <div className="xl:basis-1/2 xl:pl-36 xl:text-left xl:block flex flex-col items-center text-center xl:h-auto w-full h-full justify-between">
        <span className="block text-white font-bold xl:text-[4rem] text-4xl tracking-wider leading-relaxed mb-10 max-w-sm xl:max-w-xl xl:mt-0 mt-3">
          Find event you love with our
        </span>
        <div className="flex justify-between xl:justify-start xl:pl-5 pl-4 bg-white text-xs font-medium text-main-gray tracking-wider rounded-2xl xl:w-full w-11/12">
          <div className="bg-[url('https://api.iconify.design/akar-icons/search.svg?color=%23d1d5db&width=25')] bg-no-repeat bg-left xl:w-6/12">
            <input
              className="py-7 xl:pr-0 pl-8 bg-transparent xl:w-full focus:outline-none"
              placeholder="Search Event..."
              name={searchEvent}
              onChange={handleChangeSearch}
            />
          </div>
          <div className="border-r-2 my-3 xl:mx-3 "></div>
          <div className="bg-[url('https://api.iconify.design/ep/location.svg?color=%23d1d5db&width=28')] bg-no-repeat bg-left xl:w-5/12">
            <select
              className="py-7 xl:pl-10 xl:pr-0 pl-8 bg-transparent xl:w-full focus:outline-none"
              placeholder="Where?"
              name="asc"
              onChange={handleChangeSearch}
            >
              <option value="true">Newest</option>
              <option value="false">Latest</option>
            </select>
          </div>
          <div className="self-center mr-3 xl:ml-4 text-white text-2xl xl:w-1/12">
            <button
              className="bg-main-pink py-2 px-2 xl:pl-[10px] rounded-lg shadow-md shadow-[rgba(51, 102, 255, 0.15)] xl:w-full"
              onClick={handleSearch}
            >
              <i className="iconify" data-icon="akar-icons:arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="xl:basis-1/2 xl:mt-20 hidden xl:block">
        <img src={imgPeople} alt="" className="xl:w-11/12" />
      </div>
    </section>
  );
}

export default Hero;
