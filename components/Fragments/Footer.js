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
      <h4 className="mt-4 text-xs text-white/60 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, commodi?
      </h4>
    </footer>
  );
}

export default Footer;
