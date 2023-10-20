// Library Imports
import { FC } from "react";
import { faCcVisa } from "@fortawesome/free-brands-svg-icons";
// Functions, Helpers and Utils
import {
  handleFormChange,
  FormUpdateEvent,
} from "../../functions/forms/handleFormChange";
// Interfaces and Types
import { CreditCardFieldProps } from "../../constants/interfaces/InputFieldProps";
import { creditCardNumberPattern } from "../../../../shared/constants/regexPatterns";
// Components
import { TextInput } from "./TextInput";

export const CreditCardInput: FC<CreditCardFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  required,
  inputType = "tel",
  inputMode = "numeric",
  autoComplete = "cc-number",
  maxLength = 19,
  setStateHook,
}) => {
  const handleInputChange = (e: FormUpdateEvent) => {
    const formattedE = e;
    const creditCardNumberInputLength = creditCardNumber?.length;

    if (
      creditCardNumberInputLength === 4 ||
      creditCardNumberInputLength === 8 ||
      creditCardNumberInputLength === 12
    ) {
      formattedE.target.value = formattedE.target.value += " ";
    } else if (
      creditCardNumberInputLength === 3 ||
      creditCardNumberInputLength === 7 ||
      creditCardNumberInputLength === 11
    ) {
      formattedE.target.value = formattedE.target.value.slice(0, -1);
    }

    handleFormChange(formattedE, setStateHook);
  };

  return (
    <TextInput
      name={name}
      additionalClassNames="credit-card-input"
      placeholder="•••• •••• •••• ••••"
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      required={required}
      inputType={inputType}
      inputMode={inputMode}
      pattern={creditCardNumberPattern}
      autoComplete={autoComplete}
      maxLength={maxLength}
      setStateHook={setStateHook}
      icon={faCcVisa}
    />
  );
};
