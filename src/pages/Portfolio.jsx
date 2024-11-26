import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
const Portfolio = () => {
    const imgs = [
        "/proj1.jpg",
        "/proj2.png",
        "/proj3.webp",
        "/proj4.jpg",
    ]
  return (
    <>
      <div className="w-full hide-scrollbar h-screen bg-zinc-900 pb-10 overflow-auto">
        <div className="navbar fixed top-0 w-full h-auto md:p-5 p-2 flex items-center justify-center">
          <Navbar />
        </div>
        <div className="w-full h-full mt-20 md:px-20">
          <div className="w-full h-auto flex-col flex">
            <h1 className="text-center p-3 text-white text-4xl font-semibold my-3">
              Projects
            </h1>
            <div className="w-full h-auto flex justify-center pb-10 gap-5 flex-wrap">
              {
                imgs.map((img,index) => {
                    return <Card src={img} key={index} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
