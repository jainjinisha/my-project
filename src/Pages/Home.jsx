import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Buttons from '../Components/Buttons';
import TestimonialCard from '../Components/TestimonialCard';
import TrendyPlant from '../Components/TrendyPlant';
import Avataar from '../Images/Avataar1.png'
import BuyButton from '../Components/Button';
import bgImage from '../Images/bg.png'
import RightArrow from '../Images/rightarrow.png'
import Navbar from '../Components/Navbar';
import Dots from '../Images/Dots.png'

const Home = () => {
    return (
        <div className="min-h-screen w-full bg-contain bg-top width: [1800px] height: [2592px] angle: 0 deg opacity: 1;" style={{ backgroundImage: `url(${bgImage})` }}>
            <Navbar />
            <div className="flex justify-between mr-4">
                <div className="items-center justify-between text-white">
                    <HeroBanner
                        title="Earth's Exhale"
                        subTitle={'"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.'}

                    />
                    <Buttons
                        btn1="Buy Now"
                        btn2="Live Demo ..."
                    />
                </div>

                <div className='mt-[130px] '>
                        <div className=
                            "font-inter w-[450px] h-[563px] rounded-[77px] border-2 bg-white/10 border-white/20 backdrop-blur-[8px] shadow-[0_9px_18px_rgba(0,0,0,0.25)] flex flex-col p-8"
                        >
                            <img src={require('../Images/AglaonemaPlant.png')} alt="Aglaonema Plant" className="w-[459px] h-[459px] mt-[-120px] mt-4 " />
                            <div className='flex flex-row pl-8 items-center justify-between'>
                            <div>
                            <p className="text-sm text-white">Indoor Plant</p>
                            <p className="text-xl text-white">Aglaonema Plant</p>
                            </div>  
                            <img src={RightArrow} alt="Right Arrow" className='h-4'/>
                            </div>
                            <button
                                className="w-[160px] h-[50px] sm:h-[50px] 
        border-2 rounded-xl border-white text-white flex items-center justify-center opacity-[100%] bg-transparent ml-[30px] mt-[10px]"
                            >
                                <p className="font-inter font-normal text-[18px] sm:text-[22px] md:text-[24px]">
                                    Buy Now
                                </p>
                            </button>
                            <img src={Dots} alt="Dots" className='h-2 w-16 mt-8 mx-auto'/>
                        </div>
                    

                </div >
            </div>
            <div className='absolute left-[40px] mt-12'>
                <TestimonialCard Avataar={Avataar} name="Ronnie Hamill" text="I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
                />
            </div>

            <div className='mt-[500px]'>
                <TrendyPlant />
            </div>
        </div>


    );
}
export default Home;