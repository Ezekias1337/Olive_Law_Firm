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
import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
} from "../../constants/interfaces/InputFieldProps";
import { SetStateHookForm } from "../../constants/interfaces/InputFieldProps";
import { FormState } from "../../constants/interfaces/InputFieldProps";
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

/* 
  This is a type guard to help the typescript compiler since
  I'm using a union type in renderInputFields
*/
type Field = InputField | DropdownField | CreditCardField;

/* 
  this type is used for the switch statement just to determine the type
  of field to return
*/
type FieldType =
  | "creditCard"
  | "date"
  | "dropdown"
  | "email"
  | "password"
  | "phoneNumber"
  | "quantity"
  | "switch"
  | "text"
  | "textArea";

interface InputField extends InputFieldProps {
  type: FieldType;
}

interface DropdownField extends DropdownFieldProps {
  type: FieldType;
}

interface CreditCardField extends CreditCardFieldProps {
  type: FieldType;
}

interface FormProps {
  formTheme: "dark" | "light";
  inputFields: (InputField | DropdownField | CreditCardField)[];
  apiEndpoint?: string;
  formId: string;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
  formState: FormState;
  formErrors: FormState;
}



export const Form: FC<FormProps> = ({
  formTheme,
  inputFields,
  apiEndpoint,
  formId,
  setStateHook,
  setErrorHook,
  formState,
  formErrors,
}) => {
  const initialFormData: Record<string, string> = {};

  // Initialize form data for each input field
  inputFields.forEach((field) => {
    initialFormData[camelCasifyString(field.name)] = "";
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate the form data here based on inputFields
    const errors: Record<string, string> = {};

    inputFields.forEach((field) => {
      if (!formState[camelCasifyString(field.name)]) {
        errors[
          camelCasifyString(field.name)
        ] = `${field.placeholder} is required`;
      } /* else if (
        field.validation &&
        !field.validation(formState[camelCasifyString(field.name)])
      ) {
        errors[camelCasifyString(field.name)] = `Invalid ${field.placeholder}`;
      } */
    });

    setErrorHook(errors);

    if (Object.keys(errors).length === 0) {
      // Handle form submission (e.g., send data to the server)
      console.log("Form data submitted:", formState);
    }
  };

  const isDropdownField = (field: Field): field is DropdownField =>
    (field as DropdownField).dropdownOptions !== undefined;

  const renderInputFields = (inputFields: Field[]): ReactNode[] => {
    
    
    const arrayOfInputFields: ReactNode[] = [];

    for (const inputField of inputFields) {
      let inputFieldToBePushed: ReactNode;

      switch (inputField.type) {
        case "creditCard":
          inputFieldToBePushed = (
            <div key={inputField.name}>
              <CreditCardInput
                name={inputField.name}
                additionalClassNames={`${inputField.additionalClassNames} ${
                  formErrors[inputField.name] ? "form-error" : ""
                }`}
                placeholder={inputField.placeholder}
                theme={formTheme}
                columns={inputField.columns}
                defaultValue={
                  inputField.defaultValue !== undefined
                    ? inputField.defaultValue
                    : ""
                }
                inputType={inputField.inputType}
                inputMode={inputField.inputMode}
                pattern={inputField.pattern}
                autoComplete={
                  inputField.autoComplete !== undefined
                    ? inputField.autoComplete
                    : ""
                }
                maxLength={
                  inputField.maxLength !== undefined
                    ? inputField.maxLength
                    : 200
                }
                childrenToRender={
                  inputField.childrenToRender !== undefined
                    ? inputField.childrenToRender
                    : undefined
                }
                icon={
                  inputField.icon !== undefined ? inputField.icon : undefined
                }
                setStateHook={setStateHook}
                setErrorHook={setErrorHook}
              />
              {formErrors[camelCasifyString(inputField.name)] && (
                <div className="form-error-message">
                  {formErrors[camelCasifyString(inputField.name)]}
                </div>
              )}
            </div>
          );
          break;
        /* case "date":
          break; */
        case "dropdown":
          if (isDropdownField(inputField)) {
            inputFieldToBePushed = (
              <div key={inputField.name}>
                <DropdownInput
                  name={inputField.name}
                  additionalClassNames={`${inputField.additionalClassNames} ${
                    formErrors[inputField.name] ? "form-error" : ""
                  }`}
                  placeholder={inputField.placeholder}
                  theme={formTheme}
                  columns={inputField.columns}
                  defaultValue={
                    inputField.defaultValue !== undefined
                      ? inputField.defaultValue
                      : ""
                  }
                  inputType={inputField.inputType}
                  inputMode={inputField.inputMode}
                  pattern={inputField.pattern}
                  autoComplete={
                    inputField.autoComplete !== undefined
                      ? inputField.autoComplete
                      : ""
                  }
                  maxLength={
                    inputField.maxLength !== undefined
                      ? inputField.maxLength
                      : 200
                  }
                  childrenToRender={
                    inputField.childrenToRender !== undefined
                      ? inputField.childrenToRender
                      : undefined
                  }
                  icon={
                    inputField.icon !== undefined ? inputField.icon : undefined
                  }
                  setStateHook={setStateHook}
                  setErrorHook={setErrorHook}
                  dropdownOptions={inputField.dropdownOptions}
                />
                {formErrors[camelCasifyString(inputField.name)] && (
                  <div className="form-error-message">
                    {formErrors[camelCasifyString(inputField.name)]}
                  </div>
                )}
              </div>
            );
          }

          break;
        /* case "email":
          break;
        case "password":
          break;
        case "phoneNumber":
          break;
        case "quantity":
          break;
        case "switch":
          break;*/
        case "text":
          inputFieldToBePushed = (
            <div key={inputField.name}>
              <TextInput
                name={inputField.name}
                additionalClassNames={`${inputField.additionalClassNames} ${
                  formErrors[inputField.name] ? "form-error" : ""
                }`}
                placeholder={inputField.placeholder}
                theme={formTheme}
                columns={inputField.columns}
                defaultValue={
                  inputField.defaultValue !== undefined
                    ? inputField.defaultValue
                    : ""
                }
                inputType={inputField.inputType}
                inputMode={inputField.inputMode}
                pattern={inputField.pattern}
                autoComplete={
                  inputField.autoComplete !== undefined
                    ? inputField.autoComplete
                    : ""
                }
                maxLength={
                  inputField.maxLength !== undefined
                    ? inputField.maxLength
                    : 200
                }
                childrenToRender={
                  inputField.childrenToRender !== undefined
                    ? inputField.childrenToRender
                    : undefined
                }
                icon={
                  inputField.icon !== undefined ? inputField.icon : undefined
                }
                setStateHook={setStateHook}
                setErrorHook={setErrorHook}
              />
              {formErrors[camelCasifyString(inputField.name)] && (
                <div className="form-error-message">
                  {formErrors[camelCasifyString(inputField.name)]}
                </div>
              )}
            </div>
          );
          break;
        case "textArea":
          inputFieldToBePushed = (
            <div key={inputField.name}>
              <TextAreaInput
                name={inputField.name}
                additionalClassNames={`${inputField.additionalClassNames} ${
                  formErrors[inputField.name] ? "form-error" : ""
                }`}
                placeholder={inputField.placeholder}
                theme={formTheme}
                columns={inputField.columns}
                defaultValue={
                  inputField.defaultValue !== undefined
                    ? inputField.defaultValue
                    : ""
                }
                inputType={inputField.inputType}
                inputMode={inputField.inputMode}
                pattern={inputField.pattern}
                autoComplete={
                  inputField.autoComplete !== undefined
                    ? inputField.autoComplete
                    : ""
                }
                maxLength={
                  inputField.maxLength !== undefined
                    ? inputField.maxLength
                    : 2000
                }
                childrenToRender={
                  inputField.childrenToRender !== undefined
                    ? inputField.childrenToRender
                    : undefined
                }
                icon={
                  inputField.icon !== undefined ? inputField.icon : undefined
                }
                setStateHook={setStateHook}
                setErrorHook={setErrorHook}
              />
              {formErrors[camelCasifyString(inputField.name)] && (
                <div className="form-error-message">
                  {formErrors[camelCasifyString(inputField.name)]}
                </div>
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
    <form onSubmit={handleSubmit} id={formId}>
      {renderInputFields(inputFields)}
      <Button
        variant={formTheme === "dark" ? "primary" : "secondary"}
        type="submit"
        /* text={language === "English" ? "Submit" : "Entregar"} */
        text="Submit"
        buttonId={formId}
      />
    </form>
  );
};
