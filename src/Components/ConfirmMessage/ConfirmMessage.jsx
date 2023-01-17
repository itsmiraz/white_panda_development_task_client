import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmMessage = ({ bookedCar, openConfirmModal }) => {
    return (
        <div className='absolute w-full md:w-[550px] top-1/3  left-0 md:left-1/3 z-50'>
            <div className='flex relative rounded-md bg-white gap-x-4 shadow-2xl  items-center font-semibold'>
                <div className='overflow-hidden h-60 rounded-md'>
                    <img className='h-full' src="https://i.ibb.co/C6w9QR7/confirm-image.jpg" alt="" />
                </div>
                <div className='pb-14 pt-5 space-y-2 px-4'>
                    <h1 className='text-2xl w-full'>Booking Confirmed!</h1>
                    <p className='text-sm text-gray-700'>You Have Booked: {bookedCar.title}</p>
                    <p className='text-sm text-gray-700'>for the Duration: {openConfirmModal.issueDateFormat} - {openConfirmModal.ReturnDateFormat}</p>
                </div>
                <button className='absolute bottom-2   text-gray-700 px-4 py-2 right-6 my-2'>

                    <Link to='/'>
                        Continue
                    </Link>
                </button>
            </div>

        </div>
    );
};

export default ConfirmMessage;