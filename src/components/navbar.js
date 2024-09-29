
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 2, text: 'Management', href: '/mgm' },
    { id: 3, text: 'Careers', href: '/careers' },
  ];

  return (
    <div className="bg-black text-white flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4">
      <h1 className="text-3xl font-bold ml-36 text-[#F9D518]">AMS</h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-4">
        {navItems.map(item => (
          <li key={item.id}>
            <Link
              to={item.href}
              className="p-4 rounded-md hover:bg-[#F9D518] hover:text-black transition duration-300"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={() => setNavOpen(!navOpen)} className="block md:hidden cursor-pointer">
        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-2/3 h-full bg-black border-r border-gray-900 transition-transform duration-300 ease-in-out ${navOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <h1 className="text-3xl font-bold text-[#F9D518]  m-4">AMS</h1>
        <div className="flex flex-col mt-8">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.href}
                className="block p-4 text-xl border-b border-gray-600 hover:bg-[#F9D518] hover:text-black transition duration-150"
                onClick={() => setNavOpen(false)} // Close the menu on item click
              >
                {item.text}
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;


