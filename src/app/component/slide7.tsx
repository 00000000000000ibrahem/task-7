import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { SlidersProps } from './Slider';

const Slide7 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const customers: Array<SlidersProps> = [
        {
            img: "/pic/Ellipse.png",
            nname: "Lyod Gomez",
            feadback: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        },
        {
            img: "/pic/Ellipse.png",
            nname: "Lyod Gomez",
            feadback: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        },
        {
            img: "/pic/Ellipse.png",
            nname: "Lyod Gomez",
            feadback: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        },
        {
            img: "/pic/Ellipse.png",
            nname: "Lyod Gomez",
            feadback: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure"
        }
    ];
    const cardsPerPage = 2;
    const subCustomers = customers.slice(currentIndex, currentIndex + cardsPerPage);
    const nextCards = () => {
        if (currentIndex + cardsPerPage < customers.length) {
            setCurrentIndex(currentIndex + cardsPerPage);
        }
    };
    const prevCards = () => {
        if (currentIndex - cardsPerPage >= 0) {
            setCurrentIndex(currentIndex - cardsPerPage);
        }
    };
    return (
        <div className="w-full py-10 px-4 sm:px-10">
            <div className="flex flex-col sm:flex-row items-center  justify-between mb-8">
                <h1 className="text-2xl  sm:text-3xl font-bold text-black mb-4 sm:mb-0">Explore Our Popular Destinations</h1>
                <div className="flex gap-4">
                    <button 
                        onClick={prevCards} 
                        className="bg-gray-200 hover:bg-orange-400 text-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <IoIosArrowBack />
                    </button>
                    <button 
                        onClick={nextCards} 
                        className="bg-gray-200 hover:bg-orange-400 text-black hover:text-white w-10 h-10 rounded-full flex items-center justify-center">
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {subCustomers.map((customer, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center sm:w-[45%]">
                        <img src={customer.img} alt={customer.nname} className="w-24 h-24 rounded-full mb-4" />
                        <p className="text-black font-semibold text-lg mb-2">{customer.nname}</p>
                        <p className="text-gray-600 text-sm sm:text-base text-center ">{customer.feadback}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slide7;
