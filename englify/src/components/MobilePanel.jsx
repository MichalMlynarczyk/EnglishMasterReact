import "../styles/MobilePanel.css"
import { PanelLeft } from "lucide-react";

function MobilePanel({ onMenuClick }){
    return(
        <div className="mobile-panel">
            <PanelLeft onClick={onMenuClick}/>
            <span className="mobile-panel-title">EnglishMaster</span>
        </div>
    )
};

export default MobilePanel;