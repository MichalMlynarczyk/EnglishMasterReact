import "../styles/OptionWindow.css"
import { Sparkles } from "lucide-react";
import EnglishLevel from "./EnglishLevel";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
function OptionWindow({funct, start, loadData}){

    const level = ["A2", "B1", "B2", "C1", "C2"];
    const desc = [
        "Poziom podstawowy - proste zdania i codzienne sytuacje",
        "Poziom średnio zaawansowany - swobodna komunikacja w znanych sytuacjach",
        "Poziom wyższy średnio zaawansowany - złożone teksty i abstrakcyjne tematy",
        "Poziom zaawansowany - płynne i spontaniczne wyrażanie myśli",
        "Poziom biegłości - precyzyjne wyrażanie znaczeń w skomplikowanych sytuacjach"
    ];

    const colorPalett = [
        "rgba(0, 0, 255, 0.774)",
        "rgba(57, 57, 199, 0.774)",
        "rgba(134, 49, 204, 0.774)",
        "rgba(140, 12, 245, 0.774)",
        "rgba(217, 27, 255, 0.774)"
    ]

    const [active, setActive] = useState(0);

    return(
        <div className="option-window-ctn">
               <div className="desc-one">
                <Sparkles />
                Nowa sesja treningowa
               </div>

               <div
                    className="title-one"
                   >
                    Wybierz swój poziom
               </div>

               <div
                className="title-two"
               >
                Dopasujemy tekst do Twoich umiejętności, abyś mógł się skutecznie uczyć
               </div>

               <div className="card-ctn-app">
                <EnglishLevel onClick={() => {setActive(1); funct(1)}} activeColor={colorPalett[0]}
                    active={active === 1} level={level[0]} descr={desc[0]} />
                <EnglishLevel onClick={() => {setActive(2);  funct(2)}} activeColor={colorPalett[1]}
                     active={active === 2} level={level[1]} descr={desc[1]} />
                <EnglishLevel onClick={() => {setActive(3);  funct(3)}} activeColor={colorPalett[2]}
                    active={active === 3} level={level[2]} descr={desc[2]} />
                <EnglishLevel onClick={() => {setActive(4);  funct(4)}} activeColor={colorPalett[3]}
                    active={active === 4} level={level[3]} descr={desc[3]} />
                <EnglishLevel onClick={() => {setActive(5);  funct(5)}} activeColor={colorPalett[4]}
                    active={active === 5} level={level[4]} descr={desc[4]} />
               </div>

               <div className={`start-btn ${active !== 0 ? "active" : ""}`}
               onClick={() => {start(false); loadData()}}
               >
                Rozpocznij ćwiczenie
                <ArrowRight />
               </div>

        </div>
    )
};

export default OptionWindow;