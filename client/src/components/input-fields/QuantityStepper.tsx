// Library Imports
import { FC } from "react";
import { faAt } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// Components
import { TextInput } from "./TextInput";

/* 
    ! This Component is not done
*/

export const QuantityStepper: FC<InputFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  setStateHook,
}) => {
  return (
    <TextInput
      name={name}
      additionalClassNames="email-input"
      placeholder="user@gmail.com"
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      inputType="email"
      inputMode="email"
      autoComplete="email"
      pattern="/^[^\s@]+@[^\s@]+\.[^\s@]+$/"
      icon={faAt}
      setStateHook={setStateHook}
    />
  );
};
