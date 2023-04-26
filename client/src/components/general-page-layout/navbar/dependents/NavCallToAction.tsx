// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Components
import { LanguageToggler } from "./LanguageToggler";
// Constants
import { navbarStrings } from "../../../../constants/language-strings/navbarStrings";
// Interfaces
import { TogglerProps } from "./LanguageToggler";

export const NavCallToAction = ({
  theme,
  language,
}: {
  theme: string;
  language: string;
}) => {
  const { callUs } = navbarStrings;

  return (
    <div className="nav-call-to-action container-fluid">
      <div className="row">
        <div className="col col-6 col-lg-9"></div>
        <div className="col col-6 col-lg-3 full-flex">
          <h2>{language === "English" ? callUs.english : callUs.spanish}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col col-6 col-lg-9 toggler-align">
          <LanguageToggler theme={theme} />
        </div>
        <div className="col col-6 col-lg-3 full-flex">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <h3 className="ms-2">+1 (704) 377-9222</h3>
        </div>
      </div>
    </div>
  );
};
