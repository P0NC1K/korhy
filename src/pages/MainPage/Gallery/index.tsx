import { galleryData } from "./mockData";
import * as S from "./styled";

export const Gallery = () => {
  return (
    <S.Wrapper>
      {galleryData.map(({ alt, src }, id) => (
        <S.ImgWrapper
          key={id}
          className={`img-${id + 1}`}
          $gridArea={(id + 1).toString()}
        >
          <img alt={alt} src={src} />
        </S.ImgWrapper>
      ))}
    </S.Wrapper>
  );
};
