import { castDraft } from 'immer';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarCard from '../../Components/Carcard/CarCard';
import LoadingAnimation from '../../Components/LoadingAnimation/LoadingAnimation';
import { useGetCarsQuery } from '../../Feature/apiSlice';

const Dashboard = () => {
    const {
        data: cars,
        isLoading
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
                <p className='font-semibold absolute md:block hidden left-[350px]'>
                    Car Detail
                </p>
                <p className='font-semibold md:block hidden absolute left-[650px]'>
                    Rent Per Day
                </p>
                <div className='py-5'>
                    {

                        cars.map(car => <CarCard
                            key={car._id}
                            car={car}
                        ></CarCard>)


                    }
                </div>
            </div>

        </section>
    );
};

export default Dashboard;