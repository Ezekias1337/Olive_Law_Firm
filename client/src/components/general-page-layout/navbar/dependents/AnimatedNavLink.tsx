export const AnimatedNavLink = ({
  linkText,
  url,
}: {
  linkText: String;
  url: string;
}) => {
  return (
    <div className="nav-link-wrapper">
      <a href={url} className="nav-link">
        {linkText}
      </a>
      <div className="nav-link-underline"></div>
    </div>
  );
};
