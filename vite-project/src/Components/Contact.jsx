import React from 'react'
import contact from "../assets/contact.png"
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaYoutubeSquare } from "react-icons/fa";


const Contact = () => {
  return (
    <>
          <div className='h-auto max-w-full overflow-x-hidden bg-[#6A4028]' data-aos="zoom-in" data-aos-duration="1000">
            <div className='container mx-auto md:px-28 px-6 py-10 md:py-20 flex flex-col md:flex-row md:gap-y-0 gap-y-4 justify-between items-center gap-x-10'>
            <div className='w-full mt-10 '>
            <h1 className='text-5xl mb-8 text-normal text-[#FFF8E1] '>Contact Us</h1>
            <p className='text-[#FFF8E1]  text-sm'>Need to get in touch with us? Either fill out the form with your inquiry or find the department!</p>
                <img src={contact} className='size-100'/>

                <div className='flex flex-row gap-x-6 mt-6'>
                <FaFacebook className='size-9 p-2 bg-white text-[#6A4028] rounded-full' /> 
                <FaXTwitter className='size-9 p-2 bg-white text-[#6A4028] rounded-full' />
                <FaInstagram className='size-9 p-2 bg-white text-[#6A4028] rounded-full' />
                <FaYoutubeSquare className='size-9 p-2 bg-white text-[#6A4028] rounded-full' />
              </div>
              <p className='mt-8 text-sm text-[#FFF8E1] '>  &copy; 2025 Dscode | All rights reserved</p>
            </div>

            <div className='w-full md:mt-16'>

            <form className='flex flex-col gap-y-8'> 
                <input type='text' placeholder='Name' className='w-full p-3 px-8 shadow-xl border border-1  border-white  bg-white rounded-full'/>
                <input type='text' placeholder='Email' className='w-full p-3 px-8 shadow-xl  border border-1  border-white  bg-white rounded-full'/>
                <textarea placeholder='Message' cols={4} className='w-full p-3 px-8 shadow-xl border border-1  border-white  bg-white rounded-full' ></textarea>
                <button className='w-full text-center py-3 bg-[#FCAE36] rounded-full shadow-xl text-sm font-semibold'>Send Messsage Now</button>
            </form>

            </div>

        </div>
    </div>
    </>
  )
}

export default Contact
