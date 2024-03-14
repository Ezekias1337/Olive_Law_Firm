// Library Imports
import React from "react";
// Components
import { ShowcaseCard } from "./ShowcaseCard";

type InfoShowcaseProps = {
  language: string;
  education: {
    english: string[];
    spanish: string[];
  };
  languages: {
    english: string[];
    spanish: string[];
  };
  barAssociation: {
    english: string[];
    spanish: string[];
  };
  honorsAndAwards: {
    english: string[];
    spanish: string[];
  };
  cardTitles: {
    education: {
      english: string;
      spanish: string;
    };
    languages: {
      english: string;
      spanish: string;
    };
    barAssociation: {
      english: string;
      spanish: string;
    };
    honorsAndAwards: {
      english: string;
      spanish: string;
    };
  };
};

export const AttorneyInfoShowcase: React.FC<InfoShowcaseProps> = ({
  language,
  education,
  languages: spokenLanguages,
  barAssociation,
  honorsAndAwards,
  cardTitles,
}) => {
  const selectedEducation =
    language === "English" ? education.english : education.spanish;
  const selectedSpokenLanguages =
    language === "English" ? spokenLanguages.english : spokenLanguages.spanish;
  const selectedBarAssociation =
    language === "English" ? barAssociation.english : barAssociation.spanish;
  const selectedHonorsAndAwards =
    language === "English" ? honorsAndAwards.english : honorsAndAwards.spanish;

  const selectedEducationTitle =
    language === "English"
      ? cardTitles.education.english
      : cardTitles.education.spanish;
  const selectedSpokenLanguageTitle =
    language === "English"
      ? cardTitles.languages.english
      : cardTitles.languages.spanish;
  const selectedBarAssociationTitle =
    language === "English"
      ? cardTitles.barAssociation.english
      : cardTitles.barAssociation.spanish;
  const selectedHonorsAndAwardsTitle =
    language === "English"
      ? cardTitles.honorsAndAwards.english
      : cardTitles.honorsAndAwards.spanish;

  const arrayOfCardInfo = [
    {
      title: selectedEducationTitle,
      bulletPoints: selectedEducation,
    },
    {
      title: selectedSpokenLanguageTitle,
      bulletPoints: selectedSpokenLanguages,
    },
    {
      title: selectedHonorsAndAwardsTitle,
      bulletPoints: selectedHonorsAndAwards,
    },
    {
      title: selectedBarAssociationTitle,
      bulletPoints: selectedBarAssociation,
    },
  ];

  return (
    <div className="attorney-profile-info-wrapper display-flex">
      {arrayOfCardInfo.map((attorneyCard, index) => {
        return (
          <ShowcaseCard
            key={index}
            title={attorneyCard.title}
            bulletPoints={attorneyCard.bulletPoints}
          />
        );
      })}
    </div>
  );
};
