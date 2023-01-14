import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Link, useLoaderData } from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import { da } from 'date-fns/locale';
import { useAddBookMutation, useGetCarsQuery } from '../../Feature/apiSlice';
import ConfirmMessage from '../../Components/ConfirmMessage/ConfirmMessage';
import { toast } from 'react-hot-toast';

const BookACar = () => {
    const data = useLoaderData()
    const [issueDate, setissueDate] = useState(null)
    const [ReturnDate, setReturnDate] = useState(null)
    const [openConfirmModal, setOpenConfirmModal] = useState('')
    const [addBook] = useAddBookMutation()
    const getCars = useGetCarsQuery()
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const contact = form.contact.value
        // const expr = /^(0|91)?[6-9][0-9]{9}$/;
        const expr = /^[6-9]\d{9}$/;
        if (!expr.test(contact)) {
            toast.error('Please Add A Valid Number')
            return
        }
        else {
            const issueDateTime = issueDate.getTime()
            const ReturnDateTime = ReturnDate.getTime()
            const issueDateFormat = format(issueDate, 'PP')
            const ReturnDateFormat = format(ReturnDate, 'PP')
            if (issueDateTime >= ReturnDateTime) {
                return toast.error('Please Add A validable return date')
            }
            else {
                const bookingDetails = {
                    carId: data._id,
                    name: form.name.value,
                    phone: form.contact.value,
                    issueDateFormat,
                    ReturnDateFormat
                }
        
                addBook(bookingDetails)
                getCars.refetch()
                setOpenConfirmModal(bookingDetails)
            }
        }
    }

    return (
        <section className='px-4 md:px-20 gap-5 py-10 md:py-24  grid grid-col-1 md:grid-cols-2 justify-items-center place-items-center'>
            <div>
                <img className='w-full p-4' src={data.img} alt="" />
            </div>
            <div>
                <h1 className='font-semibold text-xl'>Booking Details</h1>
                <form action="" className='w-full md:w-[600px]' onSubmit={handleSubmit}>
                    <div className='grid gap-10 font-semibold grid-cols-2 justify-between items-center w-full md:w-[600px] my-5'>
                        <div>
                            <p className='font-semibold text-xl'>Name</p>
                            <input required name='name' type="text" placeholder='Your Name' className='p-2 w-full border-b-2' />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Contact Number</p>
                            <input name='contact' required type="text" placeholder='+91' className='p-2 w-full border-b-2' />
                        </div>
                        <div>
                            <p className='font-semibold text-xl'>Issue Date</p>
                            <ReactDatePicker
                                selected={issueDate}
                                onChange={date => setissueDate(date)}
                                className='rounded p-2 w-full border-b-2 '
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
                                className='rounded p-2 w-full border-b-2 '
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                                required
                                placeholderText='DD/MM/YYY'
                            ></ReactDatePicker>
                        </div>
                    </div>
                    <div className='flex pr-4 md:pr-10 justify-between'>
                        <Link to={`/`} className='px-4 py-2 border border-gray-500 '>Back</Link>
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