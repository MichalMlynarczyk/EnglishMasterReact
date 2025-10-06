import "../styles/EnglishLevel.css"
import { CircleCheck } from "lucide-react";
function EnglishLevel({onClick, active, level, descr, activeColor}){


    return(

        <div className={`cart-cnt ${active ? "active" : ""}`}
        onClick={onClick}
        style={active ? {"--active-color": activeColor} : {}}
        >
            <div className={`cart-top ${active ? "active" : ""}`} onClick={onClick}>
                <div className={`cart-logo ${active ? "active" : ""}`} onClick={onClick}>{level}</div>
                <CircleCheck />
            </div>
            <div className="cart-descr">{descr}</div>
        </div>
    )
};

export default EnglishLevel;