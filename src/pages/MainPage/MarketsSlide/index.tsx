import { Title } from "../../../components";
import { contentData } from "./mockData";
import * as S from "./styled";

export const MarketsSlide = () => {
  return (
    <S.Wrapper>
      <Title
        title="CAFENELE PARTENERIATE"
        subTitle="Accesează cafenelele disponibile"
      />
      <S.Content>
        {contentData.map(({ id, image, name, street, Button }) => (
          <S.Item key={id}>
            <img src={image} alt={`market${id}`} />
            <h2>{name}</h2>
            <h4>{street}</h4>
            {Button}
          </S.Item>
        ))}
      </S.Content>
    </S.Wrapper>
  );
};
