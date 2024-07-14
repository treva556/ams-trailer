/////

import React from 'react';

function Nav() {
  return (
    <div className="App">
      <nav className="border-gray-200 bg-slate-200 mt-1 fixed w-full ml-2 mr-4 rounded-2xl">
        <div className="max-w-screen-xl mx-auto flex justify-between">
          <div className="ml-2">
            {/* Logo or brand name can go here */}
          </div>
          <ul className="flex space-x-4 p-1 md:p-0 mr-2">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-black rounded hover:bg-gray-100 dark:text-black"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/careers"
                className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 dark:text-black"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/mgm"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-black"
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

