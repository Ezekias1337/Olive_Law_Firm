// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { Table } from "reactstrap";
import { OurResult } from "../../our-results/ourResult";
import { Button } from "../../button/Button";
// CSS
import "./our-results.scss";

const ourResultStrings = [
  {
    amountAwarded: "45,000",
    english: {
      practiceArea: "Worker's Compensation",
      description:
        "Worker's Compensation (Spinal Cord Injury): Recovered on behalf of a construction worker from Texas who was paralyzed following a fall from a roof on a construction site in Mecklenburg County, North Carolina. Despite being unable to care for himself, the work comp carrier refused to compensate plaintiff's wife for the daycare she had to provide. After a trial before the industrial commission, the company settled.",
    },
    spanish: {
      practiceArea: "Compensación del Trabajador",
      description:
        "Compensación al Trabajador (Lesión de la Médula Espinal): Se recuperó en nombre de un trabajador de la construcción de Texas que quedó paralizado después de una caída de un techo en un sitio de construcción en el condado de Mecklenburg, Carolina del Norte. A pesar de ser incapaz de cuidar de sí mismo, la compañía de compensación de trabajo se negó a compensar a la esposa del demandante por la guardería que tenía que proporcionar. Después de un juicio ante la comisión industrial, la empresa se estableció.",
    },
  },
];

export const OurResults = ({ language }: { language: string }) => {
  const { ourResults } = homePageStrings;
  const { title, viewMoreResults } = ourResults;

  return (
    <section className="our-results padding-left-and-right z-index-1">
      <h2 className="page-title">
        {language === "English" ? title.english : title.spanish}
      </h2>
      <div className="our-results-container container space-around-flex">
        <div className="row">
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
        </div>
        <div className="row">
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
          <OurResult
            language={language}
            ourResultObject={ourResultStrings[0]}
          />
        </div>
      </div>

      <div className="view-more-results-container">
        <Button
          text={
            language === "English"
              ? viewMoreResults.english
              : viewMoreResults.spanish
          }
          variant="primary"
          url="/our-results"
        />
      </div>
    </section>
  );
};
