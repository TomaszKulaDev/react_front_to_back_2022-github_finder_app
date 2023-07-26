import React from 'react';
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";
import Alert from "../components/layout/Alert";

const Home = () => {

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar title='GitHub Finder'/>
                <main className='container mx-auto px-3 pb-12'>
                    <h1 className='text-6xl mb-8'> Welcome </h1>
                    <Alert/>
                    <UserSearch/>
                    <UserResults/>
                </main>
            <Footer/>
        </div>
    );
}

export default Home;
