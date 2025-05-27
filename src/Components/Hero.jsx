import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";
import sideimg from "../assets/abit-home.png"


const Hero = () => {
  return (
    <>
      <div className='Hero_background min-h-[100vh] max-w-full overflow-x-hidden flex items-center' id='hero'>
        <div className='container mx-auto lg:px-28 md:px-8 px-4 py-8 md:py-12 flex flex-col md:flex-row md:gap-y-0 gap-y-10 items-center justify-center md:justify-between gap-x-0' data-aos="zoom-in-up" >
          <div className='md:w-1/2 '>
            <h1 className='w-full text-5xl md:text-5xl lg:text-5xl font-medium leading-tight text-[#523728]  mb-8'>Bite The World of Cheesecake Wonders</h1>
            <p className='text-md text-[#523728] mb-8 '>We always make our customer happy by providing as many choices as possible </p>

            <div className='call_to_action flex row gap-x-2 '>
              <button className='button1 font-bold text-sm text-[#ffffff] bg-[#523728] px-8 py-3 rounded-full hover:text-[#523728] hover:bg-transparent hover:border hover:border-1 hover:border-[#523728]'>
              <a href=''>Get Started </a></button>
              <button className='button2 font-bold text-sm flex row items-center gap-x-2 text-[#523728] bg-transparent px-8 py-3 rounded-full border border-1 border-[#523728] hover:text-[#ffffff] hover:bg-[#523728]'>
              <a href='' >Watch Demo </a>
              <FaCirclePlay />
              </button>
            </div>
          </div>
          
          <div className='hidden md:flex lg:flex lg:w-1/2'> 
          <img src={sideimg} className='lg:w-[100%] lg:h-[100vh] md:w-90 '/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
