// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { OurResultProps } from "../components/our-results/ourResult";
// Constants
import { ourResultsStrings } from "../constants/language-strings/ourResultsStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { OurResult } from "../components/our-results/ourResult";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/our-results.scss";
// Assets and Images

const OurResults = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

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
    settlement7,
  ];

  const { disclaimerTitle, disclaimerBody } = disclaimer;

  return (
    <div className="container-fluid our-results-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="our-results-wrapper display-flex padding-left-and-right">
        {arrayOfSettlementInfo.map((settlement, index) => (
          <OurResult
            language={reduxLanguage}
            ourResultObject={settlement}
            key={index}
          />
        ))}
      </div>

      <div className="results-disclaimer-wrapper padding-left-and-right">
        <h3>
          {reduxLanguage === "English"
            ? disclaimerTitle.english
            : disclaimerTitle.spanish}
        </h3>
        <p>
          {reduxLanguage === "English"
            ? disclaimerBody.english
            : disclaimerBody.spanish}
        </p>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default OurResults;
