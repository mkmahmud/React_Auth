import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';
import SingelCourse from './SingelCourses/SingelCourse';
import './Courses.css'

const Courses = () => {
    const APIcategory = useLoaderData();
    const [courses, setCourses] = useState([]);
    // Stored courses
    const [maincourses, setMaincourses] = useState([]) 

    // Load All Data
    useEffect(() => {
        fetch('https://dragon-news-server-module-62-mkmahmud.vercel.app/courses')
            .then(res => res.json())
            .then(data => {
                setMaincourses(data);
                setCourses(data);
            })
    }, [])


    // After Selecting category 
    const handelcategory = (id) => { 
            const selectedCategoryData = maincourses.filter(course => course.categoryId === id)
            if(selectedCategoryData){
                setCourses(selectedCategoryData)
                console.log(selectedCategoryData)
            }
       
    }


    return (
        <div className='w-full flex'>
            <div className="sidebar w-1/4 bg-[#3F0071] text-white">
                <h2 className='text-2xl p-4'>Categories</h2>
                {
                    APIcategory.map(category => <li onClick={() => { handelcategory(category.id) }} className='category-list list-none p-2 w-full bg-[#FB2576] mx-0 my-5'>{category.category}</li>)
                }
            </div>
            <div className="mainsection w-3/4 bg-[#FB2576] p-4 grid grid-cols-3 gap-4 ">
                {
                    courses.map(course => <SingelCourse key={course.id} data={course}></SingelCourse>)
                    // <SingelCourse></SingelCourse>
                }
            </div>
        </div>
    );
};

export default Courses;