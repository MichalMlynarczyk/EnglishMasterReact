import "../styles/History.css";
import HistoryCard from "./HistoryCard";
import { TrendingUp, Award } from "lucide-react";
function History() {
  return (
    <div className="history-cnt">
      <div className="titile-cnt">
        <div className="history-title">Historia świczeń</div>
        <div className="history-descr">
          Przeglądaj swoje dotychczasowe wyniki
        </div>

        <div className="history-result">
          <HistoryCard
            icon={TrendingUp}
            value={"BRAK"}
            descr={"Liczba ćwiczeń"}
          />
          <HistoryCard icon={Award} value={"BRAK"} descr={"Średni wynik"} />
        </div>
      </div>
    </div>
  );
}

export default History;
