/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

function WorkCard() {
  return (
    <Link href="#">
      <div className="z-20">
        <img
          src="https://framerusercontent.com/modules/utf16hnLE9vJBQvniX2U/sXaLs8ZNd83z3pqhI7Ho/assets/512/vrn3LNPjTU3O21hVlCvqXdQE6Y.jpg"
          className="w-full h-[250px] object-cover rounded-[20px] brightness-50 hover:brightness-100 grayscale hover:grayscale-0 transition-all duration-500"
          alt=""
        />
        <h1 className="font-serif text-xl mt-6 text-white">
          Phenomenal work name
        </h1>
        <p className="text-xs text-[#99D0DA] leading-6 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          eligendi dolore repudiandae animi dolorem quos quo ut, adipisci
        </p>
      </div>
    </Link>
  );
}

export default WorkCard;
