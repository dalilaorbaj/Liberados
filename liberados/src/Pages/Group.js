import Navbar from '../Components/Navbar';
import QuestionGroup from '../Components/QuestionGroup';
import Footer from '../Components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Group = () => {
    return (  
    <>
        <Navbar />
        <QuestionGroup />
        <Footer />
    </>  
    )
}

export default Group;