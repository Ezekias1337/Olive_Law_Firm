// Library Imports
import { useState, useEffect } from "react";
import {
  faUserInjured,
  faPersonDigging,
  faCarBurst,
  faHeartPulse,
} from "@fortawesome/free-solid-svg-icons";
// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { PracticeAreasCard } from "./practiceAreaCard";
import { Button } from "../../button/Button";
// CSS
import "./practice-areas.scss";
// Assets and Images

export const PracticeAreas = ({ language }: { language: string }) => {
  const { practiceAreas, allAreas } = homePageStrings;
  const { title, personalInjury, workersComp, autoAccidents, wrongfulDeath } =
    practiceAreas;

  const [arrayOfPracticeAreas, setArrayOfPracticeAreas] = useState([
    { title: personalInjury.english, icon: faUserInjured },
    { title: workersComp.english, icon: faPersonDigging },
    { title: autoAccidents.english, icon: faCarBurst },
    { title: wrongfulDeath.english, icon: faHeartPulse },
  ]);

  useEffect(() => {
    if (language === "English") {
      const tempArrayOfAreas = [
        { title: personalInjury.english, icon: faUserInjured },
        { title: workersComp.english, icon: faPersonDigging },
        { title: autoAccidents.english, icon: faCarBurst },
        { title: wrongfulDeath.english, icon: faHeartPulse },
      ];
      setArrayOfPracticeAreas(tempArrayOfAreas);
    } else {
      const tempArrayOfAreas = [
        { title: personalInjury.spanish, icon: faUserInjured },
        { title: workersComp.spanish, icon: faPersonDigging },
        { title: autoAccidents.spanish, icon: faCarBurst },
        { title: wrongfulDeath.spanish, icon: faHeartPulse },
      ];
      setArrayOfPracticeAreas(tempArrayOfAreas);
    }
  }, [language]);

  return (
    <section className="practice-areas padding-left-and-right z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div id="practice-area-card-wrapper" className="space-around-flex">
        {arrayOfPracticeAreas.map((card, index) => {
          return (
            <PracticeAreasCard
              key={index}
              title={card.title}
              icon={card.icon}
              language={language}
            />
          );
        })}
      </div>
      <div id="practice-area-button-wrapper" className="full-flex">
        <Button
          text={language === "English" ? allAreas.english : allAreas.spanish}
          variant="primary"
          url="/practice-areas"
        />
      </div>
    </section>
  );
};
