import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const PlantCard = ({img,name,desc,price }) => {
    return (
    <div className=" backdrop-blur-xl rounded-xl bg--gradient-to-r from white/20 via black/0 to-white/20">
        <div className="w-[512px] h-[644px] rounded-[77px] border-2px border-gradient-to-r from white/20 via black/0 to-white/20 shadow-[0_9px_18px_rgba(0,0,0,0.25)] flex flex-col items-center gap-6">
        <img src={img} alt={name} className="w-[459px] h-[459px] shadow-md"/>
        <h3 className="text-xl font-semibold text-white text-center">{name}</h3>
        <p className="text-white/80 mt-2 px-3 text-sm text-center">{desc}</p>
        <div className="flex items-center justify-between ">
                <span className="text-bold text-white text-lg">Rs. {price}/-</span> 
            <button className="px-3 py-2 rounded-lg bg-white text-black text-sm flex items-center gap-2 hover:bg-gray-200 transition"><FiShoppingBag size={20} /></button>
        </div>
      </div>
    </div>
    )
}
export default PlantCard;