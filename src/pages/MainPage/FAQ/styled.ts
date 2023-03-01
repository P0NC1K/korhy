import styled from "@emotion/styled";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
    padding: 80px 20px;
`

export const ParagraphWrapper = styled.div`
    ${styledFunc.flex("center", "flex-start", "row")};
    flex-wrap: wrap;
    gap: 48px;
    padding: 45px 0;


    .Main-Paragraph-Wrapper {
        ${styledFunc.flex("flex-start", "flex-start", "column")};
        text-align: left;
        gap: 15px;
    }

    .Paragraph-Content {
        ${styledFunc.flex("flex-start", "flex-start", "column")};
        text-align: left;

        h3 {
            font-weight: 500;
        }
        p {
            font-weight: 200;
        }
    }
`