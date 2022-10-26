import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingelCourse = ({ data }) => {

    const navigate = useNavigate()
    const handelDetail = () => {
        
        navigate(`/courses/${data._id}`)
    }
    
    return (
    
        <div className="card card-compact w-full text-white bg-[#000000] shadow-xl ">
            <figure><img style={{height:'200px'}} src={data.picture} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="badge badge-secondary">duration: {data.duration}</div>
                <h2 className="card-title text-xl">{data.course_Title}</h2>
                <h2 className='text-left text-lg'>Author: {data.name}</h2>
                <div className="card-actions justify-between items-center">
                    <h2 className='text-3xl text-wehite font-bold'>$ {data.price}</h2>
                    <button className="btn bg-[#FB2576] text-white" onClick={handelDetail}>More...</button>
                </div>
            </div>
        </div>
    );
};

export default SingelCourse;