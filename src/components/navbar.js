
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items with href for links
  const navItems = [
    { id: 1, text: 'Home', href: '/' },
    { id: 4, text: 'Management', href: '/mgm' },
    { id: 5, text: 'Careers', href: '/careers' },
  ];

  return (
    <div className='bg-black flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      {/* Logo */}
      <h1 className='w-full text-3xl font-bold text-[#F9D518]'>AMS</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li key={item.id}>
            <a href={item.href} className='p-4 hover:bg-[#F9D518] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
              {item.text}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <h1 className='w-full text-3xl font-bold text-[#F9D518] m-4'>AMS</h1>

        {navItems.map(item => (
          <li key={item.id} className='p-4 border-b rounded-xl hover:bg-[#F9D518] duration-300 hover:text-black cursor-pointer border-gray-600'>
            <a href={item.href}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;