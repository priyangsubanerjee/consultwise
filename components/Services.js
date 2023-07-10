import React from "react";

function Services({ open, setOpen }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 h-full w-full bg-black/60 backdrop-blur z-20 flex items-center justify-center">
          <div className="w-full relative h-full lg:max-h-[550px] lg:h-fit lg:w-[700px] bg-white lg:rounded-xl overflow-auto">
            <div className="flex sticky top-0 inset-x-0 bg-white items-start px-7 py-7">
              <div>
                <h2 className="font-bebas text-5xl">SERVICES</h2>
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

            <div className="px-7">
              <details open className="border-b py-5">
                <summary>
                  <span>Web & apps</span>
                </summary>
                <ul className="pl-6 mt-4 text-sm text-neutral-600">
                  <li className="py-2">
                    <a href="#">Web development</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Mobile applications</a>
                  </li>
                  <li className="py-2">
                    <a href="#">E-Commerce solutions</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Software solutions (ERP)</a>
                  </li>
                </ul>
              </details>
              <details className="border-b py-5">
                <summary>
                  <span>e-Marketing</span>
                </summary>
                <ul className="pl-6 mt-4 text-sm text-neutral-600">
                  <li className="py-2">
                    <a href="#">Web development</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Mobile applications</a>
                  </li>
                  <li className="py-2">
                    <a href="#">E-Commerce solutions</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Software solutions (ERP)</a>
                  </li>
                </ul>
              </details>
              <details className="border-b py-5">
                <summary>
                  <span>Web Designing</span>
                </summary>
                <ul className="pl-6 mt-4 text-sm text-neutral-600">
                  <li className="py-2">
                    <a href="#">Web development</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Mobile applications</a>
                  </li>
                  <li className="py-2">
                    <a href="#">E-Commerce solutions</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Software solutions (ERP)</a>
                  </li>
                </ul>
              </details>
              <details className="py-5">
                <summary>
                  <span>Hosting</span>
                </summary>
                <ul className="pl-6 mt-4 text-sm text-neutral-600">
                  <li className="py-2">
                    <a href="#">Web development</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Mobile applications</a>
                  </li>
                  <li className="py-2">
                    <a href="#">E-Commerce solutions</a>
                  </li>
                  <li className="py-2">
                    <a href="#">Software solutions (ERP)</a>
                  </li>
                </ul>
              </details>
            </div>

            <div className="p-6 mb-6 lg:flex items-center mt-4 space-y-3 lg:space-y-0 lg:space-x-5">
              <button className="h-12 px-6 border border-transparent bg-[#192654] text-[#fff] font-bold text-sm">
                CONTACT US
              </button>
              <button className="h-12 px-6 border border-[#192654] bg-transparent text-[#192654] font-bold text-sm">
                PERSONALIZE YOUR WEBSITE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Services;
