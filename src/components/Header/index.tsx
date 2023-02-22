import { FC } from "react";
import {
  CoffeeIcon,
  UserAccountIcon,
  QuestionMarkIcon,
  BurgerIcon,
} from "../../public";
import MainLogo from "../../public/img/mainLogo.png";
import { theme } from "../../utils";
import { Button } from "../Button";
import { useHeaderHook } from "./hooks";
import { dropdownMenu } from "./mockData";

import * as S from "./styled";

export const Header: FC = () => {
  const { openMenu, authorization, handle } = useHeaderHook();

  return (
    <S.Header className="Main-Header-Wrapper">
      <S.LogoWrapper>
        <a href="#">
          <img src={MainLogo} alt="Logo" />
        </a>
      </S.LogoWrapper>
      <S.NavMenu>
        <S.IconList>
          <Button
            label="Cafenele"
            $variant="outlined"
            $color={theme.colors.white.base}
            $background={theme.colors.white.base}
            $size="small"
            className="Real-btn"
            icon={<CoffeeIcon />}
          />
          <Button
            $variant="simple"
            $color={theme.colors.white.base}
            $background={theme.colors.white.base}
            $size="small"
            $simpleHover="contained"
            icon={<QuestionMarkIcon />}
          />
          <Button
            $variant="simple"
            $color={theme.colors.white.base}
            $background={theme.colors.white.base}
            $size="small"
            $simpleHover="contained"
            onClick={handle.handleOpenMenu}
            icon={<UserAccountIcon />}
          />
        </S.IconList>
        <Button
          $variant="simple"
          $simpleHover="contained"
          className="Burger-btn"
          $color={theme.colors.white.base}
          icon={<BurgerIcon />}
        />
      </S.NavMenu>
      {openMenu && (
        <>
          <S.DropdownMenu>
            {dropdownMenu.map(
              ({ id, label, href, status }) =>
                authorization === status && (
                  <Button
                    key={id}
                    $variant="simple"
                    $simpleHover="contained"
                    $size="small"
                    $color={theme.colors.white.base}
                    onClick={() => {
                      handle.handleOpenMenu();
                    }}
                    {...{ label, href }}
                  />
                )
            )}
          </S.DropdownMenu>
          <S.CloseMenu onClick={handle.handleOpenMenu} />
        </>
      )}
    </S.Header>
  );
};
