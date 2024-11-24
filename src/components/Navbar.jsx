import React, { useState } from 'react';
import { RiMenu4Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";



const Navbar = () => {
  const [clicked, setClicked] = useState(true);
  return (
    <>
      <div className="w-full min-h-10 flex justify-between items-center p-3">
        <div className="logo text-white">
            <h1 className='text-2xl font-bold'>Khayam.</h1>
        </div>
        <ul className="md:flex hidden items-center gap-8 text-[#dadada]">
          <li className='cursor-pointer hover:text-white transition-all duration-200'>Home</li>
          <li className='cursor-pointer hover:text-white transition-all duration-200'>About</li>
          <li className='cursor-pointer hover:text-white transition-all duration-200'>Portfolio</li>
          <li className='cursor-pointer text-white'><button className='bg-[#6A42C2] px-4 py-2 rounded-full hover:scale-105 transition-all duration-200'>Contact</button></li>
        </ul>
        <div className="icon block md:hidden">
         <RiMenu4Fill color='white' size="25" onClick={() => setClicked(true)} />
        </div>
      </div>



      <div className={`${clicked ? 'translate-x-0' : 'translate-x-[100%]'} transition-all duration-300 w-full h-full bg-black absolute top-0 z-50`}>
        <div className="crossIcon absolute top-3 right-3">
          <IoCloseSharp color='white' size="27" onClick={() => setClicked(false)}/>
        </div>

        <ul className="w-full h-auto flex flex-col gap-5 p-6 mt-12 shadow text-xl">
        <li className='cursor-pointer text-white transition-all duration-200'>Home</li>
          <li className='cursor-pointer text-white transition-all duration-200'>About</li>
          <li className='cursor-pointer text-white transition-all duration-200'>Portfolio</li>
          <li className='cursor-pointer text-white'>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
