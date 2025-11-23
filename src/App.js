import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import SectionTitle from "./Components/SectionTitle";
import PlantCard from "./Components/PlantCard";
import CustomerReview from "./Components/CustomerReview";
import OurBestO2 from "./Components/OurBestO2";
import AglaonemaPlant from './Images/AglaonemaPlant.png'
import PlantainLilies from './Images/PlantainLilies.png'
import Cactus from './Images/Cactus.png'
import SwissCheesePlant from './Images/SwissCheesePlant.png'
import SansevieriaPlant from './Images/SansevieriaPlant.png'
import AgavePlant from './Images/AgavePlant.png'

export default function App() {
    return (
        <>
            <BrowserRouter>
                <div>
                    <div>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                        <div className="px-6 bg-[#1B2316]">
                            <SectionTitle title="Our Top Selling Plants" className="w-[584px] h-[67px] font-inter font-semibold size-[55px] 
                 shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
                            <div className="flex flex-col gap-16 items-center">
                                <div className="flex gap-16 justify-center">
                                    <PlantCard img={AglaonemaPlant} name="Aglaonema Plant" desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price="300" />
                                    <PlantCard img={PlantainLilies} name="Plantain Lilies" desc="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price="380" />
                                    <PlantCard img={Cactus} name="Cactus" desc="It is known for their ability to thrive in arid environments" price="259" />
                                </div>
                                <div className="flex gap-16 justify-center">
                                    <PlantCard img={SwissCheesePlant} name="Swiss cheese Plant" desc="It is a popular tropical houseplant known for its distinctive, perforated leaves" price="400" />
                                    <PlantCard img={SansevieriaPlant} name="Sansevieria plant" desc="It is a popular indoor plant admired for its striking appearance and low-maintenance nature." price="450" />
                                    <PlantCard img={AgavePlant} name="Agave plant" desc="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms." price="359" />
                                </div>
                        </div>
                        </div>
                        <CustomerReview />
                        <OurBestO2 />
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}