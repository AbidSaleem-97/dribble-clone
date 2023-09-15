import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Sectionfive = () => {
  return (
    <>
    <Header />
    
    <div className="bg-gray-100 flex gap-10 h-16 items-center  ">

      <p>
        <a href="" className="ml-[80px]" >Post a Job opening</a>
      </p>
      <p>
        <a href="">Post a freelance project</a>
      </p>
      <p>
        <a href="">Search for designers</a>
      </p>
    </div>
    <div className="mt-32 mb-6" >
      <p className="text-[#D145BE] text-sm font-bold text-center" >DRIBBBLE HIRING</p>
    </div>
    <div className="text-center mb-10" >
      <h1 className="text-7xl m-6" >Hire the world’s top designers</h1>
      <div className="flex justify-center" >
      <p className="w-4/6 text-lg ">Whether you prefer to actively seek out candidates using Designer Search or let designers come to you through our Job Board, Dribbble Hiring makes it easier than ever to source top-notch design talent.</p>
      </div>
    </div>

    <div className="flex gap-4 justify-center" >
    <div><p className="text-gray-600 bg-[#E3FCE9] text-lg" >ON SALE NOW</p></div>
    <div><p className="line-through text-gray-400 text-2xl" >$499</p></div>
    <div className="text-2xl font-bold" >$199/mo</div>
    </div>
     <div className="flex justify-center m-6" >
     <button className="w-44 border-2 rounded-full bg-[#060318] text-white h-16" >Start hiring today</button>
     </div>
     <p className="flex text-center justify-center text-xl m-12" >We’ve helped some of the world’s best design-forward companies hire expert creatives</p>
    
    
    <Footer />
    </>
    
  );
};

export default Sectionfive;
