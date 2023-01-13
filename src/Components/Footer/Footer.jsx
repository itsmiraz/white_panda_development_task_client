import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='px-20  text-slate-800 font-semibold'>
            <h1 className='font-bold text-xl'>Rent V Room</h1>
            <p>
                RentVrooom Private ltd.
            </p>
            <p>
                No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla
                <br />
                Bengaluru, Karnataka 560034
            </p>

            <div className='flex my-4 text-slate-500 items-center justify-between '>
                <div>
                    <Link className='mr-4'>
                        Home
                    </Link>
                    <Link className='mr-4'>
                        Contact
                    </Link>
                    <Link className='mr-4'>
                        About
                    </Link>

                </div>
                <div className='flex item-center gap-x-6'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;