import { Header } from "../../components";
import { AboutSlide } from "./AboutSlide";
import { StartSlide } from "./StartSlide";
import * as S from "./styled";

export const MainPage = (props: any) => {
  return (
    <S.Wrapper>
      <Header />
      <StartSlide />
      <AboutSlide />
    </S.Wrapper>
  );
};
