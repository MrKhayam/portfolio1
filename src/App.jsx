import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About ';

const App = () => {
  return (
    <>
      <div className="w-full hide-scrollbar h-screen overflow-scroll bg-zinc-900 overflow-x-hidden">
      <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="heroSection w-full h-full flex items-center justify-center md:mt-8 mt-10">
          <Hero />
        </div>
        <div className="aboutSection w-full h-auto">
          <About />
        </div>
      </div>
    </>
  );
}

export default App;
