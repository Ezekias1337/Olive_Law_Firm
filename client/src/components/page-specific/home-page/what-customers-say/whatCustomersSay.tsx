// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
// Interfaces and Types
import { CustomerReviewProps } from "../../../../components/customer-review/customerReview";
// Components
import { CustomerReview } from "../../../customer-review/customerReview";
import { Button } from "../../../button/Button";
// CSS
import "./what-customers-say.scss";
// Assets and Images
import google_review_1 from "../../../../assets/images/customer-reviews/google_review_1.png";
import google_review_7 from "../../../../assets/images/customer-reviews/google_review_7.png";
import google_review_3 from "../../../../assets/images/customer-reviews/google_review_3.png";
import google_review_4 from "../../../../assets/images/customer-reviews/google_review_4.png";
import google_review_5 from "../../../../assets/images/customer-reviews/google_review_5.png";
import google_review_6 from "../../../../assets/images/customer-reviews/google_review_6.png";

export const WhatCustomersSay = ({ language }: { language: string }) => {
  const { whatOurCustomersSayAboutUs } = homePageStrings;
  const { title, viewMoreResults } = whatOurCustomersSayAboutUs;

  const arrayOfReviewInfo: CustomerReviewProps[] = [
    {
      language: language,
      authorImage: google_review_1,
      authorName: "Kendyll G",
      rating: 5,
      reviewBody: {
        english:
          "I wish I could give this firm 100 stars. I like that they are very straight forward with you, keeping you informed every step of the way and talk to you like a real person, keeping legalese to a minimum so everything is easy to understand. Jessica Sinacori is a hardworking, friendly, very reliable addition to the team and she was a great help during my case. I'm grateful for this firm because without them I probably wouldn't have gotten anything (accident was not my fault and offending driver had no insurance). Thank you times a million!",
        spanish:
          "Ojalá pudiera darle a esta empresa 100 estrellas. Me gusta que sean muy directos contigo, te mantengan informado en cada paso del camino y te hablen como una persona real, manteniendo la jerga legal al mínimo para que todo sea fácil de entender. Jessica Sinacori es una incorporación al equipo trabajadora, amigable y muy confiable y fue de gran ayuda durante mi caso. Estoy agradecido por esta empresa porque sin ellos probablemente no habría obtenido nada (el accidente no fue culpa mía y el conductor infractor no tenía seguro). ¡Un millón de gracias!",
      },
    },
    {
      language: language,
      authorImage: google_review_7,
      authorName: "Spencer Dickason",
      rating: 5,
      reviewBody: {
        english:
          "I have to say that this is elite law firm. They help me through every aspect of my case. The professionalism and keeping me informed throughout the process without having to really ask questions was incredible. Mariely Bermudez the paralegal is phenomenal. She will have all your questions answered as soon as you ask. Her attitude, energy and knowledge was exceptional. If you had questions after hours she would give you a response right back. Words can’t define what she met to me going through my case. The way she helps you get things resolved is priceless. I see why Attorney Olive has her on his team.",
        spanish:
          "Debo decir que este es un bufete de abogados de élite. Me ayudan en todos los aspectos de mi caso. El profesionalismo y mantenerme informado durante todo el proceso sin tener que hacer preguntas fue increíble. Mariely Bermúdez la asistente legal es fenomenal. Ella tendrá respuestas a todas sus preguntas tan pronto como las haga. Su actitud, energía y conocimiento fueron excepcionales. Si tuviera preguntas fuera del horario de atención, ella le respondería de inmediato. Las palabras no pueden definir lo que ella conoció durante mi caso. La forma en que te ayuda a resolver las cosas no tiene precio. Entiendo por qué el abogado Olive lo tiene en su equipo.",
      },
    },

    {
      language: language,
      authorImage: google_review_3,
      authorName: "Frank Bonilla",
      rating: 5,
      reviewBody: {
        english:
          "I'm very grateful for the help you provided me and I am satisfied with the outcome of the case. I will highly recommend your firm to anybody that needs your services. You have an outstanding work group that helps people in both languages. I am very grateful for that and for the work that you have done. You guys are great!",
        spanish:
          "Estoy muy agradecido por la ayuda que me brindaron y estoy satisfecho con el resultado del caso. Recomendaré ampliamente su empresa a cualquiera que necesite sus servicios. Tienes un excelente grupo de trabajo que ayuda a las personas en ambos idiomas. Estoy muy agradecido por eso y por el trabajo que has realizado. ¡Ustedes son geniales!",
      },
    },
    {
      language: language,
      authorImage: google_review_4,
      authorName: "Charleen Mccray",
      rating: 5,
      reviewBody: {
        english:
          "I really appreciate what the law firm did for me. They are very honest and great to work with. They are humble and I appreciate everything the office staff and the attorney did for me. Anytime anything may  come up again, I know who to call. I didn’t have to worry about anything.",
        spanish:
          "Realmente aprecio lo que el bufete de abogados hizo por mí. Son muy honestos y es genial trabajar con ellos. Son humildes y aprecio todo lo que el personal de la oficina y el abogado hicieron por mí. Cada vez que vuelva a surgir algo, sé a quién llamar. No tuve que preocuparme por nada.",
      },
    },
    {
      language: language,
      authorImage: google_review_5,
      authorName: "Nestor E. Brunel",
      rating: 5,
      reviewBody: {
        english:
          "Everything that was promised was provided. I am very satisfied with the experience I received. Every member of the staff was very helpful.",
        spanish:
          "Todo lo prometido se cumplió. Estoy muy satisfecho con la experiencia que recibí. Cada miembro del personal fue muy servicial.",
      },
    },
    {
      language: language,
      authorImage: google_review_6,
      authorName: "Jenifer Palacios",
      rating: 5,
      reviewBody: {
        english:
          "They are great. I’ve been in a couple car accidents and they always help me. Ms. Jessica worked with me on my last case and got me more then I expected. Definitely recommend :)",
        spanish:
          "Son geniales. He tenido un par de accidentes automovilísticos y siempre me ayudan. La Sra. Jessica trabajó conmigo en mi último caso y consiguió más de lo que esperaba. Definitivamente lo recomiendo :)",
      },
    },
  ];

  return (
    <section className="what-customers-say z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div className="customer-review-container">
        {arrayOfReviewInfo.map((review) => (
          <CustomerReview
            language={language}
            authorImage={review.authorImage}
            authorName={review.authorName}
            rating={review.rating}
            reviewBody={review.reviewBody}
            key={review.authorName}
          />
        ))}
      </div>
      <div className="view-more-reviews-button-container">
        <Button
          text={
            language === "English"
              ? viewMoreResults.english
              : viewMoreResults.spanish
          }
          variant="primary"
          url="/client-reviews"
          buttonSize="large"
        />
      </div>
    </section>
  );
};
