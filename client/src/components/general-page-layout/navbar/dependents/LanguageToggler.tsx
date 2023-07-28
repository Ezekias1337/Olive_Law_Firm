// Library Imports
import { FC, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
// Redux
import { updateLanguageAction } from "../../../../redux/action-creators/languageCreators";
// Functions, Helpers, and Utils
import {
  handleFormChange,
  FormUpdateEvent,
  SwitchUpdateEvent,
  handleSwitchChange,
} from "../../../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../shared/utils/strings/kebabCasifyString";
// Interfaces and Types
import { InputFieldProps } from "../../../../constants/interfaces/InputFieldProps";
// CSS
import "../../../../css/partials/_input-themes.scss";
import "../../../../css/partials/_switch-input.scss";

export interface TogglerProps {
  theme: string;
  language?: string;
}

export const LanguageToggler: FC<TogglerProps> = ({ theme }) => {
  const handleInputChange = (e: SwitchUpdateEvent) => {
    if (isChecked === true) {
      updateLanguage("English");
    } else {
      updateLanguage("Spanish");
    }
    setIsChecked(!isChecked);
  };

  const dispatch = useDispatch();
  const updateLanguage = bindActionCreators(updateLanguageAction, dispatch);

  const [isChecked, setIsChecked] = useState(false);
  const componentDomName = "Language Toggler";

  return (
    <div className={`input-wrapper form-check form-switch toggler-align`}>
      <label
        htmlFor={camelCasifyString(componentDomName)}
        className={`form-label dark-label ms-3 mb-0${
          isChecked === false ? "" : " bold-text"
        }`}
      >
        Español
      </label>
      <input
        className={`dark-input form-check-input`}
        name={camelCasifyString(componentDomName)}
        aria-label={camelCasifyString(componentDomName)}
        id={kebabCasifyString(componentDomName)}
        inputMode="text"
        type="checkbox"
        role="switch"
        checked={isChecked}
        onChange={handleInputChange}
      ></input>
      <label
        htmlFor={camelCasifyString(componentDomName)}
        className={`form-label dark-label me-3 mb-0${
          isChecked === true ? "" : " bold-text"
        }`}
      >
        English
      </label>
    </div>
  );
};
