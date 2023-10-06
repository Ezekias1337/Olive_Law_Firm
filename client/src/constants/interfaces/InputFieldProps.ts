// Library Imports
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface FormState {
  [key: string]: string | boolean;
}

export type SetStateHookForm = Dispatch<SetStateAction<FormState>>;
export type SetStateHookString = Dispatch<SetStateAction<string>>;

export interface InputFieldProps {
  name: string;
  additionalClassNames?: string;
  placeholder?: string;
  theme: string;
  columns?: string;
  defaultValue?: string;
  value?: string;
  inputType?: string;
  inputMode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search"
    | undefined;
  pattern?: string;
  autoComplete?: string;
  maxLength?: number;
  parentFormState?: FormState;
  childrenToRender?: ReactNode[] | undefined;
  icon?: IconProp;
  setStateHook: SetStateHookForm;
  setErrorHook: SetStateHookForm;
}

export interface DropdownFieldProps extends InputFieldProps {
  dropdownOptions: string[];
}

export interface CreditCardFieldProps extends InputFieldProps {
  creditCardNumber: string;
}

export interface PhoneNumberCountryCode {
  country: string;
  code: string;
  abbreviation: string;
}

export interface PhoneNumberFlag {
  flagImageSource: string;
  countryCode: string;
}

export interface CountryCodeInputFieldProps {
  theme: string;
  /* setStateHook: SetStateHookString; */
}
