import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function ContactUsCard({ open, setOpen }) {
  const [messageOptions, setMessageOptions] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    open
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("backdrop")) {
        setOpen(false);
      }
    });
  }, [open]);

  const handleSubmit = async (e) => {
    if (
      messageOptions.name === "" ||
      messageOptions.phone === "" ||
      messageOptions.email === "" ||
      messageOptions.message === ""
    ) {
      alert("Please fill all the fields");
      return;
    }
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 h-full w-full bg-black/60 backdrop-blur z-20 flex backdrop items-center justify-center"
          >
            <div className="card w-full relative h-full lg:max-h-[550px] lg:h-fit lg:w-[600px] bg-white lg:rounded-xl overflow-auto">
              <div className="flex inset-x-0 bg-white items-start px-7 py-7">
                <div>
                  <h2 className="font-bebas text-5xl">Contact us</h2>
                  <p className="text-xs text-neutral-500 mt-1">
                    Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
                <button onClick={() => setOpen(false)} className="ml-auto">
                  <iconify-icon
                    height="24"
                    width="24"
                    icon="uiw:close"
                  ></iconify-icon>
                </button>
              </div>

              <div className="px-7 grid grid-cols-2 gap-3">
                <input
                  className="h-14 bg-neutral-100 px-4 w-full"
                  type="text"
                  placeholder="Your name"
                  value={messageOptions.name}
                  onChange={(e) =>
                    setMessageOptions({
                      ...messageOptions,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  className="h-14 bg-neutral-100 px-4 w-full"
                  type="tel"
                  placeholder="Your phone"
                  value={messageOptions.phone}
                  onChange={(e) =>
                    setMessageOptions({
                      ...messageOptions,
                      phone: e.target.value,
                    })
                  }
                />
                <input
                  className="h-14 bg-neutral-100 px-4 w-full col-span-2"
                  type="email"
                  placeholder="Your email address"
                  value={messageOptions.email}
                  onChange={(e) =>
                    setMessageOptions({
                      ...messageOptions,
                      email: e.target.value,
                    })
                  }
                />
                <textarea
                  name=""
                  className="col-span-2 bg-neutral-100 p-4 w-full"
                  id=""
                  rows="6"
                  placeholder="Your message"
                  value={messageOptions.message}
                  onChange={(e) =>
                    setMessageOptions({
                      ...messageOptions,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="px-7 mt-6 flex items-center justify-end mb-5">
                <button className="bg-[#131D40] text-white px-5 py-3 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactUsCard;
