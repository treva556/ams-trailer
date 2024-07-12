///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';

function Home() {
  return (
    <div className="App">
     <div className=' p-32'>
         header
     </div>
     <p className=' font-bold'> Archangel Michael Security Firm</p>
     <div className=' bg-yellow-300 p-4'>
        <p> About AMS </p>
        <p> here at..... </p>
     </div>
     <div class="flex flex-col md:flex-row">
        <div class="p-4 bg-blue-500">mission & values</div>
        <div class="p-4 bg-green-500">services</div>
        <div class="p-4 bg-red-500">Variety of services below</div>
        </div>
        <div class="columns-3">
        <p>Content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <FlippingContent/>

        <Flippings/>

    </div>
  );
}

export default Home;

