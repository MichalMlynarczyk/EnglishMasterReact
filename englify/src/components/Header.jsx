import React from "react";
import "../styles/Header.css"
import { useNavigate } from "react-router-dom";


function Header(){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
        
    };

    return(
        <div className="header">

            <div
                style={{cursor: "pointer"}}
                onClick={handleClick}
            >
                Englify
            </div>

        </div>
    )

};

export default Header;