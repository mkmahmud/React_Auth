import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-[#FB2676] text-5xl text-black font-bold' style={{height:'100vh'}}>
            Not Found!!!!!!!!!!
            <br />
            Please Try With Right Route
            <br />
            <Link to='/' className='text-white'>Go Home</Link>
        </div>
    );
};

export default NotFound;