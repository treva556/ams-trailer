

import React, { useState, useEffect } from 'react';

const Flippings = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    "Their guards are courteous and well-trained. They have exceeded our expectations in terms of reliability and customer service. Highly recommend!",
    "Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Exceptional service and professionalism. The security team was always on time, well-trained, and attentive to detail. We feel much safer with their presence.",
    "Content 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Responsive, reliable, and always ready to help. Their guards have been instrumental in safeguarding our premises, and we couldn’t be happier. – Alex R., Retail Store Manager",
    "Content 6. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % contents.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className='mt-5 mb-4'> 
      <p className='text-lg font-bold mb-3'>What Our Clients Say</p>

      <div className="grid grid-cols-3 gap-4 bg-slate-200"> {/* Use grid instead of columns */}
        {contents.slice(currentIndex, currentIndex + 3).map((content, index) => (
          <div
            key={index}
            className="p-6 rounded shadow-md bg-white m-0" 
          >
            {content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Flippings;





