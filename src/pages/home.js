///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';
import 'typeface-jetbrains-mono';


function Home() {
  return (
    <div className="App">
        <div className='bg-slate-300 p-6 text-slate-300'>
            hhh
        </div>
     <div className='ms p-32 bg-slate-700'>
         HEADER
     </div>
     <p className=' p-4 bg-slate-200 font-bold'> Archangel Michael Security Firm</p>

     <div class="flex flex-col md:flex-row">

     <div className=' bg-yellow-300 p-4'>
        <p className=' font-bold'> About AMS </p>
        <p className=' ms'> AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>
     </div>
        {/* <div class="p-4 bg-blue-500">mission & values</div> */}
        
        <div class="p-4 bg-gray-400">
            <p className=' font-bold'> Mission & Values</p>
        <p className=' ms'> AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>

        </div>

        </div>
        <div className=' font-bold mt-4'>
        services

        <div class="flex flex-col md:flex-row ml-2 mr-2 ">

        <div class="p-4 ">
            <p className=' ms'> 1. AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>

            </div>
            <div>
            <p className=' ms bg-black text-white'> 2.  AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence. </p>

            </div>
          </div>
        </div>

        <div>
        <p className=' font-bold mt-4'> Variety contents</p>

        <div class=" mt-3 columns-3">
            <div className='border-t-4 border-indigo-500 '>
        <p> We deal in events like weddings and fundraisers... </p>
        </div>
        <p>Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className=' flex flex-col items-center font-bold ' >
            <div >
                training videos
            </div>

            <div>
                other images
            </div>
       
        <div className=' bg-yellow-300 p-1 rounded-2xl w-14 border border-neutral-950'> 
            tes
        </div>
        </div >
        <FlippingContent/>

        <Flippings/>

    </div>
  );
}

export default Home;

