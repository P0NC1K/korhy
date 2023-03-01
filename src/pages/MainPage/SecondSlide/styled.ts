import styled from "@emotion/styled";
import { rgba } from "emotion-rgba";
import secondSlideBg from "../../../public/img/buySlideBg.png";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 912px;
  background-image: url(${secondSlideBg}),
    -webkit-linear-gradient(top, ${rgba(theme.colors.brown.light, 1)} 80%, ${rgba(
            theme.colors.white.base,
            1
          )}
          100%);

  background-size: cover;
  background-repeat: no-repeat;
  ${styledFunc.flex("center", "center", "column")};
  position: relative;

  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    height: 100vh;
  }
`;

export const Content = styled.div`
  ${styledFunc.flex("space-between", "center", "row")};
  flex-wrap: wrap;
  padding: 0 15px;
  gap: 100px;

  img {
    width: 260px;
    height: 260px;
  }

  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    flex-direction: column;
    padding: 0;
    width: 100%;

    img {
      width: 150px;
      height: 150px;
    }
  }
`;

export const Block = styled.div`
  ${styledFunc.flex("center", "flex-start", "column")};
  color: ${theme.colors.brown.light};
  width: 50%;
  gap: 20px;

  p {
    font-size: 24px;
    line-height: 136%;
  }

  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    width: 70%;
    align-items: center;
    text-align: center;

    .Main-Button-Wrapper {
      width: 100%;
    }
  }
`;

export const TitleWrapper = styled.div`
  ${styledFunc.flex("center", "flex-start", "column")};
  gap: 10px;
  width: 100%;
  border-bottom: 5px ${theme.colors.brown.base} solid;

  h1,
  h4 {
    margin: 0;
  }

  h4 {
    font-weight: 100;
    font-size: 32px;
    font-style: italic;
  }

  h1 {
    font-weight: 600;
    font-size: 48px;
  }

  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    align-items: center;

    h4 {
      display: none;
    }
  }
`;
