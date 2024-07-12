///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';

function Home() {
  return (
    <div className="App">
     <div>
        hhhh
     </div>
     <div className=' bg-yellow-300 p-4'>
        jjj
     </div>
     <div class="flex flex-col md:flex-row">
        <div class="p-4 bg-blue-500">Item 1</div>
        <div class="p-4 bg-green-500">Item 2</div>
        <div class="p-4 bg-red-500">Item 3</div>
        </div>
        <div class="columns-3">
        <p>Content 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Flippings/>
        <FlippingContent/>

    </div>
  );
}

export default Home;

