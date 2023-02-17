import styled from "@emotion/styled";
import { globalColors, globalShadow } from "../../utils/globalStyled";
import { StyledProps } from "./types";

export const Button = styled.div<StyledProps>`
  padding: 18px 22px;
  border-radius: 12px;
  width: fit-content;
  user-select: none;
  cursor: pointer;

  ${({ $variant }) =>
    $variant === "contained" &&
    `
    background: ${globalColors.brown.base};
    color: ${globalColors.white.base};
    transition: box-shadow 0.3s, transform 0.1s;

    &:hover {
      box-shadow: ${globalShadow.base};
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0px);
      box-shadow: none;
    }
  `}
`;
