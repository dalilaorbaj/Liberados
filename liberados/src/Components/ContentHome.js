import React from "react";
import { Link} from "react-router-dom";
import '../global.css';

const ContentHome = () => {
    return (    
            <div className="justify-content-md-center">
                <br/>
                <h5 className="mb-4">La revolución libertadora tuvo particularidades muy interesantes.</h5> 
                <h5 style={{marginBottom:"50px"}}>Animate a responder las siguientes preguntas generadas por tus compañeros y compañeras y ¡liberá América!</h5>
                <Link to="/grupo">
                    <button className="niceButton" style={{width: 200, height: 60}}>
                        <p style={{fontSize: 40, marginTop: "5%"}}> Jugar </p>
                    </button>
                </Link>  
            </div>        
    );
}
export default ContentHome