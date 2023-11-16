// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
import { Field } from "../components/form/dependents/formTypes";
// Constants
import { loginStrings } from "../constants/language-strings/loginStrings";
import {
  textAndNumbersNoSpacesPattern,
  textAndNumbersAndSpecialCharsNoSpacesPattern,
} from "../../../shared/constants/regexPatterns";
import {
  emailAutocomplete,
  currentPasswordAutocomplete,
} from "../constants/formAutocompleteStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form } from "../components/form/Form";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Footer } from "../components/general-page-layout/footer/Footer";
// Assets and Images
import northCarolinaCourthouse from "../assets/images/backgrounds/North_Carolina_Courthouse.png";
// CSS
import "../css/page-specific/login.scss";

const Login = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, email, password, buttonText, forgotPassword } =
    loginStrings;

  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const arrayOfInputFields: Field[] = [
    {
      name: email.english,
      label: reduxLanguage === "English" ? email.english : email.spanish,
      additionalClassNames: "",
      placeholder: reduxLanguage === "English" ? email.english : email.spanish,
      theme: "dark",
      columns: "12",
      type: "email",
      inputType: "email",
      inputMode: "text",
      pattern: textAndNumbersNoSpacesPattern,
      autoComplete: emailAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },

    {
      name: password.english,
      label: reduxLanguage === "English" ? password.english : password.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English" ? password.english : password.spanish,
      theme: "dark",
      columns: "12",
      type: "password",
      inputMode: "text",
      pattern: textAndNumbersAndSpecialCharsNoSpacesPattern,
      autoComplete: currentPasswordAutocomplete,
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
        backgroundImageSize="880px"
      />
      <PageHeader
        language={reduxLanguage}
        title={pageTitle}
        additionalClassNames="position-relative"
      />

      <div className="login-form-wrapper padding-left-and-right">
        <Form
          language={reduxLanguage}
          formTheme="dark"
          inputFields={arrayOfInputFields}
          apiEndpoint="placeholder"
          formId="admin-login"
          setStateHook={setFormInputData}
          setErrorHook={setFormErrorData}
          formState={formInputData}
          formErrors={formErrorData}
          button1Text={
            reduxLanguage === "English"
              ? buttonText.english
              : buttonText.spanish
          }
          button1Variant="neutral"
          formBackgroundIsImage={true}
        />

        <div className="forgot-password-wrapper container">
          <GeneralLink
            text={
              reduxLanguage === "English"
                ? forgotPassword.english
                : forgotPassword.spanish
            }
            url="/forgot-password"
            theme="light"
            openInNewTab={false}
            additionalClassNames="position-relative"
          />
        </div>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default Login;
