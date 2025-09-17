"use client"
import styled from "styled-components";

interface TextProps {
  $fontFamily?: string;
  $fontSize?: number | string;
  $fontWeight?: number | string;
  $lineHeight?: number | string;
  $color?: string;
  $disabled?: boolean;
  $opacity?: number;
  $align?: "left" | "center" | "right" | "justify";
  $textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
  $decorationLine?: "none" | "underline" | "line-through" | "overline";
  $width?: number | string;

  $mt?: number;
  $mb?: number;
  $ml?: number;
  $mr?: number;
  $pt?: number;
  $pb?: number;
  $pl?: number;
  $pr?: number;

  $ellipsis?: boolean;
  $maxLines?: number;
}

export const Text = styled.span<TextProps>`
  font-family: ${({ $fontFamily = "var(--font-line-seed-sans)" }) =>
    $fontFamily};
  font-size: ${({ $fontSize = 16 }) =>
    typeof $fontSize === "number" ? `${$fontSize}px` : $fontSize};
  font-weight: ${({ $fontWeight = 400 }) => $fontWeight};
  line-height: ${({ $lineHeight = "normal" }) =>
    typeof $lineHeight === "number"
      ? `${$lineHeight}px`
      : $lineHeight || "normal"};

  color: ${({ $color = "#212121" }) => $color};
  opacity: ${({ $disabled, $opacity = 1 }) => ($disabled ? 0.5 : $opacity)};
  text-align: ${({ $align = "left" }) => $align};
  text-transform: ${({ $textTransform = "none" }) => $textTransform};
  text-decoration-line: ${({ $decorationLine = "none" }) => $decorationLine};

  width: ${({ $width = "auto" }) =>
    typeof $width === "number" ? `${$width}px` : $width};

  margin-top: ${({ $mt = 0 }) => `${$mt}px`};
  margin-bottom: ${({ $mb = 0 }) => `${$mb}px`};
  margin-left: ${({ $ml = 0 }) => `${$ml}px`};
  margin-right: ${({ $mr = 0 }) => `${$mr}px`};

  padding-top: ${({ $pt = 0 }) => `${$pt}px`};
  padding-bottom: ${({ $pb = 0 }) => `${$pb}px`};
  padding-left: ${({ $pl = 0 }) => `${$pl}px`};
  padding-right: ${({ $pr = 0 }) => `${$pr}px`};

  white-space: pre-line;
  word-break: break-word;
  overflow-wrap: break-word;
  overflow: visible;
  text-overflow: unset;

  ${({ $ellipsis, $maxLines }) =>
    $ellipsis &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${$maxLines};
    -webkit-box-orient: vertical;
    white-space: nowrap;
  `}
`;
