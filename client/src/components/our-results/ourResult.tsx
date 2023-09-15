// Library Imports
import { FC } from "react";
// Components
import { StarRating } from "./dependents/starRating";
// CSS
import "./our-result.scss";

interface OurResultProps {
  practiceArea: string;
  amountAwarded: number;
  description: string;
}

export const OurResult: FC<OurResultProps> = ({
  practiceArea,
  amountAwarded,
  description
}) => {
  return (
    <div className="our-result-container">
      <h3>
        
      </h3>
    </div>
  );
};
