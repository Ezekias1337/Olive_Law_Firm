// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Constants
// Interfaces and Types
import { FormState } from "../constants/interfaces/InputFieldProps";
// Components
import { Footer } from "../components/general-page-layout/footer/Footer";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { TextInput } from "../components/input-fields/TextInput";
import { DropdownInput } from "../components/input-fields/DropdownInput";
import { SearchInput } from "../components/input-fields/SearchInput";
import { DateInput } from "../components/input-fields/DateInput";
import { TextAreaInput } from "../components/input-fields/TextAreaInput";
import { CreditCardInput } from "../components/input-fields/CreditCardInput";
import { PasswordInput } from "../components/input-fields/PasswordInput";
import { EmailInput } from "../components/input-fields/EmailInput";
import { PhoneNumberInput } from "../components/input-fields/PhoneNumberInput";
import { CountryCodeInput } from "../components/input-fields/CountryCodeInput";
import { SwitchInput } from "../components/input-fields/SwitchInput";
// CSS
import "../css/page-specific/home.scss";
// Assets and Images

export const HomePage = () => {
  const deviceInformation = useDeviceInfo();

  const [formInputData, setFormInputData] = useState<FormState>({});

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} />
      <div className="row form-test mx-1 mb-5">
        <TextInput
          name="Customer Name"
          theme="light"
          setStateHook={setFormInputData}
        />
        <DropdownInput
          name="Practice Area"
          theme="light"
          dropdownOptions={["Workman's Comp", "Dog Bite"]}
          setStateHook={setFormInputData}
        />
        <SearchInput
          name="Search Bar"
          theme="light"
          setStateHook={setFormInputData}
        />
        <DateInput
          name="Date Of Incident"
          theme="light"
          inputType="date"
          setStateHook={setFormInputData}
        />
        <TextAreaInput
          name="Incident Details"
          theme="light"
          setStateHook={setFormInputData}
        />
        <CreditCardInput
          name="Credit Card Number"
          theme="light"
          creditCardNumber=""
          setStateHook={setFormInputData}
        />
        <PasswordInput
          name="Password"
          theme="light"
          setStateHook={setFormInputData}
        />
        <EmailInput
          name="Email Address"
          theme="light"
          setStateHook={setFormInputData}
        />
        <PhoneNumberInput
          name="Phone Number"
          theme="light"
          parentFormState={formInputData}
          setStateHook={setFormInputData}
        />
        <SwitchInput
          name="Language"
          theme="light"
          setStateHook={setFormInputData}
        />
      </div>

      <Footer />
    </div>
  );
};
