// Library Imports
import { FC } from "react";

type ShowcaseCardProps = {
  title: string;
  bulletPoints: string[];
};

export const ShowcaseCard: FC<ShowcaseCardProps> = ({
  title,
  bulletPoints,
}) => {
  return (
    <div className="showcase-card">
      <h4>{title}</h4>

      <ul className="showcase-card-bullet-points">
        {bulletPoints.map((point) => {
          return <li key={point}>{point}</li>;
        })}
      </ul>
    </div>
  );
};
