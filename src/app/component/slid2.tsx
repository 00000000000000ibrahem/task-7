
export interface propss {
    img: string,
}

const Slid2 = ({ img }: propss) => {
    return (
        <div className='w-full flex justify-center mt-10 px-4 sm:px-6 md:px-8'>
            <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8'>
                <div className='w-full lg:w-1/3 flex justify-center'>
                    <img src={img} alt='none' className='w-full h-auto object-cover rounded-lg'/>
                </div>
                <div className='w-full lg:w-2/3 flex flex-col gap-4'>
                    <p className='text-sm sm:text-base text-zinc-400 font-semibold'>WELCOME TO OUR SITE!</p>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black'>
                        We are the best company for your visit
                    </h1>
                    <p className='text-sm sm:text-base text-zinc-400'>
                        After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. 
                        In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! 
                        We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!
                    </p>
                    <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4'>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>20+</h1>
                            <p className='text-sm sm:text-base text-zinc-400'>Years Experience</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>100+</h1>
                            <p className='text-sm sm:text-base text-zinc-400'>Happy Customer</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>15+</h1>
                            <p className='text-sm sm:text-base text-zinc-400'>Choice of Services</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h1 className='text-2xl sm:text-3xl font-bold text-orange-400'>10+</h1>
                            <p className='text-sm sm:text-base text-zinc-400'>Professional Guides</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slid2;
