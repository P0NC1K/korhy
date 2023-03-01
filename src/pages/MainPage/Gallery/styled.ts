import styled from "@emotion/styled";
import { styledFunc } from "../../../utils";
import { StyledProps } from "./types";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr);
  grid-template-rows: repeat(2, 300px);
  gap: 0px 0px;
  grid-template-areas:
    "img-1 img-2 img-3 img-5"
    "img-1 img-2 img-4 img-5";

  ${styledFunc.maxMedia(styledFunc.breakpoints.desktop)} {
    grid-template-rows: repeat(2, 250px);
  }
  ${styledFunc.maxMedia(styledFunc.breakpoints.laptop)} {
    grid-template-rows: repeat(2, 180px);
  }
  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 190px);
    grid-template-areas:
      "img-2 img-3"
      "img-2 img-4";

    .img-5,
    .img-1 {
      display: none;
    }
  }
`;

export const ImgWrapper = styled.div<StyledProps>`
  box-sizing: border-box;
  grid-area: ${({ $gridArea }) => `img-${$gridArea}`};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
