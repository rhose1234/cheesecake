import strawberry from "../assets/strawberry.png";

const About = () => {

  return (
    <>
    
    <div className='about_section h-auto max-w-full overflow-x-hidden'>
    <div className='container mx-auto md:px-28 px-4 py-10 md:py-8 flex flex-col md:flex-row md:gap-y-0 gap-y-4 items-center gap-x-10  '>
    <div className='w-full' data-aos="zoom-in-right">
    <img src={strawberry} className='md:mb-24 ' />
    </div>
    <div className='w-full' data-aos="zoom-in-left">
    <h1 className='text-xl md:text-5xl mb-1'>We Love Cheesecake</h1>
    <h4 className='text-md mb-10'>Discover Our Cheesecake Story</h4>

    <p className='text-sm'>At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. </p>
    <p className='text-sm mt-10 mb-4'>We believe in delivering not just desserts but moments of sheer indulgence.</p>
    <button className='px-8 py-3 rounded-full text-white bg-[#6A4028] font-bold mt-8 shadow-xl'>Read More</button>
    </div>

    </div>
    </div>
      
    </>
  )
}

export default About;
