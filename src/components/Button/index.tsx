import { FC } from "react";
import * as S from "./styled";
import { Props } from "./types";

export const Button: FC<Props> = (props) => {
  const {
    label,
    $variant = "contained",
    icon,
    $iconPosition = "left",
    ...restProps
  } = props;

  return (
    <S.Button {...{ $variant, $iconPosition, ...restProps }}>
      {icon && icon}
      {label}
    </S.Button>
  );
};
