import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { IoEyedropOutline } from "react-icons/io5";
import { BiRupee } from "react-icons/bi";
import {   ImEyedropper } from "react-icons/im";
const CarCard = ({ car }) => {

    const { img, title, rent_price, color, seater, _id, available } = car
  
    return (
        <div className='mb-8 flex border border-gray-200 bg-gray-100 rounded mt-4  justify-between  md:flex-row flex-col  items-center'>


            <div className='flex items-center md:flex-row flex-col  gap-x-8'>
                <div className=' h-26  overflow-hidden'>
                    <img src={img} alt="" className='w-52 h-full' />

                </div>
                <div>
                    <h1 className='font-semibold text-gray-800 text-xl'>{title}</h1>

                    <div className='flex my-2 justify-between gap-x-8 text-slate-500 font-semibold items-center'>
                        <div className='flex items-center'>
                        <ImEyedropper/>
                            <p className='px-2'>
                                {
                                    color
                                }
                            </p>
                        </div>
                        <div className='flex items-center gap-0'>
                            <MdAirlineSeatReclineNormal />
                            <p className=''>{seater} Seater </p>
                        </div>

                    </div>

                </div>
            </div>

            <div className='gap-x-4 md:gap-x-20  flex items-center'>
                <p className='flex  text-gray-800 font-semibold items-center'>
                    <BiRupee />
                    {rent_price}
                </p>

                <div className='flex items-center'>
                {
                    available ?

                        <>
                            <Link to={`/bookcar/${_id}`}>
                                <button className='bg-gray-500 rounded text-white px-4 py-2 font-semibold'>
                                    Book Now
                                </button>
                            </Link>
                        </>
                        :
                        <div className='flex flex-col'>
                            <button className='bg-gray-300 mb-1 rounded text-white px-4 py-2 font-semibold'>
                                Book Now
                            </button>
                            <label className='text-red-500  text-xs'>Currently Unavailable</label>
                        </div>
                }
                <Link to={`/carDetail/${title}`}>
                    <button className='text-gray-500 mr-8  ml-3 px-4 py-2 font-semibold'>

                        Details
                    </button>
                </Link>
              </div>
            </div>
        </div>
    );
};

export default CarCard;