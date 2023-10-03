// Library Imports
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ButtonProps {
  text: string;
  variant: string;
  icon?: IconProp;
  leftIcon?: boolean;
  rightIcon?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClickHandler?: Function;
  type?: "button" | "submit" | "reset";
  url?: string;
}
