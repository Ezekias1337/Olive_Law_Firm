// Constants
import { homePageStrings } from "../../../../constants/language-strings/homepageStrings";
// Components
import { AttorneyShowcase } from "./dependents/attorneyShowcase";
// CSS
import "./our-attorneys.scss";
// Assets and Images
import juanSanchezImage from "../../../../assets/images/staff/juan-sanchez.png";
import whitneyBrooksImage from "../../../../assets/images/staff/whitney-brooks.png";
//import valerieKilgoreImage from "../../../../assets/images/staff/valerie-kilgore.png";

export const OurAttorneys = ({ language }: { language: string }) => {
  const { ourAttorneys } = homePageStrings;
  const { title } = ourAttorneys;
  const arrayOfAttorneyInfo = [
    {
      name: "Juan Sanchez",
      image: juanSanchezImage,
      link: `attorney-profile/:juan-sanchez?language=${language}`,
    },
    {
      name: "Whitney Brooks",
      image: whitneyBrooksImage,
      link: `attorney-profile/:whitney-brooks?language=${language}`,
    },
    /* {
    name: "Valerie Kilgore",
    image: valerieKilgoreImage,
    link: "attorney-profile/:valerie-kilgore",
  }, */
  ];
  
  return (
    <section className="our-attorneys z-index-1">
      <div className="our-attorneys-title-container full-flex">
        <h2 className="page-title">
          {language === "English" ? title.english : title.spanish}
        </h2>
      </div>

      <div className="attorney-showcase-container full-flex">
        {arrayOfAttorneyInfo.map((attorney, index) => (
          <AttorneyShowcase
            key={index}
            language={language}
            name={attorney.name}
            image={attorney.image}
            link={attorney.link}
          />
        ))}
      </div>
    </section>
  );
};
