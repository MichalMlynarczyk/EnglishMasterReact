import { Check } from "lucide-react";
import "../../styles/rightpanel/InformationHaze.css";

function InformationHaze() {
  return (
    <div className="inf-ctn">
      <span className="inf-title">Wskazówki</span>

      <div className="tip-cnt">
        <Check />
        <span>Przetłumacz każdą linię osobno</span>
      </div>

      <div className="tip-cnt">
        <Check />
        <span>Zwróć uwagę na gramatykę i czasy</span>
      </div>

      <div className="tip-cnt">
        <Check />
        <span>Przekaż całą treść oryginału</span>
      </div>

      <div className="tip-cnt">
        <Check />
        <span>Po skończeniu kliknij "Sprawdź"</span>
      </div>
    </div>
  );
}

export default InformationHaze;
