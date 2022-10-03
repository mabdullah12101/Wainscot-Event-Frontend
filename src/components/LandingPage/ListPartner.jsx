import partner1 from "../../assets/img/partner1.png";
import partner2 from "../../assets/img/partner2.png";
import partner3 from "../../assets/img/partner3.png";
import partner4 from "../../assets/img/partner4.png";
import partner5 from "../../assets/img/partner5.png";
import partner6 from "../../assets/img/partner6.png";

function ListPartner() {
  return (
    <div className="grid xl:grid-cols-6 grid-cols-2 xl:gap-x-16 gap-14 mt-16">
      <img src={partner1} className="h-16" alt="" />
      <img src={partner2} className="h-16" alt="" />
      <img src={partner3} className="h-16" alt="" />
      <img src={partner4} className="h-16" alt="" />
      <img src={partner5} className="h-16" alt="" />
      <img src={partner6} className="h-16" alt="" />
    </div>
  );
}

export default ListPartner;
