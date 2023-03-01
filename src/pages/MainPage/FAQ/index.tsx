import { Paragraph } from "../../../components";
import { contentData } from "./mockData";
import * as S from "./styled";
import { theme } from "../../../utils";
import { Title } from "../../../components/Title";

export const FAQ = () => {
  return (
    <S.Wrapper>
      <Title title="Întrebările frecvente" hasUnderline={false} />
      <S.ParagraphWrapper>
        {contentData &&
          contentData.map(({ id, title, content, icon }) => (
            <Paragraph
              key={id}
              $iconPosition="top"
              $iconHeight="auto"
              $iconColor={theme.colors.white.base}
              $titleFontSize="16px"
              $contentFontSize="14px"
              $textGap="6px"
              $fill={false}
              $textColor={theme.colors.black.light}
              {...{ title, content, icon }}
            />
          ))}
      </S.ParagraphWrapper>
    </S.Wrapper>
  );
};
