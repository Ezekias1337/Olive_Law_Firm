// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { ourResultsStrings } from "../constants/language-strings/ourResultsStrings";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { OurResult } from "../components/our-results/ourResult";
import { Disclaimer } from "../components/disclaimer/Disclaimer";
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
    settlement8,
    settlement9,
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
    settlement8,
    settlement9,
  ];

  return (
    <div className="container-fluid our-results-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="our-results-wrapper display-flex">
        {arrayOfSettlementInfo.map((settlement, index) => (
          <OurResult
            language={reduxLanguage}
            ourResultObject={settlement}
            key={index}
          />
        ))}
      </div>
      <Disclaimer
        bodyText={
          reduxLanguage === "English" ? disclaimer.english : disclaimer.spanish
        }
      />
      <CookieBanner
        bodyText={
          reduxLanguage === "English"
            ? "To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
            : "Para garantizar que tenga la mejor experiencia posible mientras nos visita, utilizamos cookies y tecnologías similares."
        }
        button1={{
          text: "Dismiss",
          variant: "primary",
          buttonSize: "small",
        }}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default OurResults;
