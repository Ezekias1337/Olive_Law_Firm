// Library Imports
import { FC } from "react";
import { faAt } from "@fortawesome/free-solid-svg-icons";
// Interfaces and Types
import { LoaderProps } from "../../../constants/interfaces/LoaderProps";
// CSS
import "./loader.scss";

export const Loader: FC<LoaderProps> = ({ variant }) => {
  return (
    <div className={`container loader-${variant}`} id="loaderElement">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
