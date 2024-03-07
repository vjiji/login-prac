import React from "react";
import styled from "styled-components";
import {
  BUTTON_HEIGHT,
  BUTTON_HOVER_COLORS,
  BUTTON_WIDTH,
  COLORS,
} from "styles/styleConstant";

const Button = ({
  onClick,
  children,
  type = "button",
  className,
  disabled,
  ...styleProps
}) => {
  const { size = "medium", theme = "primary" } = styleProps;

  return (
    <ButtonStyles
      size={size}
      theme={theme}
      onClick={onClick}
      type={type}
      className={className}
      disabled={disabled}
    >
      {children}
    </ButtonStyles>
  );
};

export default Button;

const ButtonStyles = styled.button`
  width: ${({ size }) => BUTTON_WIDTH[size]};
  height: ${({ size }) => BUTTON_HEIGHT[size]};
  background-color: ${({ theme }) => COLORS[theme]};
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    border: 2px solid ${({ theme }) => BUTTON_HOVER_COLORS[theme]};
    font-weight: 500;
  }

  &.outlined {
    background-color: ${COLORS["outlined"]};
    border: 2px solid ${({ theme }) => COLORS[theme]};
  }
`;