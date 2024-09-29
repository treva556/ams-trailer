

import React from 'react';
import '../App.css';

function Careers() {
  return (
    <div className="App">
      

      <div className='flex justify-between px-8 lg:px-36 p-4 m-2 rounded-md bg-slate-100 border '>
        <h1 className='text-2xl'> Training Officers </h1>
        <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-300 py-2 px-4 border border-black hover:border-transparent rounded">
          <a href="/apply"> Check Out!</a>
        </button>
      </div>


  

      <div className='flex flex-col lg:flex-row justify-between px-1 lg:px-36 p-4 border border-white border-y-black m-2'>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='text-xl lg:text-2xl'>Operations Manager</h1>
          <p className='text-sm lg:text-left text-start'>We are looking for a skilled operations manager to join our team.</p>
        </div>
        
        <button className="self-start bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-300 py-1 px-1 border border-black hover:border-transparent rounded w-1/2 lg:w-auto mt-7 lg:mt-0">
          <a href="/apply">Check Out!</a>
        </button>
      </div>

      <div className='flex flex-col lg:flex-row justify-between px-1 lg:px-36 p-4 border border-white border-y-black m-2'>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='text-xl lg:text-2xl'>HR Manager</h1>
          <p className='text-sm lg:text-left text-start'>We are looking for a skilled human resourse manager to join our team.</p>
        </div>
        
        <button className="self-start bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-300 py-1 px-1 border border-black hover:border-transparent rounded w-1/2 lg:w-auto mt-7 lg:mt-0">
          <a href="/apply">Check Out!</a>
        </button>
      </div>

      <div className='flex flex-col lg:flex-row justify-between px-1 lg:px-36 p-4 border border-white border-y-black m-2'>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='text-xl lg:text-2xl'>Accountant</h1>
          <p className='text-sm lg:text-left text-start'>We are looking for a skilled-experiences accountant to join our team.</p>
        </div>
        
        <button className="self-start bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-300 py-1 px-1 border border-black hover:border-transparent rounded w-1/2 lg:w-auto mt-7 lg:mt-0">
          <a href="/apply">Check Out!</a>
        </button>
      </div>

      <div className='flex flex-col lg:flex-row justify-between px-1 lg:px-36 p-4 border border-white border-y-black m-2'>
        <div className='flex flex-col items-start justify-start'>
          <h1 className='text-xl lg:text-2xl'>Operations Manager</h1>
          <p className='text-sm lg:text-left text-start'>We are looking for a skilled operations manager to join our team.</p>
        </div>
        
        <button className="self-start bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-300 py-1 px-1 border border-black hover:border-transparent rounded w-1/2 lg:w-auto mt-7 lg:mt-0">
          <a href="/apply">Check Out!</a>
        </button>
      </div>


   
    </div>
  );
}

export default Careers;