import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='px-4 md:px-20  text-slate-800 font-semibold'>
            <h1 className='font-bold text-xl my-8'>Rent VRoom</h1>
            <p className='my-4'>
                RentVroom Pvt. Ltd.
            </p>
            <p className='font-sans text-black/80'>
                No: 296, 3rd Cross Rd, Jakkasandra, 1st Block, Koramangla
                <br />
                Bengaluru, Karnataka 560034
            </p>
            <div className='flex items-center gap-10 my-8 text-xl' >
                <BsTwitter />
                <FaInstagram />
                <AiFillLinkedin />
            </div>
            <div className='flex md:flex-row flex-col pt-8 my-4 text-slate-500 items-center justify-between '>
                <div>
                    <Link to='/' className='mr-4'>
                        Home
                    </Link>
                    <Link className='mr-4'>
                        Contact
                    </Link>
                    <Link className='mr-4'>
                        About
                    </Link>

                </div>
                <div className='flex item-center text-sm gap-x-6'>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;