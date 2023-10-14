// Library Imports
import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces and Types
import { ButtonProps } from "../../constants/interfaces/ButtonProps";
// Components
import { Loader } from "../general-page-layout/loader/Loader";
// CSS
import "./button.scss";

export const Button: FC<ButtonProps> = ({
  text,
  variant,
  icon,
  leftIcon = false,
  rightIcon = false,
  loading = false,
  disabled = false,
  onClickHandler = null,
  type = "button",
  url,
  buttonId = null
}) => {
  const renderButtonContent = () => {
    return (
      <>
        {leftIcon && icon && <FontAwesomeIcon icon={icon} />}
        {loading === true ? <Loader variant={variant} /> : text}
        {rightIcon && icon && <FontAwesomeIcon icon={icon} />}
      </>
    );
  };

  // If 'url' prop is provided, wrap the button in a Link
  if (url) {
    return (
      <Link to={url} className={`button ${variant}-button no-underline`}>
        {renderButtonContent()}
      </Link>
    );
  }

  // Otherwise, render the button as-is
  return (
    <button
      className={`button ${variant}-button`}
      disabled={disabled || loading}
      onClick={() => (onClickHandler !== null ? onClickHandler() : null)}
      type={type}
      id={buttonId !== null ? buttonId : undefined}
    >
      {renderButtonContent()}
    </button>
  );
};
