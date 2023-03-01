import { FC } from "react";
import * as S from "./styled";
import { Props } from "./types";

export const Title: FC<Props> = (props) => {
  const { subTitle, title, ...restProps } = props;

  return (
    <S.Wrapper>
      {subTitle && <h4>{subTitle}</h4>}
      {title && <h2>{title}</h2>}
    </S.Wrapper>
  );
};
