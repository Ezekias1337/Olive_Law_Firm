// Interfaces and Types
import {
  InputFieldProps,
  DropdownFieldProps,
  CreditCardFieldProps,
} from "../../../constants/interfaces/InputFieldProps";
import { SetStateHookForm } from "../../../constants/interfaces/InputFieldProps";
import { FormState } from "../../../constants/interfaces/InputFieldProps";

/* 
  ? This is a type guard to help the typescript compiler since
  ? I'm using a union type in the renderInputFields function
*/
export type Field = InputField | DropdownField | CreditCardField;

/* 
  ? This type is used for the switch statement just to determine the type
  ? of field to return
*/
export type FieldType =
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

export interface InputField extends InputFieldProps {
  type: FieldType;
}

export interface DropdownField extends DropdownFieldProps {
  type: FieldType;
}

export interface CreditCardField extends CreditCardFieldProps {
  type: FieldType;
}

export interface FormProps {
  formTheme: "dark" | "light";
  inputFields: Field[];
  apiEndpoint: string;
  formId: string;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
  formState: FormState;
  formErrors: FormState;
}
