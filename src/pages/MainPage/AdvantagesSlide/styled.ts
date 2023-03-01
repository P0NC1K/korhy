import styled from "@emotion/styled";
import { styledFunc, theme } from "../../../utils";

export const Wrapper = styled.div`
  ${styledFunc.flex("center", "flex-start", "row")};
  flex-wrap: wrap;
  gap: 62px;
  min-height: 364px;
  padding: 112px 0 82px;
  background-color: ${theme.colors.white.base};
`;
