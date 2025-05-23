// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
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
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form } from "../components/form/Form";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/login.scss";

const Login = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, emailAddress, password, buttonText, forgotPassword } =
    loginStrings;

  const [formInputData, setFormInputData] = useState<FormState>({
    emailAddress: "",
    password: "",
  });
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const arrayOfInputFields: Field[] = [
    {
      name: emailAddress.english,
      label:
        reduxLanguage === "English"
          ? emailAddress.english
          : emailAddress.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English"
          ? emailAddress.english
          : emailAddress.spanish,
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
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader
        language={reduxLanguage}
        title={pageTitle}
        additionalClassNames="position-relative"
        includeBanner
      />

      <div className="login-form-wrapper display-flex justify-content-center">
        <div className="input-field-wrapper">
          <Form
            language={reduxLanguage}
            formTheme="dark"
            inputFields={arrayOfInputFields}
            apiEndpoint="/api/users/login"
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
            buttonSize="large"
            redirectUrl="/admin-home"
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
      </div>
      <CookieBanner
        bodyText={
          reduxLanguage === "English"
            ? "To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
            : "Para garantizar que tenga la mejor experiencia posible mientras nos visita, utilizamos cookies y tecnologías similares."
        }
        button1={{
          text: "Dismiss",
          variant: "primary",
          buttonSize: "small",
        }}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default Login;
