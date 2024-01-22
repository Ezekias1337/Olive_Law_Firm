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

const CommunityInteraction = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const {
    pageTitle,
    givingBackToCommunity,
    salvationArmy,
    charlotteRescueMission,
    thompsonFamilyFocus,
  } = communityInteractionStrings;

  const {
    part1: givingBackToCommunityPart1,
    part2: givingBackToCommunityPart2,
  } = givingBackToCommunity;

  salvationArmy.image = SalvationArmy;
  charlotteRescueMission.image = CharlotteRescueMission;
  thompsonFamilyFocus.image = ThompsonFamilyFocus;

  const arrayOfInteractionInfo = [
    salvationArmy,
    charlotteRescueMission,
    thompsonFamilyFocus,
  ];

  return (
    <div className="container-fluid community-interaction-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="giving-back-to-community padding-left-and-right">
        <h3>
          {reduxLanguage === "English"
            ? givingBackToCommunityPart1.english
            : givingBackToCommunityPart1.spanish}
        </h3>
        <br />
        <h3>
          {reduxLanguage === "English"
            ? givingBackToCommunityPart2.english
            : givingBackToCommunityPart2.spanish}
        </h3>
      </div>

      <div className="community-interaction-info-wrapper display-flex justify-content-center dark-image-overlay">
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
        d
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default CommunityInteraction;
