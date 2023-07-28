// Library Imports
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Constants
import { footerStrings } from "../../../constants/language-strings/footerStrings";
// Components
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
import { FooterLink } from "./dependents/FooterLink";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../assets/images/logo/Logo_No_Text.png";

export const Footer = ({ language }: { language: string }) => {
  const {
    contactColumn,
    infoColumn,
    attorneyColumn,
    otherColumn,
    copywrite,
    termsOfService,
    privacyPolicy,
  } = footerStrings;

  const { header: contactHeader, getDirections } = contactColumn;
  const {
    header: infoHeader,
    priorSettlements,
    ourPracticeAreas,
    clientTestimonials,
    googleReviews,
  } = infoColumn;
  const { header: attorneyHeader } = attorneyColumn;
  const {
    header: otherHeader,
    submitClaim,
    checkClaimStatus,
    communityInteraction,
  } = otherColumn;

  return (
    <footer className="container-fluid footer">
      <div className="row mx-5 pt-5">
        <div className="col col-2 px-0 footer-logo-col">
          <img src={logo} className="footer-logo" />
        </div>
        <div className="col col-8 col-lg-6 social-col">
          <FooterSocialIcon
            icon={faInstagram}
            url="https://www.instagram.com/theolivelawfirm_1957/"
          />
          <FooterSocialIcon
            icon={faFacebook}
            url="https://www.facebook.com/TheOliveLawFirm"
          />
          <FooterSocialIcon
            icon={faTwitter}
            url="https://twitter.com/OliveLawFirm"
          />
        </div>
      </div>
      <div className="row footer-navigation mx-5 mt-5 pb-5">
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">
            {language === "English"
              ? contactHeader.english
              : contactHeader.spanish}
          </h5>
          <FooterLink
            linkText="704-377-9222"
            url="tel:+17043779222"
            openInNewTab={false}
          />
          <FooterLink
            linkText="corellana@olivelawfirm.com"
            url="mailto: corellana@olivelawfirm.com"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? getDirections.english
                : getDirections.spanish
            }
            url="https://goo.gl/maps/GdLK2JYiZnwMtetr5"
            openInNewTab={true}
          />
        </div>
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">
            {language === "English" ? infoHeader.english : infoHeader.spanish}
          </h5>
          <FooterLink
            linkText={
              language === "English"
                ? googleReviews.english
                : googleReviews.spanish
            }
            url="/google-reviews"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? ourPracticeAreas.english
                : ourPracticeAreas.spanish
            }
            url="/our-practice-areas"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? clientTestimonials.english
                : clientTestimonials.spanish
            }
            url="/client-testimonials"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? priorSettlements.english
                : priorSettlements.spanish
            }
            url="/prior-settlements"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">
            {language === "English"
              ? attorneyHeader.english
              : attorneyHeader.spanish}
          </h5>
          <FooterLink
            linkText="Juan Sanchez"
            url="/attorneys/juan-sanchez"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Whitney Brooks"
            url="/attorneys/whitney-brooks"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Valerie Kilgore"
            url="/attorneys/valerie-kilgore"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">
            {language === "English" ? otherHeader.english : otherHeader.spanish}
          </h5>
          <FooterLink
            linkText={
              language === "English" ? submitClaim.english : submitClaim.spanish
            }
            url="/submit-a-claim"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? checkClaimStatus.english
                : checkClaimStatus.spanish
            }
            url="/check-claim-status"
            openInNewTab={false}
          />
          <FooterLink
            linkText={
              language === "English"
                ? communityInteraction.english
                : communityInteraction.spanish
            }
            url="/community-interaction"
            openInNewTab={false}
          />
        </div>
      </div>
      <div className="footer-copywrite-disclaimer-wrapper row pb-5 pt-3 mx-5">
        <div className="col col-12 col-lg-8 ps-0">
          <small className="copywrite-disclaimer">
            {language === "English" ? copywrite.english : copywrite.spanish}
          </small>
        </div>
        <div className="col col-6 col-lg-2">
          <FooterLink
            linkText={
              language === "English"
                ? termsOfService.english
                : termsOfService.spanish
            }
            url="/terms-of-service"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-2">
          <FooterLink
            linkText={
              language === "English"
                ? privacyPolicy.english
                : privacyPolicy.spanish
            }
            url="/privacy-policy"
            openInNewTab={false}
          />
        </div>
      </div>
    </footer>
  );
};
