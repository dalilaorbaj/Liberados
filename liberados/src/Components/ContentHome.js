import React from "react";
import { Link} from "react-router-dom";
import '../global.css';

const ContentHome = () => {
    return (    
            <div className="justify-content-md-center">
                <br/>
                <h5 className="mb-4">Aca va un textito sobre el juegoooooo</h5>
                <Link to="/grupo">
                    <button className="niceButton" style={{width: 200, height: 90}}>
                        <p style={{fontSize: 40, marginTop: "10%"}}> Jugar </p>
                    </button>
                </Link>  
            </div>        
    );
}
export default ContentHome