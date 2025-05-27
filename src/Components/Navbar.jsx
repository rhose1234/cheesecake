// import { useState } from "react";
import logo from "../assets/logo.png"
import { CgMenuLeft } from "react-icons/cg";



const Navbar = () => {

    // const [isOpen, setIsOpen] = useState(" ")
    // setIsOpen(e.target.value)

    // const handleOpen = () => {
    //     isOpen
    // }

  return (
    <>
      
          <nav className='w-full overflow-x-hidden bg-transparent fixed z-10' >
            <div className='container mx-auto lg:px-28 md:px-2 px-4 py-4 md:py-2 flex flex-row justify-between items-center'>
                   <img src={logo} className="size-20"/>
                        <ul className="hidden items-center md:justify-center md:flex md:flex-row md:gap-x-14 text-sm font-normal text-white rounded-xl bg-[#6A4028]  pe-10 py-3">
                            <li>
                                <a className="bg-white text-[#6A4028] px-7 py-4 rounded-xl ml-0" href="/">Home</a>
                            </li>
                             <li>
                                <a href="#about">About</a>
                            </li>
                              <li>
                                <a href="#blog">Blog</a>
                            </li>
                             <li>
                                <a href="#contact">Contact</a>
                            </li>
                             <li>
                                <a href="#menu">Menu</a>
                            </li>
                        </ul>

                        <button className="border border-[#6A4028] border-1 rounded-full px-6 py-2 text-[#6A4028] hover:bg-[#6A4028] hover:text-white font-normal text-sm">Sign Up</button>

                        {/* <CgMenuLeft onClick={() => handleOpen()} className="lg:hidden md:hidden flex size-8 text-[#6A4028]" /> */}
               
            </div>
              </nav>
    </>
  )
}

export default Navbar
