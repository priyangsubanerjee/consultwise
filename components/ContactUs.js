/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function ContactUsCard({ open, setOpen }) {
  const [status, setStatus] = useState(0);
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
    setStatus(1);
    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_API, {
      method: "POST",
      body: JSON.stringify(messageOptions),
    });
    const data = await response.json();
    if (data.status === true) {
      setStatus(2);
      setMessageOptions({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } else {
      setStatus(0);
      alert("Message sending failed");
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
                <button
                  onClick={() => {
                    setOpen(false);
                    setMessageOptions({
                      name: "",
                      phone: "",
                      email: "",
                      message: "",
                    });
                    setStatus(0);
                  }}
                  className="ml-auto"
                >
                  <iconify-icon
                    height="24"
                    width="24"
                    icon="uiw:close"
                  ></iconify-icon>
                </button>
              </div>

              {status == 0 ? (
                <form
                  className="px-7 grid grid-cols-2 gap-3"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <input
                    className="h-14 bg-neutral-100 px-4 w-full"
                    type="text"
                    placeholder="Your name"
                    required
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
                    required
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
                    required
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
                    required
                    placeholder="Your message"
                    value={messageOptions.message}
                    onChange={(e) =>
                      setMessageOptions({
                        ...messageOptions,
                        message: e.target.value,
                      })
                    }
                  ></textarea>

                  <div className="col-span-2 mt-6 flex items-center justify-end mb-5">
                    <button
                      type="submit"
                      className="bg-[#131D40] text-white px-5 py-3 rounded-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              ) : status == 1 ? (
                <>
                  <div className="flex flex-col items-center justify-center mb-16">
                    <img
                      src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif"
                      alt=""
                    />
                    <h2 className="text-sm">
                      Please wait while we are sending your message
                    </h2>
                  </div>
                </>
              ) : status == 2 ? (
                <>
                  <div className="flex flex-col items-center justify-center mb-16 mt-10">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Eo_circle_green_checkmark.svg/2048px-Eo_circle_green_checkmark.svg.png"
                      className="h-20"
                      alt=""
                    />
                    <h1 className="text-sm mt-10">
                      Thank you for contacting us. We will get back to you soon.
                    </h1>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ContactUsCard;
