import React from "react";
import Navbar from "../components/Navbar";
import gheejar from "../assets/main_product-removebg-preview.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-12 relative overflow-hidden">
        {/* Background Shadow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-300 opacity-30 blur-[120px] rounded-e-full z-0"></div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-yellow-400 opacity-55 blur-[150px] rounded-e-full z-0"></div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center z-10">
          <img
            className="rounded-xl w-[80%] object-contain"
            src={gheejar}
            alt="main_product"
          />
        </div>

        {/* Text Section */}
        <div className="w-1/2 px-8 z-10">
          <h1 className="text-5xl font-extrabold text-[#4E342E] leading-snug">
            Reviving India’s{" "}
            <span className="text-[#795548]">Ancient Wisdom</span>
            <br />
            with Pure Ghee
          </h1>
          <p className="text-xl text-[#5D4037] mt-4">
            Crafted using age-old methods, <br />
            straight from our heritage kitchens to your home.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
