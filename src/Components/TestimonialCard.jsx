import React from "react";
import Star from '../Images/Star.png'

const TestimonialCard = ({ Avataar, name, text }) => {
  return (
    <div className="bg-white/10 w-[450px] h-[300px] px-[30px] py-[50px] border border-white/20 backdrop-blur-[8px] rounded-[4vw]">
      <div className="flex flex-row gap-8">
        <img src={Avataar} className="w-[88px] h-[88px] rounded-[51px] shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),
                                                                                0_6.65px_5.32px_rgba(0,0,0,0.606)]" />
        <div className="mt-6">
          <h4 className="font-semibold w-[224px] text-white font-inter">{name}</h4>
          <div className="flex gap-1 text-yellow-400 mt-1">
            <img src={Star} alt="Star" className="w-[80px] h-[10px]" />
          </div>
        </div>
      </div>
      <p className="text-white w-[403px] h-[174px] font-inter size-[24px] font-normal mt-6 leading-relaxed">{text}</p>
    </div>
  )
}

export default TestimonialCard;
