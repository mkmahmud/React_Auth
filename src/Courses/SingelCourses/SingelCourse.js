import React from 'react';

const SingelCourse = ({ data }) => {
    console.log(data)
    return (
    
        <div className="card card-compact w-full bg-base-100 shadow-xl ">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge badge-primary">duration: {data.duration}</div>
                <h2 className="card-title">{data.course_Title}</h2>
                <div className="card-actions justify-between items-center">
                    <h2 className='text-3xl text-yellow-400'>$ {data.price}</h2>
                    <button className="btn btn-primary">More...</button>
                </div>
            </div>
        </div>
    );
};

export default SingelCourse;