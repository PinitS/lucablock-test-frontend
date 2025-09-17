import styled, { css } from "styled-components";

export interface ButtonProps {
  $justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  $alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  $flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  $gap?: number;
  $shadow?: string;

  $width?: number | string;
  $height?: number | string;
  $isSquare?: boolean;

  $mt?: number;
  $mb?: number;
  $ml?: number;
  $mr?: number;

  $pt?: number;
  $pb?: number;
  $pl?: number;
  $pr?: number;

  $borderWidth?: number;
  $borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none";
  $borderRadius?: number;
  $borderColor?: string;

  $opacity?: number;
  $backgroundColor?: string;

  disabled?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: ${({ $justifyContent = "center" }) => $justifyContent};
  align-items: ${({ $alignItems = "center" }) => $alignItems};
  flex-direction: ${({ $flexDirection = "row" }) => $flexDirection};
  gap: ${({ $gap = 0 }) => `${$gap}px`};

  width: ${({ $width = "auto" }) =>
    typeof $width === "number" ? `${$width}px` : $width};
  height: ${({ $height = "auto" }) =>
    typeof $height === "number" ? `${$height}px` : $height};

  ${({ $isSquare }) =>
    $isSquare &&
    css`
      aspect-ratio: 1 / 1;
    `}

  margin-top: ${({ $mt = 0 }) => `${$mt}px`};
  margin-bottom: ${({ $mb = 0 }) => `${$mb}px`};
  margin-left: ${({ $ml = 0 }) => `${$ml}px`};
  margin-right: ${({ $mr = 0 }) => `${$mr}px`};

  padding-top: ${({ $pt = 0 }) => `${$pt}px`};
  padding-bottom: ${({ $pb = 0 }) => `${$pb}px`};
  padding-left: ${({ $pl = 0 }) => `${$pl}px`};
  padding-right: ${({ $pr = 0 }) => `${$pr}px`};

  border-width: ${({ $borderWidth = 1 }) => `${$borderWidth}px`};
  border-style: ${({ $borderStyle = "solid" }) => $borderStyle};
  border-radius: ${({ $borderRadius = 0 }) => `${$borderRadius}px`};

  opacity: ${({ $opacity = 1, disabled }) => (disabled ? 0.5 : $opacity)};

  border-color: ${({ $borderColor = "transparent" }) => $borderColor};
  box-shadow:${({ $shadow = "none" }) => $shadow};
  background-color: ${({ $backgroundColor = "transparent" }) =>
    $backgroundColor};

  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;
  flex-shrink: 0;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
