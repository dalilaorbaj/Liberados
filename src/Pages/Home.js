import Header from '../Components/Header';
import Navbar from '../Components/Navbar';
import ContentHome from '../Components/ContentHome';
import Footer from '../Components/Footer';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
    return (  
    <>
    <div style={{backgroundColor: "#448FFF"}}>
        <Navbar />
        <Header />
        <ContentHome />
        <Footer />
    </div>
    </>  
    )
}

export default Home;