import React from "react";
import "./Button.scss";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large", "btn--mobile", "btn--wide"];
const COLOR = ["primary", "blue", "red", "green", "brown"];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  func,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`btn ${func} ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
