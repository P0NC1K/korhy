import { FC } from "react";
import { Props } from "./types";
import * as S from "./styled";

export const Paragraph: FC<Props> = (props) => {
  const {
    icon,
    title,
    content,
    $iconPosition = "left",
    className,
    ...restProps
  } = props;

  return (
    <S.Paragraph
      {...{ $iconPosition, ...restProps }}
      className={`Main-Paragraph-Wrapper ${className}`}
    >
      {icon && icon}
      <S.TextWrapper {...{ $iconPosition, ...restProps }}>
        <h3>{title}</h3>
        <p>{content}</p>
      </S.TextWrapper>
    </S.Paragraph>
  );
};
