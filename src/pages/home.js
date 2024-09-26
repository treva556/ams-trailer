///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';
import 'typeface-jetbrains-mono';
import Huw from '../assets/huawei.png';


function Home() {
  return (
    <div className="App bg-slate-200">
        <div className=' flex justify-center text-6xl p-80 col2'>
            <h1>
            SECURITY
            </h1> 
        </div>
        <div className=' p-8 bg-white'>
            About Us
        </div>
        <div className='p-14 my-4 col2'>
            Mission & Values
        </div>
        <div className=' p-8 bg-white'>
            Manned Guard Services
        </div>


        <FlippingContent />
        <Flippings />
        <div className=' text-slate-200'> OOO</div>
        
    </div>
  );
}

export default Home;


 

//