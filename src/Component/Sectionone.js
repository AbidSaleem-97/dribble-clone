import React, { useState, useEffect } from 'react';

function Sectionone() {
  const [backgroundColor, setBackgroundColor] = useState('bg-green-100');
  const colors = ['bg-blue-100', 'bg-red-100', 'bg-purple-100', 'bg-purple-100', 'bg-yellow-100', 'bg-gray-100', 'bg-orange-100']; // Add more colors as needed
  const colorInterval = 3000; // Change color every 3 seconds (adjust as needed)

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = colors.indexOf(backgroundColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      setBackgroundColor(colors[nextIndex]);
    }, colorInterval);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundColor]);

  return (
    <div>
    <div className="w-full flex justify-center m-0">
    <div className="container w-2/4 text-center flex justify-center">
      <div className={`py-2 px-4 rounded-3xl transition-colors duration-300 ${backgroundColor}`}>
        <p>Over 3 million ready-to-work creatives in our community!</p>
      </div>
    </div>
    </div>
    <div className='flex justify-center items-center m-10' >
        <h1 className='text-black text-6xl w-2/4 font-semibold flex-wrap flex justify-center text-center' >
        Hire the world’s top creative talent.
        </h1>
    </div>
    <div className='felx justify-center text-center m-10' >
        <p className='text-black' >Connect with a community of millions of top-rated designers & agencies around the world.</p>
    </div>
    <div className='flex justify-center text-center m-10' >
        <button className='bg-[#0d0c22] text-white w-40 rounded-3xl h-9' >Start hirirng today</button>
    </div>




    </div>
    
  );
}

export default Sectionone;
