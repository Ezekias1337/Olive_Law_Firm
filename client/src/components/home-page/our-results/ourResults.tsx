// Constants
import { homePageStrings } from "../../../constants/language-strings/homepageStrings";
// Components
import { Table } from "reactstrap";
import { OurResult } from "../../our-results/ourResult";
import { Button } from "../../button/Button";
// CSS
import "./our-results.scss";

const ourResultStrings = [
  {}
]

export const OurResults = ({ language }: { language: string }) => {
  const { practiceAreas } = homePageStrings;
  const { personalInjury, workersComp, autoAccidents, wrongfulDeath } =
    practiceAreas;

  return (
    <section className="our-results padding-left-and-right z-index-1">
      <h2>Our Results</h2>
      <div className="our-results-container container">
        <div className="row">
          {/* <OurResult /> */}
        </div>
      </div>

      {/* <Table>
        <thead>
          <tr>
            <th>Result</th>
            <th>Verdict/Settlement</th>
            <th>Attorney</th>
            <th>Practice Area</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">$45,000</th>
            <td>Verdict</td>
            <td>Juan Sanchez</td>
            <td>Auto Accidents</td>
            <td>2012</td>
          </tr>
          <tr>
            <th scope="row">$1,250,000</th>
            <td>Settlement</td>
            <td>Valerie Kilgore</td>
            <td>Wrongful Death</td>
            <td>2015</td>
          </tr>
          <tr>
            <th scope="row">$575,200</th>
            <td>Verdict</td>
            <td>Whitney Brooks</td>
            <td>Personal Injury</td>
            <td>2018</td>
          </tr>
          <tr>
            <th scope="row">$680,900</th>
            <td>Settlement</td>
            <td>Juan Sanchez</td>
            <td>Worker's Comp</td>
            <td>2022</td>
          </tr>
          <tr>
            <th scope="row">$425,000</th>
            <td>Settlement</td>
            <td>Whitney Brooks</td>
            <td>Wrongful Death</td>
            <td>2023</td>
          </tr>
        </tbody>
      </Table> */}
      <div className="view-more-results-container">
        <Button text="View More Results" variant="primary" />
      </div>
    </section>
  );
};
