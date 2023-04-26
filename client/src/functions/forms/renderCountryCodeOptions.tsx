// Library Imports
import { ReactNode } from "react";
import { nanoid } from "nanoid";
// Functions, Helpers, Utils, and Hooks
import { generateImageSourceTemplate } from "./generateImageSourceTemplate";
// Interfaces and Types
import { PhoneNumberCountryCode } from "../../constants/interfaces/InputFieldProps";

export const renderCountryCodeOptions = (
  countryCodes: PhoneNumberCountryCode[]
): ReactNode[] => {
  const arrayOfCountryCodeOptions: ReactNode[] = [];

  for (const code of countryCodes) {
    const flagImageSource = generateImageSourceTemplate(code);
    const elementToPush = (
      <li
        key={nanoid()}
        id={`${code.country}-option`}
        aria-label={`${code.country}-option`}
        className="country-code-option py-2"
      >
        <img src={flagImageSource} className="country-code-icon ms-4" />
        <span className="country-code-label mx-4">{`${code.country} ${code.code}`}</span>
      </li>
    );

    arrayOfCountryCodeOptions.push(elementToPush);
  }

  return arrayOfCountryCodeOptions;
};
