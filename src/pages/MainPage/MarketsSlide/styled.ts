import styled from "@emotion/styled";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
  ${styledFunc.flex("center", "center", "column")};
  gap: 84px;
  padding: 84px;
`;

export const Content = styled.div`
  ${styledFunc.flex("center", "center", "row")};
  flex-wrap: wrap;
  gap: 68px;
`;

export const Item = styled.div`
  ${styledFunc.flex("center", "flex-start", "column")};
  gap: 18px;

  h2 {
    font-weight: 600;
    font-size: 26px;
    color: ${theme.colors.black.light};
  }

  h4 {
    font-weight: 300;
    font-size: 18px;
    font-style: italic;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    color: ${theme.colors.brown.base};
  }

  .Main-Button-Wrapper {
    padding: 0 48px;
  }
`;
