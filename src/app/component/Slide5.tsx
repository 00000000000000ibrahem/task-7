
import { useState } from "react";

const Slide5 = () => {
    const [people, setPeople] = useState("");

    return (
        <div className='bg-white w-full py-16 flex justify-center  relative'>
            <div className='bg-orange-200 w-full  flex flex-col lg:flex-row items-center justify-center p-6 lg:p-0 relative gap-6 lg:gap-10 h-auto lg:h-[600px]'>
                <div className='bg-white/30 w-full lg:w-[734px] rounded-2xl p-6 lg:p-8 flex justify-center items-center relative'>
                    <form className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Name and Surname</label>
                            <input type='text' placeholder='Enter your name and surname' className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'/>
                        </div>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Email Address</label>
                            <input type='email' placeholder='Enter your email address' className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'/>
                        </div>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Telephone Number</label>
                            <input type='tel' placeholder='Enter your telephone number' className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'/>
                        </div>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Service Type</label>
                            <select value={people} onChange={(e) => setPeople(e.target.value)}
                                className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'>
                                <option value="">Select Service</option>
                                <option value="1">Service 1</option>
                                <option value="2">Service 2</option>
                                <option value="3">Service 3</option>
                                <option value="4">Service 4</option>
                            </select>
                        </div>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Date</label>
                            <input type='date' className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'/>
                        </div>
                        <div>
                            <label className='text-neutral-900 block font-semibold text-lg mb-1'>Time</label>
                            <input type='time' className='w-full h-12 rounded-lg border border-zinc-400 text-zinc-700 bg-white px-3'/>
                        </div>
                        <div className='col-span-1 sm:col-span-2 flex justify-center mt-4'>
                            <button type='submit' className='px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-500 transition'>
                                Book Now
                            </button>
                        </div>
                    </form>
                </div>
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0'>
                    <img src="/pic/bike.png" alt="bike" className='w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain'/>
                </div>
            </div>
        </div>
    );
}

export default Slide5;
