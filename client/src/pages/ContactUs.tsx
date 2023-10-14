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
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Form, InputField } from "../components/form/Form";
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
    TODO: use InputField interface to enforce typesafety on arrayOfInputFields
    TODO: use formfields from contactUsStrings
    TODO: revise form component to translate to spanish when needed
    TODO: move form css into form component instead of import into every input type
    TODO: look into autocomplete attributes
    TODO: Look into incorrect use of label element for DOM error
    TODO: Look into making required one of the form attributes
    TODO: Fix regex for input field
    TODO: Make form have theme prop and apply to input fields and button
  */

  const arrayOfInputFields = [
    {
      name: "First Name",
      type: "Text",
      theme: "Dark",
      additionalClassNames: "",
      placeholder: "First Name",
    },
    {
      name: "Last Name",
      type: "Text",
      theme: "Dark",
      additionalClassNames: "",
      placeholder: "Last Name",
    },
  ];

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} />
      <Form
        formId="contact-us-form"
        inputFields={arrayOfInputFields}
        apiEndpoint="/placeholder-endpoint"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        formState={formInputData}
        formErrors={formErrorData}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};
