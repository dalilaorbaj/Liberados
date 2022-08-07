
import Juego from './Pages/Question'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>          
      <Route path="/" element={<Home />} />

          <Route path="/jugar" element={<Juego />} />
          <Route path="/resultados" element={<Dashboard />} />
          </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
