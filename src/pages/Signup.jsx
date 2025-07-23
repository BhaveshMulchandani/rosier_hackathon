import React, { useState } from "react";
import ghee from "../assets/main_product-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()
  return (
    <div className="bg-[#FFDBD4] min-h-screen flex items-center justify-center px-4">
      <div className="bg-white/10 rounded-2xl shadow-xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden">
        {/* Left Side - Image with Caption */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-center p-6 bg-[#FFDBD4]">
          <img src={ghee} alt="ghee" className="h-60 object-contain mb-4" />
          <h2 className="text-[#4E342E] text-xl font-semibold text-center">
            Wholesome Goodness, Straight from the Source.
          </h2>
        </div>

        {/* Right Side - Signup Form */}
        <div className="md:w-1/2 w-full p-8 bg-white/30">
          <h2 className="text-[#4E342E] text-3xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <form className="flex flex-col gap-4">
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              placeholder="Enter your name"
              className="px-4 py-3 rounded-lg border border-[#4E342E] text-[#795548] font-playfair text-lg placeholder:text-[#795548] hover:ring hover:ring-[#4E342E] bg-transparent outline-none"
            />
            <input
            value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-lg border border-[#4E342E] text-[#795548] font-playfair text-lg placeholder:text-[#795548] hover:ring hover:ring-[#4E342E] bg-transparent outline-none"
            />
            <input
            value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              className="px-4 py-3 rounded-lg border border-[#4E342E] text-[#795548] font-playfair text-lg placeholder:text-[#795548] hover:ring hover:ring-[#4E342E] bg-transparent outline-none"
            />

            <button onClick={()=>navigate('/login')} className="bg-[#4E342E] text-white py-3 rounded-lg font-semibold hover:bg-[#5d4037] transition duration-200">
              Sign Up
            </button>

            <p className="text-sm text-[#4E342E] text-center mt-4">
              Already have an account?{" "}
              <Link to={`/login`} className="underline cursor-pointer">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
