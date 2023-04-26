// Library Imports
import { FC } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// Components
import { TextInput } from "./TextInput";

export const SearchInput: FC<InputFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  inputType = "text",
  inputMode = "search",
  setStateHook,
}) => {
  return (
    <TextInput
      name={name}
      additionalClassNames="search-input"
      placeholder="Search..."
      theme={theme}
      columns={columns}
      defaultValue={defaultValue}
      inputType={inputType}
      inputMode={inputMode}
      icon={faMagnifyingGlass}
      setStateHook={setStateHook}
    />
  );
};
