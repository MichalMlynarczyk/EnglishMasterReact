import React, { useState, useEffect } from "react";
import "../styles/ExercisePage.css";
import {
  ArrowLeft,
  Dot,
  CircleCheckBig,
  Check,
  CircleAlert,
  CircleCheck,
  BookOpen,
} from "lucide-react";
import HazePolish from "./exercise/HazePolish";
import HazeEnglish from "./exercise/HazeEnglish";
import InformationHaze from "./rightpanel/InformationHaze";
import ResultHaze from "./rightpanel/ResultHaze";

function ExercisePage({ engLevel, start, polishTekst }) {
  const [activeButton, setActiveButton] = useState(false);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [data, setResultData] = useState(null);
  const [load, setLoad] = useState(false);
  const [hide, setHide] = useState(true);
  const [englishTexts, setEnglishTexts] = useState(
    Array(polishTekst.length).fill("")
  );

  const updateText = (index, value) => {
    setEnglishTexts((prev) => {
      const newArr = [...prev];
      newArr[index] = value;
      return newArr;
    });
  };

  useEffect(() => {
    const allFilled = englishTexts.every(
      (text) => typeof text === "string" && text.trim() !== ""
    );

    setActiveButton(allFilled);
    console.log(allFilled);
  }, [englishTexts]);

  const decipher = (sign) => {
    if (sign === 1) return "A2";
    if (sign === 2) return "B1";
    if (sign === 3) return "B2";
    if (sign === 4) return "C1";
    if (sign === 5) return "C2";
  };

  const handleCheck = async () => {
    setLoad(true);
    try {
      const res = await fetch(
        "http://localhost:5000/api/evaluate-translation",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            polish: polishTekst,
            english: englishTexts,
          }),
        }
      );

      const data = await res.json();
      console.log("Ocena tłumaczenia:", data);
      setResultData(data);

      // tutaj możesz ustawić np.:
      // setResultData(data);
      // setCheckAnswer(true);
    } catch (err) {
      console.error("Błąd podczas oceny tłumaczenia:", err);
    } finally {
      setCheckAnswer(true);
      setLoad(false);
      setHide(false);
    }
  };

  return (
    <div className="exercise-page-container">
      <div className="top-panel">
        <div
          className="return-button"
          onClick={() => {
            start(true);
          }}
        >
          <ArrowLeft />
          Powrót
        </div>

        <div className="headline-exercise-page-one">Ćwiczenie tłumaczenia</div>

        <div className="level-exercise-page">
          Poziom:
          <span>{decipher(engLevel)}</span>
        </div>
      </div>

      <div className="text-ctn">
        <div className="test-form">
          <div className="test-form-text">
            <Dot strokeWidth={7} />
            Przetłumacz poniższy tekst
          </div>

          {/* <HazePolish descr={polishTekst[0]} index={1}/>
                        <HazeEnglish index={0} onTextChange={updateText} />

                        <HazePolish descr={polishTekst[1]} index={2}/>
                        <HazeEnglish index={1} onTextChange={updateText} />

                        <HazePolish descr={polishTekst[2]} index={3}/>

                        
                        <HazeEnglish index={2} onTextChange={updateText} /> */}

          {polishTekst.map((tekst, i) => (
            <div key={i}>
              <HazePolish descr={tekst} index={i + 1} />
              <HazeEnglish index={i} onTextChange={updateText} />
            </div>
          ))}

          {hide ? (
            <div
              className={`check-button ${activeButton ? "active" : ""} ${
                load ? "noactive" : ""
              }`}
              onClick={() => handleCheck()}
            >
              <CircleCheckBig />
              <span>{load ? "Sprawdza..." : "Sprawdź tłumaczenie..."}</span>
            </div>
          ) : null}

          {/* <div
            className={`check-button ${activeButton ? "active" : ""}`}
            onClick={() => {
              handleCheck();
              // setCheckAnswer(true);
            }}
          >
            <CircleCheckBig />
            <span>{load ? "Sprawdza..." : "Sprawdź tłumaczenie..."}</span>
          </div>*/}
        </div>

        {checkAnswer ? (
          <div className="right-panel-cnt">
            <ResultHaze
              result={true}
              resultSen={data.ocena}
              icon={<CircleCheck />}
              title={"Wynik"}
              text={data.komentarz}
            />
            <ResultHaze
              icon={<CircleAlert />}
              title={"Gramatyka"}
              text={data.gramatyka}
            />
            <ResultHaze
              icon={<BookOpen />}
              title={"Przekaz treści"}
              text={data.przekaz_tresci}
            />
            <ResultHaze
              icon={<CircleCheck />}
              title={"Przykładowe tłumaczenia"}
              green={true}
              text={data.przykladowe_tlumaczenie}
            />
          </div>
        ) : (
          <InformationHaze />
        )}

        {/* <div className="right-panel-cnt">
          <ResultHaze
            result={true}
            resultSen={"10%"}
            icon={<CircleCheck />}
            title={"Wynik"}
            text={"Potrzebujesz praktyki"}
          />
          <ResultHaze
            icon={<CircleAlert />}
            title={"Gramatyka"}
            text={
              "W tłumaczeniu występują liczne błędy gramatyczne, takie jak błędna pisownia ‚foreast’ zamiast ‚forest’ oraz ‚vary’ zamiast ‚very’. Ponadto brakuje artykułów i poprawnej struktury zdań."
            }
          />
          <ResultHaze
            icon={<BookOpen />}
            title={"Przekaz treści"}
            text={
              "Tłumaczenie nie oddaje treści oryginalnego tekstu. Brakuje wielu informacji, a pozostałe zdania są chaotyczne i nieczytelne, co uniemożliwia zrozumienie."
            }
          />
          <ResultHaze
            icon={<CircleCheck />}
            title={"Przykładowe tłumaczenia"}
            green={true}
            text={
              "The animals in the forest are very interesting. There are many different species living in the forest, including birds, deer, and wild boars. The birds sing beautiful songs. The deer jump between the trees. The wild boars search for food in the ground. Various plants also grow in the forest. The flowers are colorful and pretty. We can also find insects there. Each animal has its place. The forest is home to many creatures. We must take care of our forests."
            }
          />
        </div>

         <InformationHaze />  */}

        {/* <div className="inf-ctn">
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
        </div> */}
      </div>
    </div>
  );
}

export default ExercisePage;
