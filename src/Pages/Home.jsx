import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import Buttons from '../Components/Buttons';
 import SectionTitle from '../Components/SectionTitle';
import PlantCard from '../Components/PlantCards';
import TestimonialCard from '../Components/TestimonialCard';


 const Home = () => {
    return (
    <div >
        <div className="relative items-center justify-between text-white">
            <HeroBanner
                title="Earth's Exhale"
                subTitle={'"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.'}
                
            />
        
            <Buttons
                btn1 = "Buy Now"
                btn2 = "Live Demo ..."
                showBuyButton={true} 
                showPlayButton={true}
            />
        </div>
        

        <div className=' absolute right-[50px] top-[100px] z-20 w-[512px] h-[644px]'>
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Aglaonema Plant" desc="The Aglaonema plant, 
          commonly known as Chinese Evergreen known for its attractive foliage and ease of care" 
          className="w-[459px] h-[459px]" />
          <Buttons
          btn1= "Buy Now"
          showBuyButton={true} 
                showPlayButton={false}
          />

    
        </div >
        <div className='absolute left-[40px] mt-12'>
        <TestimonialCard Avataar ="../Components/Images/Avataar1.png" name="Ronnie Hamill" rating={4.5} text="I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
        
        />
        </div>


        


        <div className="max-w-6xl mx-auto px-6 mt-16 mt-20">
        <SectionTitle title="Our Top Selling Plants" className="w-[584px] h-[67px] font-inter font-semibold size-[55px] 
         shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
         <div className="grid md:grid-cols-3 gap-16 ">
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Aglaonema Plant" desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price= "300" />
          <PlantCard img= {require('../Images/PlantainLilies.png')} name="Plantain Lilies" desc="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price= "380" />
          <PlantCard img= {require('../Images/Cactus.png')} name="Cactus" desc="It is known for their ability to thrive in arid environments" price= "259" />
          <PlantCard img= {require('../Images/SwissCheesePlant.png')} name="Swiss cheese Plant" desc="It is a popular tropical houseplant known for its distinctive, perforated leaves" price= "400" />
          <PlantCard img= {require('../Images/SansevieriaPlant.png')} name="Sansevieria plant" desc="It is a popular indoor plant admired for its striking appearance and low-maintenance nature." price= "450" />
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Agave plant" desc="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms." price= "359" />

         </div>

        
    </div>
    
    </div>

  
    );
}
export default Home;