import { Paragraph } from "../../../components";
import { theme } from "../../../utils";
import { contentData } from "./mockData";
import * as S from "./styled";

export const AdvantagesSlide = () => (
  <S.Wrapper>
    {contentData.map(({ id, title, content, icon }) => (
      <Paragraph
        key={id}
        {...{ title, content, icon }}
        $iconPosition="top"
        $iconColor={theme.colors.brown.base}
        $textColor={theme.colors.black.light}
        $titleFontSize="18px"
        $gap="32px"
        $textGap="16px"
        $iconHeight="124px"
      />
    ))}
  </S.Wrapper>
);
