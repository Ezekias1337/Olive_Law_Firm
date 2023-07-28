// Library Imports
import { FC } from "react";
import { faAt } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { InputFieldProps } from "../../constants/interfaces/InputFieldProps";

export const Button: FC<InputFieldProps> = ({
    name,
    theme,
    columns = "6",
    defaultValue = "",
    setStateHook,
  }) => {
    return (
      <button>
        Hello
      </button>
    );
  };
  