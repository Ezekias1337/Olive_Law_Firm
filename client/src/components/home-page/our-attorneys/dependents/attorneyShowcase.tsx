// Library Imports
import { FC } from "react";
// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
// Components
import { Button } from "../../../button/Button";

interface AttorneyShowcaseProps {
  language: string;
  name: string;
  image: string;
  link: string;
}

export const AttorneyShowcase: FC<AttorneyShowcaseProps> = ({
  language,
  name,
  image,
  link,
}) => {
  const { ourAttorneys } = homePageStrings;
  const { moreInfo } = ourAttorneys;

  return (
    <div className="attorney-showcase">
      <img src={image} />
      <h2>{name}</h2>
      <div className="button-container">
        <Button
          variant="primary"
          text={language === "English" ? moreInfo.english : moreInfo.spanish}
        />
      </div>
    </div>
  );
};
