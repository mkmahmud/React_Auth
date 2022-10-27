import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../../UserContext/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import './SignUp.css'

const SignUp = () => {

    const {UserAuth} = useContext(AuthUserContext);
    const navigate = useNavigate();


    // Email Already exist message
    const emailAlredayExist = () => toast.error('Your Email Already Exist');

    // Createing New User
    const handelSignUp = (e) => {
        e.preventDefault();
        // Getting data from user
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const photo = e.target.photo.value;

        // Call Firebase function 
        UserAuth.createUserEmainPass(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // Update Profile
            UserAuth.updateUserProfile(name, photo)
            .then(() => {
                // Profile updated!
               console.log('Profile Updated')
              }).catch((error) => {
                // An error occurred
                console.log(error)
              });
            navigate('/')
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            emailAlredayExist()
          });
    }

    return (
        <div className="artboard  mx-auto bg-[#16003B] rounded text-white my-5 p-5" >
            <h1 className='text-4xl p-4'>Sign Up</h1>
            <form onSubmit={handelSignUp} >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <label className="input-group">
                        <span>Name</span>
                        <input type="text" placeholder="Mahmudul Hasan " name='name' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Email</span>
                    </label>
                    <label className="input-group">
                        <span>Email</span>
                        <input type="text" placeholder="info@site.com" name='email' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Password</span>
                    </label>
                    <label className="input-group">
                        <span>Password</span>
                        <input type="password" placeholder="password" name='password' className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Profile Picture url</span>
                    </label>
                    <label className="input-group">
                        <span>Photo URL</span>
                        <input type="text" placeholder="https://i0.wp.com/newdoorfiji.com/wp-content/uploads/2018/03/profile-img-1.jpg?ssl=1" name='photo' className="input input-bordered w-full" />
                    </label>
                </div>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-success m-5">Sign Up</button>
            </form>
            <Toaster />
            <h2 className='p-2 text-xl'>OR</h2>
            <hr className='w-52 m-auto' />

            <div className="popupLogin p-5">

                <button className="btn btn-warning btn-square m-2">
                    <i class="fa fa-google" aria-hidden="true"></i>
                </button>
                <button className="btn btn-square m-2">
                    <i class="fa fa-github" aria-hidden="true"></i>
                </button>
                <button className="btn btn-primary btn-square m-2">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </button>
                <button className="btn btn-success btn-square m-2">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                </button>
            </div>
            <p>Already have an  account <Link className='font-bold' to='/login'>Log In</Link></p>
        </div>
    );
};

export default SignUp;