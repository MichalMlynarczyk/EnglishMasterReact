import "../styles/HistoryCard.css";

function HistoryCard({ icon: Icon, value, descr }) {
  return (
    <div className="history-card-cnt">
      <div className="history-card-top">
        <Icon />
        <span>{descr}</span>
      </div>
      <div className="history-card-down">{value}</div>
    </div>
  );
}

export default HistoryCard;
