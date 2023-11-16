// Library Imports
import { useSelector } from "react-redux/es/exports";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { pageNotFoundStrings } from "../constants/language-strings/pageNotFoundStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/page-not-found.scss";
// Assets and Images
import northCarolinaCourthouse from "../assets/images/backgrounds/North_Carolina_Courthouse.png";

/* 
    TODO: Ensure to check reference to "The Olive Law Firm.com" in this
*/

const PageNotFound = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { couldNotFindPage, checkTheAddress, returnHomeButtonText } =
    pageNotFoundStrings;

  return (
    <div className="container-fluid page-not-found-container p-0">
      <NavBar
        theme="light"
        adminVariant={false}
        language={reduxLanguage}
        backgroundImage={northCarolinaCourthouse}
        backgroundImageSize="911px"
      />

      <div className="padding-left-and-right page-not-found-container position-relative">
        <h1 className="full-flex">
          {reduxLanguage === "English"
            ? couldNotFindPage.english
            : couldNotFindPage.spanish}
        </h1>
        <h3 className="full-flex">
          {reduxLanguage === "English"
            ? checkTheAddress.english
            : checkTheAddress.spanish}
        </h3>

        <Button
          variant="primary"
          text={
            reduxLanguage === "English"
              ? returnHomeButtonText.english
              : returnHomeButtonText.spanish
          }
          url="/"
          leftIcon={true}
          icon={faHouse}
          buttonSize="large"
        />
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default PageNotFound;
