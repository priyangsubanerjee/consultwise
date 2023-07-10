import React from "react";
import TestimonialCard from "../TestimonialCard";

function Testimonials() {
  return (
    <div className="bg-[#131D40] py-16 lg:py-32 px-6 lg:px-24 relative overflow-hidden">
      <p className="text-[#99D0DA] text-lg font-bebas">TESTIMONIALS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <img
        src="/spark.png"
        className="absolute right-0 translate-x-[40%] lg:-translate-x-[20%] translate-y-[20%] opacity-50 top-0 h-44 object-contain lg:h-72 w-fit"
        alt=""
      />
    </div>
  );
}

export default Testimonials;
