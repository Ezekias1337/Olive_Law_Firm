// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { AttorneyShowcase } from "./dependents/attorneyShowcase";
// CSS
import "./our-attorneys.scss";
// Assets and Images
import juanSanchezImage from "../../../assets/images/staff/juan-sanchez.png";
import whitneyBrooksImage from "../../../assets/images/staff/whitney-brooks.png";
import valerieKilgoreImage from "../../../assets/images/staff/valerie-kilgore.png";

const arrayOfAttorneyInfo = [
  { name: "Juan Sanchez", image: juanSanchezImage, link: "" },
  { name: "Whitney Brooks", image: whitneyBrooksImage, link: "" },
  { name: "Valerie Kilgore", image: valerieKilgoreImage, link: "" },
];

export const OurAttorneys = ({ language }: { language: string }) => {
  const { ourAttorneys } = homePageStrings;
  const { title, moreInfo } = ourAttorneys;

  return (
    <section className="our-attorneys padding-left-and-right z-index-1">
      <div className="our-attorneys-title-container full-flex">
        <h2 className="page-title">{language === "English" ? title.english : title.spanish}</h2>
      </div>

      <div className="attorney-showcase-container full-flex">
        {arrayOfAttorneyInfo.map((attorney) => (
          <AttorneyShowcase
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
