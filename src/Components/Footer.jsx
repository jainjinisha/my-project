import React from "react";
import logo from "../Images/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#1B2316] text-white pt-[200px] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        <div className="md:w-1/3">
          <div className="flex items-center gap-3">
            <img className=" w-10 h-10 rounded-full" src={logo} alt="Logo" />
            <h2 className=" font-semibold">FloraVision.</h2>
          </div>
          <p className="mt-4">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
          <div className="flex gap-4 mt-6">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>
        <div className="md:w-1/3">
          <h3 className="mb-4 font-semibold">Quick Link's</h3>
          <ul className=" space-y-2">
            <li>
              <a href="#" className="underline">
                Home
              </a>
            </li>
            <li>
              <a href="#types" className="underline">
                Type's Of plant's{" "}
              </a>
            </li>
            <li>
              <a href="#contact" className="underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#privacy" className="underline">
                Privacy
              </a>
            </li>
          </ul>
        </div>
        <div className="md:w-1/3">
          <h3 className="font-semibold mb-4">For Every Update.</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent p-3 rounded-md w-full border border-white/20"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md font-bold">
              SUBSCRIBE
            </button>
          </div>
          <p className="mt-6 text-sm">FloraVision © all right reserve</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
