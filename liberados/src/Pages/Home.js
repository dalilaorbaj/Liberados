import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ContentHome from './Components/ContentHome';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const Home = () => {
    return (  
    <>
        <Navbar />
        <Header />
        <ContentHome />
        <Footer />
    </>  
    )
}

export default Home;