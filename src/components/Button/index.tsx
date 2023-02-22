import { FC } from "react";
import { Props } from "./types";
import * as S from "./styled";

export const Button: FC<Props> = (props) => {
  const {
    label,
    $variant = "contained",
    icon,
    $iconPosition = "left",
    href,
    target = "_self",
    $size = "normal",
    $simpleHover = "underline",
    className,
    ...restProps
  } = props;

  return (
    <S.Button
      {...{ $variant, $iconPosition, $size, $simpleHover, ...restProps }}
      className={`Main-Button-Wrapper ${className}`}
    >
      {href ? (
        <a {...{ href, target }}>
          {icon && icon}
          {label}
        </a>
      ) : (
        <>
          {icon && icon}
          {label}
        </>
      )}
    </S.Button>
  );
};
