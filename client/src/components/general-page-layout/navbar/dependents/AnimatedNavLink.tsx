// Library Imports
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

type PreservedNavLinkProps = {
  linkText: string;
  url: string;
  preserveState: [string, string][];
};

export const AnimatedNavLink: React.FC<PreservedNavLinkProps> = ({
  linkText,
  url,
  preserveState,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);

  const handleClick = () => {
    // Merge the existing search params with the preserved state
    for (const [key, value] of preserveState) {
      searchParams.set(key, value);
    }

    // Update the URL with the merged search params using navigate
    navigate(`${url}?${searchParams.toString()}`);
  };

  return (
    <div className="nav-link-wrapper">
      <Link to={url} onClick={handleClick} className="nav-link">
        {linkText}
      </Link>
      <div className="nav-link-underline"></div>
    </div>
  );
};
