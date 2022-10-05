import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HeaderSection from "../../components/LandingPage/HeaderSection";
import ScheduleEvent from "../../components/LandingPage/ScheduleEvent";
import CardEvent from "../../components/LandingPage/CardEvent";
import ButtonSeeAll from "../../components/LandingPage/ButtonSeeAll";
import DiscoverSection from "../../components/LandingPage/DiscoverSection";
import ListCategory from "../../components/LandingPage/ListCategory";
import ListEventCategory from "../../components/LandingPage/ListEventCategory";
import ListPartner from "../../components/LandingPage/ListPartner";
import { useEffect, useState } from "react";
import axios from "../../utils/axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [dateShow, setDateShow] = useState(moment().format("YYYY-MM-DD")); // 2022-10-04
  const [listDateShow, setListDateShow] = useState([]);
  const [searchEvent, setSearchEvent] = useState("");

  useEffect(() => {
    getDataEvent();
  }, []);

  useEffect(() => {
    getDataEvent();
  }, [page]);

  useEffect(() => {
    generateDate();
  }, [dateShow]);

  const generateDate = () => {
    let listDate = [
      moment(dateShow).subtract(2, "days"),
      moment(dateShow).subtract(1, "days"),
      dateShow,
      moment(dateShow).subtract(-1, "days"),
      moment(dateShow).subtract(-2, "days"),
    ];
    setListDateShow(listDate);
  };

  const selectDate = (date) => {
    setDateShow(date);
  };

  const getDataEvent = async () => {
    try {
      const result = await axios.get(
        `/event?page=${page}&limit=4&search=${searchEvent}&column=&asc=`
      );
      setData(result.data.data);
      setPagination(result.data.pagination);
      console.log(searchEvent);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handleSearch = () => {
    getDataEvent();
  };

  const handleChangeSearch = (e) => {
    setSearchEvent(e.target.value);
  };

  const handleNavigateDetailEvent = (idEvent) => {
    navigate(`/detail/${idEvent}`);
  };

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
          page={page}
          pagination={pagination}
          listDateShow={listDateShow}
          selectDate={selectDate}
        />

        <div className="flex gap-x-8 xl:self-auto self-start pl-8 xl:pl-0">
          {data.length > 0 ? (
            data.map((item) => (
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
            ))
          ) : (
            <div className="text-center">
              <h3>Data Not Found !</h3>
            </div>
          )}
        </div>

        <ButtonSeeAll borderColor={"border-main-blue"} />
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
