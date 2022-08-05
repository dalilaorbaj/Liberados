import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ContentHome from './Components/ContentHome';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ContentHome />
      <Footer />
    </div>
  );
}

export default App;
