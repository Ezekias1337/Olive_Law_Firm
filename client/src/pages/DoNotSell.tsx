// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState, useEffect } from "react";
// Constants
import { doNotSellStrings } from "../constants/language-strings/doNotSellStrings";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { FormState } from "../constants/interfaces/InputFieldProps";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Footer } from "../components/general-page-layout/footer/Footer";
import { SwitchInput } from "../components/input-fields/SwitchInput";
// CSS
import "../css/page-specific/do-not-sell.scss";
import "../components/form/dependents/inputFields.scss";

const COOKIE_NAME = "doNotSell";

const DoNotSell = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const pageTitle = {
    english: "Do Not Sell My Personal Information",
    spanish: "No Vender Mis Datos Personales",
  };

  const { youCanOptOut, optOut } = doNotSellStrings;

  const [doNotSell, setDoNotSell] = useState<FormState>({
    checked: false,
  });
  const [formErrors, setFormErrors] = useState<FormState>({
    doNotSell: "",
  });

  useEffect(() => {
    const cookie = document.cookie.includes(`${COOKIE_NAME}=true`);
    setDoNotSell({ checked: cookie });
  }, []);

  useEffect(() => {
    if (formErrors.doNotSell !== "") {
      console.log(formErrors);
    }
  }, [formErrors]);

  const toggleDoNotSell = () => {
    const newValue = !doNotSell.checked;
    document.cookie = `${COOKIE_NAME}=${newValue}; path=/; max-age=${
      60 * 60 * 24 * 365
    }`;
    setDoNotSell({ checked: newValue });
    window.dispatchEvent(new Event("do-not-sell-updated"));
  };

  return (
    <div className="container-fluid do-not-sell p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="do-not-sell-wrapper padding-left-and-right">
        <p>
          {reduxLanguage === "English"
            ? youCanOptOut.english
            : youCanOptOut.spanish}
        </p>

        <SwitchInput
          theme="light"
          name={reduxLanguage === "English" ? optOut.english : optOut.spanish}
          label="Opt-out of personal data sale"
          defaultValue={doNotSell.toString()}
          setStateHook={setDoNotSell}
          setErrorHook={setFormErrors}
          handleInputChange={toggleDoNotSell}
          required
        />
      </div>

      <CookieBanner
        bodyText={
          reduxLanguage === "English"
            ? "To ensure that you have the best possible experience while visiting us, we use cookies and similar technologies."
            : "Para garantizar que tenga la mejor experiencia posible mientras nos visita, utilizamos cookies y tecnologías similares."
        }
        button1={{
          text: "Dismiss",
          variant: "primary",
          buttonSize: "small",
        }}
      />
      <Footer language={reduxLanguage} />
    </div>
  );
};

export default DoNotSell;
