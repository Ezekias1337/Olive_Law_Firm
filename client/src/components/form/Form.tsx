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
  button1Text,
  button1Variant,
  button2Text = undefined,
  button2Type = undefined,
  button2Variant = undefined,
  formBackgroundIsImage,
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
      <div
        className={`form-button-container ${
          formBackgroundIsImage === true ? "position-relative" : ""
        }`}
      >
        <Button
          variant={button1Variant}
          type="submit"
          text={button1Text}
          buttonId={`${formId}-button-1`}
        />
        {button2Text !== undefined &&
        button2Type !== undefined &&
        button2Variant !== undefined ? (
          <Button
            variant={button2Variant}
            type={button2Type}
            text={button2Text}
            buttonId={`${formId}-button-2`}
          />
        ) : (
          <></>
        )}
      </div>
    </form>
  );
};
