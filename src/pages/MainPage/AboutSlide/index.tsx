import { Paragraph } from "../../../components";
import { contentData } from "./mockData";
import CoffeeCup from "../../../public/img/CoffeeCup.png";
import * as S from "./styled";
import { theme } from "../../../utils";

export const AboutSlide = () => {
  return (
    <S.Wrapper>
      <S.NameWrapper>
        <h3>What Happens Here</h3>
        <h2>COFFEE BUILD YOUR BASE</h2>
        <hr />
      </S.NameWrapper>
      <S.ContentWrapper>
        <S.ParagraphWrapper>
          {contentData &&
            contentData.map(
              ({ id, title, content, icon, anchor }) =>
                anchor === "right" && (
                  <Paragraph
                    key={id}
                    $iconWeight="100%"
                    $maxWidth="412px"
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
              ({ id, title, content, icon, anchor }) =>
                anchor === "left" && (
                  <Paragraph
                    key={id}
                    $iconWeight="100%"
                    $maxWidth="412px"
                    $iconPosition={anchor}
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
