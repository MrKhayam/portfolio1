import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";







const WhatsAppButton = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const phoneNumber = '03175080524';
    const messageToSend = encodeURIComponent('');
  
    const handleClick = () => {
      window.open(`https://wa.me/${phoneNumber}?text=${messageToSend}`, '_blank');
    };
  
    return (
        <button onClick={handleClick} className='bg-[#202020] md:w-auto w-[90%] justify-center hover:bg-[#272727] transition-all duration-300 hover:text-white px-4 py-3 flex items-center gap-2 rounded-md text-[#dadada]'>Send <FaArrowRightLong size={20} /></button>
    );
  };







const Portfolio = () => {
  return (
    <>
      <div className="w-full hide-scrollbar h-screen bg-zinc-900 overflow-hidden">
        <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        

        <div className="w-full h-full flex items-center justify-center">
            <div className="contactFrom flex flex-col gap-3 items-center w-full h-auto">
                <div className="flex md:flex-row flex-col items-center gap-3 w-full md:w-1/2">
                    <input value={name} onChange={() => setName(e.target)} placeholder="Name" className="bg-[#2727275e] md:w-1/2 rounded-md w-[90%] border-none outline-none p-3 text-white" type="text" />
                    <input placeholder="Email" className="bg-[#2727275e] md:w-1/2 rounded-md w-[90%] border-none outline-none p-3 text-white" type="text" />
                </div>
                <div className="message w-full flex justify-center md:w-1/2">
                <textarea placeholder="Message" className="md:w-full w-[90%] bg-[#2727275e] resize-none rounded-lg outline-none border-none p-3 h-32 text-white" name="" id=""></textarea>
                </div>
        <WhatsAppButton />
            </div>
        </div>

        
      </div>
    </>
  );
};

export default Portfolio;
