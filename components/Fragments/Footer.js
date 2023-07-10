import React from "react";

function Footer() {
  return (
    <footer className="bg-[#131D40] py-32 xp-6 lg:px-24 flex flex-col items-center">
      <div className="flex items-center justify-center space-x-5">
        <a href="#" className="text-[#99D0DA]">
          <iconify-icon
            icon="mdi:instagram"
            height="30"
            width="30"
          ></iconify-icon>
        </a>
        <a href="#" className="text-[#99D0DA]">
          <iconify-icon
            icon="ic:baseline-facebook"
            height="30"
            width="30"
          ></iconify-icon>
        </a>
        <a href="#" className="text-[#99D0DA]">
          <iconify-icon
            icon="ic:round-email"
            height="30"
            width="30"
          ></iconify-icon>
        </a>
      </div>
      <h3 className="font-serif mt-6 text-[#99D0DA] text-center">
        © 2023 Consultwise Software Solutions
      </h3>
      <div className="lg:flex lg:items-center lg:justify-center text-white text-sm mt-7 lg:space-x-5 space-y-5 lg:space-y-0">
        <div className="flex items-center space-x-2 text-xs lg:text-sm">
          <iconify-icon
            height="24"
            width="24"
            icon="iconoir:mail"
          ></iconify-icon>
          <a href="mailto:info@consultwise.us">info@consultwise.us</a>
        </div>
        <div className="hidden lg:block">|</div>
        <div className="flex items-center space-x-2 text-xs lg:text-sm">
          <iconify-icon
            height="24"
            width="24"
            icon="ic:baseline-phone"
          ></iconify-icon>

          <a href="tel:888-5562105">888-5562105 (Toll Free)</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
