// Library Imports
import { FC, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";
import { textAndNumbersNoSpacesPattern } from "../../../../shared/constants/regexPatterns";
// Components
import { TextInput } from "./TextInput";

export const PasswordInput: FC<InputFieldProps> = ({
  name,
  theme,
  columns = "6",
  defaultValue = "",
  autoComplete,
  setStateHook,
}) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <>
      <TextInput
        name={name}
        additionalClassNames={`password-input ${
          isPasswordHidden === true
            ? "password-input-obscured"
            : "password-input-revealed"
        }`}
        placeholder="Password"
        theme={theme}
        columns={columns}
        defaultValue={defaultValue}
        inputType={isPasswordHidden === true ? "password" : "text"}
        autoComplete={autoComplete}
        pattern={textAndNumbersNoSpacesPattern}
        maxLength={30}
        setStateHook={setStateHook}
        childrenToRender={[
          <button
            key="toggle-password-visibility-button"
            className="toggle-password-visibility-button"
            name="toggle-password-visibility-button"
            role="button"
            onClick={() => togglePasswordVisibility()}
          ></button>,
        ]}
        icon={isPasswordHidden === true ? faEye : faEyeSlash}
      />
    </>
  );
};
