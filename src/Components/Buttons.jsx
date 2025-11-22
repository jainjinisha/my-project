import React from "react";

const Buttons =({btn1, btn2, showBuyButton=true, showPlayButton=true})=> {
    return (
        <div className="flex items-center gap-4">
        <div className="mt-6 flex gap-4 ">
            {showBuyButton && (
                <button className="w-[180px] sm:w-[200px] md:w-[217px] h-[50px] sm:h-[60px] 
        border-2 rounded-xl border-white flex items-center justify-center opacity-[100%] bg-transparent">
          <p className="font-inter font-normal text-[18px] sm:text-[22px] md:text-[28px] ">
            {btn1}
          </p>
        </button>
            )}
        
      </div>


        {showPlayButton && (
            <div className=" flex gap-3 items-center">
            
        <button className="w-[60px] sm:w-[65px] md:w-[70px] h-[60px] sm:h-[65px] md:h-[70px] border-2 
        rounded-full flex items-center justify-center">
          <div
            className="w-0 h-0 
                border-t-[10px] sm:border-t-[12px] md:border-t-[17px] border-t-transparent
                border-b-[10px] sm:border-b-[12px] md:border-b-[17px] border-b-transparent
                border-l-[20px] sm:border-l-[26px] md:border-l-[34px] border-l-white 
                opacity-75 rotate-120 rounded-[3px]"
          >  </div>
        </button>
            <p className="px-4 w-[119px] h-[36px] font-indie flower text-white">{btn2}</p>
         
      </div>
        )}
        
      </div>
    )
} 
export default Buttons;