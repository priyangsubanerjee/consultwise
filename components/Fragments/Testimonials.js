import React from "react";
import TestimonialCard from "../TestimonialCard";

function Testimonials() {
  return (
    <div className="bg-[#131D40] py-16 lg:py-32 px-6 lg:px-24 relative">
      <p className="text-[#99D0DA] text-lg font-bebas">TESTIMONIALS</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 z-10">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </div>
  );
}

export default Testimonials;
