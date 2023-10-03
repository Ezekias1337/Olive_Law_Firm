// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// CSS
import "./our-philosophy.scss";

export const OurPhilosophy = ({ language }: { language: string }) => {
  const { ourPhilosophy, leeOliveQuote } = homePageStrings;
  const { title, body } = ourPhilosophy;

  return (
    <section className="our-philosophy padding-left-and-right z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <br></br>
      <br></br>
      <h3 className="bold-text">
        {language === "English" ? leeOliveQuote.english : leeOliveQuote.spanish}
      </h3>
      <span>{language === "English" ? body.english : body.spanish}</span>
    </section>
  );
};
