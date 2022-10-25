import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';

const Courses = () => {
    const APIcategory = useLoaderData();
    const [category, setCategory] = useState([])

    return (
        <div className='w-full flex'>
            <div className="sidebar w-1/4 bg-[#3F0071] text-white">
            <h2 className='text-2xl p-4'>Categories</h2>
                {
                    APIcategory.map(category => <li className='list-none p-2 w-full bg-[#FB2576] mx-0 my-5'><Link to={`/courses/${category.id}`}>{category.category}</Link></li>)
                }
            </div>
            <div className="mainsection w-3/4 bg-indigo-400">
               Main 
            </div>
        </div>
    );
};

export default Courses;