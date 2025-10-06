import "../../styles/exercise/HazeEnglish.css";
import { useState } from "react";

function HazeEnglish({ index, onTextChange }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    onTextChange(index, value); // wysyła dane do ExercisePage
  };

  return (
    <div className="haze-eng-cnt">
      <div className="haze-eng-title">TWOJE TŁUMACZENIE (ANGIELSKI)</div>

      <div className="input-window-box">
        <div className="input-wrapper">
          <textarea
            className="input-window"
            placeholder="Type your English translation here..."
            value={text}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default HazeEnglish;
