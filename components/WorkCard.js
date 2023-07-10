/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function WorkCard({ work }) {
  return (
    <Link href="#">
      <div className="z-20">
        <img
          src={
            work.image
              ? work.image
              : "https://framerusercontent.com/modules/utf16hnLE9vJBQvniX2U/sXaLs8ZNd83z3pqhI7Ho/assets/512/vrn3LNPjTU3O21hVlCvqXdQE6Y.jpg"
          }
          className="w-full h-[250px] object-cover rounded-[10px] brightness-50 hover:brightness-100 grayscale hover:grayscale-0 transition-all duration-500"
          alt=""
        />
        <h1 className="font-serif text-xl mt-6 text-white">{work.title}</h1>
        <p className="text-xs text-[#99D0DA] leading-6 mt-2">
          {work.description}
        </p>
      </div>
    </Link>
  );
}

export default WorkCard;
