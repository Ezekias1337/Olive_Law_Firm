// Library Imports
import { FC } from "react";
// CSS
import "./page-header.scss";

interface PageHeaderProps {
  language: string;
  title: {
    english: string;
    spanish: string;
  };
  additionalClassNames?: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  language,
  title,
  additionalClassNames,
}) => {
  const { english, spanish } = title;

  return (
    <h1
      className={`page-title ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      }`}
    >
      {language === "English" ? english : spanish}
    </h1>
  );
};
