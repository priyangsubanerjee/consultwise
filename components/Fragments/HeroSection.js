/* eslint-disable @next/next/no-img-element */
import React from "react";

function HeroSection() {
  return (
    <div>
      <div className="px-24 py-10 grid grid-cols-2 items-center">
        <div className="relative">
          <img
            src="/ellipse.png"
            className="absolute inset-0 left-0 -translate-x-[60%] -translate-y-[50%] top-0 h-72 -rotate-45"
            alt=""
          />
          <h1 className="text-7xl font-bold">CONSULTWISE</h1>
        </div>
        <div>
          <p className="font-light leading-9 text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            placeat doloremque aut distinctio odit rerum veniam possimus nam
            nihil corrupti, corporis consequatur tempore aliquam sit aspernatur
            sunt atque fugiat culpa?
          </p>
        </div>
      </div>
      <div className="bg-[#131D40]">
        <img
          src="/building.webp"
          className="w-full mt-10 h-[700px] object-cover rounded-b-[200px]"
          alt=""
        />
      </div>
    </div>
  );
}

export default HeroSection;
