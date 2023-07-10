import React from "react";

function Navbar() {
  return (
    <div className="lg:px-24 lg:py-16">
      <nav className="h-20 px-6 lg:px-0 border-b lg:border-y border-black/30 lg:border-black flex items-center justify-between font-serif">
        <h1 className="font-medium text-lg lg:text-xl">CONSULTWISE</h1>
        <ul className="hidden lg:flex items-center justify-center space-x-8">
          <li className="opacity-60 hover:opacity-100">About us</li>
          <li className="opacity-60 hover:opacity-100">Work</li>
          <li className="opacity-60 hover:opacity-100">Testimonial</li>
        </ul>
        <button className="lg:hidden">
          <iconify-icon height="24" width="24" icon="cil:menu"></iconify-icon>
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
