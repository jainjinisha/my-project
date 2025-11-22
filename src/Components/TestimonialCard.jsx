import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialCard = ({Avataar,name,rating,text}) => {
    return (
   <div className="bg-white/10 w-[512px] h-[480px] border border-white/20 backdrop-blur-xl rounded-xl bg-gradient-to-r from-white/20 via black/0 to-white/20 
     shadow-[0_9px_18px_rgba(0,0,0,0.25)] ">
    <div clasName="flex items-center gap-4">
        <img src= {Avataar}  className="w-[88px] h-[88px] rounded-[51px] shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),
                                                                                0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
    <div>
        <h4 className="font-semibold w-[224px] h-[46px] text-white font-inter size-[38px]">{name}</h4>
         <div className="flex gap-1 text-yellow-400 mt-1">
  {[...Array(5)].map((_, i) => {
    const filled = i < Math.floor(rating);  // full stars
    const half = rating - i === 0.5;        // half star

    return (
      <span key={i}>
        {filled ? (
          <FaStar className="w-5 h-5" />
        ) : half ? (
          <FaStarHalfAlt className="w-5 h-5" />
        ) : (
          <FaRegStar className="w-5 h-5 text-gray-400" />
        )}
      </span>
    );
  })}
</div>
    </div>
</div>
    <p className="text-white w-[403px] h-[174px] font-inter size-[24px] font-normal mt-6 leading-relaxed">{text}</p>
      </div>
    )
}

export default TestimonialCard;
