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
import { Disclaimer } from "../components/disclaimer/Disclaimer";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/about-us.scss";
// Assets and Images
import Badge1 from "../assets/images/certifications/1.png";
import Badge2 from "../assets/images/certifications/2.png";
import Badge3 from "../assets/images/certifications/3.png";
import Badge4 from "../assets/images/certifications/4.png";
import Badge5 from "../assets/images/certifications/5.png";
import Badge6 from "../assets/images/certifications/6.png";
import Badge7 from "../assets/images/certifications/7.png";
import Badge8 from "../assets/images/certifications/8.png";
import Badge9 from "../assets/images/certifications/9.png";

const AboutUs = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, intro, ourCerifications, ourPhilosophy, disclaimer } =
    aboutUsStrings;

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

      <div className="about-us-certifications">
        <h2 className="full-flex">
          {reduxLanguage === "English"
            ? ourCerificationsTitle.english
            : ourCerificationsTitle.spanish}
        </h2>

        <div className="about-us-certifications-wrapper full-flex">
          <img
            src={Badge1}
            className="certification-badge col-3"
            alt="American Institution of Personal Injury Attorneys Badge"
          />
          <img
            src={Badge2}
            className="certification-badge col-3"
            alt="Lawyers of Distinction 2024 Badge"
          />
          <img
            src={Badge3}
            className="certification-badge col-3"
            alt="Multi-Million Dollar Advocates Forum Badge"
          />
          <img
            src={Badge4}
            className="certification-badge col-3"
            alt="Nation's Premier Naopia Top Ten Attorney 2024 Badge"
          />
          <img
            src={Badge5}
            className="certification-badge col-3"
            alt="North Carolina Advocates For Justice Badge"
          />
          <img
            src={Badge6}
            className="certification-badge col-3"
            alt="North Carolina State Bar Badge"
          />
          <img
            src={Badge7}
            className="certification-badge col-3"
            alt="Martindale Hubbell Peer-Reviewed Badge"
          />
          <img
            src={Badge8}
            className="certification-badge col-3"
            alt="Rising-Stars Badge"
          />
          <img
            src={Badge9}
            className="certification-badge col-3"
            alt="Board Certified Workers' Compensation Law Badge"
          />
        </div>
      </div>

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

      <Disclaimer
        bodyText={
          reduxLanguage === "English" ? disclaimer.english : disclaimer.spanish
        }
      />

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default AboutUs;
