import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className="md:min-w-[30%] md:max-w-[40%] w-full h-12 bg-[#272727] backdrop-blur-lg shadow-md rounded-md flex items-center justify-center md:text-md text-sm">
        <ul className="flex items-center gap-6 md:gap-8">
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'>Home</li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'>About</li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'>Portfolio</li>
          <li className='cursor-pointer text-[#a7a7a7] hover:text-white transition-all duration-300'>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
