// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
// Components
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
// Assets and Images
import northCarolinaCourthouse from "../assets/images/backgrounds/North_Carolina_Courthouse.png";
/* 
  TODO: Add Cookies disclaimer
  TODO: Check all references to company name and website url
  TODO: NEED A 404 PAGE
  TODO: Remove un-used images and assets
  TODO: Look into back arrow functionality when changing language to make it go back to the
  last different page
  TODO: Browser history not working correctly on button links
  TODO: Fix Phone number component padding
  TODO: Box shadow doesn't work on input fields that were autocompleted
  TODO: Make checklist to check responsiveness of each page before release
  TODO: Footer logo doesn't link to homepage
  TODO: Find solution for footer spacing from rest of page content on pages
  with navbar background, also need to account for English and Spanish differences
  in the spacing
*/

const Home = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const deviceInformation = useDeviceInfo();
  const [formInputData, setFormInputData] = useState<FormState>({});

  return (
    <div className="container-fluid home-page p-0">
      <NavBar
        theme="light"
        adminVariant={false}
        language={reduxLanguage}
        backgroundImage={northCarolinaCourthouse}
        backgroundImageSize="933px"
      />
      <PrimaryCallToAction language={reduxLanguage} />
      <NoPapeles language={reduxLanguage} />
      <OurPhilosophy language={reduxLanguage} />
      <PracticeAreas language={reduxLanguage} />
      <OurAttorneys language={reduxLanguage} />
      <WhatCustomersSay language={reduxLanguage} />
      <OurResults language={reduxLanguage} />
      <TellYourStory language={reduxLanguage} />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default Home;