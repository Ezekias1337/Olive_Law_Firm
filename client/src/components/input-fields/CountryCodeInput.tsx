// Library Imports
import { FC, useState, useEffect, useMemo } from "react";
import { nanoid } from "nanoid";
// Functions, Helpers, and Utils
import { renderCountryCodeOptions } from "../../functions/forms/renderCountryCodeOptions";
import { updateCountryCodeImage } from "../../functions/forms/updateCountryCodeImage";
// Constants
import { phoneNumberCountryCodes } from "../../constants/phoneNumberCountryCodes";
// Interfaces and Types
import { CountryCodeInputFieldProps } from "../../constants/interfaces/InputFieldProps";

/* 
    ! THIS COMPONENT IS NOT COMPLETED
*/

export const CountryCodeInput: FC<CountryCodeInputFieldProps> = ({ theme }) => {
  const arrayOfOptions = useMemo(
    () => renderCountryCodeOptions(phoneNumberCountryCodes),
    [phoneNumberCountryCodes]
  );

  const [showMenu, setShowMenu] = useState(false);
  const [countryImage, setCountryImage] = useState("");

  /* 
    Update Flag Icon on load to USA
  */

  useEffect(() => {
    updateCountryCodeImage("United States", setCountryImage);
  }, []);

  return (
    <div
      className={`country-code-input-wrapper ${theme}-country-code-input z-index-2`}
    >
      <button
        className="toggle-country-code-menu"
        style={{ backgroundImage: `url(${countryImage})` }}
        id="toggle-country-code-menu"
        key={nanoid()}
        onClick={() => setShowMenu(!showMenu)}
      ></button>
      {showMenu === false ? (
        <></>
      ) : (
        <ul className="country-code-menu-wrapper z-index-3">
          {arrayOfOptions}
        </ul>
      )}
    </div>
  );
};
