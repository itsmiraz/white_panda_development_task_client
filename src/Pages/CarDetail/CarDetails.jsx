import React, { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { Link, ScrollRestoration, useLoaderData, useNavigate } from 'react-router-dom';
import { ImCross, ImEyedropper } from "react-icons/im";
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { useDeleteBookMutation, useGetCarsQuery, useUpdateBookingDetailsMutation } from '../../Feature/apiSlice';
import { toast } from 'react-hot-toast';
import ReactDatePicker from 'react-datepicker';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
const CarDetails = () => {
    const data = useLoaderData()
    const [edit, setEdit] = useState(true)

    const [deleteBook] = useDeleteBookMutation()
    const getCars = useGetCarsQuery()
    const navigate = useNavigate()
    const [issueDate, setissueDate] = useState(null)
    const [ReturnDate, setReturnDate] = useState(null)
    const [updateBookingDetails]= useUpdateBookingDetailsMutation()
    const handleDeleteBooking = (id) => {

        deleteBook({ id })
        getCars.refetch()
        navigate('/')
        toast.success('Deleted')
    }

    const handleUpdate = e => {
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
                const updatedDetails = {
                    carId: data._id,
                    name: form.name.value,
                    phone: form.contact.value,
                    issueDateFormat,
                    ReturnDateFormat
                }
                setEdit(!edit)
                toast.success('Updated')
                updateBookingDetails(updatedDetails)
                getCars.refetch()
                navigate('/')
                // setOpenConfirmModal(bookingDetails)
            }
        }
    }



    return (
        <section className='px-4 md:px-20 pt-10'>
            <div className='grid place-items-start border bg-gray-100 rounded grid-cols-5'>
                <div className='grid h-80  rounded-l overflow-hidden md:col-span-3 col-span-5'>
                    <img className='h-full' src={data.img} alt="" />
                </div>
                <div className='font-semibold py-10 pl-10 md:my-0 my-4 md:col-span-2 col-span-5'>
                    <h1 className='text-3xl font-semibold'>
                        {data.title}

                    </h1>
                    <div className='flex my-4  gap-x-2 text-slate-500 font-semibold items-center'>
                        <div className='flex items-center'>
                            <ImEyedropper />
                            <p className='px-2'>
                                {
                                    data.color
                                }
                            </p>
                        </div>
                        <div className='flex items-center gap-0'>
                            <MdAirlineSeatReclineNormal />
                            <p className=''>{data.seater} Seater </p>
                        </div>

                    </div>
                    <p className='text-xl flex my-8 text-gray-800 items-center '>Rent Per Day:
                        <BiRupee />
                        <span className='text-xl'> {data.rent_price}</span></p>

                    <div className='my-4'>
                        {
                            data?.available ?

                                <>
                                    <Link to={`/bookcar/${data._id}`}>
                                        <button className='bg-gray-500  text-white px-4 py-2 font-semibold'>
                                            Book Now
                                        </button>
                                    </Link>
                                </>
                                :
                                <div className=''>
                                    <button className='bg-gray-300  text-white px-4 py-2 font-semibold'>
                                        Book Now
                                    </button>
                                    <label className='text-red-500 mx-4 text-xs'>Currently Unavailable</label>
                                </div>
                        }
                    </div>

                </div>
            </div>
            <div className='py-4 md:py-10 font-semibold'>
                <h1 className='text-2xl my-2 divide-y font-semibold text-slate-600'>
                    Car Details
                </h1>
                <hr />
                {
                    !data.available &&
                    <button className='bg-zinc-400 font-semibold my-4 flex  items-center gap-x-2 text-white px-4 py-2'>Not Available <ImCross /></button>

                }
                <p className='py-4'>Vechile Number: {data.vechile_number}</p>
                <p className='py-4'>Petrol Car</p>
                <p>
                    {data.details}

                </p>

                {
                    !data.available &&
                    <>
                        <h1 className='text-2xl mt-4 my-2 divide-y font-semibold text-slate-600'>
                            Current Booking
                        </h1>
                        <hr />

                        {
                            edit ?
                                <>

                                    <div className='grid grid-cols-2 gap-5 md:grid-cols-4 my-4 text-slate-500'>

                                        <p className='space-y-5'>
                                            Name
                                            <br />
                                            <span className=' text-gray-800'>{data.bookedUser.name}</span>

                                        </p>
                                        <p>
                                            Phone Number
                                            <br />
                                            <span className=' text-gray-800'>{data.bookedUser.phone}</span>

                                        </p>


                                        <p>
                                            Issue Date

                                            <br />
                                            <span className=' text-gray-800'>{data.bookedUser.issueDateFormat}</span>
                                        </p>
                                        <p>
                                            Retun Date
                                            <br />
                                            <span className=' text-gray-800'>{data.bookedUser.ReturnDateFormat}</span>

                                        </p>

                                    </div>

                                </>
                                :
                                <>
                                    <form action="" onSubmit={handleUpdate} >
                                        <div className='grid grid-cols-2 gap-5 md:grid-cols-4 my-4 text-slate-800'>
                                            <div>
                                                <span>Name</span>
                                                <input  required type="text" name='name' className='px-2 py-2 text-sm w-full border-gray-300  border-b-2' defaultValue={data.bookedUser.name} />
                                            </div>
                                            <div>
                                                <span> Phone Number</span>
                                            
                                                <input required type="text" name='contact' className='px-2 py-2 text-sm w-full border-gray-300  border-b-2' defaultValue={data.bookedUser.phone} />
                                            </div>
                                            <div>
                                                <span>   Issue Date</span>
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
                                                <span>  Retun Date</span>
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
                                        <span onClick={() => setEdit(!edit)} type='' className='px-4 mr-4 hover:cursor-pointer py-2 text-white bg-gray-500 font-semibold'>Cancel</span>
                                        <button type='submit' className='px-4 mr-4 py-2 text-white bg-gray-500 font-semibold'>Update</button>
                                    </form>
                                </>

                        }
                        {
                            edit &&
                            <>
                                <button onClick={() => setEdit(!edit)} className='px-4 mr-4 py-2 text-white bg-gray-500 font-semibold'>
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteBooking(data._id)} className='px-4 py-2 text-white bg-gray-500 font-semibold'>
                                    Delete
                                </button>
                            </>
                        }
                    </>
                }
            </div>

            <ScrollRestoration></ScrollRestoration>
        </section>
    );
};

export default CarDetails;