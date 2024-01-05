// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { aboutUsStrings } from "../constants/language-strings/aboutUsStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/about-us.scss";
// Assets and Images
import MillionDollarAdvocates from "../assets/images/certifications/Million_Dollar_Advocates_Forum.webp";
import MultiMillionDollarAdvocates from "../assets/images/certifications/Multi_Million_Dollar_Advocates_Forum.webp";
import TheFloridaBar from "../assets/images/certifications/The_Florida_Bar.webp";
import AV from "../assets/images/certifications/AV.webp";

import WorkersCompensationLaw from "../assets/images/certifications/Workers_Compensation_Law.webp";
import AmericanInstituteOfFamilyLaw from "../assets/images/certifications/American_Institute_Of_Family_Law_Attorneys.webp";
import MecklenbergCountyBar from "../assets/images/certifications/Mecklenberg_County_Bar.webp";
import NorthCarolinaBarAssociation from "../assets/images/certifications/North_Carolina_Bar_Association.webp";

import SuperLawyers from "../assets/images/certifications/Super_Lawyers.webp";
import AmericanBoardOfTrialAdvocates from "../assets/images/certifications/American_Board_of_Trial_Advocates.webp";
import AmericanAssociationForJustice from "../assets/images/certifications/American_Association_For_Justice.webp";
import NorthCarolinaAdvocatesForJustice from "../assets/images/certifications/North_Carolina_Advocates_For_Justice.png";

const AboutUs = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, intro, ourCerifications, ourPhilosophy } = aboutUsStrings;

  const {
    title: introTitle,
    paragraph1: introParagraph1,
    paragraph2: introParagraph2,
    paragraph3: introParagraph3,
  } = intro;
  const { title: ourCerificationsTitle } = ourCerifications;
  const {
    title: philosophyTitle,
    paragraph1: philosophyParagraph1,
    paragraph2: philosophyParagraph2,
    paragraph3: philosophyParagraph3,
    paragraph4: philosophyParagraph4,
    paragraph5: philosophyParagraph5,
  } = ourPhilosophy;
  return (
    <div className="container-fluid about-us-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="about-us-intro dark-image-overlay padding-left-and-right">
        <h2 className="full-flex">
          {reduxLanguage === "English"
            ? introTitle.english
            : introTitle.spanish}
        </h2>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? introParagraph1.english
            : introParagraph1.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? introParagraph2.english
            : introParagraph2.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? introParagraph3.english
            : introParagraph3.spanish}
        </p>
      </div>

      <div className="about-us-certifications padding-left-and-right row">
        <h2 className="full-flex">
          {reduxLanguage === "English"
            ? ourCerificationsTitle.english
            : ourCerificationsTitle.spanish}
        </h2>

        <img
          src={MillionDollarAdvocates}
          className="certification-badge col-3"
          alt="Million Dollar Advocates Badge"
        />
        <img
          src={MultiMillionDollarAdvocates}
          className="certification-badge col-3"
          alt="Multimillion Dollar Advocates Badge"
        />
        <img
          src={TheFloridaBar}
          className="certification-badge col-3"
          alt="The Florida Bar Badge"
        />
        <img src={AV} className="certification-badge col-3" alt="AV Badge" />

        <img
          src={WorkersCompensationLaw}
          className="certification-badge col-3"
          alt="Workers Compensation Badge"
        />
        <img
          src={AmericanInstituteOfFamilyLaw}
          className="certification-badge col-3"
          alt="American Institute of Family Law Badge"
        />
        <img
          src={MecklenbergCountyBar}
          className="certification-badge col-3"
          alt="Mecklenberg County Badge"
        />
        <img
          src={NorthCarolinaBarAssociation}
          className="certification-badge col-3"
          alt="North Carolina Bar Association Badge"
        />

        <img
          src={SuperLawyers}
          className="certification-badge col-3"
          alt="Super Lawyers Badge"
        />
        <img
          src={AmericanBoardOfTrialAdvocates}
          className="certification-badge col-3"
          alt="American Board of Trial Advocates Badge"
        />
        <img
          src={AmericanAssociationForJustice}
          className="certification-badge col-3"
          alt="American Association for Justice Badge"
        />
        <img
          src={NorthCarolinaAdvocatesForJustice}
          className="certification-badge col-3"
          alt="North Carolina Advocates for Justice Badge"
        />
      </div>

      <div className="about-us-our-philosophy dark-image-overlay padding-left-and-right">
        <h2 className="full-flex">
          {reduxLanguage === "English"
            ? philosophyTitle.english
            : philosophyTitle.spanish}
        </h2>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? philosophyParagraph1.english
            : philosophyParagraph1.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? philosophyParagraph2.english
            : philosophyParagraph2.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? philosophyParagraph3.english
            : philosophyParagraph3.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? philosophyParagraph4.english
            : philosophyParagraph4.spanish}
        </p>

        <p className="about-us-paragraph">
          {reduxLanguage === "English"
            ? philosophyParagraph5.english
            : philosophyParagraph5.spanish}
        </p>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default AboutUs;
