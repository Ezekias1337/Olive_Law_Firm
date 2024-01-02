// Library Imports
import { FC } from "react";
import {
  faUser,
  faMailBulk,
  faLanguage,
  faCalendar,
  faPhone,
  faClipboard,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// CSS
import "./view-case-card.scss";

type ViewCaseCardProps = {
  name?: string;
  phoneNumber?: string;
  emailAddress?: string;
  preferredLanguage?: string;
  dateOfIncident?: string;
  treatmentStatus?: string;
  incidentDescription?: string;
};

export const ViewCaseCard: FC<ViewCaseCardProps> = ({
  name,
  phoneNumber,
  emailAddress,
  preferredLanguage,
  dateOfIncident,
  treatmentStatus,
  incidentDescription,
}) => {
  return (
    <div className="view-case-card">
      <h3>
        <FontAwesomeIcon icon={faUser} className="case-info-icon" />{" "}
        <b>{name}</b>
      </h3>
      <p>
        <FontAwesomeIcon icon={faPhone} className="case-info-icon" />{" "}
        <b>Phone Number:</b> {phoneNumber}
      </p>
      <hr />
      <p>
        <FontAwesomeIcon icon={faMailBulk} className="case-info-icon" />{" "}
        <b>Email Address:</b> {emailAddress}
      </p>
      <hr />
      <p>
        <FontAwesomeIcon icon={faLanguage} className="case-info-icon" />{" "}
        <b>Preferred Language:</b> {preferredLanguage}
      </p>
      <hr />
      <p>
        <FontAwesomeIcon icon={faCalendar} className="case-info-icon" />{" "}
        <b>Date of Incident:</b> {dateOfIncident}
      </p>
      <hr />
      <p>
        <FontAwesomeIcon icon={faClipboard} className="case-info-icon" />{" "}
        <b>Treatment Status:</b> {treatmentStatus}
      </p>
      <hr />
      <p>
        <FontAwesomeIcon icon={faInfoCircle} className="case-info-icon" />{" "}
        <b>Incident Description:</b> {incidentDescription}
      </p>
    </div>
  );
};
