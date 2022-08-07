import React from "react";
import '../global.css';

const Header = () => {
    return (    
            <div id="header" className="row justify-content-md-center">
                <div className="mb-5 mt-5 col-6 justify-content-md-center">
                    <img src={require('../Banner.png')} alt="Banner" style={{height: 300, flex: 1, width: null,}} />
                </div>
            </div>        
    );
}
export default Header