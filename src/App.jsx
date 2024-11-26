import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 overflow-hidden">
      <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="heroSection w-full h-full flex items-center justify-center md:mt-8">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
