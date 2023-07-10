import React, { useEffect, useState } from "react";
import Services from "./Services";
import { AnimatePresence, motion } from "framer-motion";

function Sidebar({ open, setOpen }) {
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (servicesOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [servicesOpen]);
  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-20 inset-0 bg-black/70 h-full w-full flex"
          >
            <div className="h-full w-[80%] bg-white ml-auto">
              <div className="flex sticky top-0 inset-x-0 bg-white items-start px-7 py-7">
                <button onClick={() => setOpen(false)} className="ml-auto">
                  <iconify-icon
                    height="24"
                    width="24"
                    icon="uiw:close"
                  ></iconify-icon>
                </button>
              </div>
              <ul className="space-y-7 font-light text-lg px-7">
                <li className="opacity-70 hover:opacity-100">About us</li>
                <li
                  onClick={() => setServicesOpen(true)}
                  className="opacity-70 hover:opacity-100"
                >
                  Services
                </li>
                <li className="opacity-70 hover:opacity-100">Work</li>
                <li className="opacity-70 hover:opacity-100">Testimonial</li>
              </ul>
              <div className="p-6 mb-6 lg:flex items-center mt-10 space-y-3 lg:space-y-0 lg:space-x-5">
                <button className="h-12 px-6 border border-transparent bg-[#192654] text-[#fff] font-bold text-sm">
                  CONTACT US
                </button>
                <button className="h-12 px-6 border border-[#192654] bg-transparent text-[#192654] font-bold text-sm">
                  PERSONALIZE YOUR WEBSITE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Services open={servicesOpen} setOpen={setServicesOpen} />
    </>
  );
}

export default Sidebar;
