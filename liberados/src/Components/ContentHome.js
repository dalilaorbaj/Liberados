import React from "react";
import { Link} from "react-router-dom";
import '../global.css';

const ContentHome = () => {
    /*const redir = `../Pages/Question/${1}`;*/
    return (    
            <div className="justify-content-md-center">
                <h5>ACA VA UN TEXTO SOBRE EL JUEGO</h5>
                <Link to="../Pages/Question.js">
                    <button className="niceButton">
                        Jugar
                    </button>
                </Link>  
            </div>        
    );
}
export default ContentHome