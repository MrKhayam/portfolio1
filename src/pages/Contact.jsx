import React, { useState } from "react";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";
const Portfolio = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  return (
    <>
      <div className="w-full hide-scrollbar h-screen bg-zinc-900 overflow-hidden">
        <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        

        <div className="w-full h-full flex items-center justify-center">
            <div className="contactFrom flex flex-col gap-3 items-center w-full h-auto">
                <div className="flex md:flex-row flex-col items-center gap-3 w-full md:w-1/2">
                    <input value={name} onChange={() => setName(e.target.value)} placeholder="Name" className="bg-[#2727275e] md:w-1/2 rounded-md w-[90%] border-none outline-none p-3 text-white" type="text" />
                    <input value={email} onChange={() => setEmail(e.target.value)} placeholder="Email" className="bg-[#2727275e] md:w-1/2 rounded-md w-[90%] border-none outline-none p-3 text-white" type="text" />
                </div>
                <div className="message w-full flex justify-center md:w-1/2">
                <textarea value={message} onChange={() => setMessage(e.target.value)} placeholder="Message" className="md:w-full w-[90%] bg-[#2727275e] resize-none rounded-lg outline-none border-none p-3 h-32 text-white" name="" id=""></textarea>
                </div>
        <WhatsAppButton name={name} email={email} message={message} />
            </div>
        </div>

        
      </div>
    </>
  );
};

export default Portfolio;
