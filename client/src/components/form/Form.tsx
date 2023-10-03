// Library Imports
import { FC, ReactNode } from "react";
// Functions, Helpers, and Utils
import { camelCasifyString } from "../../../../shared/utils/strings/camelCasifyString";
import { kebabCasifyString } from "../../../../shared/utils/strings/kebabCasifyString";
// Components
import { Button } from "../button/Button";

interface FormProps {
  children: ReactNode[];
  variant: string;
  language: string;
}

export const Form: FC<FormProps> = ({ children, variant, language }) => {
  return (
    <form /* onSubmit={handleSubmit} */>
      {children}

      <Button
        variant={variant}
        text={language === "English" ? "Submit" : "Entregar"}
      />
    </form>
  );
};
