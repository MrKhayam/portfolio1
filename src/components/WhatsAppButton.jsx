import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";



const WhatsAppButton = ({name,email,message}) => {
    const phoneNumber = '03175080524';
    const messageToSend = encodeURIComponent(`Name: ${name},  Email: ${email},  Message: ${message}`);
  
    const handleClick = () => {
      window.open(`https://wa.me/${phoneNumber}?text=${messageToSend}`, '_blank');
    };
  
    return (
        <button onClick={handleClick} className='bg-[#202020] md:w-auto w-[90%] justify-center hover:bg-[#272727] transition-all duration-300 hover:text-white px-8 py-3 flex items-center gap-2 rounded-md text-[#dadada]'>Send <FaArrowRightLong size={20} /></button>
    );
  };

  export default WhatsAppButton