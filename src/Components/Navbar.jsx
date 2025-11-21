import React from 'react';
import logo from '../Images/Logo.png';
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";


const Navbar = () => {
    return (
        <header className="shadow-sm text-white bg-[#0E0E0F]">
            
                <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
                    <a href= "#" className=" flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
                        <span className="font-semibold text-white">FloraVision.</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6 text-white-600">
                      <a href="#">Home</a>
                      <a href= "#types">Plants type</a>
                      <a href= "#more">More</a>
                      <a href= "#contact">Contact</a>
                      </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <button><FiSearch size={20} /></button>
                          <button><FiShoppingBag size={20} /></button> 
                    </div>
                    <div className="hidden">
                        <button className="p-2 rounded-md focus:outline-none"></button>
                    </div>
              </div>
         
  </header>
    )
} 
export default Navbar