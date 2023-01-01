import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, Navigate  } from 'react-router-dom';
import { AuthUserContext } from '../../UserContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import './Login.css'

const Login = () => {

    const { UserAuth } = useContext(AuthUserContext)
    const navigate = useNavigate();
    const [currentLoggedUser, setcurrentLoggedUser] = useState(false)

   
    
    // Wrong User message
    const wrongUser = () => toast.error('Your Email or Password Incorrect');

    // Get private route user path
    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/';

    // if(currentLoggedUser){
    //     navigate('/')
    // }else{
    //     console.log('Not Logged in')

    // }
  
    console.log(from)

    const loggedUser = UserAuth.loggedUser; 
    
    // Email Password Log In 
    const handelEmailPassLogin = (e) => {
        e.preventDefault();
        const userForm = e.target;
        const userEmail = e.target.email.value;
        const userPass = e.target.password.value;

        UserAuth.loginWithEmail(userEmail, userPass)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log('looged in before navigate')
                loggedUser(user)
                setcurrentLoggedUser(true)
                console.log('looged in after navigate')

            })
            .catch((err) => {
                console.log(err)
                wrongUser()
            })


    }


    // Google Log In 
    const handelGoogleLogIn = () => {
        UserAuth.googleLogIn()
            .then((result) => {
                const user = result.user;
                // navigate('/')
                console.log(user)
            }).catch((error) => {
                console.log(error)
            });
    }

    // Github Log In 
    const handelGithubLogIn = () => {
        UserAuth.githubLogIn()
            .then((result) => {
                const user = result.user;
                // navigate('/')
                console.log(user)
            }).catch((error) => {
                console.log(error.message)
            });
    }


    useEffect(()=>{
        if(loggedUser){
            navigate(from, {replace:true})
        }
    },[loggedUser, navigate, from])

   

    return (
        <div className="artboard phone-2 mx-auto my-5 bg-[#150050] rounded text-white p-5">
            <h1 className='text-4xl p-4'>Log In</h1>
            <form onSubmit={handelEmailPassLogin}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" name='email' required placeholder="info@site.com" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" name='password' required placeholder="90MKide3#@)" className="input input-bordered w-full" />
                    </label>
                </div>
                <button type='submit' className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-5" >Log In</button>

            </form>

            <Toaster />
            <h2 className='p-2 text-xl'>OR</h2>
            <hr className='w-52 m-auto' />

            <div className="popupLogin p-5">

                <button onClick={handelGoogleLogIn} className="btn btn-warning btn-square m-2">
                    <i class="fa fa-google" aria-hidden="true"></i>
                </button>
                <button onClick={handelGithubLogIn} className="btn btn-square m-2">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </button>
                <button className="btn btn-primary btn-square m-2">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </button>
                <button className="btn btn-success btn-square m-2">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </button>
            </div>
            <p>Didn't have account <Link className='font-bold' to='/signUp'>Sign Up</Link></p>

        </div>
    );
};

export default Login;