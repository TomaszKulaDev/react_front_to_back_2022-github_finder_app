import React from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar title='GitHub Finder'/>
                <main className='container mx-auto px-3 pb-12'>
                    <h1 className='text-6xl'> Welcome </h1>
                </main>
            <Footer/>
        </div>
    );

}

export default Home;
