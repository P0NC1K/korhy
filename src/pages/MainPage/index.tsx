import { Footer, Header } from "../../components";
import { AboutSlide } from "./AboutSlide";
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
      <Footer />
    </S.Wrapper>
  );
};
