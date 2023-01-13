import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const data = useLoaderData()

    return (
        <section className='p-20'>
            <div className='grid  place-items-center grid-cols-5'>
                <div className='grid col-span-3'>
                    <img className='w-full' src={data.img} alt="" />
                </div>
                <div className='font-semibold col-span-2'>
                    <h1 className='text-3xl font-semibold'>
                        {data.title}

                    </h1>
                    <div className='flex my-4  gap-x-2 text-slate-500 font-semibold items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
                        </svg>
                        <p>
                            {
                                data.color
                            }
                        </p>
                        <span className='px-3'>Seater {data.seater}</span>

                    </div>
                    <p className='text-xl flex items-center gap-4'>Rent Per Day:
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className='text-2xl'> {data.rent_price}</span></p>
                    <button className='px-4 py-2 bg-slate-500 text-white my-4'>
                        <Link to={`/bookcar/${data._id}`}> 
                        Book Now
                        </Link>
                        
                    </button>
                </div>
            </div>
            <div className='py-10 font-semibold'>
                <h1 className='text-2xl my-2 divide-y font-semibold text-slate-600'>
                    Car Details
                </h1>
                <hr />
                <button className='bg-slate-400 font-semibold my-4 text-white px-4 py-2'>Not Available </button>
                <p>Vechile Number: {data.vechile_number}</p>
                <p>
                    {data.details}
                </p>
                <h1 className='text-2xl mt-4 my-2 divide-y font-semibold text-slate-600'>
                  Current Booking
                </h1>
                <hr />
                <div className='flex justify-between items-center my-4 text-slate-500'>
                    <p>
                        Name
                    </p>
                    <p>
                        Phone Number
                    </p>
                    <p>Issue Date</p>
                    <p>
                        Retun Date
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CarDetails;