import { Paragraph } from "../../../components";
import { contentData } from "./mockData";
import CoffeeCup from "../../../public/img/CoffeeCup.png";
import * as S from "./styled";
import { theme } from "../../../utils";
import { Title } from "../../../components/Title";

export const AboutSlide = () => {
  return (
    <S.Wrapper>
      <Title title="COFFEE BUILD YOUR BASE" subTitle="What Happens Here" />
      <S.ContentWrapper>
        <S.ParagraphWrapper>
          {contentData &&
            contentData.map(
              ({ id, title, content, icon, anchor, iconFill }) =>
                anchor === "right" && (
                  <Paragraph
                    key={id}
                    $iconWeight="100%"
                    $maxWidth="412px"
                    $fill={iconFill}
                    $textColor={theme.colors.black.light}
                    $iconPosition={anchor}
                    {...{ title, content, icon }}
                  />
                )
            )}
        </S.ParagraphWrapper>
        <img src={CoffeeCup} alt="CoffeeCup" />
        <S.ParagraphWrapper>
          {contentData &&
            contentData.map(
              ({ id, title, content, icon, anchor, iconFill }) =>
                anchor === "left" && (
                  <Paragraph
                    key={id}
                    $iconWeight="100%"
                    $maxWidth="412px"
                    $iconPosition={anchor}
                    $fill={iconFill}
                    $textColor={theme.colors.black.light}
                    {...{ title, content, icon }}
                  />
                )
            )}
        </S.ParagraphWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};
