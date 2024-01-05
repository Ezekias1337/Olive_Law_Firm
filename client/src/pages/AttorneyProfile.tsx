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
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { AttorneyBiography } from "../components/page-specific/attorney-profile/AttorneyBiography";
import { AttorneyInfoShowcase } from "../components/page-specific/attorney-profile/AttorneyInfoShowcase";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/attorney-profile.scss";

const possibleLawyerArray = [
  ":juan-sanchez",
  ":whitney-brooks",
  ":valerie-kilgore",
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
    valerieKilgore,
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
    } else {
      setLawyerInfo(valerieKilgore);
    }
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
              ? lawyerInfo.quote.english
              : lawyerInfo.quote.spanish}
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
        <AttorneyBiography
          language={reduxLanguage}
          biography={lawyerInfo.biography}
        />
      </div>

      <AttorneyInfoShowcase
        language={reduxLanguage}
        education={lawyerInfo.education}
        languages={lawyerInfo.languages}
        barAssociation={lawyerInfo.barAssociation}
        honorsAndAwards={lawyerInfo.honorsAndAwards}
        cardTitles={cardTitlesObj}
      />

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default AttorneyProfile;
