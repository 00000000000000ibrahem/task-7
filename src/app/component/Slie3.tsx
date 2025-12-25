
import React from 'react';

const Slie3 = () => {
    return (
        <div className='bg-white w-full flex justify-center items-center py-10 lg:h-[900px] px-4 sm:px-6 md:px-8 relative'>            
            <div className='bg-orange-200 w-full  flex flex-col lg:flex-row items-center justify-center h-auto lg:h-[600px] relative gap-6 lg:gap-0'>
                <div className='bg-orange-100 w-full lg:w-1/3 flex flex-col justify-center items-center rounded-2xl p-6 lg:p-0'>
                    <h1 className='text-black font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mb-4'>
                        Get Special Offers for Organizations
                    </h1>
                    <p className='text-black text-sm sm:text-base lg:text-lg text-center mb-6'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                    </p>
                    <div className='bg-orange-400 w-40 h-14 flex items-center justify-center rounded-full cursor-pointer'>
                        <span className='font-semibold text-white'>Contact Us</span>
                    </div>
                </div>
                <div className='w-full lg:w-2/3 flex justify-center lg:justify-end relative lg:mb-28 lg:mt-0'>
                    <img 
                        src="/pic/stock.png" 
                        alt="stock" 
                        className='w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain'
                    />
                </div>
            </div>
        </div>
    );
}

export default Slie3;
