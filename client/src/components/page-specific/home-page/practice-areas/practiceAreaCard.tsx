// Library Imports
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";

interface PracticeAreaProps {
  title: string;
  icon: IconDefinition;
  language: string;
}

export const PracticeAreasCard: FC<PracticeAreaProps> = ({ title, icon, language }) => {
  return (
    <div className="practice-card">
      <FontAwesomeIcon icon={icon} size="3x"/>
      <span>{title}</span>
    </div>
  );
};
