import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Styles from "./Button.module.css";
import { Placement } from "tippy.js";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  color: "red" | "green" | "blue";
  iconPosition?: "left" | "right";
  size?: "small" | "medium" | "large";
  tooltip?: boolean;
  tooltipPosition?: Placement;
  labelTooltip?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  color,
  size = "medium",
  labelTooltip,
  tooltip = false,
  tooltipPosition = "top",
  iconPosition = "left",
  children,
}) => {
  const classButton = `${Styles.button} ${Styles[color]} ${Styles[size]} ${
    disabled ? Styles.disabled : ""
  }`;

  const buttonContent = (
    <button
      className={classButton}
      disabled={disabled}
      onClick={onClick}
    >
      {iconPosition === "left" ? (
        <>
          {children} {label}
        </>
      ) : (
        <>
          {label} {children}
        </>
      )}
    </button>
  );

  return tooltip ? (
    <Tippy content={labelTooltip} placement={tooltipPosition}>
      {buttonContent}
    </Tippy>
  ) : (
    buttonContent
  );
};

export default Button;
