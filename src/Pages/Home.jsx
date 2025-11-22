import React from 'react';
import HeroBanner from '../Components/HeroBanner';
// import SectionTitle from '../Components/SectionTitle';
import PlantCard from '../Components/PlantCards';
import aglaonema from '../Images/AglaonemaPlant.png';


 const Home = () => {
    return (
    <div className="relative text-white">
        
        <HeroBanner
        title="Earth's Exhale"
        subTitle={'"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.'}
        btn1="Buy Now"
        btn2="Live Demo..."
        
        />
        <div className='absolute right-[50px] top-[0px] z-20 w-[512px] h-[644px]'>
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Aglaonema Plant" desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price= "300" className="w-[459px] h-[459px]" />
        </div>

        


        {/* <div className="max-w-6xl mx-auto px-6 mt-16">
        <SectionTitle title="Our Top Selling Plants" className="w-[584px] h-[67px] font-inter font-semibold size-[55px] 
         shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
         <div className="grid md:grid-cols-3 gap-16 ">
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Aglaonema Plant" desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price= "300" />
          <PlantCard img= {require('../Images/PlantainLilies.png')} name="Plantain Lilies" desc="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price= "380" />
          <PlantCard img= {require('../Images/Cactus.png')} name="Cactus" desc="It is known for their ability to thrive in arid environments" price= "259" />
          <PlantCard img= {require('../Images/SwissCheesePlant.png')} name="Swiss cheese Plant" desc="It is a popular tropical houseplant known for its distinctive, perforated leaves" price= "400" />
          <PlantCard img= {require('../Images/SansevieriaPlant.png')} name="Sansevieria plant" desc="It is a popular indoor plant admired for its striking appearance and low-maintenance nature." price= "450" />
          <PlantCard img= {require('../Images/AglaonemaPlant.png')} name="Agave plant" desc="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms." price= "359" />

         </div> */}

        
    </div>
    
    // </div>

  
    );
}
export default Home;