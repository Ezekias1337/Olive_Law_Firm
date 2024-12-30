// Library Imports
import { Link, To, useLocation } from "react-router-dom";
// This is for links that are external to the website
export const ExternalFooterLink = ({
  linkText,
  url,
}: {
  linkText: String;
  url: string;
}) => {
  return (
    <Link
      to={url}
      className="full-flex"
      target={"_blank"}
    >
      <div className="footer-navigation-link-wrapper">
        <span className="footer-navigation-link">{linkText}</span>
        <div className="footer-navigation-underline"></div>
      </div>
    </Link>
  );
};
