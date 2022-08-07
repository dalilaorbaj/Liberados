import Header from './Components/Header';
import Navbar from './Components/Navbar';
import ContentHome from './Components/ContentHome';
import Footer from './Components/Footer';
import Juego from '../Pages/Question'
import Dashboard from '../Pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <ContentHome />
      <Footer />
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/jugar" component={Juego} />
          <Route path="/resultados" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
