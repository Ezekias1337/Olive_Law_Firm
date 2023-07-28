// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
// Redux
import { UPDATE_LANGUAGE } from "../redux/action-creators/languageCreators";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Constants
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
// Components
import { Footer } from "../components/general-page-layout/footer/Footer";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Button } from "../components/button/button";

// CSS
import "../css/page-specific/home.scss";
// Assets and Images
import northCarolinaCourthouse from "../assets/images/backgrounds/North_Carolina_Courthouse.png";
/* 
  TODO: Add Cookies disclaimer
  TODO: Investigate why button import is not capitalized for filename
*/

export const HomePage = () => {
  const language = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const deviceInformation = useDeviceInfo();

  const [formInputData, setFormInputData] = useState<FormState>({});

  return (
    <div className="container-fluid home-page p-0">
      <NavBar
        theme="light"
        adminVariant={false}
        language={language}
        backgroundImage={northCarolinaCourthouse}
        backgroundImageSize="933px"
      />
      <div className="primary-call-to-action z-index-1 position-relative">
        <h1 className="juan-sanchez-quote">
          “Your Dedicated Personal Injury and Workers’ Compensation Attorneys,
          You Pay Nothing Unless We Recover”
          <br></br>
          <br></br>- Juan Sanchez
        </h1>
      </div>

      <Footer language={language} />
    </div>
  );
};
