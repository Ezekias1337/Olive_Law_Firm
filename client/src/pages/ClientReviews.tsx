// Library Imports
import { useSelector } from "react-redux/es/exports";
// Functions, Helpers, Utils and Hooks
import useDeviceInfo from "../hooks/useDeviceInfo";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { CustomerReviewProps } from "../components/customer-review/customerReview";
// Constants
import { clientReviewsStrings } from "../constants/language-strings/clientReviewsStrings";
// Components
import { NavBar } from "../components/general-page-layout/navbar/Navbar";
import { PageHeader } from "../components/general-page-layout/page-header/PageHeader";
import { ClientTestimonial } from "../components/client-reviews/clientTestimonial";
import { CustomerReview } from "../components/customer-review/customerReview";
import { Footer } from "../components/general-page-layout/footer/Footer";
// CSS
import "../css/page-specific/client-reviews.scss";
// Assets and Images
import google_review_1 from "../assets/images/customer-reviews/google_review_1.png";
import google_review_2 from "../assets/images/customer-reviews/google_review_2.png";
import google_review_3 from "../assets/images/customer-reviews/google_review_3.png";
import google_review_4 from "../assets/images/customer-reviews/google_review_4.png";
import google_review_5 from "../assets/images/customer-reviews/google_review_5.png";
import google_review_6 from "../assets/images/customer-reviews/google_review_6.png";
import google_review_7 from "../assets/images/customer-reviews/google_review_7.png";
import google_review_8 from "../assets/images/customer-reviews/google_review_8.png";
import google_review_9 from "../assets/images/customer-reviews/google_review_9.png";
import google_review_10 from "../assets/images/customer-reviews/google_review_10.png";
import google_review_11 from "../assets/images/customer-reviews/google_review_11.png";
import google_review_12 from "../assets/images/customer-reviews/google_review_12.png";

/* 
    TODO: Ensure to check reference to "The Olive Law Firm.com" in this
*/

type TestimonialInfo = {
  title: string;
  src: string;
};

const arrayOfTestimonialInfo: TestimonialInfo[] = [
  {
    title: "Katrina Peterson shares her experience about The Olive Law Firm",
    src: "https://www.youtube.com/embed/wxv-_ej4Zdo?si=uPqj4tygjpb5dY8j",
  },
  {
    title:
      "Don Talks about how The Olive Law Firm Handled his Personal Injury Case in Charlotte, NC",
    src: "https://www.youtube.com/embed/fY6hdjVz6v0?si=1maFdJHuAvE8Sqtc",
  },
  {
    title:
      "Eunice (Personal Injury Case, Charlotte NC) - The Olive Law Firm Testimonial",
    src: "https://www.youtube.com/embed/BQW1XsXFrBQ?si=6mRaEVlLABsWuysN",
  },
  {
    title:
      "Jeaneth Hernandez Shares her experience with Attorney Whitney Brooks & The Olive Law Firm",
    src: "https://www.youtube.com/embed/zuVYXA_5Xcs?si=XcEngbjLpgJpGp-K",
  },
  {
    title: "Keith Perry Final shares his experience with The Olive Law Firm!",
    src: "https://www.youtube.com/embed/ule1WwIXNv0?si=MMZ5T085DEO74JJZ",
  },
  {
    title: "Workers' Compensation Client Testimonial - Bryan Rodriguez 2019",
    src: "https://www.youtube.com/embed/atwvfvYPR3E?si=-P9acoUUlkumbkV8",
  },
  {
    title: "Workers' Compensation Client Testimonial - Anthony Sartin",
    src: "https://www.youtube.com/embed/FYhni7HGhGA?si=k-nfXTha2-4IioLp",
  },
  {
    title: "Pravis Anderson",
    src: "https://www.youtube.com/embed/hVtqFi6loMc?si=45oxNSQfX3P8YYQm",
  },
  {
    title: "Client Testimonial - Dominic Barringer (HD 2017)",
    src: "https://www.youtube.com/embed/StQaWtJhzSI?si=2y9k51zbG1_OUaPq",
  },
  {
    title: "Client Testimonial - John Duncan HD (2017)",
    src: "https://www.youtube.com/embed/JNkWlYvaClE?si=dY3EhmqEC_tm_MgH",
  },
  {
    title: "Client Testimonial - Dwayne Thompson HD (2017)",
    src: "https://www.youtube.com/embed/zMbpA48io6E?si=l5HKvLBf5ZJMZx52",
  },
  {
    title: "Client Testimonial - Beverly Farley (HD 2018)",
    src: "https://www.youtube.com/embed/FaLOJw6Xrb0?si=ULULPrm8Tj84jV9-",
  },
  {
    title:
      "Mahogany Houston Shares her experience with The Olive Law Firm and Attorney Lee Olive",
    src: "https://www.youtube.com/embed/fQK8uyR4Q70?si=iaslMyMK5UgFv3zi",
  },
  {
    title:
      "Demetrius Brewington- Shares his experience with The Olive Law Firm, P.A.",
    src: "https://www.youtube.com/embed/YFC1OFhy6Xw?si=Jz84Qr_uLzSvFTnn",
  },
];

const ClientReviews = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );

  const { pageTitle, googleReviews, brandingDisclaimer } = clientReviewsStrings;

  const arrayOfReviewInfo: CustomerReviewProps[] = [
    {
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
    {
      language: reduxLanguage,
      authorImage: google_review_7,
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
      language: reduxLanguage,
      authorImage: google_review_8,
      authorName: "Carla Ramirez",
      rating: 5,
      reviewBody: {
        english:
          "Great Service and Great Communication with the Firm Team, Service was Fast and every issue solve fast too. Thank You to The Olive Law Firm for the Great Service!",
        spanish:
          "Excelente servicio y excelente comunicación con el equipo de la empresa, el servicio fue rápido y todos los problemas se resolvieron rápidamente también. ¡Gracias a The Olive Law Firm por el gran servicio!",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_9,
      authorName: "Julie A.",
      rating: 5,
      reviewBody: {
        english:
          "Wow what can I say the Olive law firm is by far the absolute best law firm in the world! They helped me so much through my tragedy and have kept me informed every step of the way. Jessica Sinacori helped me so much in my case and was so thoughtful and diligent as my case manager. Attorney Brooks helped me by explaining everything to me in a way I could understand. I would definitely recommend the olive law firm for anyone needing an attorney. Thank you so much Jessica and Attorney Brooks!",
        spanish:
          "¡Vaya, qué puedo decir! El bufete de abogados Olive es, con diferencia, el mejor bufete de abogados del mundo. Me ayudaron mucho durante mi tragedia y me mantuvieron informado en cada paso del camino. Jessica Sinacori me ayudó mucho en mi caso y fue muy considerada y diligente como administradora de mi caso. El abogado Brooks me ayudó explicándome todo de una manera que pudiera entender. Definitivamente recomendaría el bufete de abogados Olive a cualquiera que necesite un abogado. ¡Muchas gracias Jessica y el abogado Brooks!",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_10,
      authorName: "NdiaArie",
      rating: 5,
      reviewBody: {
        english:
          "I had a great experience with Jessica at Olive Law Firm. She answered any questions I had and kept me updated throughout the whole process. I will definitely recommend Olive Law Firm to anyone I know.",
        spanish:
          "Tuve una gran experiencia con Jessica en Olive Law Firm. Ella respondió todas las preguntas que tuve y me mantuvo informado durante todo el proceso. Definitivamente recomendaré Olive Law Firm a cualquiera que conozca.",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_11,
      authorName: "CenPeCo Carolina",
      rating: 5,
      reviewBody: {
        english:
          "I was involved in an accident the end of 2022.  I was rear ended and incurred injuries.  I was referred to Olive Law Firm and couldn’t be happier with the outcome.  Jessica was my contact point and helped me coordinate everything!  Doctors , insurance companies ,etc .   The Settlement was appropriate , Doctors Bills paid.  Nobody wants to be involved in a collision but if you are ,I highly recommend you contact Olive Law Firm for guidance!",
        spanish:
          "Estuve involucrado en un accidente a finales de 2022. Me chocaron por detrás y sufrí lesiones. Me recomendaron a Olive Law Firm y no podría estar más feliz con el resultado. ¡Jessica fue mi punto de contacto y me ayudó a coordinar todo! Médicos, compañías de seguros, etc. El Acuerdo fue apropiado, las facturas de los médicos fueron pagadas. Nadie quiere verse involucrado en una colisión, pero si es así, le recomiendo que se comunique con Olive Law Firm para obtener orientación.",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_12,
      authorName: "Kevin Garcia",
      rating: 5,
      reviewBody: {
        english:
          "I highly recommend The Olive Law firm. Lee Olive is very knowledgeable and professional. My experience with your firm was top-grade. I was kept informed at every stage of my case.  I felt that your team was behind me and that gave me a feeling of confidence and satisfaction.",
        spanish:
          "Recomiendo ampliamente el bufete de abogados The Olive. Lee Olive tiene mucho conocimiento y es profesional. Mi experiencia con su empresa fue de primera. Me mantuvieron informado en cada etapa de mi caso. Sentí que su equipo estaba detrás de mí y eso me dio una sensación de confianza y satisfacción.",
      },
    },
  ];

  return (
    <div className="container-fluid client-reviews-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="client-reviews-wrapper display-flex padding-left-and-right">
        {arrayOfTestimonialInfo.map((testimonial) => (
          <ClientTestimonial
            title={testimonial.title}
            src={testimonial.src}
            key={testimonial.src}
          />
        ))}
      </div>

      <PageHeader
        language={reduxLanguage}
        title={googleReviews}
        includeBanner
      />
      <div className="google-reviews-wrapper display-flex padding-left-and-right">
        {arrayOfReviewInfo.map((review) => (
          <CustomerReview
            language={reduxLanguage}
            authorImage={review.authorImage}
            authorName={review.authorName}
            rating={review.rating}
            reviewBody={review.reviewBody}
            key={review.authorName}
          />
        ))}
      </div>

      <Footer language={reduxLanguage} />
    </div>
  );
};

export default ClientReviews;
