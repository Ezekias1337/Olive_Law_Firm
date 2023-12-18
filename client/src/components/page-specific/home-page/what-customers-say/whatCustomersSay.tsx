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
import google_review_2 from "../../../../assets/images/customer-reviews/google_review_2.png";
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
      authorName: "Tammy Derby",
      rating: 5,
      reviewBody: {
        english:
          "Having a car accident is a frightening experience. I chose Olive Law Firm and worked closely with Jessica who walked me through the whole process, answering all my questions and was always available if I had any concerns. With her support and outstanding customer service I was able to get through the process. I’m very grateful and pleased with the results and could not have asked or received a better outcome!! Thank you Olive Law Firm and Thank you Jessica !! Sincerely, Tammy Derby",
        spanish:
          "Tener un accidente automovilístico es una experiencia aterradora. Elegí Olive Law Firm y trabajé estrechamente con Jessica, quien me guió durante todo el proceso, respondiendo todas mis preguntas y siempre estuvo disponible si tenía alguna inquietud. Con su apoyo y excelente servicio al cliente pude superar el proceso. ¡Estoy muy agradecida y satisfecha con los resultados y no podría haber pedido ni recibido un mejor resultado! ¡¡Gracias Olive Law Firm y gracias Jessica!! Atentamente, Tammy Derby",
      },
    },
    {
      language: language,
      authorImage: google_review_4,
      authorName: "Claire Williams",
      rating: 5,
      reviewBody: {
        english:
          "Everyone we spoke with or dealt with was over the top amazing! Jessica was super helpful and was easy to communicate with via email, phone, or text! Which makes life a lot easier! They took all the headache off of my husband & I during this already frustrating time of being in an accident. The office handled everything very professionally & within an appropriate timely manner. Jessica even drove after work to meet me and hand deliver my check! After all was said and done, we would highly recommend this wonderfully staffed business to anyone! Thank you again Olive Law Firm!",
        spanish:
          "¡Todas las personas con las que hablamos o tratamos fueron increíblemente increíbles! ¡Jessica fue muy servicial y fue fácil comunicarse con ella por correo electrónico, teléfono o mensaje de texto! ¡Lo que hace la vida mucho más fácil! Nos quitaron todo el dolor de cabeza a mi esposo y a mí durante este momento ya frustrante de sufrir un accidente. La oficina manejó todo de manera muy profesional y oportuna. ¡Jessica incluso condujo después del trabajo para recibirme y entregarme el cheque personalmente! Después de todo lo dicho y hecho, ¡recomendamos encarecidamente este negocio con un personal maravilloso a cualquiera! ¡Gracias nuevamente Olive Law Firm!",
      },
    },
    {
      language: language,
      authorImage: google_review_2,
      authorName: "Jenni O",
      rating: 5,
      reviewBody: {
        english:
          "They took great care with my auto accident case. They communicated consistently with updates and were thorough. I worked with Ms. Sinacori and she was professional and courteous. I would highly recommend them.",
        spanish:
          "Tuvieron mucho cuidado con mi caso de accidente automovilístico. Se comunicaron constantemente con las actualizaciones y fueron minuciosos. Trabajé con la Sra. Sinacori y ella fue profesional y cortés. Los recomendaría ampliamente.",
      },
    },
    {
      language: language,
      authorImage: google_review_3,
      authorName: "Jackie Williams",
      rating: 5,
      reviewBody: {
        english:
          "Great Service ….Jackie is a great paralegal Attorney Juan Sanchez very informative and on time with everything. I will use them again",
        spanish:
          "Gran servicio... Jackie es un gran asistente legal. El abogado Juan Sánchez es muy informativo y puntual con todo. Los usaré de nuevo",
      },
    },
    
    {
      language: language,
      authorImage: google_review_5,
      authorName: "Lee Benjamin",
      rating: 5,
      reviewBody: {
        english:
          "I cannot say enough about how happy we are with The Olive Law Firm. Their entire staff was supportive, professional, and courteous. Mr. Sanchez prepared us for every step of the process in advance. There were no surprises. Please don’t hesitate to utilize their services if the opportunity arises for you. Workman’s comp cases can be difficult to deal with. Having experienced, expert representation helps. Thank you to The Olive Law Firm and we really appreciate you, Juan Sanchez.",
        spanish:
          "No puedo decir lo suficiente sobre lo felices que estamos con The Olive Law Firm. Todo su personal fue solidario, profesional y cortés. El Sr. Sánchez nos preparó de antemano para cada paso del proceso. No hubo sorpresas. No dude en utilizar sus servicios si se le presenta la oportunidad. Los casos de compensación laboral pueden ser difíciles de tratar. Tener una representación experta y con experiencia ayuda. Gracias a The Olive Law Firm y realmente te apreciamos, Juan Sánchez.",
      },
    },
    {
      language: language,
      authorImage: google_review_6,
      authorName: "Yolanda Echabarria",
      rating: 5,
      reviewBody: {
        english:
          "I used the law firm for a car accident I had last year and Jessica Sinacori and Juan Sanchez went above and beyond to make sure I was taking care of I highly recommend The Olive Law Firm specially these two thank you for taking good care of me ! 🤗 …",
        spanish:
          "Utilicé el bufete de abogados para un accidente automovilístico que tuve el año pasado y Jessica Sinacori y Juan Sánchez hicieron todo lo posible para asegurarse de que me estuviera cuidando. Recomiendo ampliamente The Olive Law Firm, especialmente a estos dos, ¡gracias por cuidarme bien! 🤗…",
      },
    },
  ];

  return (
    <section className="what-customers-say padding-left-and-right z-index-1">
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
          url="/client-testimonials"
        />
      </div>
    </section>
  );
};
