import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import ExercisePage from "./components/ExercisePage";
import Sidebar from "./components/Sidebar";
import OptionWindow from "./components/OptionWindow";
import { startTransition, use, useEffect, useState } from "react";
import MobilePanel from "./components/MobilePanel";
import History from "./components/History";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 580);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [engLevel, setEngLevel] = useState(-1);
  const [startButton, setStartButton] = useState(1);
  const [polishTekst, setPolishTekst] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 580);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseSidebar = () => setSidebarOpen(false);
  const setEnglishLevel = (level) => {
    setEngLevel(level);
  };

  const startExerciseButton = (stage) => {
    setStartButton(stage);
    setSidebarOpen(false);
  };

  useEffect(() => {
    console.log(engLevel);
  }, [engLevel]);

  useEffect(() => {
    console.log(startButton);
  }, [startButton]);

  const handleStart = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/generate-text", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ level: engLevel }),
      });
      const data = await res.json();

      const lines = data.text
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "");
      setPolishTekst(lines);

      // start ćwiczenia
    } catch (err) {
      console.error("Błąd fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        {isMobile ? (
          <MobilePanel onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        ) : (
          <Sidebar isOpen start={startExerciseButton} />
        )}

        {isMobile && (
          <Sidebar
            isOpen={sidebarOpen}
            start={startExerciseButton}
            onClose={handleCloseSidebar}
          />
        )}

        {isMobile && sidebarOpen && (
          <div className="overlay" onClick={handleCloseSidebar} />
        )}

        {/* {startButton ? (
            <OptionWindow funct={setEnglishLevel} start={startExerciseButton}  loadData={handleStart}/>
        ) : (
            <ExercisePage start={startExerciseButton} engLevel={engLevel}  polishTekst={polishTekst}/>
        )} */}

        {/* {startButton === 1 ? (
          <OptionWindow
            loadData={handleStart}
            funct={setEnglishLevel}
            start={startExerciseButton} // wywołanie fetch
          />
        ) : loading ? (
          <div className="loading-page">
            <div className="spinner"></div>
            <span>Generuję tekst dla Ciebie...</span>
          </div>
        ) : (
          <ExercisePage
            start={startExerciseButton}
            engLevel={engLevel}
            polishTekst={polishTekst}
          />
        )}

        {startButton === 2 ? <div>dfdfdf</div> : null} */}

        {startButton === 2 ? (
          // Historia – najwyższy priorytet, zawsze wyświetlana
          <History />
        ) : startButton === 1 ? (
          // Strona startowa
          <OptionWindow
            loadData={handleStart}
            funct={setEnglishLevel}
            start={startExerciseButton}
          />
        ) : loading ? (
          // Ekran ładowania
          <div className="loading-page">
            <div className="spinner"></div>
            <span>Generuję tekst dla Ciebie...</span>
          </div>
        ) : (
          // ExercisePage – po załadowaniu danych
          <ExercisePage
            start={startExerciseButton}
            engLevel={engLevel}
            polishTekst={polishTekst}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
