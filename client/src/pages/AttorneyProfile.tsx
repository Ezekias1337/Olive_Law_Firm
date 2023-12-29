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
import "../css/page-specific/attorney-profile.scss";

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
    <div className="container-fluid attorney-profile-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default TermsOfUse;
