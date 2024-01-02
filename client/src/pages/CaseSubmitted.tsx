// Library Imports
import { useSelector } from "react-redux/es/exports";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { caseSubmittedStrings } from "../constants/language-strings/caseSubmittedStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/case-submitted.scss";

const CaseSubmitted = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, caseSubmissionMsg, buttonText } = caseSubmittedStrings;

  return (
    <div className="container-fluid case-submitted-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="case-submitted-text padding-left-and-right dark-image-overlay">
        <h2>
          {reduxLanguage === "English"
            ? caseSubmissionMsg.english
            : caseSubmissionMsg.spanish}
        </h2>
        <div className="case-submitted-button-wrapper full-flex">
          <Button
            text={
              reduxLanguage === "English"
                ? buttonText.english
                : buttonText.spanish
            }
            variant="primary"
            buttonSize="large"
            url="/"
          />
        </div>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default CaseSubmitted;
