/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";
function HeroSection() {
  return (
    <div>
      <div className="px-6 lg:px-24 pt-10">
        <div className="grid grid-cols-1 gap-7  lg:grid-cols-2">
          <div>
            <h2 className="font-light text-neutral-800">
              Welcome to consultwise
            </h2>
            <h1 className="text-[70px] lg:text-[90px] font-bebas leading-[1.1] text-neutral-800 mt-4">
              Your <span className="text-teal-600">Creative</span> <br />{" "}
              digital agency.
            </h1>
            <div className="mt-7">
              <p className="font-medium font-serif text-neutral-600">
                Clients served
              </p>
              <h2 className="font-bebas text-3xl mt-1">200+</h2>
            </div>
          </div>

          <div>
            <p className="text-base font-medium mt-7">
              Transform Your Digital Presence with Consultwise
            </p>
            <p className="leading-8 text-sm mt-5 text-neutral-600">
              Are you ready to take your online presence to new heights? Look no
              further than Consultwise, your trusted partner in all things
              digital. We are a creative digital agency specializing in helping
              businesses like yours succeed in the digital world. With our
              innovative strategies and expert team, we are here to guide you
              towards achieving your online goals.
            </p>

            <p className="text-base font-medium mt-7">
              Ready to Ignite Your Digital Journey?
            </p>

            <p className="leading-8 text-sm mt-5">
              Whether you are a startup looking to establish your online
              presence or an established brand seeking to enhance your digital
              footprint, Consultwise is here to assist you. Let us help you
              unlock the full potential of your business in the digital
              landscape.
              <br />
              <br />
              Contact us today to schedule a consultation with our experts and
              discover how Consultwise can transform your digital presence into
              a powerful asset that drives growth, engagement, and success.
              Together, let&apos;s embark on a journey of digital excellence.
            </p>

            <div className="mt-10">
              <p className="font-bebas text-base mb-5 text-neutral-500">
                TRUSTED BY
              </p>
              <Marquee speed={50} gradient>
                <img
                  src="/works/aps.png"
                  className="h-10 lg:h-14 grayscale ml-10"
                  alt=""
                />
                <img
                  src="/works/icchedana.png"
                  className="h-10 lg:h-14 grayscale ml-10"
                  alt=""
                />{" "}
                <img
                  src="/works/dvc.png"
                  className="h-10 lg:h-14 grayscale ml-10"
                  alt=""
                />{" "}
                <img
                  src="/works/lionsclub.png"
                  className="h-10 lg:h-14 grayscale ml-10"
                  alt=""
                />{" "}
                <div className="h-14 flex items-center ml-14">
                  <img
                    src="/works/speakingminds.png"
                    className="h-10 lg:h-10 grayscale"
                    alt=""
                  />{" "}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 flex justify-center items-center relative">
        <div className="h-1/2 w-full bg-[#131D40] absolute bottom-0 left-0"></div>
        <div className="w-[80%] h-[200px] md:h-[350px] border-2 border-black lg:h-[500px] rounded-xl z-10 overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
