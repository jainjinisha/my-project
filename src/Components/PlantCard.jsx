import React from "react";
import Bag from "../Images/bag1.png"

const PlantCard = ({img,name,desc,price }) => {
    return (
        <div className=
        "w-[450px] h-[563px] mt-[100px] p-[30px] rounded-[77px] border-2 bg-white/10 border-white/20 backdrop-blur-[8px] shadow-[0_9px_18.4px_rgba(0,0,0,0.25)] flex flex-col"
        >
        <img src={img} alt={name} className="w-[400px] h-[400px] mt-[-160px] mb-[20px]"/>
        <h3 className="text-4xl text-center text-white">{name}</h3>
        <p className="text-white/80 mt-2 text-2xl ">{desc}</p>
        <div className="mt-auto flex items-center justify-between pt-2 mb-2">
        <span className="text-bold text-white  text-4xl">Rs. {price}/-</span> 
        <img src={Bag} alt="bag" className="pr-4"/>
        </div>
      </div>
    )
}

export default PlantCard;