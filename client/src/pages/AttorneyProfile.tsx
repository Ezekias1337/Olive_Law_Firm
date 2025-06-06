// Library Imports
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import {
  attorneyInfoStrings,
  AttorneyInfo,
} from "../constants/language-strings/attorneyProfileStrings";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { AttorneyBiography } from "../components/page-specific/attorney-profile/AttorneyBiography";
import { AttorneyInfoShowcase } from "../components/page-specific/attorney-profile/AttorneyInfoShowcase";
import { Disclaimer } from "../components/disclaimer/Disclaimer";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/attorney-profile.scss";

const possibleLawyerArray = [
  ":juan-sanchez",
  ":whitney-brooks",
  /* ":valerie-kilgore", */
];

const AttorneyProfile = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const params = useParams();
  const selectedLawyer = params.lawyer;

  const {
    biography,
    education,
    languages,
    barAssociation,
    honorsAndAwards,
    juanSanchez,
    whitneyBrooks,
    /* valerieKilgore, */
    disclaimer,
  } = attorneyInfoStrings;

  const cardTitlesObj = {
    education,
    languages,
    barAssociation,
    honorsAndAwards,
  };

  const [lawyerInfo, setLawyerInfo] = useState<AttorneyInfo>();

  useEffect(() => {
    const selectedLawyerIndex = possibleLawyerArray.findIndex(
      (element) => element === selectedLawyer
    );

    if (selectedLawyerIndex === 0) {
      setLawyerInfo(juanSanchez);
    } else if (selectedLawyerIndex === 1) {
      setLawyerInfo(whitneyBrooks);
    } /* else {
      setLawyerInfo(valerieKilgore);
    } */
  }, [selectedLawyer]);

  if (lawyerInfo === undefined) {
    return <></>;
  }

  return (
    <div className="container-fluid attorney-profile-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />

      <div className="attorney-profile-quote-wrapper dark-image-overlay display-flex align-items-center">
        <div className="text-wrapper">
          <h2>{lawyerInfo.name}</h2>
          <h4>
            {reduxLanguage === "English"
              ? lawyerInfo.quote.english[0]
              : lawyerInfo.quote.spanish[0]}
          </h4>
          <h4>
            {reduxLanguage === "English"
              ? lawyerInfo.quote.english[1]
              : lawyerInfo.quote.spanish[1]}
          </h4>
        </div>
        <div className="attorney-image-wrapper">
          <img className="attorney-profile-image" src={lawyerInfo.image} />
        </div>
      </div>

      <div className="attorney-profile-biography-wrapper">
        <h3>
          {reduxLanguage === "English" ? biography.english : biography.spanish}
        </h3>

        <div className="attorney-profile-biography-info-container">
          <AttorneyBiography
            language={reduxLanguage}
            biography={lawyerInfo.biography}
          />
          <AttorneyInfoShowcase
            language={reduxLanguage}
            education={lawyerInfo.education}
            languages={lawyerInfo.languages}
            barAssociation={lawyerInfo.barAssociation}
            honorsAndAwards={lawyerInfo.honorsAndAwards}
            cardTitles={cardTitlesObj}
          />
        </div>
      </div>
      {selectedLawyer === ":whitney-brooks" ? (
        <Disclaimer
          bodyText={
            reduxLanguage === "English"
              ? disclaimer.english
              : disclaimer.spanish
          }
        />
      ) : (
        <></>
      )}

      <Footer language={reduxLanguage} />
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
    </div>
  );
};

export default AttorneyProfile;
