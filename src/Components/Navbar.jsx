import React from "react";
import logo from "../Images/Logo.png";
import Polygon from "../Images/Polygon1.png";
import Line1 from "../Images/Line1.png";
import Line2 from "../Images/Line2.png";
import Bag from "../Images/bag1.png";
import Search from "../Images/Search.png";

const Navbar = () => {
  return (
    <header className="px-4 md:px-12 py-4 bg-transparent text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <a href="#" className=" flex items-center gap-3">
          <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
          <span className="font-semibold text-white">FloraVision.</span>
        </a>
        <nav
          className={`absolute top-full left-0 right-0 bg-[#0b0f0e]/90 md:bg-transparent md:static md:flex md:items-center md:gap-12 md:block`}
        >
          <div className="md:flex md:items-center md:gap-12 px-4 md:px-0 py-4 md:py-0 font-indie">
            <a href="#" className="block md:inline py-2 md:py-0">
              Home
            </a>
            <a href="#types" className="flex items-center gap-2 py-2 md:py-0">
              Plants type{" "}
              <img className="h-3 w-3" src={Polygon} alt="Polygon" />
            </a>
            <a href="#more" className="block md:inline py-2 md:py-0">
              More
            </a>
            <a href="#contact" className="block md:inline py-2 md:py-0">
              Contact
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-8">
          <img src={Search} alt="Search" className="w-5 h-5" />
          <img src={Bag} alt="Bag" className="w-6 h-6" />
          <div className="flex flex-col items-end mt-1">
            <img src={Line1} alt="Line1" className="h-1" />
            <img src={Line2} alt="Line2" className="h-1 mt-1" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
