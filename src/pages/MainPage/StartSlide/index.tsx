import { FC } from "react";
import * as S from "./styled";
import logoBig from "../../../public/img/logoBig.png";
import { Button } from "../../../components";

export const StartSlide: FC = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <img src={logoBig} alt="logo" />
        <h1>Order coffee online</h1>
        <h2>“mood sponsored by coffee”</h2>
        <Button label="Comandă  Acum" $fontSize="20px" />
      </S.Content>
    </S.Wrapper>
  );
};
