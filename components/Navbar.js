import React from "react";

function Navbar() {
  return (
    <div className="px-24 py-16">
      <nav className="h-20 border-y border-black flex items-center justify-between font-serif">
        <h1 className="font-medium text-xl">CONSULTWISE</h1>
        <ul className="flex items-center justify-center space-x-8">
          <li className="opacity-60 hover:opacity-100">About us</li>
          <li className="opacity-60 hover:opacity-100">Work</li>
          <li className="opacity-60 hover:opacity-100">Testimonial</li>
          <li className="opacity-60 hover:opacity-100">Footer</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
