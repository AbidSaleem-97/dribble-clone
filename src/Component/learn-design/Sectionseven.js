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

      <div className="bg-gray-200 p-6 m-16 rounded-3xl">
        <video
          className="w-[98%] h-full object-cover object-center rounded-[50px] ml-2 p-6"
          src="https://framerusercontent.com/modules/assets/AaIR8Z4oDnfJ0jsp2OToCoqXGcc~BODZEGAovv-7C0_P0TrNX12g7xrDyoHMGclkW5d5NlQ.mp4"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="flex gap-20 text-black">
          <div className="w-2/4 p-6 ml-10">
            <button className="m-4 bg-[#1c5eff1a] text-[#1C5EFF] rounded-3xl w-28 h-8">Sep 27, 2023</button>
            <h1 className="text-6xl">Brand Identify & Logo design</h1>
            <h1 className="mt-4 mb-4">with Hoodzpah</h1>
            <p>
              Join Amy & Jennifer Hood, founders of Hoodzpah, for an immersive
              and inspiring workshop on the essentials of effective branding and
              client engagement.
            </p>
            <p className="underline mt-4">Learn more</p>
          </div>
          <div className="bg-white w-2/6 p-6 rounded-3xl">
            <h1 className="text-lg font-bold">Register</h1>
            <div className="flex gap-32 p-2 mt-6">
              <p className="text-gray-400">Level</p>
              <p className="font-bold">Beginner friendly</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Date</p>
              <p  className="font-bold">September 27, 2023</p>
            </div>
            <div className="flex gap-24 p-2">
              <p className="text-gray-400">Seats left </p>
              <p  className="font-bold">Almost Full!</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Price </p>
              <p  className="font-bold">$299</p>
            </div>

            <div className="flex justify-center  mt-14">
              <button className="w-[70%] h-14 rounded-full bg-[#060318]  text-white">Register now</button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 p-6 m-16 rounded-3xl">
        <video
          className="w-[98%] h-full object-cover object-center rounded-[50px] ml-2 p-6"
          src="https://framerusercontent.com/modules/assets/gAFi084SAxoMgf5YxJe7diCZw~60b-6el-_Nvq4LL7Ekn-HvO5Qw5Dm5EWt7uCKVpv4n8.mp4"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="flex gap-20 text-black">
          <div className="w-2/4 p-6 ml-10">
            <button className="m-4 bg-[#1c5eff1a] text-[#1C5EFF] rounded-3xl w-28 h-8">Oct 25, 2023</button>
            <h1 className="text-6xl">Beyond the Artboard</h1>
            <h1 className="mt-4 mb-4">with DKNG Studio</h1>
            <p>
            Learn the steps Dan and Nathan took to build their business, tools for efficiently wearing many hats to operate a small studio, and the tools and techniques they use to create their signature illustration and design styles.
            </p>
            <p className="underline mt-4">Learn more</p>
          </div>
          <div className="bg-white w-2/6 p-6 rounded-3xl">
            <h1 className="text-lg font-bold">Register</h1>
            <div className="flex gap-32 p-2 mt-6">
              <p className="text-gray-400">Level</p>
              <p className="font-bold">Beginner friendly</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Date</p>
              <p  className="font-bold">October 25, 2023</p>
            </div>
            <div className="flex gap-24 p-2">
              <p className="text-gray-400">Seats left </p>
              <p  className="font-bold">Almost Full!</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Price </p>
              <p  className="font-bold">Starting at $199</p>
            </div>

            <div className="-rotate-6 h-12 text-center flex justify-center items-center mt-4 bg-yellow-300">
              <p>Early birds ticket on sale now!</p>
            </div>

            <div className="flex justify-center  mt-14">
              <button className="w-[70%] h-14 rounded-full bg-[#060318]  text-white">Register now</button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 p-6 m-16 rounded-3xl">
        <video
          className="w-[98%] h-full object-cover object-center rounded-[50px] ml-2 p-6"
          src="https://framerusercontent.com/modules/assets/AaIR8Z4oDnfJ0jsp2OToCoqXGcc~BODZEGAovv-7C0_P0TrNX12g7xrDyoHMGclkW5d5NlQ.mp4"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="flex gap-20 text-black">
          <div className="w-2/4 p-6 ml-10">
            <button className="m-4 bg-[#1c5eff1a] text-[#1C5EFF] rounded-3xl w-28 h-8">Sep 27, 2023</button>
            <h1 className="text-6xl">Brand Identify & Logo design</h1>
            <h1 className="mt-4 mb-4">with Hoodzpah</h1>
            <p>
              Join Amy & Jennifer Hood, founders of Hoodzpah, for an immersive
              and inspiring workshop on the essentials of effective branding and
              client engagement.
            </p>
            <p className="underline mt-4">Learn more</p>
          </div>
          <div className="bg-white w-2/6 p-6 rounded-3xl">
            <h1 className="text-lg font-bold">Register</h1>
            <div className="flex gap-32 p-2 mt-6">
              <p className="text-gray-400">Level</p>
              <p className="font-bold">Beginner friendly</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Date</p>
              <p  className="font-bold">September 27, 2023</p>
            </div>
            <div className="flex gap-24 p-2">
              <p className="text-gray-400">Seats left </p>
              <p  className="font-bold">Almost Full!</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Price </p>
              <p  className="font-bold">$299</p>
            </div>

            <div className="flex justify-center  mt-14">
              <button className="w-[70%] h-14 rounded-full bg-[#060318]  text-white">Register now</button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 p-6 m-16 rounded-3xl">
        <video
          className="w-[98%] h-full object-cover object-center rounded-[50px] ml-2 p-6"
          src="https://framerusercontent.com/modules/assets/AaIR8Z4oDnfJ0jsp2OToCoqXGcc~BODZEGAovv-7C0_P0TrNX12g7xrDyoHMGclkW5d5NlQ.mp4"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="flex gap-20 text-black">
          <div className="w-2/4 p-6 ml-10">
            <button className="m-4 bg-[#1c5eff1a] text-[#1C5EFF] rounded-3xl w-28 h-8">Sep 27, 2023</button>
            <h1 className="text-6xl">Brand Identify & Logo design</h1>
            <h1 className="mt-4 mb-4">with Hoodzpah</h1>
            <p>
              Join Amy & Jennifer Hood, founders of Hoodzpah, for an immersive
              and inspiring workshop on the essentials of effective branding and
              client engagement.
            </p>
            <p className="underline mt-4">Learn more</p>
          </div>
          <div className="bg-white w-2/6 p-6 rounded-3xl">
            <h1 className="text-lg font-bold">Register</h1>
            <div className="flex gap-32 p-2 mt-6">
              <p className="text-gray-400">Level</p>
              <p className="font-bold">Beginner friendly</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Date</p>
              <p  className="font-bold">September 27, 2023</p>
            </div>
            <div className="flex gap-24 p-2">
              <p className="text-gray-400">Seats left </p>
              <p  className="font-bold">Almost Full!</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Price </p>
              <p  className="font-bold">$299</p>
            </div>

            <div className="flex justify-center  mt-14">
              <button className="w-[70%] h-14 rounded-full bg-[#060318]  text-white">Register now</button>
            </div>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 p-6 m-16 rounded-3xl">
        <video
          className="w-[98%] h-full object-cover object-center rounded-[50px] ml-2 p-6"
          src="https://framerusercontent.com/modules/assets/AaIR8Z4oDnfJ0jsp2OToCoqXGcc~BODZEGAovv-7C0_P0TrNX12g7xrDyoHMGclkW5d5NlQ.mp4"
          loop
          autoPlay
          muted
          playsInline
        />
        <div className="flex gap-20 text-black">
          <div className="w-2/4 p-6 ml-10">
            <button className="m-4 bg-[#1c5eff1a] text-[#1C5EFF] rounded-3xl w-28 h-8">Sep 27, 2023</button>
            <h1 className="text-6xl">Brand Identify & Logo design</h1>
            <h1 className="mt-4 mb-4">with Hoodzpah</h1>
            <p>
              Join Amy & Jennifer Hood, founders of Hoodzpah, for an immersive
              and inspiring workshop on the essentials of effective branding and
              client engagement.
            </p>
            <p className="underline mt-4">Learn more</p>
          </div>
          <div className="bg-white w-2/6 p-6 rounded-3xl">
            <h1 className="text-lg font-bold">Register</h1>
            <div className="flex gap-32 p-2 mt-6">
              <p className="text-gray-400">Level</p>
              <p className="font-bold">Beginner friendly</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Date</p>
              <p  className="font-bold">September 27, 2023</p>
            </div>
            <div className="flex gap-24 p-2">
              <p className="text-gray-400">Seats left </p>
              <p  className="font-bold">Almost Full!</p>
            </div>
            <div className="flex gap-32 p-2">
              <p className="text-gray-400">Price </p>
              <p  className="font-bold">$299</p>
            </div>

            <div className="flex justify-center  mt-14">
              <button className="w-[70%] h-14 rounded-full bg-[#060318]  text-white">Register now</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Sectionseven;
