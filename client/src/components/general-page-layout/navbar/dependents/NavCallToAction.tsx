// Library Imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Components
import { LanguageToggler } from "./LanguageToggler";
// Constants
import { navbarStrings } from "../../../../constants/language-strings/navbarStrings";

export const NavCallToAction = ({
  theme,
  language,
}: {
  theme: string;
  language: string;
}) => {
  const { callUs, afterHours } = navbarStrings;

  return (
    <div className="nav-call-to-action container-fluid">
      <div className="row">
        <div className="col col-4"></div>
        <div className="col col-4 full-flex">
          <h2>{language === "English" ? callUs.english : callUs.spanish}</h2>
        </div>
        <div className="col col-4 full-flex">
          <h2>
            {language === "English" ? afterHours.english : afterHours.spanish}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col col-4 toggler-align">
          <LanguageToggler language={language} />
        </div>
        <div className="col col-4 full-flex">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <h3 className="ms-2">+1 (704) 377-9222</h3>
        </div>
        <div className="col col-4 full-flex">
          <FontAwesomeIcon icon={faPhone} size="xl" />
          <h3 className="ms-2">+1 (704) 999-6967</h3>
        </div>
      </div>
    </div>
  );
};
