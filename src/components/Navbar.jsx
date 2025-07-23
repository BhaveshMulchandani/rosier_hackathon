import React from 'react'
import logo from '../assets/rosier_logo.jpg'
import { Link } from 'react-router-dom'
import '../App.css'


const Navbar = () => {
  return (
   <>
   <div className='flex items-center justify-between px-10 py-5'>
    <div><img className='rounded-full w-14 h-14' src={logo} alt="logo" /></div>
    <div className='font-Irish'>
        <ul className='flex items-center justify-center gap-10 text-lg font-irish text-[#4E342E]'>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/products"><li>PRODUCTS</li></Link>
        <Link to="/our-story"><li>OUR STORY</li></Link>
    </ul>
    </div>
    <div className='flex items-center justify-center gap-5 text-2xl font-irish  text-[#4E342E]'>
            <i className="ri-user-3-line"></i>
            <i className="ri-shopping-cart-2-line"></i>
    </div>
   </div>
   </>
  )
}

export default Navbar