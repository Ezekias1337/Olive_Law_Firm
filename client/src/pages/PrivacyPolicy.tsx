// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { privacyPolicyStrings } from "../constants/language-strings/privacyPolicyStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/privacy-policy.scss";

const PrivacyPolicy = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const {
    pageTitle,
    intro,
    collectedInformation,
    linksToOtherSites,
    feedback,
    updates,
  } = privacyPolicyStrings;

  const { title: collectedInfoTitle, collectedInformationBody } =
    collectedInformation;
  const { title: linksToOtherSitesTitle, linksToOtherSitesBody } =
    linksToOtherSites;
  const { title: feedbackTitle, feedbackBody } = feedback;
  const { title: updatesTitle, updatesBody } = updates;

  return (
    <div className="container-fluid privacy-policy-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner/>

      <div className="privacy-policy-text padding-left-and-right">
        <p>{reduxLanguage === "English" ? intro.english : intro.spanish}</p>

        <h2>
          {reduxLanguage === "English"
            ? collectedInfoTitle.english
            : collectedInfoTitle.spanish}
        </h2>
        <p>
          {reduxLanguage === "English"
            ? collectedInformationBody.english
            : collectedInformationBody.spanish}
        </p>

        <h2>
          {reduxLanguage === "English"
            ? linksToOtherSitesTitle.english
            : linksToOtherSitesTitle.spanish}
        </h2>
        <p>
          {reduxLanguage === "English"
            ? linksToOtherSitesBody.english
            : linksToOtherSitesBody.spanish}
        </p>

        <h2>
          {reduxLanguage === "English"
            ? feedbackTitle.english
            : feedbackTitle.spanish}
        </h2>
        <p>
          {reduxLanguage === "English"
            ? feedbackBody.english
            : feedbackBody.spanish}
        </p>

        <h2>
          {reduxLanguage === "English"
            ? updatesTitle.english
            : updatesTitle.spanish}
        </h2>
        <p>
          {reduxLanguage === "English"
            ? updatesBody.english
            : updatesBody.spanish}
        </p>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default PrivacyPolicy;
