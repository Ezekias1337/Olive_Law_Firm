// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
// Components
import { Button } from "../../../button/Button";
// CSS
import "./tell-your-story.scss";

export const TellYourStory = ({ language }: { language: string }) => {
  const { tellUsYourStory, scheduleConsulation } = homePageStrings;
  const { quote } = tellUsYourStory;

  return (
    <section className="tell-your-story dark-image-overlay padding-left-and-right z-index-1">
      <h2 className="bold-text">
        {language === "English" ? quote.english : quote.spanish}
      </h2>
      <div className="tell-us-your-story-button-container">
        <Button
          text={
            language === "English"
              ? scheduleConsulation.english
              : scheduleConsulation.spanish
          }
          variant="neutral"
          url="/contact-us"
          buttonSize="large"
        />
      </div>
    </section>
  );
};
