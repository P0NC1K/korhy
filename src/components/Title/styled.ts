import styled from "@emotion/styled";
import { styledFunc, theme } from "../../utils";
import { StyledProps } from "./types";

export const Wrapper = styled.div<StyledProps>`
    ${styledFunc.flex("center", "center", "column")};
    gap: ${({$gap}) => $gap || "12px"};

    h4 {
        margin: 0;
        color: ${({$color}) => $color?.subTitle || theme.colors.brown.base};
        font-weight: 300;
        font-size: ${({$fontSize}) => $fontSize?.subTitle || "24px"};
        font-style: italic;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    h2 {
        margin: 0;
        font-weight: 600;
        text-align: center;
        font-size: ${({$fontSize}) => $fontSize?.title || "36px"};
        color: ${({$color}) => $color?.title || theme.colors.black.light};
    }

    hr {
        margin: 0;
        width: 100%;
        max-width: 318px;
        height: 2px;
        background: ${({$color}) => $color?.brColor || theme.colors.brown.base};
        border: none;
        border-radius: 100px;
    }
`;
