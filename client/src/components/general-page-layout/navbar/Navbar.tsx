// Library Imports
import { useState, useEffect } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
// Functions, Helpers, Utils, and Hooks
import useWindowWidth from "../../../hooks/useWindowWidth";
// Constants
import { navbarStrings } from "../../../constants/language-strings/navbarStrings";
// Components
import { NavCallToAction } from "./dependents/NavCallToAction";
import { AnimatedNavLink } from "./dependents/AnimatedNavLink";
// CSS
import "./navbar.scss";
// Assets and Images
import logoWithText from "../../../assets/images/logo/Full_Logo.png";
import logoNoText from "../../../assets/images/logo/Logo_No_Text.png";

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

  const windowWidth = useWindowWidth();
  const [navLogo, setNavLogo] = useState(logoWithText);

  const {
    home,
    practiceAreas,
    attorneys,
    clientReviews,
    ourResults,
    contactUs,
  } = navbarStrings;

  useEffect(() => {
    if (windowWidth >= 950) {
      setNavLogo(logoWithText);
    } else {
      setNavLogo(logoNoText);
    }
  }, [windowWidth]);

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
          <img className="ms-4" src={navLogo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <AnimatedNavLink
              linkText={language === "English" ? home.english : home.spanish}
              url="/"
              preserveState={[["language", language]]}
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? practiceAreas.english
                  : practiceAreas.spanish
              }
              url="/practice-areas"
              preserveState={[["language", language]]}
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? attorneys.english : attorneys.spanish
              }
              url="/attorneys"
              preserveState={[["language", language]]}
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? clientReviews.english
                  : clientReviews.spanish
              }
              url="/client-reviews"
              preserveState={[["language", language]]}
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? ourResults.english : ourResults.spanish
              }
              url="/our-results"
              preserveState={[["language", language]]}
            />
            <AnimatedNavLink
              linkText={
                language === "English" ? contactUs.english : contactUs.spanish
              }
              url="/contact-us"
              preserveState={[["language", language]]}
            />
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};
