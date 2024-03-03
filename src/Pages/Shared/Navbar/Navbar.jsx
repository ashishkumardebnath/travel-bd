import img from "../../../assets/banner/png-transparent-airplane-aircraft-flight-logo-airplane-blue-logo-flight-thumbnail-removebg-preview.png";
const Navbar = () => {
  return (
    <div className="navbar bg-[#fff1da] lg:px-20  fixed top-0  z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  font-semibold  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Destinations</a>
            </li>
            <li>
              <a>Hotel</a>
            </li>
            <li>
              <a>Flights</a>
            </li>
            <li>
              <a>Booking</a>
            </li>
          </ul>
        </div>
        <img className="w-10" src={img} alt="" />
        <h2 className=" text-2xl font-bold ms-2">Travel-BD</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu font-semibold menu-horizontal px-1">
          <li>
            <a>Destinations</a>
          </li>
          <li>
            <a>Hotel</a>
          </li>
          <li>
            <a>Flights</a>
          </li>
          <li>
            <a>Booking</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end me-4">
        <a className="btn btn-outline text-black bg-[#ebd6b5]">Sign Up</a>
      </div>
    </div>
  );
};

export default Navbar;
