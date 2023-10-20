// Library Imports
import { FC } from "react";
// Functions, Helpers, and Utils
import { handleSubmit, renderInputFields } from "./dependents/formFunctions";
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
// Interfaces and Types
import { FormProps } from "./dependents/formTypes";
// Components
import { Button } from "../button/Button";
// CSS
import "./dependents/inputFields.scss";

export const Form: FC<FormProps> = ({
  language,
  formTheme,
  inputFields,
  apiEndpoint,
  formId,
  setStateHook,
  setErrorHook,
  formState,
  formErrors,
}) => {
  // ! Initialize form data for each input field
  const initialFormData: Record<string, string> = {};
  inputFields.forEach((field) => {
    initialFormData[camelCasifyString(field.name)] = "";
  });

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, inputFields, formState, setErrorHook, apiEndpoint)
      }
      id={formId}
      className="padding-left-and-right container form"
    >
      <div className="row">
        {renderInputFields(
          inputFields,
          formErrors,
          formTheme,
          setStateHook,
          setErrorHook
        )}
      </div>
      <Button
        variant={formTheme === "dark" ? "primary" : "neutral"}
        type="submit"
        text={language === "English" ? "Submit" : "Entregar"}
        buttonId={formId}
      />
    </form>
  );
};
