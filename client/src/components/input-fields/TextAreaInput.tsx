// Library Imports
import { FC } from "react";
// Functions, Helpers, and Utils
import {
  handleFormChange,
  FormUpdateEvent,
} from "../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString"
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// CSS
import "./inputFields.scss";

/* 
  ! Later on need to change styling of resize handle
*/

export const TextAreaInput: FC<InputFieldProps> = ({
  name,
  additionalClassNames = "",
  placeholder,
  theme,
  columns = "6",
  defaultValue = "",
  inputMode = "text",
  autoComplete = "",
  maxLength = 100,
  setStateHook,
}) => {
  const handleInputChange = (e: FormUpdateEvent) => {
    handleFormChange(e, setStateHook);
  };

  return (
    <div className={`col col-${columns} mt-2 input-wrapper`}>
      <label
        htmlFor={camelCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {name}
      </label>
      <textarea
        className={`input-field ${theme}-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        inputMode={inputMode}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
    </div>
  );
};
