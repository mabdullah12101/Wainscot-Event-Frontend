import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import HeaderSection from "../../components/Section/HeaderSection";
import EventSection from "../../components/Section/EventSection";
import CardEvent from "../../components/Section/CardEvent";
import ButtonSeeAll from "../../components/Section/ButtonSeeAll";

function LandingPage() {
  return (
    <>
      <section className="h-screen bg-main-blue bg-hero bg-no-repeat bg-cover bg-center">
        <Header />
        <Hero />
      </section>
      <section className="flex flex-col items-center xl:my-52 my-20">
        <HeaderSection
          colorSection={"main-pink"}
          bgOpacity={"bg-opacity-25"}
          sectionTitle={"Event"}
          sectionCaption={"Event For You"}
          borderColor={"border-main-pink"}
        />
        <EventSection />

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

        <ButtonSeeAll borderColor={"main-blue"} />
      </section>

      <Footer />
    </>
  );
}

export default LandingPage;
