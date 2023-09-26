// Library Imports
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// Functions, Helpers, and Utils
import { SwitchUpdateEvent } from "../../../../functions/forms/handleFormChange";
import { camelCasifyString } from "../../../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../../../shared/utils/strings/kebabCasifyString";
// CSS
import "../../../../css/partials/_input-themes.scss";
import "../../../../css/partials/_switch-input.scss";

export const LanguageToggler = ({ language }: { language: string }) => {
  const setEnglish = () => {
    setLanguageParams((prev) => {
      prev.set("language", "English");
      return prev;
    });
    setIsChecked(false);
  };

  const setSpanish = () => {
    setLanguageParams((prev) => {
      prev.set("language", "Spanish");
      return prev;
    });
    setIsChecked(true);
  };

  const handleInputChange = (e: SwitchUpdateEvent) => {
    if (isChecked === true) {
      setEnglish();
    } else {
      setSpanish();
    }
  };

  const [languageParams, setLanguageParams] = useSearchParams({
    language: "English",
  });
  const [isChecked, setIsChecked] = useState(false);

  // When component mounts determine the selected language

  useEffect(() => {
    const currentLanguage = languageParams.get("language");

    if (currentLanguage === "English") {
      setEnglish();
    } else {
      setSpanish();
    }
  }, []);

  const componentDomName = "Language Toggler";

  return (
    <div className={`input-wrapper form-check form-switch toggler-align`}>
      <label
        htmlFor={kebabCasifyString(componentDomName)}
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
        htmlFor={kebabCasifyString(componentDomName)}
        className={`form-label dark-label me-3 mb-0${
          isChecked === true ? "" : " bold-text"
        }`}
      >
        English
      </label>
    </div>
  );
};
