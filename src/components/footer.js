///

import React from 'react';
import '../App.css';

function Footer() {
  return (
    
     <div className=' text-white justify-around p-6 bg-black flex flex-col md:flex-row lg:flex-row '>
      <div>
       <h1 className=' text-yellow-300'>  Quick Links
        </h1>
        <div>
        <ul className="flex flex-col space-x-4 p-1 md:p-0 mr-2">
        <li>
            <a
              href="/"
              className="block py-2 px-1 text-white relative group"
              aria-current="page"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>
            </a>
          </li>
            <li>
              <a
                href="/careers"
                className="block py-2 px-2 text-white relative group "
              >
                Careers
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>

              </a>
            </li>
            <li>
            <a
                href="/mgm"
                className="block py-2 px-2 text-white relative group "
              >
                Management
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-400 transition-all duration-500 group-hover:w-full"></span>

              </a>
            </li>
          </ul>
        </div>
      </div>
      <div> 
       <h2 className=' text-yellow-300'> Contacts    </h2>  
      </div>
      <div>
       <h3 className=' text-yellow-300'>  Social Links </h3> 
      </div>
     </div>
   
  );
}

export default Footer;

