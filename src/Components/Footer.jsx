import React from "react";
import logo from '../Images/Logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#1B2316] text-white mt-14 py-6 px-6 md:px-12 lg:px-24">
            <div className="grid md:grid-cols-4 gap-8">
               <div>
                <img className="inline-block w-12 h-12 rounded-full mb-2" src={logo} alt="Logo"/>
                <h2 className="inline-block font-semibold text-white">FloraVision.</h2>
                <p className="mt-6 text-white">"From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."</p>
               </div>

                <div>
                    <h3 className="text-white font-semibold">Quick Link's</h3>
                    <ul className= "mt-4 space-y-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#types">Type's Of plant's </a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy">Privacy</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold">For Every Update.</h3>
                    <div className="relative w-full max-w-sm">
                    <input type="email" placeholder="Enter Email" className="bg-transparent p-4 rounded-[8px] w-[562px] h-[74px] text-[#FFFFFF] size-[24px] border-2 border-white" />
                    <button className="absolute h-[64.89px] w-[165.08px] left-[395px] top-[5px] bg-white text-[#000000] font-bold font-Inter size-[22px] rounded-[8px]">SUBSCRIBE</button>
                </div>
                </div>
            </div>
        
        </footer>
    );
}
export default Footer;