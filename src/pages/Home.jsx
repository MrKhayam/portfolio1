import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router";
const Home = () => {
  return (
    <>
      <div className="w-full hide-scrollbar h-full bg-zinc-900 overflow-hidden">
        <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="heroSection w-full h-full flex items-center justify-center md:mt-8 mt-10">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Home;
