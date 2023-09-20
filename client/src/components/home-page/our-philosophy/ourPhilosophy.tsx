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
  const { ourPhilosophy, leeOliveQuote } = homePageStrings;
  const { title, body } = ourPhilosophy;

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
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <br></br>
      <br></br>
      <h3>
        {language === "English" ? leeOliveQuote.english : leeOliveQuote.spanish}
      </h3>
      <span>{language === "English" ? body.english : body.spanish}</span>
    </section>
  );
};
