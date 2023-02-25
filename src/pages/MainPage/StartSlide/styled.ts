import styled from "@emotion/styled";
import startSlideBg from "../../../public/img/startSlideBg.jpg";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.7) 80%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${startSlideBg});
  background-size: cover;
  ${styledFunc.flex("center", "center", "column")};
`;

export const Content = styled.div`
  ${styledFunc.flex("center", "center", "column")};
  color: ${theme.colors.white.base};
  gap: 32px;

  h1 {
    margin: 0;
    font-weight: bold;
    font-size: 48px;
  }

  h2 {
    margin: 0;
    font-style: italic;
    font-weight: 500;
  }

  .Main-Button-Wrapper {
    padding: 12px 64px;
  }
`;
