// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
// Constants
import { loginStrings } from "../constants/language-strings/loginStrings";
import { textAndNumbersNoSpacesPattern } from "../../../shared/constants/regexPatterns";
import { emailAutocomplete } from "../constants/formAutocompleteStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form } from "../components/form/Form";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { Field } from "../components/form/dependents/formTypes";
// Assets and Images
import northCarolinaCourthouse from "../assets/images/backgrounds/North_Carolina_Courthouse.png";
// CSS
import "../css/page-specific/login.scss";

const Login = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, username, password, buttonText } = loginStrings;
  
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const arrayOfInputFields: Field[] = [
    {
      name: username.english,
      label: reduxLanguage === "English" ? username.english : username.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English" ? username.english : username.spanish,
      theme: "light",
      columns: "12",
      type: "email",
      /* inputType: "text",
      inputMode: "text", */
      pattern: textAndNumbersNoSpacesPattern,
      autoComplete: emailAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
  ];

  return (
    <div className="container-fluid login-container p-0">
      <NavBar
        theme="light"
        adminVariant={false}
        language={reduxLanguage}
        backgroundImage={northCarolinaCourthouse}
        backgroundImageSize="961px"
      />
      <PageHeader language={reduxLanguage} title={pageTitle} />

      <div className="login-form-wrapper padding-left-and-right"></div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default Login;
