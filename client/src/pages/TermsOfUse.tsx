// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { termsOfServiceStrings } from "../constants/language-strings/termsOfServiceStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/terms-of-use.scss";

/* 
    TODO: Ensure to check reference to "The Olive Law Firm.com" in this
*/

const TermsOfUse = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const {
    pageTitle,
    intro,
    body1,
    body2,
    body3,
    body4,
    body5,
    body6,
    body7,
    body8,
    body9,
  } = termsOfServiceStrings;

  return (
    <div className="container-fluid terms-of-use-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner/>

      <div className="terms-of-use-text padding-left-and-right">
        <h3>{reduxLanguage === "English" ? intro.english : intro.spanish}</h3>

        <p>{reduxLanguage === "English" ? body1.english : body1.spanish}</p>
        <p>{reduxLanguage === "English" ? body2.english : body2.spanish}</p>
        <p>{reduxLanguage === "English" ? body3.english : body3.spanish}</p>
        <p>{reduxLanguage === "English" ? body4.english : body4.spanish}</p>
        <p>{reduxLanguage === "English" ? body5.english : body5.spanish}</p>
        <p>{reduxLanguage === "English" ? body6.english : body6.spanish}</p>
        <p>{reduxLanguage === "English" ? body7.english : body7.spanish}</p>
        <p>{reduxLanguage === "English" ? body8.english : body8.spanish}</p>
        <p>{reduxLanguage === "English" ? body9.english : body9.spanish}</p>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default TermsOfUse;
