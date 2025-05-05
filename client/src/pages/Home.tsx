// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { homePageStrings } from "../constants/language-strings/homepageStrings";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { PrimaryCallToAction } from "../components/page-specific/home-page/primary-call-to-action/primaryCallToAction";
import { NoPapeles } from "../components/page-specific/home-page/no-papeles/noPapeles";
import { OurPhilosophy } from "../components/page-specific/home-page/our-philosophy/ourPhilosophy";
import { PracticeAreas } from "../components/page-specific/home-page/practice-areas/practiceAreas";
import { OurAttorneys } from "../components/page-specific/home-page/our-attorneys/ourAttorneys";
import { WhatCustomersSay } from "../components/page-specific/home-page/what-customers-say/whatCustomersSay";
import { OurResults } from "../components/page-specific/home-page/our-results/ourResults";
import { TellYourStory } from "../components/page-specific/home-page/tell-your-story/tellYourStory";
import { Disclaimer } from "../components/disclaimer/Disclaimer";

const Home = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const { disclaimer } = homePageStrings;

  return (
    <div className="container-fluid home-page p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PrimaryCallToAction language={reduxLanguage} />
      <NoPapeles language={reduxLanguage} />
      <OurPhilosophy language={reduxLanguage} />
      <PracticeAreas language={reduxLanguage} />
      <OurAttorneys language={reduxLanguage} />
      <WhatCustomersSay language={reduxLanguage} />
      <OurResults language={reduxLanguage} />
      <TellYourStory language={reduxLanguage} />
      <Disclaimer
        bodyText={
          reduxLanguage === "English" ? disclaimer.english : disclaimer.spanish
        }
      />
      <CookieBanner
        bodyText={
          reduxLanguage === "English"
            ? "To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
            : "Para garantizar que tenga la mejor experiencia posible mientras nos visita, utilizamos cookies y tecnologías similares."
        }
        button1={{
          text: "Dismiss",
          variant: "primary",
          buttonSize: "small",
        }}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default Home;
