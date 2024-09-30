

import React from 'react';
import '../App.css';
import FlippingContent from '../components/flips';
import Flippings from '../components/flips1';
import 'typeface-jetbrains-mono';
import Huw from '../assets/huawei.png';
import SecP from '../assets/sec.jpeg';
import SecP2 from '../assets/secp.jpg';
// import Manned from '../components/manned';



function Home() {
  return (
    <div className="App bg-slate-200">
      {/* Header Image */}
      <div className='text-2xl'>
        <img
          src={SecP}
          alt="Security Services"
          className="w-full h-full object-cover"
        />
        <div className='col2 flex justify-center items-center p-6'>
          <div className=' bg-black text-white p-2 rounded-2xl mr-2'>
           Call:
          </div>
          0794 264100
        </div>
      </div>

      {/* About Us Section */}
      <div className='p-8 bg-white'>
        <h2 className='Hea text-3xl font-bold mb-4'>About Us</h2>
        <p className='lg:text-lg'>
          AMS Security Solutions has been a trusted provider of comprehensive manned guard services for over a decade. Our team of highly trained and dedicated security personnel is committed to ensuring safety and peace of mind for our clients. From corporate offices to residential estates, we deliver tailored security solutions that meet the unique needs of every client.
        </p>
      </div>

      {/* Mission & Values Section */}
      <div className='p-8 my-4 col2'>
        <h2 className='text-3xl font-bold mb-4'>Mission & Values</h2>
        <p className='lg:text-lg'>
          Our mission is to provide unmatched security services that exceed our clients’ expectations. We value integrity, professionalism, and excellence in everything we do. Our commitment to continuous improvement, ethical practices, and client satisfaction drives our operations daily.
        </p>
      </div>

      {/* Manned Guard Services Section */}
      <div className='p-8 bg-white'>
        <h3 className='text-2xl font-bold mb-4'>Manned Guard Services</h3>
        <div className='flex flex-col md:flex-row lg:flex-row border border-yellow-300 p-1'>
          <div className='md:w-1/2 p-4'>
            <p className='lg:text-lg'>
              Our manned guard services provide a visible and professional security presence to deter criminal activity and respond promptly to any potential threats. Our personnel are trained to handle a wide range of scenarios, from crowd control to emergency situations, ensuring your safety is always our top priority. Whether it's a one-time event or ongoing site security, we have the expertise and experience to keep you secure.
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              src={SecP2}
              alt="Manned Guard Services"
              className="h-72 w-full object-cover"
            />
          </div>
        </div>
      </div>
{/* 
     <div className=' my-12'>
     <h5 className=' font-bold text-2xl'> Manned Guarding Solutions  </h5>
        <Manned/>
     </div> */}

     <div className=' p-4'>
      <h3 className=' font-bold text-2xl'>Training Clips</h3>
        <div className=' flex flex-col lg:flex-row md:flex-row gap-2'>
        <div  className=" p-20 bg-black text-white lg:w-1/2 md:w-1/2 " >
              Video
        </div>
        <div  className=" py-20 bg-black text-white lg:w-1/2 md:w-1/2 " >
              Video
        </div>
      </div>
    
     </div>
      {/* Flipping Content Components */}
      <FlippingContent />
     
      <Flippings />

      {/* Spacer for footer */}
      <div className='text-slate-200'>OOO</div>
    </div>
  );
}

export default Home;