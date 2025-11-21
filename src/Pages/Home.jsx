import React from 'react';
import HeroBanner from '../Components/HeroBanner';
import bgImage from '../Images/bg.png';

 const Home = () => {
    return (
    <div className="text-white">
        <HeroBanner
        bgImage src={bgImage}
        title="Earth's Exhale"
        subTitle={'"Earth Exhale" symbolizes the purity and vitality of the Earth\'s natural environment and its essential role in sustaining life.'}
        btn1="Buy Now"
        btn2="Live Demo.."
        />
    </div>
    
    );
}
export default Home;