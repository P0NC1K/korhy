import { FC } from "react";
import { Props } from "./types";
import * as S from "./styled";
import { BottomLink, externalLinks, internalLinks } from "./mockData";
import { Button } from "../Button";
import { theme } from "../../utils";
import { LanguageIcon, PointIcon } from "../../public";

export const Footer: FC<Props> = (props) => {
  return (
    <S.Footer>
      <S.Content>
        <h3>Korhy</h3>
        <p>Vizitați Centrul de ajutor</p>
        <S.InternalLinksWrapper>
          {internalLinks.map(({ id, label, links }) => (
            <S.InternalLinks key={id}>
              <h4>{label}</h4>
              {links.map(({ id, label, href }) => (
                <Button
                  key={id}
                  {...{ label, href }}
                  $variant="simple"
                  $color={theme.colors.white.base}
                  $fontWeight="300"
                />
              ))}
            </S.InternalLinks>
          ))}
        </S.InternalLinksWrapper>
      </S.Content>

      <S.ExternalLinksWrapper>
        <S.SocialLinkWrapper>
          <S.SocialLink>
            {externalLinks.map(({ id, icon, href }) => (
              <Button
                key={id}
                {...{ icon, href }}
                $variant="simple"
                $color={theme.colors.white.base}
              />
            ))}
          </S.SocialLink>
          <S.SocialLink>
            <Button
              label="Romana"
              $variant="simple"
              icon={<LanguageIcon />}
              $color={theme.colors.white.base}
            />
            <Button
              label="România, București"
              $variant="simple"
              $color={theme.colors.white.base}
              icon={<PointIcon />}
            />
          </S.SocialLink>
        </S.SocialLinkWrapper>
        <S.BottomContent>
          <p>© 2023 KORHY CAPITAL S.R.L.</p>
          <S.BottomLinks>
            {BottomLink.map(({ id, label, href }) => (
              <Button
                key={id}
                {...{ label, href }}
                $variant="simple"
                $color={theme.colors.white.base}
                $fontSize="14px"
              />
            ))}
          </S.BottomLinks>
        </S.BottomContent>
      </S.ExternalLinksWrapper>
    </S.Footer>
  );
};
