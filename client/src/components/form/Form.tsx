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
  formTheme,
  inputFields,
  apiEndpoint,
  formId,
  setStateHook,
  setErrorHook,
  formState,
  formErrors,
}) => {
  const initialFormData: Record<string, string> = {};

  // ! Initialize form data for each input field
  inputFields.forEach((field) => {
    initialFormData[camelCasifyString(field.name)] = "";
  });

  return (
    <form
      onSubmit={(e) =>
        handleSubmit(e, inputFields, formState, setErrorHook, apiEndpoint)
      }
      id={formId}
      className="padding-left-and-right"
    >
      {renderInputFields(
        inputFields,
        formErrors,
        formTheme,
        setStateHook,
        setErrorHook
      )}
      <Button
        variant={formTheme === "dark" ? "primary" : "neutral"}
        type="submit"
        /* text={language === "English" ? "Submit" : "Entregar"} */
        text="Submit"
        buttonId={formId}
      />
    </form>
  );
};
