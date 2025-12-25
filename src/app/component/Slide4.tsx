
import { SlidersProps } from "./Slider";

const Slide4 = () => {
    const sliders: Array<SlidersProps> = [
        {
            img: "/pic/Rectangle18.png",
            title: "Bike and rickshaw rental",
            description: "Book your quality vehicle quickly for an hour or all day!",
        },
        {
            img: "/pic/Rectangle19.png",
            title: "Guided tour of the countryside",
            description: "Live the real Lucchese experience by visiting the suburbs by bike!",
        },
        {
            img: "/pic/Rectangle20.png",
            title: "Taxi and NCC service",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!",
        },
        {
            img: "/pic/Rectangle20-1.png",
            title: "Bus Package",
            description: "Do you need not only a bike but also a driver? Then you have found the right place!",
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 sm:px-6 md:px-10">
            {sliders.map((slider, index) => {
                return (
                    <div
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                        key={index}>
                        <img
                            className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-md mb-3"
                            src={slider.img}
                            alt={slider.title}/>
                        <h2 className="font-semibold text-lg sm:text-xl text-black mb-2">{slider.title}</h2>
                        <p className="text-sm sm:text-base text-gray-600">{slider.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Slide4;
