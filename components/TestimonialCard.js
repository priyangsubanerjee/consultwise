/* eslint-disable @next/next/no-img-element */
import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-[#192654] p-8 rounded-xl z-10 flex flex-col">
      <img
        src={testimonial.image}
        className="h-14 w-14 rounded-full object-cover"
        alt=""
      />

      <p className="font-serif text-lg mt-10 mb-16 leading-8 text-[#99D0DA]">
        {testimonial.message}
      </p>

      <p className="font-serif text-sm mt-auto leading-8 text-[#99D0DA]">
        {testimonial.name}
      </p>
    </div>
  );
}

export default TestimonialCard;
