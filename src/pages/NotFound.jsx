import {FaHome} from 'react-icons/fa'
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import React from "react";
import {Link} from "react-router-dom";

const NotFound = () => {

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar title='GitHub Finder'/>
            <div className='container mx-auto'>
                <div className=" text-center max-w-lg mx-auto">
                    <h1 className='text-8xl font-bold mb-7'>
                        Oops !
                    </h1>
                    <p className='text-5xl mb-8'> 404 - Page not found!</p>
                    <Link className='btn btn-primary btn-lg' to='/'>
                        <FaHome className='mr-2'/>Back To Home
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default NotFound;
