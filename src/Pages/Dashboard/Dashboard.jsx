import { castDraft } from 'immer';
import React from 'react';
import { ScrollRestoration, useLoaderData } from 'react-router-dom';
import CarCard from '../../Components/Carcard/CarCard';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import { useGetCarsQuery } from '../../Feature/apiSlice';

const Dashboard = () => {
    const {
        data: cars,
        isLoading,
        isError,error
    } = useGetCarsQuery()

    if (isLoading) {
        return <LoadingAnimation></LoadingAnimation>
    }
  


    return (
        <section className='px-4 md:px-20 py-10'>
            <h1 className='font-semibold text-xl'>
                Cars For Rent
            </h1>

            <div className='relative'>
               
                <p className='font-semibold  text-slate-500 absolute md:block hidden left-[320px] '>
                    Car Detail
                </p>
                <p className='font-semibold text-slate-500 md:block hidden  absolute left-[720px]'>
                    RENT PER DAY
                </p>

                <div className='py-5 mt-10 px-2 md:px-20 '>
                    {

                        cars.map(car => <CarCard
                            key={car._id}
                            car={car}
                        ></CarCard>)


                    }
                </div>
            </div>
                    <ScrollRestoration/>
        </section>
    );
};

export default Dashboard;