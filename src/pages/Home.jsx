import React from "react";
import Navbar from "../components/Navbar";
import gheejar from "../assets/main_product-removebg-preview.png";
import gheejar2 from "../assets/main_product.webp";

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
{/* second half */}
      <div className="h-screen bg-[#ffdbd4] px-6 py-10 flex-1 flex gap-36">
        <div>
          <div className="p-6">
            <h1 className="text-5xl font-bold text-[#4E342E] leading-snug font-playfair">
              Enjoy your authentic <br />
              ghee, honey, oil, bars, and butter <br />
              without the stress of preservatives.
            </h1>

            <h3 className="text-[#6a4639] text-xl mt-5 leading-snug font-irish">
              Wholesome Everyday Essentials, Done Right. <br />
              From rich ghee to raw honey, cold-pressed oils to soft nut butters{" "}
              <br />
              all <span className="font-bold text-xl">100% natural and preservative-free.</span>
            </h3>
          </div>
          <div className=" p-6">
            <button className="bg-[#b4bd62] text-black px-4 py-2 rounded-3xl hover:bg-[#747d27] transition font-semibold">
              Try Now <i className="ri-arrow-right-line text-black font-semibold ml-2"></i>
            </button>
            <div className="flex items-center gap-4 mt-6">
              <img
                className="w-20 h-20 object-contain rounded-full bg-[#b4bd62] p-1 border hover:border-[#795548] transition"
                src={gheejar}
                alt="jar"
              />
              <img
                className="w-20 h-20 object-contain rounded-full bg-[#b4bd62] p-1 border hover:border-[#795548] transition"
                src={gheejar}
                alt="jar"
              />
              <img
                className="w-20 h-20 object-contain rounded-full bg-[#b4bd62] p-1 border hover:border-[#795548] transition"
                src={gheejar}
                alt="jar"
              />
              <img
                className="w-20 h-20 object-contain rounded-full bg-[#b4bd62] p-1 border hover:border-[#795548] transition"
                src={gheejar}
                alt="jar"
              />
            </div>
          </div>
        </div>
        <div className="ml-24 mt-10">
          <div className="h-4/5 w-96 flex items-center">
            <img
              src={gheejar2}
              alt="ghee"
              className="rounded-full w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
