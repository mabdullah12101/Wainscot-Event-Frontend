import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HeaderSection from "../../components/LandingPage/HeaderSection";
import ScheduleEvent from "../../components/LandingPage/ScheduleEvent";
import CardEvent from "../../components/LandingPage/CardEvent";
import DiscoverSection from "../../components/LandingPage/DiscoverSection";
import ListCategory from "../../components/LandingPage/ListCategory";
import ListEventCategory from "../../components/LandingPage/ListEventCategory";
import ListPartner from "../../components/LandingPage/ListPartner";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from "query-string";
import Spinner from "../../components/Spinner";

function LandingPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  const paramsPage = params.page ? +params.page : 1;
  const paramsName = params.search ? params.search : "";
  const paramsDate = params.searchDateTimeShow
    ? params.searchDateTimeShow
    : moment().format("YYYY-MM-DD");
  const paramsSort = params.asc ? params.asc : true;

  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [listDateShow, setListDateShow] = useState([]);
  const [searchEvent, setSearchEvent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getDataEvent();
  }, []);

  useEffect(() => {
    getDataEvent();
  }, [paramsPage, paramsName, paramsDate, paramsSort]);

  useEffect(() => {
    generateDate();
  }, [paramsDate]);

  const getDataEvent = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        `/event?page=${paramsPage}&limit=4&search=${paramsName}&dateTimeShow=${paramsDate}&column=&asc=${paramsSort}`
      );
      setLoading(false);
      setData(result.data.data);
      setPagination(result.data.pagination);
      console.log(result);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const useNavigateSearch = (data) => {
    let query = { ...params, ...data };
    if (query.page === 1) {
      delete query.page;
    }
    if (query.search === "") {
      delete query.search;
    }
    query = qs.stringify(query);
    navigate(`/?${query}`);
  };

  const generateDate = () => {
    let listDate = [
      moment(paramsDate).subtract(2, "days"),
      moment(paramsDate).subtract(1, "days"),
      paramsDate,
      moment(paramsDate).subtract(-1, "days"),
      moment(paramsDate).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };

  const selectDate = (date) => {
    useNavigateSearch({ searchDateTimeShow: date, page: 1 });
  };

  const handlePrevPage = () => {
    useNavigateSearch({ page: paramsPage - 1 });
  };

  const handleNextPage = () => {
    useNavigateSearch({ page: paramsPage + 1 });
  };

  const handleSearch = () => {
    useNavigateSearch({
      search: searchEvent.searchEvent,
      asc: searchEvent.asc,
      page: 1,
    });
  };

  const handleChangeSearch = (e) => {
    setSearchEvent({ ...searchEvent, [e.target.name]: e.target.value });
  };

  const handleNavigateDetailEvent = (idEvent) => {
    navigate(`/detail/${idEvent}`);
  };

  console.log(pagination);

  return (
    <>
      <section className="h-screen bg-main-blue bg-hero bg-no-repeat bg-cover bg-center">
        <Header />
        <Hero
          searchEvent={"searchEvent"}
          handleSearch={handleSearch}
          handleChangeSearch={handleChangeSearch}
        />
      </section>
      <section className="flex flex-col items-center xl:my-52 my-20">
        <HeaderSection
          bgColor={"bg-main-pink"}
          colorSection={"main-pink"}
          bgOpacity={"bg-opacity-25"}
          sectionTitle={"Event"}
          sectionCaption={"Event For You"}
          borderColor={"border-main-pink"}
        />
        <ScheduleEvent
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          page={paramsPage}
          pagination={pagination}
          listDateShow={listDateShow}
          selectDate={selectDate}
        />

        {loading ? (
          <div className="flex items-center justify-center h-80">
            <Spinner variant={"Medium"} />
          </div>
        ) : data.length > 0 ? (
          <div className="flex gap-x-8 xl:self-auto self-start pl-8 xl:pl-0 overflow-x-scroll xl:overflow-hidden w-full xl:w-auto pb-4">
            {data.map((item) => (
              <CardEvent
                key={item.eventId}
                bgCardEvent={item.image}
                titleCardEvent={item.name}
                dateCardEvent={moment(item.dateTimeShow).format(
                  "ddd, DD MMM, hh A"
                )}
                handleNavigateDetailEvent={handleNavigateDetailEvent}
                idEvent={item.eventId}
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-80">
            <h3>Data Not Found !</h3>
          </div>
        )}
      </section>

      <DiscoverSection />

      <section className="flex flex-col items-center xl:my-52 my-20">
        <HeaderSection
          bgColor={"bg-main-pink"}
          colorSection={"main-pink"}
          bgOpacity={"bg-opacity-25"}
          sectionTitle={"CATEGORY"}
          sectionCaption={"Browse Events By Category"}
          borderColor={"border-main-pink"}
        />

        <ListCategory />
        <ListEventCategory />
      </section>

      <section className="bg-main-black bg-[url('./assets/img/bg-partner.png')] text-white flex flex-col items-center py-24 bg-center bg-cover bg-no-repeat">
        <HeaderSection
          bgColor={"bg-[#ffffff40]"}
          sectionTitle={"PARTNER"}
          sectionCaption={"Our Trusted Partners"}
          borderColor={"border-white"}
        />
        <span className="text-xs text-main-gray">By companies like :</span>

        <ListPartner />
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
