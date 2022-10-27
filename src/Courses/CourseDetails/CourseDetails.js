import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

import { PDFDownloadLink } from "@react-pdf/renderer";
import PDFFile from '../../PDF/components/PDFFile';


const CourseDetails = () => {
    const detailsData = useLoaderData()

    const { _id, picture, course_Title, rating, duration, price, name, author_Image, youWillGet, youWillLearn, description } = detailsData;

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse text-white" >
                <div className="text-center lg:text-left">
                    <div className="author py-5">
                        <h2 className='text-2xl font-bold'>Course Instructor</h2>
                        <div className="authorname flex items-center p-4">
                            <img className='block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0 object-cover rounded-full h-[100px] w-[100px]' src={author_Image} alt="" />
                            <h2 className='text-2xl px-5'>{name}</h2>
                        </div>
                    </div>
                    <div className="whatYouWillLearn py-5">
                        <h2 className='text-2xl font-bold'>What you will learn</h2>
                        <ul>
                            <li><i class="fa-solid fa-hand-point-up p-3"></i> {youWillLearn.first}</li>
                            <li><i class="fa-solid fa-hand-point-up p-3"></i> {youWillLearn.sec}</li>
                            <li><i class="fa-solid fa-hand-point-up p-3"></i> {youWillLearn.third}</li>
                            <li><i class="fa-solid fa-hand-point-up p-3"></i> {youWillLearn.fourth}</li>
                            <li><i class="fa-solid fa-hand-point-up p-3"></i> {youWillLearn.fifth}</li>
                        </ul>
                    </div>
                    <div className="description py-5">
                        <h2 className='text-2xl font-bold'>Description</h2>
                        <p className='py-2'>{description} </p>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#150050]">
                    <div className="card-body text-left">
                        <div className="form-control mt-6">
                            <button className="btn btn-warning m-4">
                                <PDFDownloadLink document={<PDFFile picture={picture} course_Title={course_Title} name={name} description={ description} />} filename="FORM">
                                    {({ loading }) => (loading ? <button>Loading Document...</button> : <button>Download as PDF</button>)}
                                </PDFDownloadLink>
                            </button>
                        </div>
                        <img src={picture} style={{ height: '200px' }} alt="" />
                        <h2 className='text-center text-4xl p-3'>$<b className='text-[#FB2576]'>{price}</b></h2>
                        <div className="form-control mt-6">
                            <Link className="btn btn-success" to={`/checkout/${_id}`}>Get premium access</Link>
                        </div>
                        <div className="totalstudent flex justify-between">
                            <h2 className='text-center p-3'><i class="fa-solid fa-users"></i> Total student: <br /> 10</h2>
                            <h2 className='text-center p-3'><i class="fa-solid fa-timer"></i> Total duration: <br /> {duration}</h2>
                        </div>
                        <div className="lists">
                            <h2>Whats you will get: </h2>
                            <ul>
                                <li><i class="fa-sharp fa-solid fa-check-double"></i> {youWillGet.first}</li>
                                <li><i class="fa-sharp fa-solid fa-check-double"></i> {youWillGet.sec}</li>
                                <li><i class="fa-sharp fa-solid fa-check-double"></i> {youWillGet.third}</li>
                            </ul>
                        </div>
                        <h2 className='text-center'>Call use more information +880172352323</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;