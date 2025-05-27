
import blueberry from "../assets/blueberry.png";
import biscuff from "../assets/biscoff.png";
import chocolate from "../assets/chocolate.png";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import { FaOpencart } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";



const Menu = () => {

    const CardItems = [
        {
            id: 1,
            name : "Blueberry Cheesecake",
            description : "Blueberry love, cheesecake delight!"  ,
            price : "$9.00",
            image : blueberry,
            fade : "zoom-out-up"
        },
         {
            id: 2,
            name : "Biscoff Cheesecake",
            description : "Biscoff adores cheesecake magic"  ,
            price : "$11.00",
            image : biscuff,
             fade : "zoom-in-right"
        },
         {
            id: 3,
            name : "Chocolate Cheesecake",
            description :  "Relish cheesecake magic!"  ,
            price : "$10.00",
            image : chocolate,
             fade : "zoom-in-left"
        }
    ]
  return (
    <>
      <div className="bg-[#6A4028]  ">
        <div className="container mx-auto md:px-28 px-6 py-4 md:py-10 max-w-full overflow-x-hidden">
        <h1 className="text-center mt-8 text-5xl text-[#FFF8E1]" >Our Menu</h1>

        <div className="flex flex-col md:flex-row md:gap-y-0 gap-y-8 gap-x-10 mt-20 items-center justify-between " >
        {CardItems.map((item) => (
     <div className="bg-white  px-10 py-4 rounded shadow-2xl" key={item.id} data-aos={item.fade}>
        <img src={item.image} className="size-full mb-6"/>
        <h4 className="text-xl font-semibold mb-1 text-[#6A4028]">{item.name}</h4>
        <p className="text-sm mb-0">{item.description}</p>

        <div className="flex flex-row justify-between items-center ">
         <div>
            <h5>{item.price}</h5>
            </div>
            <div className="stars flex mt-18 flex-row text-[#6A4028] size-20">
                 <MdOutlineStarBorderPurple500 />
                  <MdOutlineStarBorderPurple500 />
                   <MdOutlineStarBorderPurple500 />
                    <MdOutlineStarBorderPurple500 />
                     <MdOutlineStarBorderPurple500 />
            </div>

        </div>
<button className="bg-[#6A4028] text-white items-center flex flex-row text-md font-semibold px-6 py-3 gap-x-2 rounded-xl">
<a>Buy Now! </a>
<FaOpencart />
</button>


        </div>
))}

                 
        </div>

        <div className="flex flex-row gap-x-1 items-center justify-end text-white text-end mt-10">
        <h5>View More </h5>
        <FiChevronRight />
        </div>


        </div>
      </div>
    </>
  )
}

export default Menu
