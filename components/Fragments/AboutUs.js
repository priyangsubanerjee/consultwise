/* eslint-disable @next/next/no-img-element */
import React from "react";

function AboutUs() {
  return (
    <div className="bg-[#131D40] py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="pb-16" id="aboutus"></div>
      <p className="text-[#99D0DA] text-lg font-bebas">ABOUT US</p>
      <h1 className="text-3xl lg:text-5xl font-medium text-[#99D0DA] max-w-4xl lg:leading-[1.2] leading-[1.3] mt-7">
        At Consultwise, we sprinkle some pixie dust on your code creating
        jaw-dropping experiences for your users.
      </h1>
      <p className="max-w-3xl text-white/80 leading-8 mt-9 font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa ab
        hic ullam, vel consequatur laboriosam repellendus dolores, placeat eaque
        tempore iusto, odit sed officia! Quisquam minima a debitis commodi.
      </p>
      <div className="lg:flex items-center mt-16 space-y-3 lg:space-y-0 lg:space-x-5">
        <button className="h-12 px-6 border border-transparent bg-[#99D0DA] text-[#131D40] font-bold text-sm">
          CONTACT US
        </button>
        <button className="h-12 px-6 border border-[#99D0DA] bg-transparent text-[#99D0DA] font-bold text-sm">
          PERSONALIZE YOUR WEBSITE
        </button>
      </div>
      <img
        src="/spark.png"
        className="absolute right-0 translate-x-[40%] lg:-translate-x-[20%] translate-y-[20%] opacity-50 top-0 h-44 object-contain lg:h-72 w-fit"
        alt=""
      />
    </div>
  );
}

export default AboutUs;
