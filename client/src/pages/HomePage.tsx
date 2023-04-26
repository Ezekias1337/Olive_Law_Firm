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

// CSS
import "../css/page-specific/home.scss";
// Assets and Images

export const HomePage = () => {
  const language = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const deviceInformation = useDeviceInfo();

  const [formInputData, setFormInputData] = useState<FormState>({});

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={language} />

      <Footer language={language}/>
    </div>
  );
};
