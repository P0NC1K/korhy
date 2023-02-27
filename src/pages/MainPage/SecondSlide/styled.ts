import styled from "@emotion/styled";
import secondSlideBg from "../../../public/img/secondSlideBg.png";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
    width: 100%;
    height: 90vh;
    background-image: url(${secondSlideBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    ${styledFunc.flex("center", "center", "column")};
    position: relative;
    `

export const TopBackColor = styled.div`
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background-color: ${theme.colors.brown.light};
    `

export const Content = styled.div`
    ${styledFunc.flex("space-between", "center", "row")};
    flex-wrap: wrap;
    gap: 100px;

    img {
        width: 260px;
        height: 260px;
    }
`

export const Block = styled.div`
    ${styledFunc.flex("center", "flex-start", "column")};
    color: ${theme.colors.brown.light};
    width: 50%;
    gap: 20px;

    p {
        font-size: 24px;
        line-height: 136%;
    }

`

export const TitleWrapper = styled.div`
    ${styledFunc.flex("center", "flex-start", "column")};
    gap: 10px;
    width: 100%;
    border-bottom: 5px ${theme.colors.brown.base} solid;

    h1, h4 {
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
`