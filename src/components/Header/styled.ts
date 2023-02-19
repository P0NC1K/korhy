import styled from "@emotion/styled";
import { styledFunc } from "../../utils/functions";

export const Header = styled.header`
    ${styledFunc.flex(
        "space-between",
        "center",
        "row"
    )}

    svg {
        max-width: 32px;
        max-height: 32px;
        overflow: visible;
    }

`

export const NavMenu = styled.nav`

`