import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ghee from "../assets/main_product.webp";
import { useParams, Link } from "react-router-dom";
import { products } from "./Product";

const Product_Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  return (
    <div className="bg-[#b4bd62] min-h-screen">
      <Navbar />

      <div className="mt-10 px-4 md:px-16 flex flex-col md:flex-row items-center justify-center gap-10 font-playfair text-[#3c2722]">
        {/* Product Image */}
        <div className="max-w-sm w-full">
          <img
            className="rounded-xl object-contain w-full shadow-lg"
            src={products.find((item) => item.product_id === id)?.product_image}
            alt={products.find((item) => item.product_id === id)?.product_name}
          />
        </div>

        {/* Product Details */}
        <div className="w-full max-w-xl space-y-6">
          <h1 className="text-2xl md:text-4xl font-semibold leading-snug">
            {products.find((item) => item.product_id === id)?.product_name}
          </h1>

          <div className="space-x-2">
            <div className="inline-flex items-center gap-8">
              <div className="space-y-1">
                <h6 className="text-2xl font-medium text-[#4a3127]">Price</h6>
                <p className="text-xl font-semibold text-[#864e29]">
                  ₹
                  {
                    products.find((item) => item.product_id === id)
                      ?.product_price
                  }
                </p>
              </div>
              <div className="space-y-1">
                <h6 className="text-2xl font-medium text-[#4a3127]">
                  Quantity
                </h6>
                <div className="flex items-center gap-4 rounded-full border border-[#4a3127] bg-transparent px-3 text-xl">
                  <button
                    disabled={quantity === 1}
                    onClick={() => setQuantity(quantity - 1)}
                    className={`text-lg font-bold px-3 py-1 transition-all rounded-full ${
                      quantity === 1
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-[#4a3127] cursor-pointer"
                    }`}
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#4a3127] text-lg rounded-full font-bold px-3 py-1  transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.rosierfoods.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-[#fdd0c7] text-[#3b271d] border border-[#3b271d] text-xl font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-[#f7c5b7]">
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Detail;
