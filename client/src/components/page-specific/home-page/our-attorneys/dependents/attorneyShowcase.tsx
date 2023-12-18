// Library Imports
import { FC } from "react";
// Constants
import { homePageStrings } from "../../../../../constants/language-strings/homepageStrings";
// Components
import { Card } from "../../../../card/Card";
import { Button } from "../../../../button/Button";

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
    <Card
      cardVariant="imageOnly"
      headerText={name}
      imageSource={image}
      buttonCount={0}
    />
  );
};
