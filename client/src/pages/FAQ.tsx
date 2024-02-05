// Library Imports
import { useSelector } from "react-redux/es/exports";
import { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
// Constants
import { faqStrings } from "../constants/language-strings/faqStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/faq.scss";

const FAQ = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const {
    pageTitle,
    disclaimer1,
    disclaimer2,
    faq1,
    faq2,
    faq3,
    faq4,
    faq5,
    faq6,
    faq7,
  } = faqStrings;

  const { faq1Title, faq1Body } = faq1;
  const { faq2Title, faq2Body } = faq2;
  const { faq3Title, faq3Body } = faq3;
  const { faq4Title, faq4Body } = faq4;
  const { faq5Title, faq5Body } = faq5;
  const { faq6Title, faq6Body } = faq6;
  const { faq7Title, faq7Body } = faq7;

  const [openAccordion, setOpenAccordion] = useState<string>('');

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion((prev) => (prev === id ? '' : id));
  };

  return (
    <div className="container-fluid faq-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="faq-disclaimer-text dark-image-overlay padding-left-and-right">
        <h3>
          {reduxLanguage === "English"
            ? disclaimer1.english
            : disclaimer1.spanish}
        </h3>
        <h3>
          {reduxLanguage === "English"
            ? disclaimer2.english
            : disclaimer2.spanish}
        </h3>
      </div>

      <div className="faq-accordion-wrapper padding-left-and-right">
        <Accordion open={openAccordion}>
          <AccordionItem>
            <AccordionHeader targetId="1" onClick={() => handleAccordionToggle("1")}>
              {reduxLanguage === "English"
                ? faq1Title.english
                : faq1Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="1">
              {reduxLanguage === "English"
                ? faq1Body.english
                : faq1Body.spanish}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="2" onClick={() => handleAccordionToggle("2")}>
              {reduxLanguage === "English"
                ? faq2Title.english
                : faq2Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="2">
              {reduxLanguage === "English"
                ? faq2Body.english
                : faq2Body.spanish}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="3" onClick={() => handleAccordionToggle("3")}>
              {reduxLanguage === "English"
                ? faq3Title.english
                : faq3Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="3">
              {reduxLanguage === "English"
                ? faq3Body.english
                : faq3Body.spanish}
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="4" onClick={() => handleAccordionToggle("4")}>
              {reduxLanguage === "English"
                ? faq4Title.english
                : faq4Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="4">
              {reduxLanguage === "English"
                ? faq4Body.english
                : faq4Body.spanish}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="5" onClick={() => handleAccordionToggle("5")}>
              {reduxLanguage === "English"
                ? faq5Title.english
                : faq5Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="5">
              {reduxLanguage === "English"
                ? faq5Body.english
                : faq5Body.spanish}
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader targetId="6" onClick={() => handleAccordionToggle("6")}>
              {reduxLanguage === "English"
                ? faq6Title.english
                : faq6Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="6">
              {reduxLanguage === "English"
                ? faq6Body.english
                : faq6Body.spanish}
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader targetId="7" onClick={() => handleAccordionToggle("7")}>
              {reduxLanguage === "English"
                ? faq7Title.english
                : faq7Title.spanish}
            </AccordionHeader>
            <AccordionBody accordionId="7">
              {reduxLanguage === "English"
                ? faq7Body.english
                : faq7Body.spanish}
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default FAQ;
