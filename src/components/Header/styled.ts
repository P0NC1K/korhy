import styled from "@emotion/styled/macro";
import { rgba } from "emotion-rgba";
import { theme } from "../../utils";
import { styledFunc } from "../../utils/functions";

export const Header = styled.header`
  position: fixed;
  z-index: 5;
  box-sizing: border-box;
  width: 100%;
  min-height: 64px;
  padding: 12px 24px;
  background-color: ${rgba(theme.colors.brown.dark, 0.5)};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  ${styledFunc.flex("space-between", "center", "row")}
`;

export const LogoWrapper = styled.div`
  a {
    ${styledFunc.flex("center", "center", "row")}

    img {
      width: 62px;
      height: auto;
    }
  }
`;

export const IconList = styled.div`
  ${styledFunc.flex("space-between", "center", "row")}
  gap: 12px;

  .Real-btn {
    margin-right: 12px;
  }

  ${styledFunc.media(styledFunc.breakpoints.tablet)} {
    display: none;
  }
`;

export const NavMenu = styled.div`
  ${styledFunc.flex("space-between", "center", "row")}

  .Burger-btn {
    display: none;
    ${styledFunc.media(styledFunc.breakpoints.tablet)} {
      display: flex;
    }
  }
`;

export const CloseMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  left: 100%;
  top: 0;
  width: fit-content;
  padding: 12px;
  border-radius: 12px;
  transform: translate(-100%, 100px);
  margin-left: -24px;
  z-index: 15;
  background-color: ${rgba(theme.colors.brown.dark, 0.7)};
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  gap: 6px;
  ${styledFunc.flex("center", "center", "column")}

  .Main-Button-Wrapper {
    width: 100%;
    ${styledFunc.flex("flex-start", "center", "row")}
  }
`;
