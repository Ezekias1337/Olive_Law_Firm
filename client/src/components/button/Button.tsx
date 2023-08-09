// Library Imports
import { FC } from "react";
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
}) => {
  return (
    <button
      disabled={disabled === true || loading === true}
      className={`button ${variant}-button`}
      onClick={() => (onClickHandler !== null ? onClickHandler() : null)}
    >
      {leftIcon && icon && <FontAwesomeIcon icon={icon} />}
      {loading === true ? <Loader variant={variant} /> : text}
      {rightIcon && icon && <FontAwesomeIcon icon={icon} />}
    </button>
  );
};
