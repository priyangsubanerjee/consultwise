/* eslint-disable @next/next/no-img-element */
import React from "react";

function TestimonialCard() {
  return (
    <div className="bg-[#192654] p-8 rounded-3xl">
      <img
        src="/user.webp"
        className="h-14 w-14 rounded-full object-cover"
        alt=""
      />

      <p className="font-serif text-lg mt-10 leading-8 text-[#99D0DA]">
        Consultwise&apos;s magical touch revitalized our entire software suite!
      </p>

      <p className="font-serif text-sm mt-16 leading-8 text-[#99D0DA]">
        Amanda Celestia
      </p>
    </div>
  );
}

export default TestimonialCard;
