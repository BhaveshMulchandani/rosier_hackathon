import React from "react";
import logo from "../assets/rosier_logo.jpg";
import { Link } from "react-router-dom";
import "../App.css";

const navLinks = [
  { path: "/", label: "HOME" },
  { path: "/products", label: "PRODUCTS" },
  { path: "/our-story", label: "OUR STORY" },
];

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between px-10 py-5">
        <div>
          <Link to={"/"}>
            <img className="rounded-full w-14 h-14" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="font-Irish">
          <ul className="flex items-center justify-center gap-10 text-lg font-irish text-[#4E342E]">
            {navLinks.map(({ path, label }) => (
              <Link to={path} key={label}>
                <li className="relative group overflow-hidden h-6 cursor-pointer">
                  <span className="block transform transition-transform duration-300 group-hover:translate-y-full">
                    {label}
                  </span>
                  <span className="absolute top-0 left-0 transform -translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    {label}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-center gap-5 text-2xl font-irish text-[#4E342E]">
          <Link to="/register" className="relative group">
    <i className="ri-user-3-line hover:animate-wiggle transition duration-300"></i>
    
    {/* Dot */}
    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition duration-300"></span>
  </Link>
          <Link>
           <i className="ri-shopping-cart-2-line group-hover:animate-bounce-cart transition duration-300"></i>

          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
