// Library Imports
import { FC, useEffect, useState, ChangeEvent } from "react";
import {
  faCcAmex,
  faCcVisa,
  faCcMastercard,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
// Functions, Helpers and Utils
import {
  handleFormChange,
  FormUpdateEvent,
  CreditCardUpdateEvent,
} from "../../functions/forms/handleFormChange";
// Interfaces and Types
import { CreditCardFieldProps } from "../../constants/interfaces/InputFieldProps";
import { creditCardNumberPattern } from "../../../../shared/constants/regexPatterns";
import { creditCardNumberAutocomplete } from "../../constants/formAutocompleteStrings";
// Components
import { TextInput } from "./TextInput";

export const CreditCardInput: FC<CreditCardFieldProps> = ({
  name,
  label,
  additionalClassNames = "",
  theme,
  columns = "6",
  defaultValue = "",
  required,
  inputType = "tel",
  inputMode = "numeric",
  childrenToRender,
  setStateHook,
  setErrorHook,
}) => {
  /* 
    Need to check if the input value has decreased from the previous length before applying the
    logic of removing a space
  */

  /* 
      TODO: Look into useMemo for these functions
    */

  /* 
    There is strange behavior in html input fields regarding trailing whitespace, This function
    is used so that I can apply proper formatting to the input for ease of use
  */
  const doesHaveTrailingSpace = (): boolean => {
    return false;
  };

  const handleInputChange = (e: FormUpdateEvent) => {
    const formattedE = e;
    let creditCardNumInput = formattedE.target.value;
    const creditCardNumberInputLength = creditCardNumInput.length;

    /*  console.log(e.target.value);
    console.log(e.target.value.charAt(-1) === " ");
    console.log(e.target.value.length); */
    console.log(creditCardNumberInputLength);
    if (
      creditCardNumberInputLength < previousInputLength /*  &&
      addedSpaceLastInput === true */ &&
      creditCardNumberInputLength === 5
    ) {
      console.log("DESIRED CONDITION MET");
      e.target.value = e.target.value.slice(0, -1);
      console.log(creditCardNumberInputLength);
      setAddedSpaceLastInput(false);
    } else if (
      creditCardNumberInputLength === 4 ||
      creditCardNumberInputLength === 5 ||
      creditCardNumberInputLength === 9 ||
      creditCardNumberInputLength === 14
    ) {
      e.target.value = e.target.value += " ";
      creditCardNumInput = e.target.value;
      setAddedSpaceLastInput(true);
    } else {
      setAddedSpaceLastInput(false);
    }

    setCreditCardNumber(creditCardNumInput);
    setPreviousInputLength(creditCardNumberInputLength); // Update previous length
    handleFormChange(e, setStateHook, setErrorHook);
  };

  /* 
    Select the credit card icon to use based on the first digit entered
  */

  const [selectedIcon, setSelectedIcon] = useState(faCreditCard);
  const [creditCardNumber, setCreditCardNumber] = useState("");
  const [creditCardFirstDigit, setCreditCardFirstDigit] = useState(
    creditCardNumber[0]
  );
  const [previousInputLength, setPreviousInputLength] = useState(
    creditCardNumber.length
  );
  const [addedSpaceLastInput, setAddedSpaceLastInput] = useState(false);

  useEffect(() => {
    setCreditCardFirstDigit(creditCardNumber[0]);
    setPreviousInputLength(creditCardNumber.length);
  }, [creditCardNumber]);

  useEffect(() => {
    if (creditCardFirstDigit === "3") {
      setSelectedIcon(faCcAmex);
    } else if (creditCardFirstDigit === "4") {
      setSelectedIcon(faCcVisa);
    } else if (creditCardFirstDigit === "5") {
      setSelectedIcon(faCcMastercard);
    } else if (creditCardFirstDigit === "6") {
      setSelectedIcon(faCcDiscover);
    } else {
      setSelectedIcon(faCreditCard);
    }
  }, [creditCardFirstDigit]);

  return (
    <TextInput
      name={name}
      label={label}
      additionalClassNames={`credit-card-input ${additionalClassNames}`}
      placeholder="•••• •••• •••• ••••"
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType={inputType}
      inputMode={inputMode}
      pattern={creditCardNumberPattern}
      autoComplete={creditCardNumberAutocomplete}
      maxLength={19}
      icon={selectedIcon}
      setStateHook={setStateHook}
      setErrorHook={setErrorHook}
      handleInputChange={handleInputChange}
    />
  );
};
