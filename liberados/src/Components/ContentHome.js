import React from "react";
import { Link} from "react-router-dom";
import '../global.css';

const ContentHome = () => {
    /*const redir = `../Pages/Question/${1}`;*/
    return (    
            <div className="justify-content-md-center">
                <br/>
                <h5 className="mb-4">Aca va un textito sobre el juegoooooo</h5>
                <Link to="/jugar">
                    <button className="niceButton">
                        Jugar
                    </button>
                </Link>  
            </div>        
    );
}
export default ContentHome