

import React, { useState, useEffect } from 'react';

const FlippingContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    "Content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div>
      <p className='mt-3 text-xl font-bold text-black'>Our Various Clients</p>
      <div className="columns-3 gap-4">
        {Array.from({ length: 3 }).map((_, idx) => {
          const contentIndex = (currentIndex + idx) % contents.length;
          return (
            <div
              key={idx}
              className={`p-4 rounded shadow-md transition-opacity duration-500 ease-in-out ${
                contentIndex % 2 === 0 ? 'bg-red-700 text-white' : 'bg-red-600 text-white'
              }`}
            >
              {contents[contentIndex]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FlippingContent;