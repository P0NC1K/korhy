import styled from "@emotion/styled";
import { styledFunc, theme } from "../../utils";
import { StyledProps } from "./types";

export const Paragraph = styled.div<StyledProps>`
  gap: 23px;
  max-width: ${({ $maxWidth }) => $maxWidth || `350px`};

  svg {
    height: ${({ $iconHeight }) => $iconHeight || `80px`};

    path {
      fill: ${({ $iconColor }) => $iconColor || theme.colors.black.base};
      stroke: ${({ $iconColor }) => $iconColor || theme.colors.black.base};
      width: 100%;
      height: 100%;
    }
  }

  ${({ $iconPosition }) =>
    $iconPosition !== "top" &&
    styledFunc.flex(
      "center",
      "center",
      $iconPosition === "left" ? "row" : "row-reverse"
    )}

  ${({ $iconPosition }) =>
    $iconPosition === "top" &&
    `
        ${styledFunc.flex("center", "center", "column")};
        text-align: center;
    `}

    gap: ${({ $gap }) => $gap || "24px"};
`;

export const TextWrapper = styled.div<StyledProps>`
  color: ${({ $textColor }) => $textColor || theme.colors.brown.darker};
  gap: 8px;

  h3 {
    margin: 0;
    font-size: ${({ $titleFontSize }) => $titleFontSize || `24px`};
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: ${({ $contentFontSize }) => $contentFontSize || `14px`};
  }

  ${({ $iconPosition }) =>
    $iconPosition === "left" &&
    `
        ${styledFunc.flex("center", "flex-start", "column")};
        text-align: start;
    `}

  ${({ $iconPosition }) =>
    $iconPosition === "right" &&
    `
        ${styledFunc.flex("center", "flex-end", "column")};
        text-align: end;
    `}
    
    ${({ $iconPosition }) =>
    $iconPosition === "top" &&
    `
        ${styledFunc.flex("center", "center", "column")};
        text-align: center;
    `}

    gap: ${({ $textGap }) => $textGap || "18px"};
`;
