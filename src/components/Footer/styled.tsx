import styled from "@emotion/styled";
import { styledFunc, theme } from "../../utils";
import footerBg from "../../public/img/footerBg.jpg";

export const Footer = styled.div`
  width: 100%;
  min-height: 100vh;
  max-height: 725px;
  color: ${theme.colors.white.base};
  ${styledFunc.flex("space-between", "flex-start", "column")}
  background-image: -webkit-linear-gradient(top, rgba(0,0,0, 0.7) 0%, rgba(0,0,0, 0.7) 100%), url(${footerBg});
  background-position: center;
  background-size: cover;
  padding: 24px;
  box-sizing: border-box;

  ${styledFunc.maxMedia(styledFunc.breakpoints.tablet)} {
    min-height: 140vh;
  }
`;

export const Content = styled.div`
  width: 100%;

  h3 {
    margin: 0;
    font-size: 32px;
    font-weight: 400;
  }
  p {
    margin: 24px 0;
    font-size: 14px;
    color: ${theme.colors.white.darker};
  }
`;

export const InternalLinksWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 32px;
  ${styledFunc.flex("space-between", "flex-start", "row")}
  flex-wrap: wrap;
`;

export const InternalLinks = styled.div`
  h4 {
    margin: 24px 0;
    font-size: 22px;
  }

  .Main-Button-Container {
    padding: 0;
    min-height: 32px;
    margin: 12px 0;
  }
`;

export const ExternalLinksWrapper = styled.div`
  width: 100%;
  margin-top: 32px;
  ${styledFunc.flex("space-between", "flex-start", "column")};
`;

export const SocialLinkWrapper = styled.div`
  ${styledFunc.flex("space-between", "flex-start", "row")}
  flex-wrap: wrap;
  gap: 0 64px;

  .Main-Button-Container {
    padding: 0;
  }
`;

export const SocialLink = styled.div`
  ${styledFunc.flex("space-between", "flex-start", "row")}
  flex-wrap: wrap;
  gap: 32px;
`;

export const BottomContent = styled.div`
  width: 100%;
  ${styledFunc.flex("space-between", "center", "row")}
  flex-wrap: wrap;

  p {
    font-size: 14px;
    color: ${theme.colors.white.darker};
  }
`;

export const BottomLinks = styled.div`
  ${styledFunc.flex("center", "center", "row")};
  gap: 32px;

  .Main-Button-Container {
    padding: 0;
    min-height: fit-content;
  }
`;
