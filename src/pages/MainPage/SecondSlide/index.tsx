import { FC } from "react";
import * as S from "./styled";
import logoBig from "../../../public/img/logoBig.png";
import { Button } from "../../../components";

export const SecondSlide: FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoBig} alt="logo" />
        <S.Block>
          <S.TitleWrapper>
            <h4>Application</h4>
            <h1>Folosește Korhy</h1>
          </S.TitleWrapper>

          <p>pentru a face comandă online la cafeneaua ta preferată</p>
          <Button label="Comandă  Acum" $fontSize="20px" />
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};
