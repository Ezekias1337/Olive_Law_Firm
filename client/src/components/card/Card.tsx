// Library Imports
import { FC, useEffect, useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Interfaces and Types
import { ButtonProps } from "../../constants/interfaces/ButtonProps";
// Components
// CSS
import "./card.scss";

type CardProps = {
  cardVariant: "mobile" | "imageOnly" | "imageAndBody";
  headerText: string;
  bodyText?: string;
  buttonCount: 0 | 1 | 2;
  button1Text?: string;
  button1Variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button1OnClick?: Function;
  button2Text?: string;
  button2Type?: "button" | "reset";
  button2Variant?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quinternary"
    | "neutral"
    | "success"
    | "error";
  button2OnClick?: Function;
  buttonSize?: "small" | "medium" | "large";
  imageSource: string;
};

export const Card: FC<CardProps> = ({
  cardVariant,
  headerText,
  bodyText,
  buttonCount,
  button1Text,
  button1Variant,
  button1OnClick,
  button2Text,
  button2Variant,
  button2OnClick,
  buttonSize,
  imageSource,
}) => {
  if (cardVariant === "mobile") {
    return (
      <div className="card mobile-card">
        <img src={imageSource} />
        <h4>{headerText}</h4>
        <p>{bodyText}</p>
      </div>
    );
  } else if (cardVariant === "imageOnly") {
    return (
      <div
        className="card image-only-card semi-dark-image-overlay"
        style={{ backgroundImage: "url(" + imageSource + ")" }}
      >
        <p>{bodyText}</p>
        <h2 className="full-flex">{headerText}</h2>
        <div className="card-button-container"></div>
      </div>
    );
  } else if (cardVariant === "imageAndBody") {
    return (
      <div className="card image-and-body-card">
        <img src={imageSource} />
        <h3>{headerText}</h3>
        <p>{bodyText}</p>
      </div>
    );
  } else {
    return <></>;
  }
};
