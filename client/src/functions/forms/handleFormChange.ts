// Library Imports
import { Dispatch, SetStateAction } from "react";
// Interfaces and Types
import { FormState } from "../../constants/interfaces/InputFieldProps";

export interface FormUpdateEvent {
  target: {
    name: string;
    value: string;
  };
}

export interface SwitchUpdateEvent {
  target: {
    name: string;
    checked: boolean;
  };
}

export const handleFormChange = (
  e: FormUpdateEvent,
  setStateHook: Dispatch<SetStateAction<FormState>>,
  setErrorHook: Dispatch<SetStateAction<FormState>>
): void => {
  setStateHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: e.target.value,
  }));

  setErrorHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: "",
  }));
};

export const handleSwitchChange = (
  e: SwitchUpdateEvent,
  setStateHook: Dispatch<SetStateAction<FormState>>,
  setErrorHook: Dispatch<SetStateAction<FormState>>
): void => {
  setStateHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: e.target.checked,
  }));

  setErrorHook((prevState: FormState) => ({
    ...prevState,
    [e.target.name]: "",
  }));
};
