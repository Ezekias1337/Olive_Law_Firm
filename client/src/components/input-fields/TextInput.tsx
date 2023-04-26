// Library Imports
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Functions, Helpers, and Utils
import {
  handleFormChange,
  FormUpdateEvent,
} from "../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
// CSS
import "./inputFields.scss";

export const TextInput: FC<InputFieldProps> = ({
  name,
  additionalClassNames = "",
  placeholder,
  theme,
  columns = "6",
  defaultValue = "",
  value,
  inputType = "text",
  inputMode = "text",
  pattern = "[A-Za-z0-9_]",
  autoComplete = "",
  maxLength = 100,
  childrenToRender,
  icon,
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
      <input
        className={`input-field ${theme}-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        placeholder={placeholder}
        defaultValue={defaultValue}
        type={inputType}
        inputMode={inputMode}
        pattern={pattern}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onChange={handleInputChange}
      />
      {icon !== undefined ? (
        <FontAwesomeIcon
          icon={icon}
          size="xl"
          className={`icon-input-right ${theme}-icon z-index-0`}
        />
      ) : (
        <></>
      )}

      {childrenToRender === undefined ? <></> : childrenToRender}
    </div>
  );
};
