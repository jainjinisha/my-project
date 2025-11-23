import React from "react";
import Shelly from "../Images/Shelly.png";
import Lula from "../Images/Lula.png";
import Carol from "../Images/Carol.png";
import TestimonialCard from "./TestimonialCard";
import SectionTitle from "./SectionTitle";

const CustomerReview = () => {
  return (
    <div className="mx-auto px-6 bg-[#1B2316] pt-[70px]">
      <SectionTitle
        title="Customer Reviews"
        className="w-[584px] h-[67px] font-inter font-semibold size-[55px] 
                shadow-[0_2.77px_2.21px_rgba(0,0,0,0.422),0_0_6.65px_5.32px_rgba(0,0,0,0.606)]"
      />
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        <TestimonialCard
          Avataar={Shelly}
          name="Shelly Russel"
          rating={4.5}
          text="Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
        />
        <TestimonialCard
          Avataar={Lula}
          name="Lula Rolfson"
          rating={4.5}
          text="Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
        />
        <TestimonialCard
          Avataar={Carol}
          name="Carol Huels"
          rating={4.5}
          text="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
