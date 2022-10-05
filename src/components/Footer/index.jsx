import logo from "../../assets/img/logo.png";

function Footer() {
  return (
    <footer className="xl:px-56 xl:py-56 px-8 py-20">
      <div className="flex xl:flex-row flex-col xl:gap-0 gap-y-16 justify-between">
        <div>
          <div className="flex items-center">
            <img src={logo} alt="Logo" />
            <span className="text-2xl font-bold text-main-blue">
              Wain<span className="text-main-pink">scot</span>
            </span>
          </div>
          <span className="block tracking-wider text-sm my-5">
            Find events you love with our
          </span>
          <div className="flex text-2xl gap-x-4 text-[#d1d5db]">
            <a href="">
              <i className="iconify" data-icon="ant-design:facebook-filled"></i>
            </a>
            <a href="">
              <i className="iconify" data-icon="bxl:whatsapp-square"></i>
            </a>
            <a href="">
              <i
                className="iconify"
                data-icon="ant-design:instagram-filled"
              ></i>
            </a>
            <a href="">
              <i className="iconify" data-icon="akar-icons:twitter-fill"></i>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-bold tracking-wider">Wainscot</h5>
          <div className="flex flex-col text-sm font-medium text-main-gray tracking-wider gap-y-4 mt-5">
            <a href="">About Us</a>
            <a href="">Features</a>
            <a href="">Blog</a>
            <a href="">Payments</a>
            <a href="">Mobile App</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold tracking-wider">Features</h5>
          <div className="flex flex-col text-sm font-medium text-main-gray tracking-wider gap-y-4 mt-5">
            <a href="">Booking</a>
            <a href="">Create Event</a>
            <a href="">Discover</a>
            <a href="">Register</a>
          </div>
        </div>
        <div>
          <h5 className="font-bold tracking-wider">Company</h5>
          <div className="flex flex-col text-sm font-medium text-main-gray tracking-wider gap-y-4 mt-5">
            <a href="">Partnership</a>
            <a href="">Help</a>
            <a href="">Term Of Service</a>
            <a href="">Privacy Policy</a>
            <a href="">Sitemap</a>
          </div>
        </div>
      </div>
      <span className="block font-bold tracking-wider text-[#5A7184] mt-20">
        © 2020 Wainscot All Rights Reserved
      </span>
    </footer>
  );
}

export default Footer;
