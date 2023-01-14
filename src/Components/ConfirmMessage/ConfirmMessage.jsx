import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmMessage = ({ bookedCar, openConfirmModal }) => {
    return (
        <div className='absolute w-full md:w-[500px] top-1/3  z-50'>
            <div className='flex relative p-5 rounded-md bg-white gap-x-4 shadow-2xl  items-center font-semibold'>
                <img className='w-24' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXlwndYQDmWUL-65h2Rblh2HAy6nBweQksFw&usqp=CAU" alt="" />
                <div className='pb-14 pt-5 space-y-2 px-4'>
                    <h1 className='text-2xl w-full'>Booking Confirmed!</h1>
                    <p>You Have Booked: {bookedCar.title}</p>
                    <p>for the Duration: {openConfirmModal.issueDateFormat}-{openConfirmModal.ReturnDateFormat}</p>
                </div>
                <button className='absolute bottom-2 bg-gray-500  text-white px-4 py-2 right-6 my-2'>

                    <Link to='/'>
                    Continue
                    </Link>
                </button>
            </div>
           
        </div>
    );
};

export default ConfirmMessage;