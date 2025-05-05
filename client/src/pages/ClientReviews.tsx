// Library Imports
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
// Interfaces and Types
import { ReduxStoreState } from "../constants/interfaces/ReduxStoreState";
import { CustomerReviewProps } from "../components/customer-review/customerReview";
// Constants
import { clientReviewsStrings } from "../constants/language-strings/clientReviewsStrings";
// Components
import CookieBanner from "../components/cookie-banner/CookieBanner";
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


type TestimonialInfo = {
  title: string;
  src: string;
};

const arrayOfEnglishTestimonialInfo: TestimonialInfo[] = [
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
    title: "Client Testimonial - James Adams HD (2017)",
    src: "https://www.youtube.com/embed/BIxm1hV7FCc?si=vLwhmTvPqGCsIPM6",
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

const arrayOfSpanishTestimonialInfo: TestimonialInfo[] = [
  {
    title: "Bryan Rodriguez",
    src: "https://www.youtube.com/embed/atwvfvYPR3E?si=-P9acoUUlkumbkV8",
  },
  {
    title: "Jose Gonzalez",
    src: "https://www.youtube.com/embed/C8skcu6MuF8?si=zs3b6r9SZGsEVxqt",
  },
  {
    title: "Andres Calderon",
    src: "https://www.youtube.com/embed/DDxleKFX64U?si=smH6Kb83Z-1fC4iG",
  },
  {
    title: "Benedicto Almonte",
    src: "https://www.youtube.com/embed/CGOW61Bd1oI?si=z-XzFDdbmnY75_dd",
  },
  {
    title: "Yovani Santos Hernandez",
    src: "https://www.youtube.com/embed/GwEEyqDbqHw?si=qmm6jT8jzeXHPjw_",
  },
  {
    title: "Luis Rivera",
    src: "https://www.youtube.com/embed/owZWJHVHF6o?si=fGNTvHS3UAJoNUn8",
  },
  {
    title: "Roberto Lopez",
    src: "https://www.youtube.com/embed/3AIEZsekEQ0?si=ntNzGczB62qPGfNs",
  },
  {
    title: "Victorio Martinez",
    src: "https://www.youtube.com/embed/iGqPusR44SE?si=SNPPe8SxfW3yeAH9",
  },
  {
    title: "Pedro Gamez (HD 2019)",
    src: "https://www.youtube.com/embed/wU3kDbthuGk?si=I3G3hZ8oi4E2f8a3",
  },
  {
    title: "Carlos Aleman (HD 2019)",
    src: "https://www.youtube.com/embed/ywDN8biaKxg?si=ZPGXkPnXj0punV89",
  },
  {
    title: "Bryan Rodriguez 2019",
    src: "https://www.youtube.com/embed/atwvfvYPR3E?si=-P9acoUUlkumbkV8",
  },
  {
    title: "Uriel Marcial Cruz (Español)",
    src: "https://www.youtube.com/embed/F07IQs3NfTQ?si=Uo0FQhbkPWDQluSP",
  },
  {
    title: "Juan Flores (Spanish)",
    src: "https://www.youtube.com/embed/Dpl-UCtG1GQ?si=KGympMO3AOOOcb9-",
  },
  {
    title: "Jose Franklin Castellanos Hernandez",
    src: "https://www.youtube.com/embed/XjwcXMx3Myk?si=gNkWBc2rf8J1ZJd2",
  },
];

const ClientReviews = () => {
  const reduxLanguage = useSelector(
    (state: ReduxStoreState) => state.language.contents.languageChoice
  );
  const [selectedReviewArray, setSelectedReviewArray] =
    useState<TestimonialInfo[]>();

  const { pageTitle } = clientReviewsStrings;

  const arrayOfReviewInfo: CustomerReviewProps[] = [
    {
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
      language: reduxLanguage,
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
    {
      language: reduxLanguage,
      authorImage: google_review_2,
      authorName: "Christie Roberts",
      rating: 5,
      reviewBody: {
        english:
          "Juan Sanchez is awesome!! I wish I would have retained him a year sooner.  He handled my workers comp claim professionally with care and compassion!  I could not be more pleased!  Thank you!  Great team for sure.",
        spanish:
          "Juan Sánchez es genial!! Ojalá lo hubiera retenido un año antes. ¡Él manejó mi reclamo de compensación laboral profesionalmente con cuidado y compasión! ¡No podría estar más contento! ¡Gracias! Gran equipo sin duda.",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_8,
      authorName: "Francisco Esquivel",
      rating: 5,
      reviewBody: {
        english:
          "This law firm was recommended to me by a close friend. I had an excellent experience over all and if I had to ever count on any law firm to back me up again, it would 110% be this one. The communication was on point. Expectations were always set appropriately. I never felt unsupported. Any questions I had were answered. Thank you to everyone here who was in the mix helping me. Top tier in every way.",
        spanish:
          "Un amigo cercano me recomendó este bufete de abogados. Tuve una experiencia excelente en general y si alguna vez tuviera que contar con un despacho de abogados que me respaldara nuevamente, sería 110% este. La comunicación fue puntual. Las expectativas siempre se establecieron de manera adecuada. Nunca me sentí sin apoyo. Cualquier pregunta que tuve fue respondida. Gracias a todos los que estuvieron aquí ayudándome. Primer nivel en todos los sentidos.",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_9,
      authorName: "Sherrie Greene",
      rating: 5,
      reviewBody: {
        english:
          "I was reccomend by a friend to attorney juan sanchez for a workers comp claim. I was not getting the proper medical care and was treated very poorly by the insurance company. Juan helped me get the right care and faught to get it done. The staff all were so kind and understood my needs and showed much compassion. I could not have done it with out them. I would highly recommend this law firm.",
        spanish:
          "Un amigo me recomendó al abogado juan sánchez para un reclamo de compensación laboral. No recibía la atención médica adecuada y la compañía de seguros me trató muy mal. Juan me ayudó a recibir la atención adecuada y luchó para lograrlo. Todo el personal fue muy amable, entendió mis necesidades y mostró mucha compasión. No podría haberlo hecho sin ellos. Recomendaría ampliamente este bufete de abogados.",
      },
    },
    {
      language: reduxLanguage,
      authorImage: google_review_10,
      authorName: "R E",
      rating: 5,
      reviewBody: {
        english:
          "I don’t think anyone wants to use legal services, but life doesn’t deliver perfection and in some instances it is absolutely necessary. It was a positive experience working with the Olive team, and would recommend utilizing their services should there be a need. I had questions galore as this was not a common place, but they responded to all questions with patience and urgency. Thank you again team. -Cheers",
        spanish:
          "No creo que nadie quiera utilizar los servicios legales, pero la vida no ofrece la perfección y, en algunos casos, es absolutamente necesario. Fue una experiencia positiva trabajar con el equipo de Olive y recomendaría utilizar sus servicios si fuera necesario. Tenía muchas preguntas ya que este no era un lugar común, pero respondieron a todas las preguntas con paciencia y urgencia. Gracias de nuevo equipo. -Salud",
      },
    },
  ];

  useEffect(() => {
    if (reduxLanguage === "English") {
      setSelectedReviewArray(arrayOfEnglishTestimonialInfo);
    } else if (reduxLanguage === "Spanish") {
      setSelectedReviewArray(arrayOfSpanishTestimonialInfo);
    }
  }, [setSelectedReviewArray, reduxLanguage]);

  return (
    <div className="container-fluid client-reviews-container p-0">
      <NavBar theme="dark" adminVariant={false} language={reduxLanguage} />
      <PageHeader language={reduxLanguage} title={pageTitle} includeBanner />

      <div className="google-reviews-wrapper display-flex">
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

      <div className="client-reviews-wrapper display-flex">
        {selectedReviewArray?.map((testimonial) => (
          <ClientTestimonial
            title={testimonial.title}
            src={testimonial.src}
            key={testimonial.src}
          />
        ))}
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

export default ClientReviews;
