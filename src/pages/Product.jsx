import React from "react";
import Navbar from "../components/Navbar";
import ghee from "../assets/product_images/ghee.webp";
import khapliatta from "../assets/product_images/khapli_aata.webp";

const Product = () => {
  return (

    <div className="bg-[#b4bd62] min-h-screen">
      <Navbar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center p-10">

        <div className="max-w-sm bg-[#ffdbd4] rounded-2xl shadow-md p-6 text-[#6a4639] font-irish transition-transform duration-200 hover:scale-105">
          <img
            src={khapliatta}
            alt="Gir Cow A2 Ghee"
            className="w-full h-64 object-contain rounded-md mb-4"
          />

          <h1 className="text-[#3c2722] text-xl font-semibold mt-2 px-2">
            Gir Cow A2 Ghee - Made With Curd
          </h1>

          <h4 className="text-[#49332d] font-medium text-lg mb-6 px-3">
            ₹ 1,799
          </h4>

          <button className="w-full py-2 rounded-md text-lg font-semibold border border-[#4a3127] hover:border-[#b4bd62] hover:bg-[#b4bd62]  text-[#4a3127] hover:ring-1 hover:ring-[#4a3127] transition">
            Add To Cart
          </button>
        </div>

      {/* <div className="max-w-sm  rounded-2xl shadow-lg font-irish px-4 py-6 hover:scale-105 transition-all duration-150">
        <img
          src={ghee}
          alt="Gir Cow A2 Ghee"
          className="w-full h-64 object-contain rounded-md"
        />

        <h1 className="text-[#3c2722] text-2xl font-semibold mt-2 px-2">
          Gir Cow A2 Ghee
        </h1>
        <h4 className="text-[#49332d] font-medium text-xl  mb-6 px-3">
          ₹ 1,799
        </h4>

        <button className="w-full py-2 rounded-md text-lg font-semibold border border-[#4a3127]  text-[#4a3127] hover:ring-1 hover:ring-[#4a3127] transition">
          Add To Cart
        </button>
      </div>
      */}
    </div>
    </div>
  );
};

export default Product;
