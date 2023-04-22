// Library Imports
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
// Functions, Helpers, Utils and Hooks
// Constants
// Components
import { FooterSocialIcon } from "./dependents/FooterSocialIcon";
import { FooterLink } from "./dependents/FooterLink";
// CSS
import "./footer.scss";
// Assets and Images
import logo from "../../../assets/images/logo/Logo_No_Text.png";

export const Footer = () => {
  return (
    <footer className="container-fluid footer">
      <div className="row mx-5 pt-5">
        <div className="col col-2 col-lg-1 px-0">
          <img src={logo} className="footer-logo" />
        </div>
        <div className="col col-6 col-lg-6 social-col">
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
          <h5 className="footer-navigation-header full-flex">Contact</h5>
          <FooterLink
            linkText="Get Directions"
            url="https://goo.gl/maps/GdLK2JYiZnwMtetr5"
            openInNewTab={true}
          />
          <FooterLink
            linkText="corellana@olivelawfirm.com"
            url="mailto: corellana@olivelawfirm.com"
            openInNewTab={false}
          />
          <FooterLink
            linkText="+1 (704) 377-9222"
            url="tel:7043779222"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">Info</h5>
          <FooterLink
            linkText="Prior Settlements"
            url="/prior-settlements"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Our Practice Areas"
            url="/our-practice-areas"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Client Testimonials"
            url="/faqs"
            openInNewTab={false}
          />
          <FooterLink
            linkText="FAQs"
            url="/prior-settlements"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-3 mt-5">
          <h5 className="footer-navigation-header full-flex">Attorneys</h5>
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
          <h5 className="footer-navigation-header full-flex">Other</h5>
          <FooterLink
            linkText="Submit a Claim"
            url="/submit-a-claim"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Check Claim Status"
            url="/check-claim-status"
            openInNewTab={false}
          />
          <FooterLink
            linkText="Community Interaction"
            url="/community-interaction"
            openInNewTab={false}
          />
        </div>
      </div>
      <div className="footer-copywrite-disclaimer-wrapper row pb-5 pt-3 mx-5">
        <div className="col col-12 col-lg-8 ps-0">
          <small className="copywrite-disclaimer">
            © 2023 by Olive Sanchez & Associates PLLC | Created by Code Decoded
          </small>
        </div>
        <div className="col col-6 col-lg-2">
          <FooterLink
            linkText="Terms of Service"
            url="/terms-of-service"
            openInNewTab={false}
          />
        </div>
        <div className="col col-6 col-lg-2">
          <FooterLink
            linkText="Privacy Policy"
            url="/privacy-policy"
            openInNewTab={false}
          />
        </div>
      </div>
    </footer>
  );
};
