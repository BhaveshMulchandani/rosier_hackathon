import React from "react";
import Navbar from "../components/Navbar";
import ghee from "../assets/product_images/ghee.webp";
import khapliatta from "../assets/product_images/khapli_aata.webp";
import almond_butter from "../assets/product_images/almond_butter.webp";
import Berry_better from "../assets/product_images/Berry_coconut_better_bar.webp";
import coconut_oil from "../assets/product_images/coconut_oil.webp";
import ground_nut_oil from "../assets/product_images/ground_nut_oil.webp";
import honey from "../assets/product_images/honey.webp";
import mustard_oil from "../assets/product_images/mustard_oil.webp";
import nut_butter from "../assets/product_images/nut_butter.webp";
import sunflower_oil from "../assets/product_images/sunflower_oil.webp";
import { nanoid } from "nanoid";

const Product = () => {
  const products = [
    {
      product_id: nanoid(),
      product_image: ghee,
      product_name: " Gir Cow A2 Ghee - Made With Curd",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: khapliatta,
      product_name: "Khapli Aata - Organic Whole Wheat Flour",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: almond_butter,
      product_name: "Almond Butter - Creamy & Delicious",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: Berry_better,
      product_name: "Berry Coconut Butter - Fruity & Nutty",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: coconut_oil,
      product_name: "Coconut Oil - Stone Pressed & Organic",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: ground_nut_oil,
      product_name: "Ground Nut Oil - Stone Pressed & Organic",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: honey,
      product_name: "Honey - Pure & Natural",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: mustard_oil,
      product_name: "Mustard Oil - Stone Pressed & Organic",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: nut_butter,
      product_name: "Nut Butter - Creamy & Delicious",
      product_price: 1799,
    },

    {
      product_id: nanoid(),
      product_image: sunflower_oil,
      product_name: "Sunflower Oil - Stone Pressed & Organic",
      product_price: 1799,
    },
  ];
  return (
    <div className="bg-[#b4bd62] min-h-screen">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center p-10">
      {products.map((product) => (
        <div key={product.product_id} className="max-w-sm bg-[#ffdbd4] rounded-2xl shadow-md p-6 text-[#6a4639] font-irish transition-transform duration-200 hover:scale-105">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="w-full h-64 object-contain rounded-md mb-4"
          />

          <h1 className="text-[#3c2722] text-xl font-semibold mt-2 px-2">
            {product.product_name}
          </h1>

          <h4 className="text-[#49332d] font-medium text-lg mb-6 px-3">
            ₹{product.product_price}
          </h4>

          <button className="w-full py-2 rounded-md text-lg font-semibold border border-[#4a3127] hover:border-[#b4bd62] hover:bg-[#b4bd62]  text-[#4a3127] hover:ring-1 hover:ring-[#4a3127] transition">
            Add To Cart
          </button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Product;
