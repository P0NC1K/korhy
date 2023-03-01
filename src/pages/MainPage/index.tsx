import { Footer, Header } from "../../components";
import { AboutSlide } from "./AboutSlide";
import { AdvantagesSlide } from "./AdvantagesSlide";
import { Gallery } from "./Gallery";
import { SecondSlide } from "./SecondSlide";
import { StartSlide } from "./StartSlide";
import * as S from "./styled";

export const MainPage = (props: any) => {
  return (
    <S.Wrapper>
      <Header />
      <StartSlide />
      <AboutSlide />
      <SecondSlide />
      <AdvantagesSlide />
      <Gallery />
      <Footer />
    </S.Wrapper>
  );
};
