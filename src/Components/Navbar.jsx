import React from 'react';
import logo from '../Images/Logo.png';
import Polygon from '../Images/Polygon1.png'
import Line1 from '../Images/Line1.png'
import Line2 from '../Images/Line2.png'
import Bag from '../Images/bag1.png'
import Search from '../Images/Search.png'

const Navbar = () => {
    return (
        <header className= "mx-[45px] pt-[20px]  shadow-sm text-white bg-transparent ">
            
                <div className="flex items-center justify-between h-16">
                    <a href= "#" className=" flex items-center gap-3">
                        <img className="w-10 h-10 rounded-full" src={logo} alt="Logo" />
                        <span className="font-semibold text-white">FloraVision.</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-[5rem] text-white-600 font-indie">
                      <a href="#">Home</a>
                      <a href= "#types" className='flex flex-row gap-4 items-center'>Plants type <img className='h-1 w-2' src={Polygon} alt="Polygon" /></a>
                      <a href= "#more">More</a>
                      <a href= "#contact">Contact</a>
                      </nav>

                    <div className="hidden md:flex gap-8">
                        <img src={Search} alt="Search"/>
                        <img src={Bag} alt="Shopping Bag className-h-[26px]"/>
                        <div className='flex flex-col items-end mt-2'>
                            <img src={Line1} alt="Line1" />
                            <img src={Line2} alt="Line2" className='mt-1'/>
                        </div>
                    </div>

              </div>
         
  </header>
    )
} 
export default Navbar