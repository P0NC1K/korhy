import { FC } from "react";
import { ParagraphProps } from "./types";
import * as S from "./styled";

export const Paragraph: FC<ParagraphProps> = (props) => {
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
      <S.TextWrapper
        {...{ $iconPosition, ...restProps }}
        className="Paragraph-Content"
      >
        <h3>{title}</h3>
        <p>{content}</p>
      </S.TextWrapper>
    </S.Paragraph>
  );
};
