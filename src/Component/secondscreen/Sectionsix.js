import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Sectionsix= () => {
  return (
    <>
    <Header />
 
    <div className="flex items-center justify-center  flex-wrap mt-32">
        <h1 className="text-6xl text-center font-bold w-2/4">Discribe the world's top designers & creatives</h1>
    </div>
    <div className="flex items-center justify-center flex-wrap mt-8" >
        <p className="text-xl w-[45%] text-center">Dribbble is the leading destination to find & showcase creative work and home to the world's best design professionals.</p>
    </div>
    
    <div className="flex gap-1 ml-[38%] mt-16 h-10 border rounded-full w-96 ">
        <img src="/images/search.png" className="ml-2 w-6 h-6 mt-2" /> 
        <p className="text-gray-500 mt-2" >Search 18 million+shots...</p>
    </div>

    <div>
        <ul className="flex gap-6 p-10 justify-center">
            <li>Trending searches</li>
            <li className="border-2 w-28 text-center rounded-full" >landing page</li>
            <li className="border-2 w-10 text-center rounded-full">ios</li>
            <li className="border-2 w-16 text-center rounded-full">food</li>
            <li className="border-2 w-28 text-center rounded-full">landing page</li>
            <li className="border-2 w-24 text-center rounded-full">uxdesign</li>
            <li className="border-2 w-24 text-center rounded-full">app design</li>
        </ul>
    </div>

    <div className="flex gap-10 m-10">

         <div>
         <button className="w-20 border rounded-lg" >Popular</button>
        </div>
        <div>
            <ul className="flex gap-8 font-bold">
                <li>Discover</li>
                <li>Animation</li>
                <li>Branding</li>
                <li>Illustartion</li>
                <li>Mobile</li>
                <li>Print</li>
                <li>Product Design</li>
                <li>Typography</li>
                <li>Web Design</li>

            </ul>
        </div>

    </div>

    <div className="relative">
        <img src="/images/card image.png" className="w-[33%] " />
        <div>
            <img src="https://cdn.dribbble.com/users/2554837/avatars/small/90522438af4feba5ef21fe54cc40fec4.png?1559397767" />
            <p>Orizon: UI/UX Design Agency</p>
            <p>TEAM</p>
        </div>

        
    </div>

    <Footer />
    </>
    
  );
};
export default Sectionsix;
