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

function LandingPage() {
  return (
    <>
      <section className="h-screen bg-main-blue bg-hero bg-no-repeat bg-cover bg-center">
        <Header />
        <Hero />
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
        <ScheduleEvent />

        <div className="flex gap-x-8 xl:self-auto self-start pl-8 xl:pl-0">
          <CardEvent
            bgCardEvent={"bg-[url('./assets/img/event1-opacity.png')]"}
            titleCardEvent={"Sight & Sounds Exhibition"}
            dateCardEvent={"Wed, 15 Nov, 4:00 PM"}
          />
          <CardEvent
            bgCardEvent={"bg-[url('./assets/img/event2.png')]"}
            titleCardEvent={"See it in Gold Class"}
            dateCardEvent={"Thu, 16 Nov, 7:00 PM"}
          />
          <CardEvent
            bgCardEvent={"bg-[url('./assets/img/event1-opacity.png')]"}
            titleCardEvent={"Sight & Sounds Exhibition"}
            dateCardEvent={"Wed, 15 Nov, 4:00 PM"}
          />
          <CardEvent
            bgCardEvent={"bg-[url('./assets/img/event2.png')]"}
            titleCardEvent={"See it in Gold Class"}
            dateCardEvent={"Thu, 16 Nov, 7:00 PM"}
          />
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
