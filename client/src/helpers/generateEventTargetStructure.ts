// Functions, Helpers, Utils
import { camelCasifyString } from "../../../shared/utils/strings/camelCasifyString";

export const generateEventTargetStructure = (
  inputName: string,
  inputValue: string
): object => {
  const e = {
    target: {
      name: camelCasifyString(inputName),
      value: inputValue,
    },
  };

  return e;
};
