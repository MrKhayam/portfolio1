import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <>
      <div className="md:w-[400px] sm:w-[400px] w-full h-12 bg-[#2727275e] backdrop-blur-sm shadow-md rounded-md flex items-center justify-center md:text-md text-sm">
        <ul className="flex items-center gap-6 md:gap-8">
          <li className='cursor-pointer transition-all duration-300'><NavLink to="/" className={({isActive}) => `${isActive ? 'text-white' : 'text-[#a7a7a7]'} hover:text-white transition-all duration-300`}>Home</NavLink></li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'><NavLink to="/about" className={({isActive}) => `${isActive ? 'text-white' : 'text-[#a7a7a7'} hover:text-white transition-all duration-300`}>About</NavLink></li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'><NavLink to="/portfolio" className={({isActive}) => `${isActive ? 'text-white' : 'text-[#a7a7a7'} hover:text-white transition-all duration-300`}>Portfolio</NavLink></li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'><NavLink to="/contact" className={({isActive}) => `${isActive ? 'text-white' : 'text-[#a7a7a7'} hover:text-white transition-all duration-300`}>Contact</NavLink></li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
