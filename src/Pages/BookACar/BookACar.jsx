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
        <section className='pr-4 md:pr-20   grid grid-col-1 md:grid-cols-3'>
            <div className='col-span-1'>
                <img className='w-[440px] ml-0 md:block hidden h-screen' src='https://i.ibb.co/r3CcRy0/415822003.png' alt="" />
            </div>
            <div className='col-span-2 py-28'>
                <div className='flex justify-between items-center my-12'> 
                    <h1 className='font-semibold text-xl'>Booking Details</h1>
                    <img src="https://i.ibb.co/txvtYsJ/rent-Vroom-Logo.jpg" alt="" />
              </div>
                <form action="" className='w-full md:w-[600px]' onSubmit={handleSubmit}>
                    <div className='grid gap-x-32 text-xl justify-items-stretch font-[500] gap-y-20 text-gray-700 grid-cols-2 justify-between items-center w-full md:w-[600px] my-5'>
                        <div>
                            <p>Name</p>
                            <input required name='name' type="text" placeholder='Your Name' className='px-2 py-2 text-sm border-gray-300  w-full border-b-2' />
                        </div>
                        <div>
                            <p>Contact Number</p>
                            <input name='contact' required type="text" placeholder='+91' className='px-2 py-2 text-sm w-full border-gray-300  border-b-2' />
                        </div>
                        <div>
                            <p>Issue Date</p>
                            <ReactDatePicker
                                selected={issueDate}
                                onChange={date => setissueDate(date)}
                                className='rounded px-2 py-2 w-full text-sm border-gray-300 border-b-2 '
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                                required
                                placeholderText='DD/MM/YYY'
                            ></ReactDatePicker>
                        </div>
                        <div>
                            <p>Return Date</p>
                            <ReactDatePicker
                                selected={ReturnDate}
                                onChange={date => setReturnDate(date)}
                                className='rounded px-2 py-2 w-full border-gray-300  text-sm border-b-2 '
                                dateFormat='dd/MM/yyy'
                                minDate={new Date()}
                                required
                                placeholderText='DD/MM/YYY'
                            ></ReactDatePicker>
                        </div>
                    </div>
                    <div className='flex my-10 justify-between'>
                        <Link to={`/`} className='px-4 py-2 font-semibold '>Back</Link>
                        <button type='submit' className='px-4 py-2 rounded font-semibold text-white bg-gray-500'>Book Car</button>
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
                    <div className='w-full h-screen bg-black/30 z-10 absolute top-0'>

                    </div>
                </>
            }
        </section>
    );
};

export default BookACar;