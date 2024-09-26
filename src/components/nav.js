/////

import React from 'react';

function Nav() {
  return (
    <div className="App">
     <nav className="border-gray-200 p-1 bg-black mt-1 fixed w-full ml-2 mr-4 rounded-2xl">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className=" text-white">
            AMS
            {/* Logo or brand name can go here */}
          </div>
          <ul className="flex space-x-4 p-1 md:p-0 mr-2">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white rounded hover:bg-yellow-300 hover:text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="block py-2 px-2 text-white rounded hover:bg-yellow-300 hover:text-black"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/mgm"
                className="block py-2 px-3 text-white rounded hover:bg-yellow-300 hover:text-black"
              >
                Management
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

