import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'
import { AuthUserContext } from '../UserContext/AuthContext';
import './Navbar.css'

const Navbar = () => {

    const [theme, setTheme] = useState(true);
    const [user, setUser] = useState(true);
    const {UserAuth} = useContext(AuthUserContext);

    
    // Set dark light Theme
    const handeltheme = () => {
        setTheme(!theme)
    }

    // Log Out 
    const HandellogOut = () => {
        UserAuth.logOut()
        .then(() => {
            console.log('Log Out')
            setUser(false)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
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
                    <li><Link to='/'>Home</Link></li>
                    <li><a>Courses</a></li>
                    <li><a>FAQ</a></li>
                    <li><a>Blog</a></li>
                    <li onClick={handeltheme}><a > {theme ? 'Dark' : 'Light'}</a></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    !UserAuth.loggedUser.uid ?
                        <ul className="menu menu-horizontal p-0">
                            <li><Link to='/login'><button className="btn btn-success">Log In</button></Link></li>
                            <li><Link to='/signUp'><button className="btn btn-warning">Sign Up</button></Link></li>
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
                                        {
                                            UserAuth.loggedUser.uid? UserAuth.loggedUser.email : 'No Email'
                                        }
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={HandellogOut}><a>Logout</a></li>
                            </ul>
                        </div>

                }

            </div>
        </div>
    );
};

export default Navbar;