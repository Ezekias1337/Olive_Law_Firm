// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
import { ourResultsStrings } from "../../../../constants/language-strings/ourResultsStrings";
// Components
import { OurResult } from "../../../our-results/ourResult";
import { Button } from "../../../button/Button";
// CSS
import "./our-results.scss";

const {
  pageTitle,
  settlement1,
  settlement2,
  settlement3,
  settlement4,
  settlement5,
  settlement6,
  settlement7,
  disclaimer,
} = ourResultsStrings;

const arrayOfSettlementInfo = [
  settlement1,
  settlement2,
  settlement3,
  settlement4,
  settlement5,
  settlement6,
];

export const OurResults = ({ language }: { language: string }) => {
  const { ourResults } = homePageStrings;
  const { title, viewMoreResults } = ourResults;

  return (
    <section className="our-results padding-left-and-right z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div className="our-results-container display-flex">
        {arrayOfSettlementInfo.map((settlement, index) => (
          <OurResult
            language={language}
            ourResultObject={settlement}
            key={index}
          />
        ))}
      </div>

      <div className="view-more-results-container">
        <Button
          text={
            language === "English"
              ? viewMoreResults.english
              : viewMoreResults.spanish
          }
          variant="primary"
          url="/our-results"
          buttonSize="large"
        />
      </div>
    </section>
  );
};
