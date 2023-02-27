import styled from "@emotion/styled";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
  background: ${theme.colors.brown.light};
  padding: 40px 0;
  ${styledFunc.flex("center", "center", "column")};
  gap: 32px;
`;

export const NameWrapper = styled.div`
  ${styledFunc.flex("center", "center", "column")};
  gap: 12px;

  h3 {
    color: ${theme.colors.brown.base};
    font-weight: 300;
    font-size: 24px;
    font-style: italic;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  h2 {
    margin: 0;
    font-size: 32px;
    font-weight: 600;
    color: ${theme.colors.black.light};
  }

  hr {
    width: 100%;
    max-width: 318px;
    height: 2px;
    background: ${theme.colors.brown.base};
    border: none;
    border-radius: 100px;
  }
`;

export const ContentWrapper = styled.div`
  ${styledFunc.flex("center", "center", "row")};
  gap: 32px;
`;

export const ParagraphWrapper = styled.div`
  ${styledFunc.flex("center", "center", "column")};
  gap: 24px;

  svg {
    max-width: 118px;
    ${styledFunc.flex("center", "center", "column")};
  }
`;
