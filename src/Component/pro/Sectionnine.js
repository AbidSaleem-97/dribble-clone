import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Sectionnine = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center  mt-36 mb-10">
        <p className="text-[#D145BF] text-xl">DRIBBBLE PRO</p>
      </div>

      <div className="flex justify-center text-center m-6">
        <h1 className=" text-[#0d0c22] text-7xl font-bold w-3/4">
          Get 3x more portfolio views with Dribbble pro
        </h1>
      </div>
      <div className="flex justify-center m-8">
        <p className="w-2/4 text-center text-xl">
          Drive more eyes to your Dribbble profile to build your brand and
          business
        </p>
      </div>
      <div className="flex  gap-8 justify-center text-lg">
        <button className="bg-[#0d0c22] w-44 h-14 rounded-full text-white">
          Get started Today
        </button>
      </div>
      <div className="flex justify-center mt-2 mb-16">
        <p className=" text-gray-400">
          Just $8/mo (billed annually). Cancel anytime.
        </p>
      </div>

      <div className="flex gap-6 justify-center">
        <div className="bg-gradient-to-r from-teal-100 via-lime-100 w-2/5 rounded-3xl">
          <div className="p-4">
            <h2 className="text-lg m-4">Grow your audiance</h2>
            <h1 className="text-5xl m-4">Reach over 10M creatives</h1>
            <p className="text-xl m-4">
              Showcase your work to a community of over 10M creative
              professionals around the world.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 via-pink-100 w-2/5 rounded-3xl">
          <div className="p-4">
            <h2 className="text-lg m-4">Get hired</h2>
            <h1 className="text-5xl m-4">Connect with over 1M brands</h1>
            <p className="text-xl m-4">
              Engage with new clients, collaborators, and future employers
              actively searching for designers like you.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-20 p-10">
        <h1 className="text-3xl font-bold m-4">Attract more opportunities</h1>
        <p className="text-lg w-2/4 m-4">
          Let new opportunities come to you with more interactions and more
          messages. On average, Pros engage with 85% more future clients,
          collaborators, and employers.
        </p>
      </div>
      <div className="flex gap-20 justify-center mt-20  m-20">
        <div className="w-2/4 h-96">
          <h1 className="text-[#DEB566] text-9xl">60%</h1>
          <p className="text-3xl text-wrap">
            More messages/hiring opportunities compared to non-pro accounts on
            average.
          </p>
        </div>
        <div className="w-2/4 h-96 mt-60">
          <h1 className="text-[#0D0C22] text-9xl">300%</h1>
          <p className="text-3xl text-wrap">
            More profile views and engagement compared to non-pro members on
            average.
          </p>
        </div>
      </div>

      <div className="bg-pink-200">
        <div>
          <div className="flex-col justify-center items-center flex">
            <h1 className=" text-center text-8xl  p-10 pt-28  flex-wrap  text-black">
              Invest in your design career
            </h1>
          </div>
          <div className="flex">
            <div className="m-10 rounded-3xl w-2/4 bg-white p-8 h-[100%]">
              <h1 className="text-3xl font-bold mb-8">Basic</h1>
              <p className="text-lg mb-2 ">
                Get inspired, share your designs, get feedback from the
                community & start building a following.{" "}
              </p>
              <h1 className="font-bold text-lg">Free</h1>
              <p className="text-gray-600">for designers</p>
              <div className="flex gap-2 text-lg">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Showcase your design</p>
              </div>
              <div className="flex gap-2 mb-2 mt-2  text-lg">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Get feedack from other designers</p>
              </div>
              <div className="flex gap-2  text-lg">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Follow other designers profile</p>
              </div>
              <div className="flex gap-2  text-lg">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Give feedback on ther's work</p>
              </div>
              <div className="flex gap-2  text-lg">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Access to full time job board</p>
              </div>
            </div>
            <div className="m-10 w-2/4 text-lg bg-white rounded-3xl p-8">
              <h1 className="text-3xl font-bold mb-4">Pro</h1>
              <p className="text-lg mb-2">
              Grow your design business with more profile visibility & premium features to showcase your work.
              </p>
              <div className="flex gap-2">
                
                <h1 className="font-bold text-lg">$8/mo</h1>
              </div>
              <p className="text-gray-600">when billed annually</p>

              <div className="flex gap-2 ">
                <img src="/images/arrow.png" className="h-[10%] w-[2%] mt-2" />
                <p>Job Board included</p>
              </div>
              <div className="flex gap-2 mb-2 mt-2">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Search our entire database of available designers</p>
              </div>
              <div className="flex gap-2">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Filter by work,location,budget, and more </p>
              </div>
              <div className="flex gap-2 mb-2 mt-2">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Unlimited messages for designers outreach </p>
              </div>
              <div className="flex gap-2">
                <img src="/images/tick.png" className="h-[10%] w-[2%] mt-2" />
                <p>Save and bookmark designers for future needs</p>
              </div>
              <div>
                <button className="mt-16 mb-6 w-full  text-lg border items-center bg-[#0d0c22] text-white flex justify-center   rounded-full h-14 border-black text-center">
                  Subscribe today
                </button>
              </div>
              <div className="text-center text-gray-500 text-lg">
                Cancel anytime.No strings attached.
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Sectionnine;
