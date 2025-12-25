
import React, { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CgCalendarDates } from "react-icons/cg";
import { FaPeopleGroup } from 'react-icons/fa6';

export interface Information {
  text: string;       
  icon: React.ReactElement;      
}

export interface SlidersProps {
  title?: string;
  img: string;
  nname?: string;
  feadback?: string;
  price?: number;
  day?: string;
  capacity?: string;
  description?: string;
  info?: Array<Information>;
}

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliders: Array<SlidersProps> = [
    {
      title: "Lucca Bike Tour",
      img: "/pic/Rectangle3.png",
      price: 34,
      day: "EVERY DAY",
      capacity: "3-10 PP",
      description: "A tour of the city and its surroundings led by a professional guide ..."
    },
    {
      title: "Wine tasting In Tuscany",
      img: "/pic/Rectangle1.png",
      price: 34,
      day: "MONDAY",
      capacity: "10-30 PP",
      description: "The real magic is here where you can enjoy the best Tuscan wine and eat ..."
    },
    {
      title: "Cinque Terre Tour",
      img: "/pic/Rectangle4.png",
      price: 34,
      day: "TO BE DECIDED",
      capacity: "10-50 PP",
      description: "Visiting the 5 Terre is a must, and you can never go there enough ..."
    },
    {
      title: "Siena and Surroundings",
      img: "/pic/Rectangle2.png",
      price: 34,
      day: "TO BE DECIDED",
      capacity: "5-10 PP",
      description: "Visit the beautiful Siena and the cities that surround it to experience ..."
    },
  ];

  const subsliders = sliders.slice(currentIndex, currentIndex + 4);

  const nextCards = () => {
    if (currentIndex + 4 < sliders.length) setCurrentIndex(currentIndex + 4);
  };
  const prevCards = () => {
    if (currentIndex - 4 >= 0) setCurrentIndex(currentIndex - 4);
  };

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 md:px-10">
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
        <h1 className="text-2xl text-black font-bold mb-4 md:mb-0">Explore Our Popular Destinations</h1>
        <div className="flex gap-2">
          <button onClick={prevCards} className="bg-gray-200 text-black hover:text-white hover:bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center">
            <IoIosArrowBack />
          </button>
          <button onClick={nextCards} className="bg-gray-200 text-black hover:text-white hover:bg-orange-400 w-10 h-10 rounded-full flex items-center justify-center">
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        {subsliders.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-4 flex flex-col items-start text-center">
            <img src={item.img} alt={item.title} className="w-full h-64 md:h-72 object-cover rounded-md mb-3" />
            <h2 className="font-semibold text-lg text-black mb-1">{item.title}</h2>
            <p className="font-bold text-zinc-600 mb-2">from <span className='text-orange-400'>{item.price}$</span></p>
            <div className="flex items-center justify-between w-full gap-2 mb-2 text-sm text-gray-500">
              <p className='flex items-center gap-1'><CgCalendarDates className="text-orange-400"/> {item.day}</p>
              <p className='flex items-center gap-1'><FaPeopleGroup className="text-orange-400"/> {item.capacity}</p>
            </div>
            <p className="text-sm text-gray-600 truncate">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
