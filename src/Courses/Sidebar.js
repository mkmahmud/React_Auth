import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({APIcategory}) => {
    return (
        <div>
            <h2 className='text-2xl p-4'>Categories</h2>
                {
                    APIcategory.map(category => <li className='list-none p-2 w-full bg-[#FB2576] mx-0 my-5'><Link to={`/courses/${category.id}`}>{category.category}</Link></li>)
                }
        </div>
    );
};

export default Sidebar;