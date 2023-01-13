import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='h-[700px] flex justify-center items-center'>
            <ScaleLoader color="#0044f3" />

        </div>
    );
};

export default LoadingAnimation;