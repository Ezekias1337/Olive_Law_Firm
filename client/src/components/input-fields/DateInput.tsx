// Library Imports
import { FC } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// Components
import { TextInput } from "./TextInput";

export const DateInput: FC<InputFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  inputType = "text",
  setStateHook,
}) => {
  return (
    <TextInput
      name={name}
      additionalClassNames="date-input"
      placeholder="mm/dd/yyyy"
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      inputType={inputType}
      icon={faCalendar}
      setStateHook={setStateHook}
    />
  );
};
