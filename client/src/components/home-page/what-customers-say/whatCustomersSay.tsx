// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// CSS
import "./what-customers-say.scss";

export const WhatCustomersSay = ({ language }: { language: string }) => {
  const { whatOurCustomersSayAboutUs } = homePageStrings;
  const { title, review1, review2, review3, review4, review5, review6 } =
    whatOurCustomersSayAboutUs;

  return (
    <section className="our-philosophy padding-left-and-right z-index-1">
      <h1>Our Philosophy</h1>
      <span>
        When you have been injured due to another person’s negligence, you need
        someone who cares about your recovery, both physical and financial.
        <br></br>
        <br></br>
        You can rely on the personal injury attorneys at The Olive Law Firm to
        walk you through the legal system and make sure your best interests are
        represented.
      </span>
    </section>
  );
};
