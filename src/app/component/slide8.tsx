import { SlidersProps } from './Slider';

const Slide8 = () => {
    const sliders: Array<SlidersProps> = [
        {
            img: "/pic/icon_map.png",
            description: "Complete Packages For All Your Wishes",
        },
        {
            img: "/pic/Layer2.png",
            description: "Over 30 Years Of Experience",
        },
        {
            img: "/pic/icon_guide.png",
            description: "Expert Guides For You",
        },
        {
            img: "/pic/Layer14.png",
            description: "Guaranteed fun at the best price!",
        },
    ];

    return (
        <div className='w-full bg-orange-200 mt-20 py-10 flex flex-wrap justify-center gap-6'>
            {sliders.map((slider, index) => (
                <div 
                    key={index} 
                    className='flex flex-col items-center justify-center bg-white/30 rounded-2xl p-6 sm:w-[45%] md:w-[22%] h-[220px]'>
                    <img src={slider.img} alt='none' className='mb-4' />
                    <h2 className='text-center text-black font-semibold'>{slider.description}</h2>
                </div>
            ))}
        </div>
    );
};

export default Slide8;
