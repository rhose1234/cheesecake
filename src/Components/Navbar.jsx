import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { CgMenuLeft } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`w-full  overflow-x-hidden fixed  z-10 ${
          isScrolled ? "bg-[#FFF8E1] shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto lg:px-28 md:px-2 px-4 py-4 md:py-2 flex flex-row justify-between items-center">
          <img src={logo} className="size-20" />
          <ul className=" shadow-xl hidden items-center md:justify-center md:flex md:flex-row md:gap-x-14 text-sm font-normal text-white rounded-xl bg-[#6A4028]  pe-10 py-3">
            <li>
              <a
                className="bg-white text-[#6A4028] px-7 py-4 rounded-xl ml-0"
                href="/"
              >
                Home
              </a>
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

          <button className="border border-[#6A4028] border-1 rounded-full px-6 py-2 text-[#6A4028] hover:bg-[#6A4028] hover:text-white font-normal text-sm">
            Sign Up
          </button>

          {toggle ? (
            <MdOutlineClose
              onClick={() => handleToggle()}
              className="lg:hidden md:hidden flex size-8 text-[#6A4028]"
            />
          ) : (
            <CgMenuLeft
              onClick={() => handleToggle()}
              className="lg:hidden md:hidden flex size-8 text-[#6A4028] z-30"
            />
          )}
        </div>

        <div className="">
          <ul
            className={` mt-24
  h-screen fixed top-0 right-0 w-full bg-[#6A4028] text-white
  py-8 px-4 shadow-xl flex flex-col items-center justify-center gap-y-10
  text-sm font-normal transform transition-transform duration-300 ease-in-out
  ${toggle ? "translate-x-0 " : "translate-x-full"}
  md:hidden z-40
`}
          >
            <li className="mb-8">
              <a
                className="bg-white text-[#6A4028] px-7 py-4 rounded-xl inline-block"
                href="/"
                onClick={handleToggle}
              >
                Home
              </a>
            </li>
            <li className="mb-8">
              <a href="#about" onClick={handleToggle}>
                About
              </a>
            </li>
            <li className="mb-8">
              <a href="#blog" onClick={handleToggle}>
                Blog
              </a>
            </li>
            <li className="mb-8">
              <a href="#contact" onClick={handleToggle}>
                Contact
              </a>
            </li>
            <li className="mb-8">
              <a href="#menu" onClick={handleToggle}>
                Menu
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
