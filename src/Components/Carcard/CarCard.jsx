import React from 'react';
import { Link } from 'react-router-dom';
const CarCard = ({ car }) => {

    const { img, title, rent_price, color, seater ,_id} = car


    return (
        <div className='my-8 flex  justify-between px-20 items-center'>


            <div className='flex items-center gap-x-8'>
                <img src={img} alt="" className='w-60' />
                <div>
                    <h1 className='font-semibold text-xl'>{title}</h1>

                    <div className='flex my-2 gap-x-2 text-gray-500 font-semibold items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                        <p>
                            {
                                color
                            }
                        </p>
                        <span className='px-3'>Seater {seater}</span>

                    </div>

                </div>
            </div>

            <div className=' gap-x-20  flex items-center'>
                <p className='flex  text-black font-semibold items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {rent_price}
                </p>
                <button className='bg-gray-500  text-white px-4 py-2 font-semibold'>
                   
                    <Link to={`/bookcar/${_id}`}>
                    Book Now
                    
                    </Link>
                </button>
                <button className='text-gray-500   border border-gray-500 px-4 py-2 font-semibold'>
                    <Link to={`/cardetail/${_id}`}>
                    Details
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CarCard;