// Library Imports
import { FC, useEffect, useState } from "react";
// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// CSS
import "./our-philosophy.scss";

export const OurPhilosophy = ({ language }: { language: string }) => {
  /* 
    This component needs extra padding on top when the "No Papeles" section
    is not showing
  */
  const { ourPhilosophy } = homePageStrings;
  const { title, body1, body2 } = ourPhilosophy;

  const [needsPadding, setNeedsPadding] = useState(true);

  useEffect(() => {
    if (language === "English") {
      setNeedsPadding(true);
    } else {
      setNeedsPadding(false);
    }
  }, [language]);

  return (
    <section
      className={`our-philosophy padding-left-and-right z-index-1 ${
        needsPadding === true ? `extra-top-padding` : ``
      }`}
    >
      <h1 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h1>
      <span>
        {language === "English" ? body1.english : body1.spanish}
        <br></br>
        <br></br>
        {language === "English" ? body2.english : body2.spanish}
      </span>
    </section>
  );
};
