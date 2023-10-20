// Library Imports
import { FC } from "react";
import { nanoid } from "nanoid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
import { phoneNumberPattern } from "../../../../shared/constants/regexPatterns";
import { phoneNumberAutocomplete } from "../../constants/formAutocompleteStrings";
// Components
import { TextInput } from "./TextInput";
import { CountryCodeInput } from "./CountryCodeInput";

/* 
    ! THIS COMPONENT IS NOT COMPLETED
    ! Need to extend onclick to the arrow and make selecting
    ! a country update state
    ! need to fix re-renders from other inputs updating
    ! need selecting country to add the country code
    ! need to make user input formatted to (555) 555-5555
    ! need to make arrow direction change when dropdown opens
*/

export const PhoneNumberInput: FC<InputFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  parentFormState,
  setStateHook,
}) => {
  return (
    <>
      <TextInput
        name={name}
        additionalClassNames="phone-number-input z-index-1"
        placeholder="(555) 555-5555"
        theme={theme}
        columns={columns}
        defaultValue={defaultValue}
        inputType="tel"
        inputMode="tel"
        autoComplete={phoneNumberAutocomplete}
        pattern={phoneNumberPattern}
        childrenToRender={[
          <CountryCodeInput theme={theme} key={nanoid()} />,
          <div
            className={`flag-separator ${theme}-separator`}
            key={nanoid()}
          ></div>,
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`country-code-arrow country-arrow-${theme}`}
          />,
        ]}
        setStateHook={setStateHook}
      />
    </>
  );
};
