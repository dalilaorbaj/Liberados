
import Juego from './Pages/Question'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import Group from './Pages/Group'
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

          <Route path="/jugar/:grupo" element={<Juego />} />
          <Route path="/resultados" element={<Dashboard />} />
          <Route path="/grupo" element={<Group />} />

          </Routes>
      </BrowserRouter>    
    </div>
  );
}

export default App;
