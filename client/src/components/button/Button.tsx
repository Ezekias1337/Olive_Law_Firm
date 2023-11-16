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
  buttonId = null,
  additionalClassNames,
  buttonSize = "small",
}) => {
  const renderButtonContent = () => {
    return (
      <>
        {leftIcon && icon && (
          <FontAwesomeIcon icon={icon} className="left-icon" />
        )}
        {loading === true ? (
          <Loader variant={variant} />
        ) : (
          <b className="button-text">{text}</b>
        )}
        {rightIcon && icon && (
          <FontAwesomeIcon icon={icon} className="right-icon" />
        )}
      </>
    );
  };

  // If 'url' prop is provided, wrap the button in a Link
  if (url) {
    return (
      <Link
        to={url}
        className={`button ${leftIcon === true ? "icon-left" : ""} 
        ${rightIcon === true ? "icon-right" : ""}
        ${variant}-button no-underline ${
          additionalClassNames !== undefined ? additionalClassNames : ""
        }
        ${buttonSize}-button
        `}
      >
        {renderButtonContent()}
      </Link>
    );
  }

  // Otherwise, render the button as-is
  return (
    <button
      className={`button ${leftIcon === true ? "icon-left" : ""} 
      ${rightIcon === true ? "icon-right" : ""} ${variant}-button  ${
        additionalClassNames !== undefined ? additionalClassNames : ""
      } ${buttonSize}-button`}
      disabled={disabled || loading}
      onClick={() => (onClickHandler !== null ? onClickHandler() : null)}
      type={type}
      id={buttonId !== null ? buttonId : undefined}
    >
      {renderButtonContent()}
    </button>
  );
};
