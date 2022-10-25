import React from 'react';

const SingelCourse = ({ data }) => {
    
    return (
    
        <div className="card card-compact w-full text-white bg-[#000000] shadow-xl ">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge badge-secondary">duration: {data.duration}</div>
                <h2 className="card-title text-xl">{data.course_Title}</h2>
                <h2 className='text-left text-lg'>Author: {data.name}</h2>
                <div className="card-actions justify-between items-center">
                    <h2 className='text-3xl text-wehite font-bold'>$ {data.price}</h2>
                    <button className="btn bg-[#FB2576] text-white">More...</button>
                </div>
            </div>
        </div>
    );
};

export default SingelCourse;