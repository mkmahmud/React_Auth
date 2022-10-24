import React, { useState } from 'react';
import logo from '../assets/img/logo.svg'
import './Navbar.css'

const Navbar = () => {

    const [theme, setTheme] = useState(true);
    const [loggeduser, setLoggedUser] = useState(false);

    const handeltheme = () => {
        setTheme(!theme)
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Courses</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Blog</a></li>
                        <li onClick={handeltheme}><a > {theme ? 'Dark' : 'Light'}</a></li>
                    </ul>
                </div>
                <img className='logo' src={logo} alt="" />
                {/* <a className="btn btn-ghost normal-case text-xl"> <img src={logo} alt="" /></a> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Courses</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                    <li onClick={handeltheme}><a > {theme ? 'Dark' : 'Light'}</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    loggeduser ?
                        <ul className="menu menu-horizontal p-0">
                            <li><a to='/login'><button className="btn btn-success">Log In</button></a></li>
                            <li><a to='/signUp'><button className="btn btn-warning">Sign Up</button></a></li>
                        </ul>
                        :

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>

                }



            </div>
        </div>
    );
};

export default Navbar;