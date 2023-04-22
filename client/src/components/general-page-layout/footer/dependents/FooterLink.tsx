// Library Imports
import { Link, To } from "react-router-dom";

export const FooterLink = ({
  linkText,
  url,
  openInNewTab,
}: {
  linkText: String;
  url: To;
  openInNewTab: Boolean;
}) => {
  return (
    <Link to={url} className="full-flex" target={openInNewTab ? "_blank" : ""}>
      <div className="footer-navigation-link-wrapper">
        <span className="footer-navigation-link">{linkText}</span>
        <div className="footer-navigation-underline"></div>
      </div>
    </Link>
  );
};
