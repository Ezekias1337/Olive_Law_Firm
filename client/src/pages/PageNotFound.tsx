// Library Imports
import { useSelector } from "react-redux/es/exports";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
// Functions, Helpers, Utils and Hooks
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { pageNotFoundStrings } from "../constants/language-strings/pageNotFoundStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Button } from "../components/button/Button";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/page-not-found.scss";

const PageNotFound = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { couldNotFindPage, checkTheAddress, returnHomeButtonText } =
    pageNotFoundStrings;

  return (
    <div className="container-fluid page-not-found-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />

      <div className="padding-left-and-right page-not-found-wrapper">
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
        <div className="page-not-found-button-wrapper">
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
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default PageNotFound;
