import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Courses/Sidebar';

const CoursesList = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesList;