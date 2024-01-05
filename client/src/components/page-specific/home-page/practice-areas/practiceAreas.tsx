// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
import { practiceAreasStrings } from "../../../../constants/language-strings/practiceAreasStrings";
// Components
import { Card } from "../../../card/Card";
import { Button } from "../../../button/Button";
// CSS
import "./practice-areas.scss";
// Assets and Images
import personalInjuryImg from "../../../../assets/images/practice-areas/personal-injury.png";
import workersCompImg from "../../../../assets/images/practice-areas/workers-comp.png";
import autoAccidentsImg from "../../../../assets/images/practice-areas/auto-accidents.png";
import truckAccidentsImg from "../../../../assets/images/practice-areas/truck-accidents.png";
import slipAndFallImg from "../../../../assets/images/practice-areas/slip-and-fall.png";
import dogBitesImg from "../../../../assets/images/practice-areas/dog-bites.png";

type PracticeArea = {
  title: string;
  image: string;
};

export const PracticeAreas = ({ language }: { language: string }) => {
  const { practiceAreas: practiceAreaTitleExport, allAreas } = homePageStrings;
  const { practiceAreas, buttonText } = practiceAreasStrings;

  const { title } = practiceAreaTitleExport;
  const {
    personalInjury,
    workersComp,
    autoAccidents,
    truckAccidents,
    slipAndFall,
    dogBites,
  } = practiceAreas;

  const arrayOfPracticeAreas: PracticeArea[] = [
    {
      title: `${
        language === "English" ? personalInjury.english : personalInjury.spanish
      }`,
      image: personalInjuryImg,
    },

    {
      title: `${
        language === "English" ? workersComp.english : workersComp.spanish
      }`,
      image: workersCompImg,
    },
    {
      title: `${
        language === "English" ? autoAccidents.english : autoAccidents.spanish
      }`,
      image: autoAccidentsImg,
    },
    {
      title: `${
        language === "English" ? truckAccidents.english : truckAccidents.spanish
      }`,
      image: truckAccidentsImg,
    },
    {
      title: `${
        language === "English" ? slipAndFall.english : slipAndFall.spanish
      }`,
      image: slipAndFallImg,
    },
    {
      title: `${language === "English" ? dogBites.english : dogBites.spanish}`,
      image: dogBitesImg,
    },
  ];

  return (
    <section className="practice-areas z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div id="practice-area-card-wrapper" className="full-flex">
        {arrayOfPracticeAreas.map((practiceArea) => (
          <Card
            key={practiceArea.title}
            cardVariant="imageOnly"
            headerText={practiceArea.title}
            buttonCount={1}
            button1Text={
              language === "English" ? buttonText.english : buttonText.spanish
            }
            button1Variant="neutral"
            buttonSize="medium"
            imageSource={practiceArea.image}
          />
        ))}
      </div>
      <div id="practice-area-button-wrapper" className="full-flex">
        <Button
          text={language === "English" ? allAreas.english : allAreas.spanish}
          variant="primary"
          url="/practice-areas"
          buttonSize="large"
        />
      </div>
    </section>
  );
};
