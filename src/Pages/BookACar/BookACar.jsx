import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Link, useLoaderData } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { da } from 'date-fns/locale';
import { useAddBookMutation } from '../../Feature/apiSlice';
import ConfirmMessage from '../../Components/ConfirmMessage/ConfirmMessage';

const BookACar = () => {
    const data = useLoaderData()
    const [issueDate, setissueDate] = useState(null)
    const [ReturnDate, setReturnDate] = useState(null)
    const [openConfirmModal, setOpenConfirmModal] = useState('')
    const [addBook] = useAddBookMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        const issueDateFormat = format(issueDate, 'PP')
        const ReturnDateFormat = format(ReturnDate, 'PP')
        if (issueDateFormat >= ReturnDateFormat) {
            alert('Please Add A validable retun date')
        }
        else {
            const form = e.target;
            const bookingDetails = {
                carId: data._id,
                name: form.name.value,
                phone: form.contact.value,
                issueDateFormat,
                ReturnDateFormat
            }
            console.log(bookingDetails)
            // addBook(bookingDetails)
            setOpenConfirmModal(bookingDetails)
        }



    }

    return (
        <section className='p-20 grid grid-cols-2 justify-items-center place-items-center'>
            <div>
                <img src={ data.img} alt="" />
            </div>
            <div>
                <h1 className='font-semibold text-xl'>Booking Details</h1>
                <form action="" className=' w-[600px]' onSubmit={handleSubmit}>

                    <div className='grid gap-10 font-semibold  grid-cols-2 justify-between items-center w-[600px] my-5'>
                        <div>
                            <p className='font-semibold text-xl'>Name</p>
                            <input required name='name' type="text" placeholder='Your Name' className='p-2 border-b-2' />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Contact Number</p>
                            <input name='contact' required type="text" placeholder='+91' className='p-2 border-b-2' />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Issue Date</p>
                            <ReactDatePicker
                                selected={issueDate}
                                onChange={date => setissueDate(date)}
                                className='rounded p-2 border-b-2 '
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                                required
                                placeholderText='DD/MM/YYY'
                            ></ReactDatePicker>
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Return Date</p>
                            <ReactDatePicker
                                selected={ReturnDate}
                                onChange={date => setReturnDate(date)}
                                className='rounded p-2 border-b-2 '
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                                required
                                placeholderText='DD/MM/YYY'
                            ></ReactDatePicker>
                        </div>
                    </div>
                    <div className='flex pr-10 justify-between'>
                        <Link to={`/cardetail/${data._id}`} className='px-4 py-2 border border-gray-500 '>Back</Link>
                        <button type='submit' className='px-4 py-2 font-semibold text-white bg-gray-500'>Submit</button>
                    </div>
                </form>
            </div>
            {
                openConfirmModal &&
                <>
                    <ConfirmMessage
                        bookedCar={data}
                        openConfirmModal={openConfirmModal}
                    ></ConfirmMessage>
                    <div className='w-full h-screen bg-black/50 z-10 absolute top-0'>

                    </div>
                </>
            }
        </section>
    );
};

export default BookACar;