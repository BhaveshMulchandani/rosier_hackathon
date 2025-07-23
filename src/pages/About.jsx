import React from "react";
import Navbar from "../components/Navbar";
import firmcow from "../assets/firm_cow.webp";
import founder1 from "../assets/founder1.jpg";
import founder2 from "../assets/Founder2.jpg";
import rosier_product_family from "../assets/rosier_product_family.webp";
import instaicon from "../assets/instaicon.webp";
import rosier_logo from "../assets/rosier_logo.jpg";
import youtube_icon from '../assets/youtube_icon.jpeg'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-6 flex-col h-screen">
        {/* Left Side - Image */}

        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={firmcow}
            alt="cow"
            className="w-80 md:w-96 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side - Text */}

        <div className=" ml-[36em] md:w-1/2 w-full bg-[#ffdbd4] md:p-10 rounded-md shadow-md">
          <h1 className="text-[rgb(137,81,89)] text-2xl md:text-3xl font-bold mb-4 leading-snug">
            We are Proudly and <br />
            Passionately Obsessed with <br />
            Everything Organic!
          </h1>
          <p className="text-[rgb(171,121,122)] text-base md:text-lg font-medium leading-relaxed">
            In our daily life routine, we sometimes forget to take stock of what
            we are eating and how we are eating. The choices we make with
            respect to food affect us and our entire family. So, we must
            consciously invest energy in finding the right kinds of foods for us
            and our family to help build their immunity.
          </p>
        </div>
      </div>
      <div className="bg-[#FFF5F2] py-16 px-6 md:px-20">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4E342E] mb-12">
          WHAT OUR FOUNDERS SAY
        </h1>

        {/* Founder Section */}
        <div className="flex flex-col md:flex-row items-start justify-center gap-10">
          {/* Founder Image */}
          <div className="flex-shrink-0">
            <img
              src={founder1}
              alt="Founder 1"
              className="rounded-lg h-52 w-52 object-cover shadow-md"
            />
            <img
              src={founder2}
              alt="Founder 2"
              className="mt-4 rounded-lg h-52 w-52 object-cover shadow-md"
            />
          </div>

          {/* Founder Message */}
          <div className="max-w-3xl bg-[#FFDBD4] p-6 rounded-lg shadow-md">
            <p className="text-[#4E342E] text-lg leading-relaxed">
              <span className="font-semibold italic text-xl block mb-4">
                "Rosier was born from our shared belief that real food should be
                simple, honest, and nourishing."
              </span>
              In a world flooded with processed options, we craved something
              pure — food that felt like home, rooted in tradition but adapted
              for modern lives.
              <br />
              <br />
              We are two friends, but more importantly, two parents, who
              struggled to find clean, preservative-free food for our families.
              Every time we read a label full of chemicals and unpronounceable
              ingredients, we wondered — why should ‘natural’ be a luxury?
              <br />
              <br />
              So, we decided to go back to our roots. Inspired by our
              grandmothers’ kitchens and India’s ancient food wisdom, we set out
              to create a brand that’s honest to its core — no shortcuts, no
              compromises, no junk.
              <br />
              <br />
              Rosier is not just a brand — it’s a movement towards mindful
              eating, conscious choices, and real ingredients. From sourcing to
              packaging, everything we do is guided by a single principle:{" "}
              <strong>keep it real</strong>.
              <br />
              <br />
              We’re humbled and grateful that thousands now trust Rosier to be
              part of their everyday meals. We promise to keep earning that
              trust — one honest product at a time.
              <br />
              <span className="block mt-6 font-semibold text-[#6D4C41]">
                – [Flying Beast] & [Ankur Tyagi]
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex mt-10 flex-col h-screen">
        {/* Left Side - Image */}

        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={rosier_product_family}
            alt="cow"
            className="w-80 md:w-96 object-cover rounded-md shadow-md"
          />
        </div>

        {/* Right Side - Text */}

        <div className=" ml-[36em] md:w-1/2 w-full bg-[#ffdbd4] md:p-10 rounded-md shadow-md">
          <h1 className="text-[rgb(137,81,89)] text-2xl md:text-3xl font-bold mb-4 leading-snug">
            We are Proudly <br /> and Passionately Obsessed <br /> with
            Everything Organic!
          </h1>
          <p className="text-[rgb(171,121,122)] text-base md:text-lg font-medium leading-relaxed">
            In our daily life routine, we sometimes forget to take stock of what
            we are eating and how we are eating. The choices we make with
            respect to food which affects us and our entire family. So, we must
            consciously invest energy in finding right kinds of foods for us and
            our family to help build their immunity
          </p>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4 fixed bottom-0 left-0 right-0 p-4">
        <a   href="https://www.instagram.com/rosier.foods/" target="_blank" rel="noopener noreferrer"><img className="rounded-full w-20 h-20" src={instaicon} alt="instaicon" /></a>
        <a href="https://www.rosierfoods.com/" target="_blank" rel="noopener noreferrer"><img className="rounded-full w-20 h-20" src={rosier_logo} alt="rosier" /></a>
        <a href="https://www.youtube.com/channel/UCq82cLzzIqllEOsdpb_2lxg" target="_blank" rel="noopener noreferrer"><img className="rounded-full w-20 h-20" src={youtube_icon} alt="youtube_icon" /></a>
      </div>
    </>
  );
};

export default About;
