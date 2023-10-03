// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { CustomerReview } from "../../customer-review/customerReview";
import { Button } from "../../button/Button";
// CSS
import "./what-customers-say.scss";
// Assets and Images
import customerReviewImage1 from "../../../assets/images/customer-reviews/google_review_1.png";

export const WhatCustomersSay = ({ language }: { language: string }) => {
  const { whatOurCustomersSayAboutUs } = homePageStrings;
  const { title, viewMoreResults } = whatOurCustomersSayAboutUs;

  return (
    <section className="what-customers-say padding-left-and-right z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div className="customer-review-container">
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
      </div>
      <div className="customer-review-container">
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
      </div>
      <div className="customer-review-container">
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
        <CustomerReview
          language={language}
          authorImage={customerReviewImage1}
          authorName="GG"
          rating={4.5}
          reviewBody="My overall experience with the Olive Law firm has been great! We were referred and I must say it has been top notch. Jessica is amazing, she always kept me informed and was available whenever I had a question or a concern. Lee Olive was also exceptional! He is knowledgable and showed great patience with me and all of my questions and decision making. Thank you for your dedication and hard work!"
        />
      </div>
      <div className="view-more-reviews-button-container">
        <Button
          text={
            language === "English"
              ? viewMoreResults.english
              : viewMoreResults.spanish
          }
          variant="primary"
          url="/client-testimonials"
        />
      </div>
    </section>
  );
};
