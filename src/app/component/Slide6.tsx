
import { SlidersProps } from './Slider';
import { CiCalendarDate } from "react-icons/ci";
import { GrMapLocation } from "react-icons/gr";
import { BiSolidDiscount } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoBicycle } from "react-icons/io5";
import { FaPersonHiking, FaBottleWater, FaPersonMilitaryPointing, FaHandHoldingDollar } from "react-icons/fa6";
import { BsTicketPerforated } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { MdGroup } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Slide6 = () => {
    const sliders: Array<SlidersProps> = [
        {
            title: "BIKE / RICKSHAW",
            img: "/pic/Rectangle21.png",
            price: 10,
            info: [
                { text: "Your bike for a day", icon: <CiCalendarDate /> },
                { text: "City App", icon: <GrMapLocation /> },
                { text: "Discount on Rickshaw", icon: <BiSolidDiscount /> },
                { text: "Guaranteed Support", icon: <TfiHeadphoneAlt /> }
            ]
        },
        {
            title: "BIKE / RICKSHAW",
            img: "/pic/Rectangle21-1-1.png",
            price: 30,
            info: [
                { text: "A Mountain Bike Included", icon: <IoBicycle /> },
                { text: "A Guide For You", icon: <FaPersonHiking /> },
                { text: "Bottle of water", icon: <FaBottleWater /> },
                { text: "Guaranteed Support", icon: <TfiHeadphoneAlt /> },
            ]
        },
        {
            title: "BIKE / RICKSHAW",
            img: "/pic/Rectangle21-2.png",
            price: 45,
            info: [
                { text: "Park ticket", icon: <BsTicketPerforated /> },
                { text: "Return bus", icon: <FaBus /> },
                { text: "Companio", icon: <MdGroup /> },
                { text: "Guaranteed Support", icon: <TfiHeadphoneAlt /> },
            ]
        },
        {
            title: "BIKE / RICKSHAW",
            img: "/pic/Rectangle20.png",
            price: 10,
            info: [
                { text: "Personal Driver", icon: <FaPersonMilitaryPointing /> },
                { text: "Wherever You Want", icon: <HiOutlineLocationMarker /> },
                { text: "At the best price", icon: <FaHandHoldingDollar /> },
                { text: "Guaranteed Support", icon: <TfiHeadphoneAlt /> },
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center w-full py-10">
            <div className="w-full flex justify-between mb-10 px-4 sm:px-10">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">The Most Popular Packages</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full px-4 sm:px-10">
                {sliders.map((slide, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl p-4 flex flex-col items-start text-center border border-gray-200 shadow-sm hover:shadow-lg transition">
                        <img
                            src={slide.img}
                            alt={slide.title}
                            className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-md mb-3"/>
                        <h2 className="font-semibold text-lg sm:text-xl text-black mb-1">{slide.title}</h2>
                        <p className="flex items-baseline gap-1 mb-3">
                            <span className="text-zinc-600 font-medium">$</span>
                            <span className="text-orange-400 font-bold text-2xl sm:text-3xl">{slide.price}</span>
                            <span className="text-zinc-600 text-sm">/day</span>
                        </p>
                        {slide.info?.map((i, key) => (
                            <div key={key} className="flex items-center gap-3 mt-3 text-left">
                                <span className="text-orange-400 text-lg">{i.icon}</span>
                                <span className="text-black text-sm sm:text-base">{i.text}</span>
                            </div>
                        ))}
                        <button className='w-full border mt-6 h-12 rounded-full border-orange-400 text-orange-400 hover:text-white hover:bg-orange-400 transition'>
                            BOOK NOW
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slide6;
