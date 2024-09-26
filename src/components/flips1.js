


import React, { useState, useEffect } from 'react';

const Flippings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    "Content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "GOOOD",
    "Content 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Content 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % contents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (<div className=' mt-5'>
    <p className=' text-lg font-bold mb-3'>  What Our Clients Say</p>
    <p className=' text-lg font-bold mb-3'> Client Review</p>

    <div className="columns-3 gap-4">
      {contents.slice(currentIndex, currentIndex + 3).map((content, index) => (
        <div
          key={index}
          className="p-6 rounded shadow-md transition-opacity duration-500 ease-in-out"
        >
          {content}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Flippings;


