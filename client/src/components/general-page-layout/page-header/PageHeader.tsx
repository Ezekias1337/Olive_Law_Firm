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
}

export const PageHeader: FC<PageHeaderProps> = ({ language, title }) => {
  const { english, spanish } = title;

  return (
    <h1 className="page-title">{language === "English" ? english : spanish}</h1>
  );
};
