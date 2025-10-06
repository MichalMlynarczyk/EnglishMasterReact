import "../styles/StartPage.css"
import { useNavigate } from "react-router-dom";


function StartPage(){

    const navigate = useNavigate();

    return(
        <div className="container">
            <button 
            onClick={() => {
                navigate("/exercise")
            }}
            className="start-btn"
            >
                ROZPOCZNIJ NAUKĘ!
            </button>
        </div>
    );
};

export default StartPage;