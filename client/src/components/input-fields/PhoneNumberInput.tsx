// Library Imports
import { FC, useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
import { phoneNumberPattern } from "../../../../shared/constants/regexPatterns";
import { phoneNumberAutocomplete } from "../../constants/formAutocompleteStrings";
import { FormUpdateEvent } from "../../functions/forms/handleFormChange";
// Components
import { TextInput } from "./TextInput";
import { CountryCodeInput } from "./CountryCodeInput";

/* 
    ! THIS COMPONENT IS NOT COMPLETED
    ! need selecting country to add the country code
    ! need to make user input formatted to (555) 555-5555
    ! Need to make auto complete select the correct country
    ! Need to make default value select the correct country
    ! Need to make copy paste select the correct country
    ! Make typing country name jump towards option in country dropdown (or have search bar)
    ! Need to have unique functions for each type of format, not all follow (555) 555-5555
    ! Should make country code display inside the text field and be undeletable
*/

interface BackspacePresentObject {
  isPresent: boolean;
  spacesToDelete: number;
}

export const PhoneNumberInput: FC<InputFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  theme,
  columns = "6",
  defaultValue = "",
  required,
  setStateHook,
  setErrorHook,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [countryImage, setCountryImage] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const previousInputLength = useRef<number>(phoneNumber.length);

  const isDecorativeSpacePresent = (
    inputFieldValue: string
  ): BackspacePresentObject => {
    const strLength = inputFieldValue.length;
    const lastChar = inputFieldValue[strLength - 1];
    const listOfDecorativeChars: string[] = ["(", ")", "-", " "];
    /* console.log("inputFieldValue", inputFieldValue);
    console.log("lastChar", lastChar); */

    if (listOfDecorativeChars.includes(lastChar)) {
      let spacesToDelete = 1;
      if (lastChar === listOfDecorativeChars[2]) {
        spacesToDelete = 1;
      } else if (lastChar === listOfDecorativeChars[3]) {
        spacesToDelete = 3;
      } else if (lastChar === listOfDecorativeChars[0]) {
        spacesToDelete = 1;
      }
      const objToReturn = {
        isPresent: true,
        spacesToDelete: spacesToDelete,
      };
      return objToReturn;
    } else {
      return {
        isPresent: false,
        spacesToDelete: 0,
      };
    }
  };

  const handleInputChange = (e: FormUpdateEvent) => {
    const currentInputValue = e.target.value;
    const currentInputLength = currentInputValue.length;
    const doesInputHaveDecorativeSpace =
      isDecorativeSpacePresent(currentInputValue);

    let formattedInput = currentInputValue;

    if (
      currentInputLength < previousInputLength.current &&
      doesInputHaveDecorativeSpace.isPresent === true
    ) {
      /* 
        ? Here need to check if last char is in listOfDecorativeChars,
        ? and if so, check if second to last char is also in 
        ? Then remove them from the string
      */
      if (doesInputHaveDecorativeSpace.spacesToDelete !== 0) {
        formattedInput = currentInputValue.slice(
          0,
          -doesInputHaveDecorativeSpace.spacesToDelete
        );
      }
    } else {
      /* 
      ! The following three if statements are used to add formatting
      ! to the user input, but it's for US phone numbers, these
      ! will need to be revised to handle other countries formats in the future
    */

      /* Add First Parenthese */
      if (currentInputValue[0] !== "(") {
        formattedInput = `(${currentInputValue}`;
      }

      /* Add Second Parenthese and Gap*/
      if (currentInputValue[4] !== ")" && currentInputLength >= 4) {
        formattedInput = `${formattedInput}) `;
      }
      console.log("currentInputValue: ", currentInputValue)
      console.log("previousInputLength.current: ", previousInputLength.current)
      
      /* Add Dash */
      if (currentInputValue[9] !== "-" && currentInputLength >= 9) {
        formattedInput = `${formattedInput}-`;
      }
    }
    //console.log("formattedInput: ", formattedInput);

    setPhoneNumber(formattedInput);
    e.target.value = formattedInput;
  };

  useEffect(() => {
    previousInputLength.current = phoneNumber.length;
  }, [phoneNumber]);

  return (
    <>
      <TextInput
        name={name}
        label={label}
        additionalClassNames={`phone-number-input z-index-1 ${additionalClassNames}`}
        placeholder="(555) 555-5555"
        theme={theme}
        columns={columns}
        defaultValue={defaultValue}
        required={required}
        inputType="tel"
        inputMode="tel"
        pattern={phoneNumberPattern}
        autoComplete={phoneNumberAutocomplete}
        maxLength={19}
        setStateHook={setStateHook}
        setErrorHook={setErrorHook}
        handleInputChange={handleInputChange}
        childrenToRender={[
          <CountryCodeInput
            theme={theme}
            key={`${name}-country-code-selector`}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            countryImage={countryImage}
            setCountryImage={setCountryImage}
            countryCode={countryCode}
            setCountryCode={setCountryCode}
          />,
          <div
            className={`flag-separator ${theme}-separator`}
            key={`${name}-flag-selector`}
          ></div>,
          <FontAwesomeIcon
            icon={showMenu === false ? faChevronDown : faChevronUp}
            className={`country-code-arrow country-arrow-${theme}`}
            onClick={() => setShowMenu(!showMenu)}
            key={`${name}-menu-arrow`}
          />,
        ]}
      />
    </>
  );
};
