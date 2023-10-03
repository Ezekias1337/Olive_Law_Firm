// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
// Constants
import { contactUsStrings } from "../constants/language-strings/contactUsStrings";
// Components
import { Footer } from "../components/general-page-layout/footer/Footer";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
// CSS
import "../css/page-specific/home.scss";

export const ContactUs = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const deviceInformation = useDeviceInfo();
  const [formInputData, setFormInputData] = useState<FormState>({});

  const {
    pageTitle,
    formFields,
    businessPhone,
    businessEmail,
    businessAddress,
  } = contactUsStrings;

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} />
      
      <Footer language={reduxLanguage} />
    </div>
  );
};
