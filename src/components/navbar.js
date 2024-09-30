
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const location = useLocation();

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
              className={`p-2 rounded-md transition duration-300 ${location.pathname === item.href ? ' text-yellow-300' : 'hover:bg-[#F9D518] hover:text-black'}`}
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
        <h1 className="text-3xl font-bold text-[#F9D518] m-4">AMS</h1>
        <div className="flex flex-col mt-8">
          {navItems.map(item => (
            <li key={item.id}>
              <Link
                to={item.href}
                className={`block p-4 text-xl border-b border-gray-600 transition duration-150 ${location.pathname === item.href ? 'bg-[#F9D518] text-black' : 'hover:bg-[#F9D518] hover:text-black'}`}
                onClick={() => setNavOpen(false)} 
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
