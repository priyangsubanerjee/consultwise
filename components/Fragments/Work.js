/* eslint-disable @next/next/no-img-element */
import React from "react";
import WorkCard from "../WorkCard";

function Work() {
  return (
    <div className="bg-[#131D40] py-16 lg:py-32 px-6 lg:px-24 relative">
      <div className="pb-16" id="work"></div>
      <img
        src="/ellipse_white.png"
        className="absolute top-0 -translate-x-[40%] -translate-y-[10%] left-0 h-[400px] z-0 -rotate-90 opacity-50"
        alt=""
      />
      <p className="text-[#99D0DA] text-xl font-bebas">WORK</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 z-10">
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div>
    </div>
  );
}

export default Work;
