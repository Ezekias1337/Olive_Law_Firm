// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState, useEffect } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
import useWindowWidth from "../hooks/useWindowWidth";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
import { Field } from "../components/form/dependents/formTypes";
// Constants
import { contactUsStrings } from "../constants/language-strings/contactUsStrings";
import {
  fullNameAutocomplete,
  phoneNumberAutocomplete,
  emailAutocomplete,
} from "../constants/formAutocompleteStrings";
import {
  textOnlyPattern,
  americanDatePattern,
  phoneNumberPattern,
  emailPattern,
  textAndNumbersPattern,
} from "../../../shared/constants/regexPatterns";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { GeneralLink } from "../components/general-page-layout/link/GeneralLink";
import { Form } from "../components/form/Form";
// CSS
import "../css/page-specific/contact-us.scss";
// Assets and Images
import googleMapsLocation from "../assets/images/google-maps-location.png";

const ContactUs = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const deviceInformation = useDeviceInfo();
  const windowWidth = useWindowWidth();

  const [formInputData, setFormInputData] = useState<FormState>({});
  const [formErrorData, setFormErrorData] = useState<FormState>({});
  const [inputFieldColumns, setInputFieldColumns] = useState("6");

  const {
    pageTitle,
    formFields,
    businessPhone,
    businessEmail,
    businessAddress,
  } = contactUsStrings;

  const {
    fullName,
    dateOfIncident,
    phoneNumber,
    treatmentStatus,
    preferredLanguage,
    practiceArea,
    emailAddress,
    opposition,
    describeIncident,
  } = formFields;

  useEffect(() => {
    if (windowWidth <= 700) {
      setInputFieldColumns("12");
    } else {
      setInputFieldColumns("6");
    }
  }, [windowWidth]);

  /* 
    TODO: Dropdown menus and credit card field labels aren't translating
    TODO: form error should be in spanish when page is spanish
    TODO: Look into making required one of the form attributes
    TODO: Make sure correct css is applied to errored out fields
    TODO: Make setStateHook and setErrorHook only be passed to form so it doesn't 
    TODO: Make dropdown options also translate
    TODO: Remove theme from input field props, keep only in form
    TODO: Look into datalist element for dropdown field
    TODO: Add multiple attribute prop to dropdown component to allow multiple selections
    TODO: Make function to supply repeated props to fields
    need to be duplicated
    TODO: Make select arrow flip when menu is open
    TODO: MAKE SURE ALL INPUT FIELD COMPONENTS USE REGEX FROM SHARED FOLDER
    TODO: Remove columns attribute from input field components since it's handled by the form component
    TODO: Make an example component with props for each input field, so I can easily use
      each input field without having to check which props are required for each type
  */

  const arrayOfInputFields: Field[] = [
    {
      name: fullName.english,
      label: reduxLanguage === "English" ? fullName.english : fullName.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English" ? fullName.english : fullName.spanish,
      theme: "light",
      columns: inputFieldColumns,
      type: "text",
      inputType: "text",
      inputMode: "text",
      pattern: textOnlyPattern,
      autoComplete: fullNameAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: phoneNumber.english,
      label:
        reduxLanguage === "English" ? phoneNumber.english : phoneNumber.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English" ? phoneNumber.english : phoneNumber.spanish,
      theme: "light",
      columns: inputFieldColumns,
      type: "phoneNumber",
      inputType: "tel",
      inputMode: "tel",
      pattern: phoneNumberPattern,
      autoComplete: phoneNumberAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
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
      theme: "light",
      columns: inputFieldColumns,
      type: "email",
      inputType: "email",
      inputMode: "email",
      pattern: emailPattern,
      autoComplete: emailAutocomplete,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: preferredLanguage.english,
      label:
        reduxLanguage === "English"
          ? preferredLanguage.english
          : preferredLanguage.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English"
          ? preferredLanguage.english
          : preferredLanguage.spanish,
      theme: "light",
      columns: inputFieldColumns,
      type: "dropdown",
      inputType: "text",
      inputMode: "text",
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      dropdownOptions: ["English", "Español"],
      required: true,
    },
    {
      name: dateOfIncident.english,
      label:
        reduxLanguage === "English"
          ? dateOfIncident.english
          : dateOfIncident.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English"
          ? dateOfIncident.english
          : dateOfIncident.spanish,
      theme: "light",
      columns: inputFieldColumns,
      type: "date",
      inputType: "date",
      inputMode: "text",
      pattern: americanDatePattern,
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
    {
      name: treatmentStatus.english,
      label:
        reduxLanguage === "English"
          ? treatmentStatus.english
          : treatmentStatus.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English"
          ? treatmentStatus.english
          : treatmentStatus.spanish,
      theme: "light",
      columns: inputFieldColumns,
      type: "dropdown",
      inputType: "text",
      inputMode: "text",
      maxLength: 30,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      dropdownOptions: ["Not Started", "In Progress"],
      required: true,
    },
    {
      name: describeIncident.english,
      label:
        reduxLanguage === "English"
          ? describeIncident.english
          : describeIncident.spanish,
      additionalClassNames: "",
      placeholder:
        reduxLanguage === "English"
          ? describeIncident.english
          : describeIncident.spanish,
      theme: "light",
      columns: "12",
      type: "textArea",
      inputType: "text",
      inputMode: "text",
      pattern: textAndNumbersPattern,
      maxLength: 3000,
      parentFormState: formInputData,
      setStateHook: setFormInputData,
      setErrorHook: setFormErrorData,
      required: true,
    },
  ];

  return (
    <div className="container-fluid contact-us-container home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner/>
      <Form
        language={reduxLanguage}
        formTheme="light"
        inputFields={arrayOfInputFields}
        apiEndpoint="/placeholder-endpoint"
        formId="contact-us-form"
        setStateHook={setFormInputData}
        setErrorHook={setFormErrorData}
        formState={formInputData}
        formErrors={formErrorData}
        button1Text={reduxLanguage === "English" ? "Submit" : "Entregar"}
        button1Variant="primary"
      />

      <div className="contact-info-wrapper padding-left-and-right">
        <div className="google-maps-image-link-wrapper">
          <a
            className="google-maps-image-link"
            href="https://maps.app.goo.gl/y4c2grr8xZhsGh4L9"
            target="_blank"
          >
            <img
              src={googleMapsLocation}
              className="google-maps-image"
              alt="Google Maps Location of Law Firm"
            ></img>
          </a>
        </div>

        <div className="text-wrapper">
          <h3>Phone</h3>
          <h4>(704) 377-9222</h4>

          <h3>Email</h3>
          <h4>receptionist@osa-law.com</h4>

          <h3>Address</h3>
          <h4>200 Queens Rd Suite #200</h4>
          <h4>Charlotte, NC 28204</h4>

          <a href="https://maps.app.goo.gl/y4c2grr8xZhsGh4L9" target="_blank">
            <h3>Get Directions</h3>
          </a>
        </div>
      </div>
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ContactUs;
