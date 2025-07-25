import React, { useState } from "react";
import Navbar from "../components/Navbar";
import gheejar from "../assets/main_product-removebg-preview.png";
import gheejar2 from "../assets/main_product.webp";
import img from "../assets/img.png";
import img1 from "../assets/img_1.png";
import img2 from "../assets/img_2.png";
import img3 from "../assets/img_3.png";
import swiggy from "../assets/swiggy.png";
import zepto from "../assets/zepto.png";
import flipkart from "../assets/flipkart.png";
import amazone from "../assets/amazone.png";
import farmvideo from "../assets/farmvideo.mov";
import { Link } from "react-router-dom";
import { products } from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

const Home = () => {
  const [selectimage, setselectimage] = useState(products[0].product_image);
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
              all{" "}
              <span className="font-bold text-xl">
                100% natural and preservative-free.
              </span>
            </h3>
          </div>
          <div className=" p-6">
            <Link to="/products">
              <button className="bg-[#b4bd62] text-black px-4 py-2 rounded-3xl hover:bg-[#747d27] transition font-semibold">
                Try Now{" "}
                <i className="ri-arrow-right-line text-black font-semibold ml-2"></i>
              </button>
            </Link>
            <div className="flex items-center gap-4 mt-6">
              {products.slice(0, 4).map((product) => (
                <img
                  key={product.product_id}
                  className="w-20 h-20 object-contain rounded-full bg-[#b4bd62] p-1 border hover:border-[#795548] transition"
                  src={product.product_image}
                  alt={product.product_name}
                  onClick={() => setselectimage(product.product_image)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="ml-24 mt-10">
          <div className="h-4/5 w-96 flex items-center">
            <img
              src={selectimage}
              alt="ghee"
              className="rounded-full w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* third half */}

      <div className="h-screen bg-[#ffdbd4] text-[#4E342E] font-inter">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold mb-6 mt-6">- Products -</h1>
        </div>
        <div className="flex items-center justify-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide className="!w-[280px]">
                <div className="bg-transparent p-6 rounded-lg ">
                  <img src={product.product_image} alt="gheejar" className="rounded-lg" />
                  <div className="mt-2">
                    <h1 className=" text-xl font-bold">{product.product_name}</h1>
                    <h4 className="text-lg font-medium tracking-tight">
                      {product.product_description}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between text-lg font-medium mt-3">
                    <span>{product.product_price}</span>
                    <span>
                      <i className="ri-shopping-cart-2-line"></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 4th half */}

      <div className="font-inter flex flex-col items-center justify-center bg-[#ffdbd4] py-10 relative">
        <h1 className="text-5xl font-bold text-[#4E342E]">Why Rosier?</h1>
        <div className="flex flex-wrap justify-center items-center gap-20 mt-10">
          {/* Item 1 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img1} />
            <span className="text-white text-2xl font-bold mt-4">
              100% Clear
            </span>

            {/* Hover Circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              We use no chemicals or preservatives in our process.
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img2} />
            <span className="text-white text-2xl font-bold mt-4">
              Made in small batches
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Every batch is handcrafted with care.
            </div>
          </div>

          {/* Item 3 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img3} />
            <span className="text-white text-2xl font-bold mt-4">
              Rooted in Tradition
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Recipes passed down for generations.
            </div>
          </div>

          {/* Item 4 */}
          <div className="relative group flex flex-col items-center justify-center cursor-pointer">
            <img src={img} />
            <span className="text-white text-2xl font-bold mt-4">
              Farm Fresh
            </span>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#4E342E] text-white text-center text-sm w-40 h-40 p-4 flex items-center justify-center rounded-full z-10 shadow-lg">
              Fresh from our farms to your home.
            </div>
          </div>
        </div>
      </div>

      <div>
        <video src={farmvideo} controls autoPlay muted loop playsInline></video>
      </div>

      <div className="overflow-hidden bg-[#FFDBD4] py-6">
        <h1 className="text-4xl font-bold text-[#4E342E] text-center mb-6">
          CATCH US HERE
        </h1>

        <div className="whitespace-nowrap animate-marquee flex gap-16">
          <img src={swiggy} alt="swiggy" className="h-20 inline-block" />
          <img src={amazone} alt="amazon" className="h-16 inline-block" />
          <img src={flipkart} alt="flipkart" className="h-20 inline-block" />
          <img src={zepto} alt="zepto" className="h-20 inline-block" />
          {/* Repeat if needed for smoother loop */}
          <img src={swiggy} alt="swiggy" className="h-20 inline-block" />
          <img src={amazone} alt="amazon" className="h-16 inline-block" />
          <img src={flipkart} alt="flipkart" className="h-20 inline-block" />
          <img src={zepto} alt="zepto" className="h-20 inline-block" />
          <img src={swiggy} alt="swiggy" className="h-20 inline-block" />
          <img src={amazone} alt="amazon" className="h-16 inline-block" />
          <img src={flipkart} alt="flipkart" className="h-20 inline-block" />
          <img src={zepto} alt="zepto" className="h-20 inline-block" />
        </div>
      </div>
    </>
  );
};

export default Home;
