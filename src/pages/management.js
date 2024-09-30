///

import React from 'react';
import '../App.css';
import Man from '../assets/man.png';

function Mgm() {
  return (
    <div className="App">
   
{/* Man 1 */}

<div className=' my-5 grid grid-cols-3'>


      <div className=' flex flex-col items-center'> 
        <img
              src={Man}
              alt="Manned Guard Services"
              className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            />
       
        <p> Director</p>
      </div>
      <div className=' flex flex-col items-center'> 
        <img
              src={Man}
              alt="Manned Guard Services"
              className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            />
       
        <p> Chairman</p>
      </div>
      <div className=' flex flex-col items-center'> 
        <img
              src={Man}
              alt="Manned Guard Services"
              className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            />
       
        <p> CFO</p>
      </div>

      <div className=' flex flex-col py-4 items-center'> 
        <img
              src={Man}
              alt="Manned Guard Services"
              className="h-24 w-24 lg:h-48 lg:w-48 object-cover"
            />
       
        <p> COO  </p>
      </div>
      </div>
    </div>
  );
}

export default Mgm;

//F7F6F1   whity//