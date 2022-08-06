import React from "react";
import '../global.css';

const Navbar = () => {
    return ( 
    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">            
                <h1 className="navbar-brand ml-3" aria-current="page">Liberados</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <h3 className="nav-link">Peliculas</h3>
                    </li>
                    <li className="nav-item">
                    <h3 className="nav-link">Series</h3>
                    </li>
                    <li className="nav-item">
                    <h3 className="nav-link">En alquiler</h3>
                    </li>
                    <li className="nav-item">
                    <h3 className="nav-link">En venta</h3>
                    </li>
                    <li className="nav-item">
                    <h3 className="nav-link">Streaming</h3>
                    </li>
                </ul>
                </div>
        </nav>
        
    );
}
export default Navbar;