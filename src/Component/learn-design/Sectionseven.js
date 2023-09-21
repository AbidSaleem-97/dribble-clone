import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Sectionseven = () => {
  return (
    <>
      <Header />

      <div className="flex gap-20 m-20">
        <div className="w-2/4">
          <div className="bg-pink-200 w-28 text-center rounded-2xl text-lg">
            <p>Workshops</p>
          </div>
          <div className="mt-10 mb-10">
            <h1 className="text-7xl">
              Level up your design game with industry leaders
            </h1>
          </div>
          <div>
            <p className="text-xl">
              {" "}
              Fuel your creative ambitions with our live interactive workshops.
              Spend a day with design business pros and walk away with knowledge
              that lasts a lifetime.
            </p>
          </div>
        </div>
        <div className="border rounded-2xl w-2/6 p-4">
          <h1 className="text-lg font-bold mt-8">Upcoming events</h1>

          <div className="flex m-4 mt-6">
            <img
              src="https://framerusercontent.com/images/3zmxG7CEOGiXFzNC1qycucsfrqA.png"
              className="w-12 h-12 rounded-lg"
            />
            <div className="ml-2">
              <h1 className="text-lg">Brand Identify & Logo design</h1>
              <p className="text-sm">by Hoodzpah</p>
            </div>
          </div>
          <div className="flex m-4 mt-6 mb-6">
            <img
              src="https://framerusercontent.com/images/7eF1f3zhFrNuMyb15S4iJPT6Wc.png"
              className="w-12 h-12 rounded-lg"
            />
            <div className="ml-2">
              <h1 className="text-lg">Beyond the Artboard</h1>
              <p className="text-sm">by DKNG Studio</p>
            </div>
          </div>
          <div className="flex m-4">
            <img
              src="https://framerusercontent.com/images/TdUN8eUMfcmsWwrbRv3GiWfzg.png"
              className="w-12 h-12 rounded-lg"
            />
            <div className="ml-2">
              <h1 className="text-lg">Design optimization & logo design</h1>
              <p className="text-sm">by Aaron Draplin</p>
            </div>
          </div>
          <div className="flex m-4 mt-6">
            <img
              src="https://framerusercontent.com/images/VMaNLlGXhNRlMSvWBgq6t6MhFs.png"
              className="w-12 h-12 rounded-lg"
            />
            <div className="ml-2">
              <h1 className="text-lg">Learn graphic design</h1>
              <p className="text-sm">by David Carson</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 p-6 m-8 rounded-3xl">
        <div className="flex">
          <div className="w-[100%] h-100">
            <div
              id="default-carousel"
              className="relative "
              data-carousel="slide"
            >
              <div className="relative overflow-hidden rounded-lg md:h-96">
                <div className="w-100 h-100 duration-700 ease-in-out" data-carousel-item>
                  <div className="block w-2/4">
                    <img
                      src="https://framerusercontent.com/images/rgRfIJIw3D0q81tkw8V3IziO260.png"
                      alt="Your Image"
                      className="rounded-3xl"
                    />
                  </div>
                  <div className="block w-2/4">
                    <img
                      src="https://framerusercontent.com/images/rgRfIJIw3D0q81tkw8V3IziO260.png"
                      alt="Your Image"
                      className="rounded-3xl"
                    />
                  </div>
                </div>

                <div className=" duration-700 ease-in-out" data-carousel-item>
                  <div className="block">
                    <img
                      src="https://framerusercontent.com/images/TVR3fuwqOuuUtOR0lFKneXTazEI.png"
                      alt="Your Image"
                      className="rounded-3xl"
                    />
                  </div>
                </div>

                <div className=" duration-700 ease-in-out" data-carousel-item>
                  <div className="absolute block w-2/4">
                    <img
                      src="https://framerusercontent.com/images/HXyZnYZnGUVLlC0cicTXzjxnN8.png"
                      alt="Your Image"
                      className="rounded-3xl"
                    />
                  </div>
                </div>
                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="true"
                    aria-label="Slide 1"
                    data-carousel-slide-to="0"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 2"
                    data-carousel-slide-to="1"
                  ></button>
                  <button
                    type="button"
                    className="w-3 h-3 rounded-full"
                    aria-current="false"
                    aria-label="Slide 3"
                    data-carousel-slide-to="2"
                  ></button>
                </div>

                <button
                  type="button"
                  className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-prev
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button
                  type="button"
                  className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                  data-carousel-next
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg
                      className="w-4 h-4 text-white dark:text-gray-800"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Sectionseven;
