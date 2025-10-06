import "../../styles/rightpanel/ResultHaze.css";

function ResultHaze({
  icon,
  title,
  text,
  green = false,
  result = false,
  resultSen = "",
}) {
  return (
    <div className={`result-cnt  ${green ? "green" : ""}`}>
      <div className="result-title">
        {icon}
        <span>{title}</span>
      </div>
      <div className="result-left-cnt">
        {result && <div className="result-box">{resultSen}</div>}

        <div className="result-descr">{text}</div>
      </div>
    </div>
  );
}

export default ResultHaze;
