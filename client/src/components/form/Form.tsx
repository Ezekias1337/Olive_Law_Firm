// Library Imports
import { FC, useState, FormEvent, ReactNode } from "react";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
import {
  handleFormChange,
  handleSwitchChange,
} from "../../functions/forms/handleFormChange";
// Interfaces and Types
import { SetStateHookForm } from "../../constants/interfaces/InputFieldProps";
// Components
import { CreditCardInput } from "../input-fields/CreditCardInput";
import { DateInput } from "../input-fields/DateInput";
import { DropdownInput } from "../input-fields/DropdownInput";
import { EmailInput } from "../input-fields/EmailInput";
import { PasswordInput } from "../input-fields/PasswordInput";
import { PhoneNumberInput } from "../input-fields/PhoneNumberInput";
import { QuantityStepper } from "../input-fields/QuantityStepper";
import { SwitchInput } from "../input-fields/SwitchInput";
import { TextAreaInput } from "../input-fields/TextAreaInput";
import { TextInput } from "../input-fields/TextInput";
import { Button } from "../button/Button";

/* 
TODO move inputfield scss to form component
*/

export interface InputField {
  name: string;
  type: string;
  theme: string;
  additionalClassNames: string;
  placeholder: string;
  validation?: Function;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
}

interface FormProps {
  inputFields: InputField[];
  apiEndpoint?: string;
}

export const Form: FC<FormProps> = ({ inputFields, apiEndpoint }) => {
  const initialFormData: Record<string, string> = {};

  // Initialize form data for each input field
  inputFields.forEach((field) => {
    initialFormData[field.name] = "";
  });

  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFieldChange = (fieldName: string, value: string): void => {
    setFormData({ ...formData, [fieldName]: value });
    setFormErrors({ ...formErrors, [fieldName]: "" });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate the form data here based on inputFields
    const errors: Record<string, string> = {};

    inputFields.forEach((field) => {
      if (!formData[field.name]) {
        errors[field.name] = `${field.placeholder} is required`;
      } else if (field.validation && !field.validation(formData[field.name])) {
        errors[field.name] = `Invalid ${field.placeholder}`;
      }
    });

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to the server)
      console.log("Form data submitted:", formData);
    }
  };

  const renderInputFields = (inputFields: InputField[]): ReactNode[] => {
    const arrayOfInputFields: ReactNode[] = [];

    for (const inputField of inputFields) {
      let inputFieldToBePushed: ReactNode;

      switch (inputField.type) {
        /* case "CreditCard":
          inputFieldToBePushed = <CreditCardInput />
          break;
        case "Date":
          break;
        case "Dropdown":
          break;
        case "Email":
          break;
        case "Password":
          break;
        case "PhoneNumber":
          break;
        case "Quantity":
          break;
        case "Switch":
          break;
        case "TextArea":
          break; */
        case "Text":
          inputFieldToBePushed = (
            <div key={inputField.name}>
              <TextInput
                name={inputField.name}
                theme={inputField.theme}
                placeholder={inputField.placeholder}
                value={formData[inputField.name]}
                setStateHook={inputField.setStateHook}
                setErrorHook={inputField.setErrorHook}
                additionalClassNames={
                  formErrors[inputField.name] ? "is-invalid" : ""
                }
              />
              {formErrors[inputField.name] && (
                <div className="text-danger">{formErrors[inputField.name]}</div>
              )}
            </div>
          );
          break;

        default:
          console.log(
            `inputField.type of: ${inputField.type} does not match any of the options in the switch statement, returning warning in DOM`
          );
          inputFieldToBePushed = (
            <div>
              ${inputField.type} does not match any input type available
            </div>
          );
      }

      arrayOfInputFields.push(inputFieldToBePushed);
    }

    return arrayOfInputFields;
  };

  return (
    <form onSubmit={handleSubmit}>
      {renderInputFields(inputFields)}

      {/* 
        TODO: add prop to control form and button theme
      */}
      <Button
        variant={`primary`}
        /* text={language === "English" ? "Submit" : "Entregar"} */
        text="Submit"
      />
    </form>
  );
};
