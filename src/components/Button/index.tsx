import { FC } from "react";
import * as S from "./styled";
import { Props } from "./types";

export const Button: FC<Props> = (props) => {
  const { label, $variant, onClick } = props;

  return (
    <S.Button $variant={$variant || "contained"} {...{ onClick }}>
      {label}
    </S.Button>
  );
};
