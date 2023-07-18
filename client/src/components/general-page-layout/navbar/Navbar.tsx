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
}: {
  theme: string;
  adminVariant: boolean;
  language: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { home, contactUs, about, testimonials, settlements, admin } =
    navbarStrings;

  if (adminVariant === true) {
    return <></>;
  }

  return (
    <nav>
      <NavCallToAction theme={theme} language={language} />
      <Navbar expand="md" className={`${theme}-variant`}>
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
                language === "English" ? contactUs.english : contactUs.spanish
              }
              url="/contact-us"
            />
            <AnimatedNavLink
              linkText={language === "English" ? about.english : about.spanish}
              url="/about"
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? testimonials.english
                  : testimonials.spanish
              }
              url="/testimonials"
            />
            <AnimatedNavLink
              linkText={
                language === "English"
                  ? settlements.english
                  : settlements.spanish
              }
              url="/previous-settlements"
            />
            <AnimatedNavLink
              linkText={language === "English" ? admin.english : admin.spanish}
              url="/admin-login"
            />
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
};
