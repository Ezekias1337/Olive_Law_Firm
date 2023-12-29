import React from "react";

type BiographyProps = {
  language: string;
  biography: {
    english: string[];
    spanish: string[];
  };
};

export const AttorneyBiography: React.FC<BiographyProps> = ({
  language,
  biography,
}) => {
  const selectedBiography =
    language === "English" ? biography.english : biography.spanish;

  return (
    <div className="biography-text-wrapper">
      {selectedBiography.map((bioElement, index) => (
        <h4 key={index}>{bioElement}</h4>
      ))}
    </div>
  );
};
