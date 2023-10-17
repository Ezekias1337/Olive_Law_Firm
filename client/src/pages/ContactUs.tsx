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
import { contactUsStrings } from "../constants/language-strings/contactUsStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form } from "../components/form/Form";
// CSS
import "../css/page-specific/home.scss";

export const ContactUs = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const deviceInformation = useDeviceInfo();
  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});

  const {
    pageTitle,
    formFields,
    businessPhone,
    businessEmail,
    businessAddress,
  } = contactUsStrings;

  /* 
    TODO: use formfields from contactUsStrings
    TODO: revise form component to translate to spanish when needed
    TODO: Look into incorrect use of label element for DOM error
    TODO: Look into making required one of the form attributes
    TODO: Fix regex for input field
    TODO: Make form have theme prop and apply to input fields and button
  */

  const arrayOfInputFields: Field[] = [
    {
      name: "First Name",
      additionalClassNames: "",
      placeholder: "First Name",
      theme: "light",
      columns: "6",
      type: "text",
      inputType: "text",
      inputMode: "text",
      pattern: "",
      autoComplete: "",
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
    },
    {
      name: "Last Name",
      additionalClassNames: "",
      placeholder: "Last Name",
      theme: "light",
      columns: "6",
      type: "text",
      inputType: "text",
      inputMode: "text",
      pattern: "",
      autoComplete: "",
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
    },
  ];

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} />
      <Form
        formTheme="light"
        inputFields={arrayOfInputFields}
        apiEndpoint="/placeholder-endpoint"
        formId="contact-us-form"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        formState={formInputData}
        formErrors={formErrorData}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};
