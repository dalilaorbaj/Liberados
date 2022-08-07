import Navbar from '../Components/Navbar';
import Pregunta from '../Components/Pregunta';
import Options from '../Components/Options';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Question({idQuestion}) {
    return (
      <div className="App">
        <Navbar />
        <Pregunta />
        <noscript>HAY QUE MANDARLE EL CONTENT A LAS OPTIONS</noscript>
        <Options />
      </div>
    );
  }
  
  export default Question;