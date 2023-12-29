// Library Imports
import { FC } from "react";
// Constants
import { homePageStrings } from "../../../../../constants/language-strings/homepageStrings";
// Components
import { Card } from "../../../../card/Card";
import { Link } from "react-router-dom";

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

  return (
    <Link to={link}>
      <Card
        cardVariant="imageOnly"
        headerText={name}
        imageSource={image}
        buttonCount={0}
      />
    </Link>
  );
};
