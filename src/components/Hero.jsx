import React from 'react';

const Hero = () => {
  return (
    <>
      <div className="md:w-full h-auto flex items-center flex-col">
        <h1 className='md:text-5xl font-bold text-white md:w-[40%] text-center'>Hello, I am Khayam Ijaz. A Fullstack Web Developer.</h1>
        <div className="btns flex items-center gap-5 mt-5 justify-center">
            <button className='bg-[#202020] px-4 py-3 rounded-md text-[#dadada]'>Download Resume</button>
            <button className='bg-[#202020] px-4 py-3 rounded-md text-[#dadada]'>Contact Me</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
