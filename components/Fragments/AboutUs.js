/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import PersonalizeCard from "../ContactUs";

function AboutUs() {
  const [contactUsOpen, setContactUsOpen] = useState(false);
  return (
    <div className="bg-[#131D40] py-32 px-6 lg:px-24 relative overflow-hidden">
      <div className="pb-16" id="aboutus"></div>
      <p className="text-[#99D0DA] text-lg font-bebas">ABOUT US</p>
      <h1 className="text-3xl lg:text-5xl font-medium text-[#99D0DA] max-w-4xl lg:leading-[1.2] leading-[1.3] mt-7">
        At Consultwise, we sprinkle some pixie dust on your code creating
        jaw-dropping experiences for your users.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
        <div className="text-white/80 text-sm bg-[#17224b] p-4">
          <h2 className="font-semibold text-white text-base">
            Unleash Your Creativity
          </h2>
          <p className="mt-2 leading-6 font-light">
            At Consultwise, we believe that creativity is the driving force
            behind exceptional digital experiences. Our team of talented
            designers, developers, and strategists work collaboratively to
            create visually stunning and user-friendly websites, captivating
            designs, and engaging multimedia content that captivate your target
            audience
          </p>
        </div>
        <div className="text-white/80 text-sm bg-[#17224b] p-4">
          <h2 className="font-semibold text-white text-base">
            Strategic Digital Solutions
          </h2>
          <p className="mt-2 leading-6 font-light">
            We understand that every business is unique, which is why we offer
            tailored digital solutions to meet your specific needs. Whether you
            require a complete website overhaul, search engine optimization,
            social media management, or a comprehensive digital marketing
            strategy, Consultwise has you covered. Our experts will develop a
            customized plan that aligns with your goals and maximizes your
            online presence
          </p>
        </div>
        <div className="text-white/80 text-sm bg-[#17224b] p-4">
          <h2 className="font-semibold text-white text-base">
            Data-Driven Approach
          </h2>
          <p className="mt-2 leading-6 font-light">
            We believe in the power of data to drive results. Our team combines
            creativity with analytics to make informed decisions and optimize
            your digital campaigns. By analyzing user behavior, market trends,
            and industry insights, we ensure that our strategies are effective,
            measurable, and yield a high return on investment
          </p>
        </div>
        <div className="text-white/80 text-sm bg-[#17224b] p-4">
          <h2 className="font-semibold text-white text-base">
            Exceptional User Experience
          </h2>
          <p className="mt-2 leading-6 font-light">
            User experience is at the heart of everything we do. We create
            seamless and intuitive interfaces that deliver an unforgettable
            digital experience to your audience. From responsive web design to
            mobile app development, we focus on delivering solutions that not
            only look great but also provide effortless navigation and
            functionality across all devices
          </p>
        </div>
        <div className="text-white/80 text-sm bg-[#17224b] p-4">
          <h2 className="font-semibold text-white text-base">
            Client-Centric Approach
          </h2>
          <p className="mt-2 leading-6 font-light">
            Your success is our priority. We take the time to understand your
            business, target audience, and objectives, allowing us to deliver
            solutions that truly resonate with your customers. Our dedicated
            team will communicate with you every step of the way, ensuring
            transparency, collaboration, and a result-oriented approach
          </p>
        </div>
      </div>

      <div className="lg:flex items-center mt-16 space-y-3 lg:space-y-0 lg:space-x-5">
        <button
          onClick={() => setContactUsOpen(true)}
          className="h-12 px-6 border border-transparent bg-[#99D0DA] text-[#131D40] font-bold text-sm"
        >
          CONTACT US
        </button>
        <button
          onClick={() => setContactUsOpen(true)}
          className="h-12 px-6 border border-[#99D0DA] bg-transparent text-[#99D0DA] font-bold text-sm"
        >
          PERSONALIZE YOUR WEBSITE
        </button>
      </div>
      <img
        src="/spark.png"
        className="absolute right-0 translate-x-[40%] lg:-translate-x-[20%] translate-y-[20%] opacity-50 top-0 h-44 object-contain lg:h-72 w-fit"
        alt=""
      />
      <PersonalizeCard open={contactUsOpen} setOpen={setContactUsOpen} />
    </div>
  );
}

export default AboutUs;
