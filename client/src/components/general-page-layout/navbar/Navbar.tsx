// Library Imports
import { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
// Functions, Helpers, Utils and Hooks
// Constants
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
}: {
  theme: string;
  adminVariant: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if (adminVariant === true) {
    return <></>;
  }

  return (
    <nav>
      <NavCallToAction />
      <Navbar  expand="md" className={`${theme}-variant`}>
        <NavbarBrand href="/" className="ms-3">
          <img className="ms-4" src={logo} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <AnimatedNavLink linkText="Home" url="/" />
            <AnimatedNavLink linkText="Contact Us" url="/contact-us" />
            <AnimatedNavLink linkText="About" url="/about" />
            <AnimatedNavLink linkText="Testimonials" url="/testimonials" />
            <AnimatedNavLink
              linkText="Settlements"
              url="/previous-settlements"
            />
            <AnimatedNavLink linkText="Admin" url="/admin-login" />
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
