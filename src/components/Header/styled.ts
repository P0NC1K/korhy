import styled from "@emotion/styled/macro";
import { theme } from "../../utils";
import { styledFunc } from "../../utils/functions";
import { maxMQ } from "../../styled";

export const Header = styled.header`
    width: 100%;
    max-height: 64px;
    padding: 10px;
    background-color: ${theme.colors.black.base};
    ${styledFunc.flex(
        "space-between",
        "center",
        "row"
    )}

`

export const LogoWrapper = styled.div`
    height: 100%;
    a img {
        height: 100%;
    }
`

export const IconList = styled.div`
    ${styledFunc.flex("space-between", "center", "row")}
    gap: 24px;
    .Main-Button-Container {
        padding: 0;
    }
`

export const BurgerButton = styled.div`
    display: none;
`

export const NavMenu = styled.div`
    ${styledFunc.flex("space-between", "center", "row")}
    gap: 24px;

    ${maxMQ[0]} {
        & > div {
            display: none;
        }
        ${BurgerButton} {
            display: block;
        }
    }
    
`