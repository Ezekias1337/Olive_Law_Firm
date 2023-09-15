// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// CSS
import "./lee-olive-quote.scss";

export const LeeOliveQuote = ({ language }: { language: string }) => {
  const { leeOliveQuote } = homePageStrings;

  return (
    <section className="lee-olive-quote padding-left-and-right z-index-1">
      <h1 className="quote">
      {language === "English" ? leeOliveQuote.english : leeOliveQuote.spanish}
        <br></br>
        <br></br>
        - Lee Olive
      </h1>
    </section>
  );
};
