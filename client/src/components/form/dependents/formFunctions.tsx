// Library Imports
import { FC, FormEvent, ReactNode } from "react";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
} from "../../../constants/interfaces/InputFieldProps";
import {
  Field,
  FieldType,
  InputField,
  DropdownField,
  CreditCardField,
  FormProps,
} from "./formTypes";
import { SetStateHookForm } from "../../../constants/interfaces/InputFieldProps";
import { FormState } from "../../../constants/interfaces/InputFieldProps";
// Components
import { CreditCardInput } from "../../input-fields/CreditCardInput";
import { DateInput } from "../../input-fields/DateInput";
import { DropdownInput } from "../../input-fields/DropdownInput";
import { EmailInput } from "../../input-fields/EmailInput";
import { PasswordInput } from "../../input-fields/PasswordInput";
import { PhoneNumberInput } from "../../input-fields/PhoneNumberInput";
import { QuantityStepper } from "../../input-fields/QuantityStepper";
import { SwitchInput } from "../../input-fields/SwitchInput";
import { TextAreaInput } from "../../input-fields/TextAreaInput";
import { TextInput } from "../../input-fields/TextInput";
import { Button } from "../../button/Button";
import { FormError } from "./FormError";

/* 
    ? These is type of field x functions would be basically useless in vanillaJS,
    ? These are simply used to please the compiler for accessing attributes of types that aren't present
    ? in all of the types, without them the compiler will complain
*/

const isDropdownField = (field: Field): field is DropdownField =>
  (field as DropdownField).dropdownOptions !== undefined;

/* 
    ? The input fields share the majority of their props. In order to reduce clutter and superflousness this function
    ? is used to provide the input components their props
*/

const generateSharedInputProps = (
  inputField: Field,
  formErrors: FormState,
  formTheme: "dark" | "light",
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): InputField => {
  const sharedInputProps: InputField = {
    name: inputField.name,
    additionalClassNames: `${inputField.additionalClassNames} ${
      formErrors[inputField.name] ? "form-error" : ""
    }`,
    placeholder: `${inputField.placeholder}`,
    theme: formTheme,
    columns: inputField.columns,
    defaultValue: `${
      inputField.defaultValue !== undefined ? inputField.defaultValue : ""
    }`,
    inputType: inputField.inputType,
    inputMode: inputField.inputMode,
    pattern: inputField.pattern,
    autoComplete: `${
      inputField.autoComplete !== undefined ? inputField.autoComplete : ""
    }`,
    maxLength: inputField.maxLength !== undefined ? inputField.maxLength : 200,
    childrenToRender:
      inputField.childrenToRender !== undefined
        ? inputField.childrenToRender
        : undefined,
    icon: inputField.icon !== undefined ? inputField.icon : undefined,
    setStateHook: setStateHook,
    setErrorHook: setErrorHook,
    type: inputField.type,
  };

  return sharedInputProps;
};

export const handleSubmit = (
  e: FormEvent,
  inputFields: InputField[],
  formState: FormState,
  setErrorHook: SetStateHookForm,
  apiEndpoint: string
) => {
  e.preventDefault();

  // ! Validate the form data here based on inputFields
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
    // ! Handle form submission (e.g., send data to the server)
    console.log("Form data submitted:", formState);
  }
};

export const renderInputFields = (
  inputFields: Field[],
  formErrors: FormState,
  formTheme: "dark" | "light",
  setStateHook: SetStateHookForm,
  setErrorHook: SetStateHookForm
): ReactNode[] => {
  const arrayOfInputFields: ReactNode[] = [];

  for (const inputField of inputFields) {
    let inputFieldToBePushed: ReactNode;

    const generalInputProps = generateSharedInputProps(
      inputField,
      formErrors,
      formTheme,
      setStateHook,
      setErrorHook
    );

    switch (inputField.type) {
      /* case "creditCard":
              inputFieldToBePushed = (
                <div key={inputField.name}>
                  <CreditCardInput
                    {...generalInputProps}
                  />
                  <FormError formErrors={formErrors} inputField={inputField} />
                </div>
              );
              break; */
      /* case "date":
              break; */
      case "dropdown":
        if (isDropdownField(inputField)) {
          inputFieldToBePushed = (
            <div key={inputField.name}>
              <DropdownInput
                {...generalInputProps}
                dropdownOptions={inputField.dropdownOptions}
              />
              <FormError formErrors={formErrors} inputField={inputField} />
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
            <TextInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      case "textArea":
        inputFieldToBePushed = (
          <div key={inputField.name}>
            <TextAreaInput {...generalInputProps} />
            <FormError formErrors={formErrors} inputField={inputField} />
          </div>
        );
        break;
      default:
        console.log(
          `inputField.type of: ${inputField.type} does not match any of the options in the switch statement, returning warning in DOM`
        );
        inputFieldToBePushed = (
          <div>"{inputField.type}" does not match any input type available, check your spelling. 🗿</div>
        );
    }

    arrayOfInputFields.push(inputFieldToBePushed);
  }

  return arrayOfInputFields;
};
