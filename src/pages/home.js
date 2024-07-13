///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';
import 'typeface-jetbrains-mono';


function Home() {
  return (
    <div className="App">
     <div className='ms p-32 bg-slate-700'>
         HEADER
     </div>
     <p className=' font-bold'> Archangel Michael Security Firm</p>
     <div className=' bg-yellow-300 p-4'>
        <p> About AMS </p>
        <p className=' ms'> AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>
     </div>
     <div class="flex flex-col md:flex-row">
        <div class="p-4 bg-blue-500">mission & values</div>
        <div class="p-4 ">
            services
            <p className=' ms'> AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>

            </div>
        <div class="p-4 bg-red-500">
        <p className=' ms'> AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>

        </div>
        </div>
        <div class="columns-3">
        <p> We deal in events like weddings and fundraisers... </p>
        <p>Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className=' font-bold' >
        <div >
            training videos
        </div>

        <div>
            other images
        </div>
        </div>

        <FlippingContent/>

        <Flippings/>

    </div>
  );
}

export default Home;

