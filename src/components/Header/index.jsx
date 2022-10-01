import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="xl:px-14 xl:py-4 px-6 py-2 bg-white">
        {/*  NAV  */}
        <nav className="flex flex-wrap justify-between items-center">
          <div className="flex items-center text-sm">
            <img src={logo} alt="Logo" />
            <span className="xl:text-2xl text-xl font-bold text-main-blue">
              Wain<span className="text-main-pink">scot</span>
            </span>
          </div>
          <div className="hidden xl:block">
            <ul className="flex gap-x-14 font-bold tracking-wider">
              <li>
                <a href="" className="text-main-blue">
                  Home
                </a>
                <hr className="border-t-4 border-main-blue rounded-2xl mx-3 mt-3" />
              </li>
              <li>
                <a href="">Create Event</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
            </ul>
          </div>
          {/* No LOGIN */}
          <div className="hidden xl:block text-sm">
            <button className="font-bold tracking-widest py-3 px-5 mr-5">
              Log In
            </button>
            <button className="bg-main-blue text-white font-bold tracking-widest py-3 px-14 rounded-xl">
              Sign Up
            </button>
          </div>

          {/* LOGIN */}
          {/* <div className="hidden xl:flex items-center gap-x-5">
            <button className="w-11 h-11 rounded-full bg-[url('./assets/img/profile.png')] bg-cover outline outline-offset-2 outline-[3px] outline-main-blue"></button>
            <span className="font-bold tracking-wider text-sm">
              Jhon Tomson
            </span>
          </div> */}

          {/*  HAMBURGER MENU */}
          <div className="text-2xl sm:hidden">
            <button>
              <i className="iconify" data-icon="bytesize:menu"></i>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
