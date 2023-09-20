// Library Imports
import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
// Constants
import { navbarStrings } from "../../../constants/language-strings/navbarStrings";
// Components
import { NavCallToAction } from "./dependents/NavCallToAction";
import { AnimatedNavLink } from "./dependents/AnimatedNavLink";
// CSS
import "./navbar.scss";
// Assets and Images
import logo from "../../../assets/images/logo/Full_Logo.png";

export const NavBar = ({
  theme,
  adminVariant,
  language,
  backgroundImage = "",
  backgroundImageSize = "100%",
}: {
  theme: string;
  adminVariant: boolean;
  language: string;
  backgroundImage?: string;
  backgroundImageSize?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {
    home,
    practiceAreas,
    attorneys,
    clientReviews,
    ourResults,
    contactUs,
  } = navbarStrings;

  if (adminVariant === true) {
    return <></>;
  }

  return (
    <nav>
      <NavCallToAction theme={theme} language={language} />
      {backgroundImage !== "" ? (
        <img
          src={backgroundImage}
          className="navbar-background-image z-index-0"
          style={{ height: backgroundImageSize }}
        />
      ) : (
        <></>
      )}
      <Navbar expand="md" className={`navbar ${theme}-variant`}>
        <NavbarBrand href="/" className="ms-3">
          <img className="ms-4" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <AnimatedNavLink
              linkText={language === "English" ? home.english : home.spanish}
              url="/"
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? practiceAreas.english
                  : practiceAreas.spanish
              }
              url="/practice-areas"
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? attorneys.english : attorneys.spanish
              }
              url="/attorneys"
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? clientReviews.english
                  : clientReviews.spanish
              }
              url="/client-reviews"
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? ourResults.english : ourResults.spanish
              }
              url="/our-results"
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? contactUs.english : contactUs.spanish
              }
              url="/contact-us"
            />
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};
