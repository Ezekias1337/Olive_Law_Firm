// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { practiceAreasStrings } from "../constants/language-strings/practiceAreasStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Card } from "../components/card/Card";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/practice-areas.scss";
// Assets and Images
import personalInjuryImg from "../assets/images/practice-areas/personal-injury.png";
import workersCompImg from "../assets/images/practice-areas/workers-comp.png";
import autoAccidentsImg from "../assets/images/practice-areas/auto-accidents.png";
import truckAccidentsImg from "../assets/images/practice-areas/truck-accidents.png";
import bicycleAccidentsImg from "../assets/images/practice-areas/bicycle-accidents.png";
import wrongfulDeathImg from "../assets/images/practice-areas/wrongful-death.png";
import spinalAndBrainInjuriesImg from "../assets/images/practice-areas/spinal-and-brain-injuries.png";
import slipAndFallImg from "../assets/images/practice-areas/slip-and-fall.png";
import dogBitesImg from "../assets/images/practice-areas/dog-bites.png";
import productLiabilityImg from "../assets/images/practice-areas/product-liability.png";
import policeMisconductImg from "../assets/images/practice-areas/police-misconduct.png";

type PracticeArea = {
  title: string;
  image: string;
};

const PracticeAreas = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, practiceAreas, buttonText } = practiceAreasStrings;

  const {
    personalInjury,
    workersComp,
    autoAccidents,
    truckAccidents,
    bicycleAccidents,
    wrongfulDeath,
    spinalAndBrainInjuries,
    slipAndFall,
    dogBites,
    productLiability,
    policeMisconduct,
  } = practiceAreas;

  const arrayOfPracticeAreas: PracticeArea[] = [
    {
      title: `${
        reduxLanguage === "English"
          ? personalInjury.english
          : personalInjury.spanish
      }`,
      image: personalInjuryImg,
    },
    {
      title: `${
        reduxLanguage === "English" ? workersComp.english : workersComp.spanish
      }`,
      image: workersCompImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? autoAccidents.english
          : autoAccidents.spanish
      }`,
      image: autoAccidentsImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? truckAccidents.english
          : truckAccidents.spanish
      }`,
      image: truckAccidentsImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? bicycleAccidents.english
          : bicycleAccidents.spanish
      }`,
      image: bicycleAccidentsImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? wrongfulDeath.english
          : wrongfulDeath.spanish
      }`,
      image: wrongfulDeathImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? spinalAndBrainInjuries.english
          : spinalAndBrainInjuries.spanish
      }`,
      image: spinalAndBrainInjuriesImg,
    },
    {
      title: `${
        reduxLanguage === "English" ? slipAndFall.english : slipAndFall.spanish
      }`,
      image: slipAndFallImg,
    },
    {
      title: `${
        reduxLanguage === "English" ? dogBites.english : dogBites.spanish
      }`,
      image: dogBitesImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? productLiability.english
          : productLiability.spanish
      }`,
      image: productLiabilityImg,
    },
    {
      title: `${
        reduxLanguage === "English"
          ? policeMisconduct.english
          : policeMisconduct.spanish
      }`,
      image: policeMisconductImg,
    },
  ];

  return (
    <div className="container-fluid practice-areas-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="practice-areas-cards-wrapper display-flex padding-left-and-right">
        {arrayOfPracticeAreas.map((practiceArea) => (
          <Card
            key={practiceArea.title}
            cardVariant="imageOnly"
            headerText={practiceArea.title}
            buttonCount={1}
            button1Text={
              reduxLanguage === "English"
                ? buttonText.english
                : buttonText.spanish
            }
            button1Variant="neutral"
            buttonSize="medium"
            imageSource={practiceArea.image}
          />
        ))}
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default PracticeAreas;
