import {useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import githubContext from "../context/github/GithubContext";

const User = () => {

    const {getUser, user} = useContext(githubContext)

    const params = useParams()

    useEffect(()=>{
        getUser(params.login)
    },[])

    return (
        <div className='flex flex-col justify-between h-screen'>
            <Navbar title='GitHub Finder'/>
            <main className='container mx-auto px-3 pb-12'>
                {user.login}
            </main>
            <Footer/>
        </div>
    );
}

export default User;
