import Navbar from '../Components/Navbar';
import Question from '../Components/ContentHome';
import Footer from '../Components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Group = () => {
    return (  
    <>
        <Navbar />
        <Question />
        <Footer />
    </>  
    )
}

export default Group;