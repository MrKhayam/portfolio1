import React from "react";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <>
      <div className="w-full hide-scrollbar h-screen bg-zinc-900 overflow-hidden">
        <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="w-full h-full flex items-center justify-center">
        <div className="w-full flex justify-center flex-col items-center gap-5">
        <h1 className='text-white text-center md:mt-0 mt-12 text-5xl font-bold'>About Me</h1>
        <p className='md:w-[50%] w-[90%] text-center text-[#929292] md:text-xl'>I am a passionate MERN stack web developer with expertise in building responsive, user-friendly, and efficient web applications. With a strong foundation in MongoDB, Express.js, React, and Node.js, I focus on delivering scalable solutions that meet modern web standards.</p>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
