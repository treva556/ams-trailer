///

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';
import 'typeface-jetbrains-mono';
import Pic from '../assets/picc.jpeg'

function Home() {
  return (
    <div className="App">
        <div className='bg-slate-600 p-4 text-slate-600'>
            hhh
        </div>
        <div className="relative w-full h-64 rounded-lg my-2">
            <img
                src={Pic}
                alt="Example"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                Your Text Here
            </div>
        </div>
        <p className='p-4 bg-slate-200 font-bold'>Archangel Michael Security Firm</p>

        <div className="flex flex-col md:flex-row">
            <div className='bg-yellow-300 p-4'>
                <p className='font-bold'>About AMS</p>
                <p className='ms'>AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence.</p>
            </div>
            <div className="p-4 bg-gray-400">
                <p className='font-bold'>Mission & Values</p>
                <p className='ms'>AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence.</p>
            </div>
        </div>

        <div className='font-bold mt-4'>
            Services
            <div className="flex flex-col md:flex-row ml-2 mr-2">
            <div className="relative w-full h-64 rounded-lg my-2">
            <img
                src={Pic}
                alt="Example"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                Your Text Here
            </div>
        </div>
                <div className="p-4">
                    <p className='ms'>1. AMS Security was founded by the church who saw a need for high-quality security services in the local community. Starting with a small team of dedicated professionals, the company has grown over the years to become a leading provider of manned security solutions. Our journey is marked by numerous milestones, including expanding our service areas, acquiring advanced security technology, and receiving multiple industry awards for excellence.</p>
                </div>
                
               
            </div>
        </div>

        <div>
            <p className='font-bold mt-4'>Variety Services</p>
            <div className="mt-3 columns-3">
                <div className='border-t-4 border-slate-500'>
                    <p>We deal in events like weddings and fundraisers...</p>
                </div>
                <div className='border-t-4 border-slate-500'>
                <p>Content 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className=' border-t-4 border-slate-500'>
                <p>Content 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center font-bold'>
            <div>Training Videos</div>
            <div>Other Images</div>
            <div className='bg-yellow-300 p-1 rounded-2xl w-14 border border-neutral-950'>
                Tes
            </div>
        </div>
        <FlippingContent />
        <Flippings />
    </div>
  );
}

export default Home;