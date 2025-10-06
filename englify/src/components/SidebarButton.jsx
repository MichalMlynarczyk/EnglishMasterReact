import "../styles/SidebarButton.css"

function SidebarButton({ onClick, icon, active,  title }){
    return(
        <div className={`sidebarbutton-ctn ${active ? "active" : ""}`}
         onClick={onClick} >
            <div className="icon">{icon}</div>
            <span className="title">{title}</span>
        </div>
    )
};

export default SidebarButton