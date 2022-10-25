import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';
import SingelCourse from './SingelCourses/SingelCourse';


const Courses = () => {
    const APIcategory = useLoaderData();
    const [courses, setCourses] = useState([])

    useEffect( ( ) => {
        fetch('http://localhost:5000/courses')
         .then(res => res.json())
         .then(data => setCourses(data))
    },[])

    console.log(courses)

    return (
        <div className='w-full flex'>
            <div className="sidebar w-1/4 bg-[#3F0071] text-white">
            <h2 className='text-2xl p-4'>Categories</h2>
                {
                    APIcategory.map(category => <li className='list-none p-2 w-full bg-[#FB2576] mx-0 my-5'><Link to={`/courses/${category.id}`}>{category.category}</Link></li>)
                }
            </div>
            <div className="mainsection w-3/4 bg-indigo-400 p-4 grid grid-cols-3 gap-4 ">
               {
                courses.map(course => <SingelCourse key={course.id} data={course}></SingelCourse>)
                // <SingelCourse></SingelCourse>
               }
            </div>
        </div>
    );
};

export default Courses;