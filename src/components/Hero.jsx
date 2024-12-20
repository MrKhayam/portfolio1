import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router';


const Hero = () => {
  const info = {
    name: "Khayam",
    fullName: "Khayam Ijaz",
  }
  return (
    <>
      <div className="md:w-full h-auto flex items-center flex-col">
        <h1 className='font-["Charley"] md:text-9xl sm:text-8xl text-7xl text-white'>{info.name}</h1>
        <div className="w-full p-2 flex justify-center items-center">
        <h1 className='md:text-3xl w-full text-[16px] sm:text-2xl md:flex justify-center font-bold text-white text-center'>Hello, I am {info.fullName}. A Fullstack <br/> Web Developer.</h1>
        </div>
        <div className="btns flex w-full flex-col sm:flex-row md:flex-row items-center gap-2 md:gap-5 mt-5 justify-center">
            <a className='bg-[#202020] md:w-auto w-[95%] hover:bg-[#272727] transition-all duration-300 hover:text-white px-4 py-3 text-center rounded-md text-[#dadada]' href="" download={`${info.name}.pdf`}>
            Download Resume
            </a>
            <NavLink to="/contact" className='bg-[#202020] md:w-auto w-[95%] justify-center hover:bg-[#272727] transition-all duration-300 hover:text-white px-4 py-3 flex items-center gap-4 rounded-md text-[#dadada]'>
            Contact Me <FaArrowRightLong size={20} />
            </NavLink>
        </div>
      </div>
    </>
  );
}

export default Hero;
