import React from 'react';
import { Link } from 'react-router-dom';
import './Slide.css'

const Slider = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Wellcome To Blossom</h1>
                    <p className="mb-5">ICT means information communication technology and this is one of the services that IT companies offer to their clients. Aside from information communication technology, this IT company also provides web design services, graphic design, 3D rendering and web hosting services.</p>
                    <button className="btn btn-primary"><Link to='/courses'>Get Started</Link> </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;