
import Juego from './Pages/Question'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import React, { useEffect } from 'react'
import getData from './Helpers/fetchMetaData';

function App() {

  const traerPregs = async() => {
    await getData()
  }

  useEffect(() => {
    traerPregs()
  }, [])

  return (
    <div className="App fondo">
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
