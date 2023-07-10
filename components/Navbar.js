import React, { useEffect } from "react";
import Services from "./Services";
import Sidebar from "./Sidebar";

function Navbar() {
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  useEffect(() => {
    if (servicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [servicesOpen]);
  return (
    <div className="lg:px-24 lg:py-16">
      <nav className="h-20 px-6 lg:px-0 border-b lg:border-y border-black/30 lg:border-black flex items-center justify-between font-serif">
        <h1 className="font-medium text-lg lg:text-xl">CONSULTWISE</h1>
        <ul className="hidden lg:flex items-center justify-center space-x-8">
          <li
            onClick={() => {
              document
                .getElementById("aboutus")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="opacity-60 hover:opacity-100"
          >
            About us
          </li>
          <li
            onClick={() => setServicesOpen(true)}
            className="opacity-60 hover:opacity-100"
          >
            Services
          </li>
          <li
            onClick={() => {
              document
                .getElementById("work")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="opacity-60 hover:opacity-100"
          >
            Work
          </li>
          <li
            onClick={() => {
              document
                .getElementById("testimonials")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="opacity-60 hover:opacity-100"
          >
            Testimonial
          </li>
        </ul>
        <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
          <iconify-icon height="24" width="24" icon="cil:menu"></iconify-icon>
        </button>
      </nav>
      <Services open={servicesOpen} setOpen={setServicesOpen} />
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </div>
  );
}

export default Navbar;
