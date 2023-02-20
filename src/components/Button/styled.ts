import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";
import { theme } from "../../utils/theme";
import { styledFunc } from "../../utils/functions";
import { StyledProps } from "./types";

export const Button = styled.div<StyledProps>`
  min-height: 54px;
  padding: 0 1.2em;
  border-radius: 12px;
  width: fit-content;
  user-select: none;
  cursor: pointer;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  font-size: ${({ $fontSize }) => $fontSize || `16px`};
  font-weight: ${({ $fontWeight }) => $fontWeight || 600};
  line-height: normal;
  border: 0.125em solid
    ${({ $background }) => $background || theme.colors.brown.base};
  gap: 12px;

  ${({ $iconPosition }) =>
    styledFunc.flex(
      "center",
      "center",
      $iconPosition === "left" ? "row" : "row-reverse"
    )}

  svg {
    max-width: 32px;
    max-height: 32px;
  }

  ${({ $variant, $background, $color }) =>
    $variant === "contained" &&
    `
    background: ${$background || theme.colors.brown.base};
    color: ${$color || theme.colors.white.base};

    &:hover {
      box-shadow: ${theme.shadow.base};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0px);
      box-shadow: none;
    }
    
    svg {
      path{
        stroke: ${$color || theme.colors.white.base};
      }
    }

  `}

  ${({ $variant, $background, $color }) =>
    $variant === "outlined" &&
    `
    color: ${$color || theme.colors.brown.dark};

    &:hover {
      background: ${
        $background
          ? rgba($background, 0.2)
          : rgba(theme.colors.brown.base, 0.2)
      };
    }
    
    svg {
      path{
        stroke: ${$color || theme.colors.black.base};
      }
    }
  `}

  ${({ $variant, $color, $fontWeight }) =>
    $variant === "simple" &&
    `
    border: none;
    color: ${$color || theme.colors.black.base};
    font-weight: ${$fontWeight || 400};
    
    &:hover{
      text-decoration: underline;
    }

    svg {
      path{
        stroke: ${$color || theme.colors.black.base};
      }
    }
  `}
`;
