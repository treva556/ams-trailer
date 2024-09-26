

import React, { useState, useEffect } from 'react';
import '../App.css';
import Huw from '../assets/huawei.png'; // Image import

const FlippingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain mx-auto" />, // Load as JSX
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain col2 mx-auto" />,
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain mx-auto" />,
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain mx-auto" />,
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain col2 mx-auto" />,
    <img src={Huw} alt="Huawei Logo" className="w-24 h-24 object-contain mx-auto" />,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className='justify-items-center bg-slate-200 p-4'>
      <p className='mt-3 text-xl font-bold text-black mb-3'>Proud to Work With</p>
      <div className="columns-3 gap-1">
        {Array.from({ length: 3 }).map((_, idx) => {
          const contentIndex = (currentIndex + idx) % contents.length;
          const content = contents[contentIndex];

          return (
            <div
              key={idx}
              className={`p-4 rounded mb-4 shadow-md transition-opacity duration-500 ease-in-out ${
                contentIndex % 2 === 0 ? 'bg-white text-black' : 'col2 text-black'
              }`}
            >
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlippingContent;