/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
function HeroSection() {
  return (
    <div>
      {/* <div className="px-24 py-10 grid grid-cols-2 items-center">
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
      </div> */}

      <div className="px-6 lg:px-24 pt-10">
        <div className="grid grid-cols-1 gap-7  lg:grid-cols-2">
          <div>
            <h1 className="text-[70px] lg:text-[90px] font-bebas leading-[1.1] text-neutral-800">
              We are a <span className="text-teal-600">creative</span> <br />{" "}
              digital agency.
            </h1>
            <div className="mt-7">
              <p className="font-medium font-serif text-neutral-600">
                Established
              </p>
              <h2 className="font-bebas text-3xl mt-1">2023</h2>
            </div>
          </div>

          <div>
            <p className="font-light leading-8 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
              animi sequi sapiente repudiandae rerum repellendus vitae,
              dignissimos, distinctio incidunt iure accusantium vel excepturi
              velit et ullam. Atque consequuntur reiciendis est.
            </p>
            <div className="mt-10">
              <p className="font-bebas text-base mb-5 text-neutral-500">
                TRUSTED BY
              </p>
              <Marquee speed={10} gradient>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                  className="h-10 lg:h-14 grayscale filter invert ml-6"
                  alt=""
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                  className="h-10 lg:h-14 grayscale filter invert ml-6"
                  alt=""
                />{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                  className="h-10 lg:h-14 grayscale filter invert ml-6"
                  alt=""
                />{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                  className="h-10 lg:h-14 grayscale filter invert  ml-6"
                  alt=""
                />{" "}
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
                  className="h-10 lg:h-14 grayscale filter invert ml-6"
                  alt=""
                />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 flex justify-center items-center relative">
        <div className="h-1/2 w-full bg-[#131D40] absolute bottom-0 left-0"></div>
        <div className="w-[80%] h-[200px] md:h-[350px] lg:h-[500px] bg-teal-100 border-2 border-teal-500 rounded-xl z-10"></div>
      </div>
    </div>
  );
}

export default HeroSection;
