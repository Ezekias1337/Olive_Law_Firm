// Library Imports
import { FC, useMemo } from "react";
// Functions, Helpers, and Utils
import { handleFormChange } from "../../functions/forms/handleFormChange";
import { renderSelectOptions } from "../../functions/forms/renderSelectOptions";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { DropdownFieldProps } from "../../constants/interfaces/InputFieldProps";

export const DropdownInput: FC<DropdownFieldProps> = ({
  name,
  additionalClassNames = "",
  theme,
  columns = "6",
  defaultValue = "",
  dropdownOptions,
  setStateHook,
}) => {
  const arrayOfOptions = useMemo(
    () => renderSelectOptions(dropdownOptions),
    [dropdownOptions]
  );

  return (
    <div className={`col col-${columns} mt-2 input-wrapper`}>
      <label
        htmlFor={camelCasifyString(name)}
        className={`form-label ${theme}-label`}
      >
        {name}
      </label>
      <select
        className={`input-field ${theme}-input ${additionalClassNames}`}
        name={camelCasifyString(name)}
        aria-label={camelCasifyString(name)}
        id={kebabCasifyString(name)}
        defaultValue={defaultValue !== "" ? defaultValue : ""}
        onChange={(e) => {
          handleFormChange(e, setStateHook);
        }}
      >
        {arrayOfOptions}
      </select>
    </div>
  );
};
