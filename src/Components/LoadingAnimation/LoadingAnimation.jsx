import React from 'react';
import { ScaleLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='h-[600px] flex justify-center items-center'>
            <ScaleLoader color="#353535" />

        </div>
    );
};

export default LoadingAnimation;