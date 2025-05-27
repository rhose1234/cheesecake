import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef2.png";

const Blog = () => {

    const BlogItems = [
        {
          id: 1,
          title: "A Peek Behind the Cheesecake Curtain",
          description : "Step into our cheesecake haven, where the magic unfolds behind the scenes, whisking dreams into reality. Our kitchen is a symphony and very...",
          paragraph : "23 Nov, 2023 / Cheesecake",
          image : chef1,
          scroll : "fade-up-left"
        },
        {
          id: 2,
          title: "Low-Sugar & Gluten-Free Cheesecakes",
          description : "Welcome to our guilt-free indulgence zone, where we're redefining the art of cheesecake with our delectable low-sugar...",
          paragraph : "18 July, 2023 / Cheesecake",
          image: chef2,
          scroll : "fade-up-right"
        },
        {
          id: 3,
          title: "Sweet Words - Customer Reviews of Cheesecakes",
          description : "Indulge in the rich tapestry of heartfelt stories within 'Sweet Words.' This curated collection of customer reviews offers a glimpse into the joy...",
          paragraph : "1 January, 2024 / Cheesecake",
          image : chef3,
          scroll : "fade-up-left"
        }

    ]
  return (
    <>
      <div className='bg-[#FFF8E1]'>
       <div className='container mx-auto md:px-28 px-10 py-10 md:py-16 max-w-full overflow-x-hidden'>
      <h1 className='text-5xl text-center text-[#6A4028]  '>Our Blog </h1>
      <p className='text-xl text-center text-[#6A4028] mt-4'>Our Recent Posts</p>
     
        <div className='card_Container flex  flex-col md:flex-row justify-between items-center gap-x-10 mt-16 gap-y-8 md:gap-y-0'>
              
              {BlogItems.map((item) => (
                <div className='card bg-[#FFF8E1] shadow-2xl px-8 py-6 text-start items-center md:w-[600px] md:h-[600px] ' key={item.id} data-aos={item.scroll}>
                 <img src={item.image}  className='size-full md:size-70 mb-8' />
                 <p className='text-start text-[#BB6939] text-sm mb-2'>{item.paragraph}</p>
                 <h3 className='text-[#734B33] font-bold text-xl'>{item.title}</h3>
                 <p className='text-[#734B33] mb-8 mt-6 text-sm'>{item.description}</p>
                 <a className='text-[#734B33] mt-8 text-sm'>Read More...</a>
                </div>
              ))}


            
        </div>
      </div>

      </div>
    </>
  )
}

export default Blog
