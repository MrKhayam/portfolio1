import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const App = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-900 overflow-hidden">
      <div className="navbar w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="heroSection w-full h-auto mt-40">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
