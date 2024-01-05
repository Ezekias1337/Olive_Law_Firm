// Library Imports
import { useSelector } from "react-redux/es/exports";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { communityInteractionStrings } from "../constants/language-strings/communityInteractionStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Card } from "../components/card/Card";
import { ClientTestimonial } from "../components/client-reviews/clientTestimonial";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/community-interaction.scss";
// Assets and Images
import SalvationArmy from "../assets/images/community-interaction/The_Salvation_Army.svg.png";
import CharlotteRescueMission from "../assets/images/community-interaction/Charlotte_Rescue_Mission.png";
import ThompsonFamilyFocus from "../assets/images/community-interaction/Thompson_Child_And_Family_Focus.jpg";
import HumaneSocietyOfCharlotte from "../assets/images/community-interaction/Humane_Society_Of_Charlotte.png";
import CarolinaFamilyConnections from "../assets/images/community-interaction/Carolina_Family_Connections.jpeg";
import BaseballTeam from "../assets/images/community-interaction/Baseball_Team.webp";
import PrimitiveBaptistGolf from "../assets/images/community-interaction/Primitive_Baptist_Golf.png";

const CommunityInteraction = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const {
    pageTitle,
    salvationArmy,
    charlotteRescueMission,
    thompsonFamilyFocus,
    humaneSocietyCharlotte,
    carolinaFamily,
    youthAthletics,
    primitiveBaptistGolf,
  } = communityInteractionStrings;

  salvationArmy.image = SalvationArmy;
  charlotteRescueMission.image = CharlotteRescueMission;
  thompsonFamilyFocus.image = ThompsonFamilyFocus;
  humaneSocietyCharlotte.image = HumaneSocietyOfCharlotte;
  carolinaFamily.image = CarolinaFamilyConnections;
  youthAthletics.image = BaseballTeam;
  primitiveBaptistGolf.image = PrimitiveBaptistGolf;

  const arrayOfInteractionInfo = [
    salvationArmy,
    charlotteRescueMission,
    thompsonFamilyFocus,
    carolinaFamily,
    youthAthletics,
    primitiveBaptistGolf,
  ];

  return (
    <div className="container-fluid community-interaction-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="community-interaction-info-wrapper display-flex padding-left-and-right">
        {arrayOfInteractionInfo.map((interactionItem) => {
          return (
            <Card
              cardVariant="imageAndBody"
              headerText={
                reduxLanguage === "English"
                  ? interactionItem.title.english
                  : interactionItem.title.spanish
              }
              bodyText={
                reduxLanguage === "English"
                  ? interactionItem.body.english
                  : interactionItem.body.spanish
              }
              buttonCount={0}
              imageSource={interactionItem.image}
              key={interactionItem.title.english}
            />
          );
        })}
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default CommunityInteraction;
