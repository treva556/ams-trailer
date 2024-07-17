

import React, { useState, useEffect } from 'react';

const FlippingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    "Content 1. adipiscing elit.",
    "Content 2. adipiscing elit.",
    "Content 3. adipiscing elit.",
    "Content 4. adipiscing elit.",
    "Content 5. adipiscing elit.",
    "Content 6. adipiscing elit.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className='justify-items-center bg-slate-200 p-4'>
      <p className='mt-3 text-xl font-bold text-black mb-3'>Our Various Clients</p>
      <div className="columns-3 gap-1">
        {Array.from({ length: 3 }).map((_, idx) => {
          const contentIndex = (currentIndex + idx) % contents.length;
          return (
            <div
              key={idx}
              className={`p-4 rounded mb-4 shadow-md transition-opacity duration-500 ease-in-out ${
                contentIndex % 2 === 0 ? ' bg-white text-black' : 'bg-yellow-300 text-black'
              }`}
            >
              {contents[contentIndex]}
            </div>
          );
        })}
      </div>
      <div className='flex justify-center items-center p-7 h-2 bg-yellow-300 border border-black w-10 mx-auto'>
        <p> MORE</p>
      </div>
    </div>
  );
};

export default FlippingContent;