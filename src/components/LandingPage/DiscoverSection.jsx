import Jakarta from "../../assets/img/Jakarta.png";
import Bandung from "../../assets/img/Bandung.png";
import Bali from "../../assets/img/Bali.png";
import Aceh from "../../assets/img/Aceh.png";
import Solo from "../../assets/img/Solo.png";
import Yogyakarta from "../../assets/img/Yogyakarta.png";
import Semarang from "../../assets/img/Semarang.png";
import ButtonSeeAll from "./ButtonSeeAll";

function DiscoverSection() {
  return (
    <>
      <section className="bg-main-blue bg-[url('assets/img/bg-discover.png')] bg-no-repeat bg-center bg-cover xl:mx-12 mx-7 rounded-3xl xl:px-16 px-10 xl:py-12 py-9 text-white">
        <div className="flex items-center bg-[#FFFFFF40] py-1 px-8 rounded-3xl mb-8 w-fit">
          <div className="border-t border-white xl:w-9 w-5 mr-2"></div>
          <span className="font-medium tracking-[3px] xl:text-base text-xs">
            LOCATION
          </span>
        </div>
        <div className="grid xl:grid-cols-4 gap-16">
          <div className="hidden xl:block">
            <h2 className="font-bold xl:text-4xl text-2xl tracking-wider mb-6">
              Discover
            </h2>
            <h2 className="font-bold xl:text-4xl text-2xl tracking-wider mb-6">
              Events
            </h2>
            <h2 className="font-bold xl:text-4xl text-2xl tracking-wider">
              Near You
            </h2>
          </div>
          <h2 className="xl:hidden font-bold xl:text-4xl text-2xl tracking-wider">
            Discover Events Near You
          </h2>
          <div className="text-center font-medium">
            <img src={Jakarta} className="w-full mb-4" alt="" />
            <span>Jakarta</span>
          </div>
          <div className="text-center font-medium">
            <img src={Bandung} className="w-full mb-4" alt="" />
            <span>Bandung</span>
          </div>
          <div className="text-center font-medium">
            <img src={Bali} className="w-full mb-4" alt="" />
            <span>Bali</span>
          </div>
          <div className="text-center font-medium">
            <img src={Aceh} className="w-full mb-4" alt="" />
            <span>Aceh</span>
          </div>
          <div className="text-center font-medium">
            <img src={Solo} className="w-full mb-4" alt="" />
            <span>Solo</span>
          </div>
          <div className="text-center font-medium">
            <img src={Yogyakarta} className="w-full mb-4" alt="" />
            <span>Yogyakarta</span>
          </div>
          <div className="text-center font-medium">
            <img src={Semarang} className="w-full mb-4" alt="" />
            <span>Semarang</span>
          </div>
        </div>
        <div className="w-full text-center">
          <ButtonSeeAll bgColor={"bg-white"} />
        </div>
      </section>
      ;
    </>
  );
}

export default DiscoverSection;
