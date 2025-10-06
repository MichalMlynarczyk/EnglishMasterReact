import "../styles/Sidebar.css";
import SidebarButton from "./SidebarButton";
import logo from "../assets/logo.svg";
import { Home, History, Award } from "lucide-react";
import { useState } from "react";

function Sidebar({ isOpen, onClose, start }) {
  const [active, setActive] = useState(0);

  return (
    <div className={`sidebar-cnt ${isOpen ? "open" : ""}`}>
      <div className="top">
        <div className="logo">
          <img src={logo} />
        </div>

        <div className="desr">
          <h1>EnglishMaster</h1>
          <h2>Naucz się angielskiego</h2>
        </div>
      </div>

      <div className="down">
        <SidebarButton
          onClick={() => {
            setActive(1);
            if (onClose) onClose();

            start(1);
          }}
          icon={<Home />}
          active={active === 1}
          title="Start"
        />
        <SidebarButton
          onClick={() => {
            setActive(2);
            if (onClose) onClose();

            start(2);
          }}
          icon={<History />}
          active={active === 2}
          title="Historia"
        />

        <div className="progress-window">
          <Award /> <span className="dialog-one">Twój postęp</span> <br />
          <span className="dialog-two">
            Kontynuuj naukę, aby osiągnąć lepsze wyniki!
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
