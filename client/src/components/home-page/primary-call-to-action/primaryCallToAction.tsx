// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { Button } from "../../button/Button";
// CSS
import "./primary-call-to-action.scss";

export const PrimaryCallToAction = ({ language }: { language: string }) => {
  const {
    juanSanchezQuote,
    scheduleConsulation,
    seeGoogleReviews,
    seeOurResults,
  } = homePageStrings;

  const { part1, part2 } = juanSanchezQuote;

  return (
    <div className="primary-call-to-action margin-left-and-right z-index-1 position-relative">
      <h1 className="juan-sanchez-quote bold-text">
        {language === "English" ? part1.english : part1.spanish}
        <br></br>
        <br></br>
        {language === "English" ? part2.english : part2.spanish}
      </h1>
      <div className="primary-call-to-action-button-wrapper space-around-flex">
        <Button
          variant="primary"
          text={
            language === "English"
              ? scheduleConsulation.english
              : scheduleConsulation.spanish
          }
        />
        <Button
          variant="primary"
          text={
            language === "English"
              ? seeGoogleReviews.english
              : seeGoogleReviews.spanish
          }
        />
        <Button
          variant="primary"
          text={
            language === "English"
              ? seeOurResults.english
              : seeOurResults.spanish
          }
        />
      </div>
    </div>
  );
};
