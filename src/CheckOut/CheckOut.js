import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const data = useLoaderData();

    const { course_Title, description, name , price} = data;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{course_Title} ({name}) ($ {price})</h1>
                    <p className="py-6">{description}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body text-left text-white">
                        <h2 className='py-3 flex justify-between text-xl'><span>Product Cost</span> <span>$ {price}</span></h2>
                        <hr />
                        <h2 className='py-3 flex justify-between text-xl'><span>Product Cost + vat</span> <span>$ {price + 10}</span></h2>
                        <div className="form-control mt-6">
                            <button className="btn btn-success">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;