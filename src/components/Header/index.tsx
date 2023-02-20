import { FC } from 'react';
import { CoffeeIcon, UserAccountIcon, QuestionMarkIcon, BurgerIcon } from '../../public';
import MainLogo from '../../public/img/mainLogo.png';
import { theme } from '../../utils';
import { Button } from '../Button';

import * as S from './styled';

export const Header: FC = () => {

    return (
        <S.Header
            className='main-header-container'
        >
            <S.LogoWrapper>
                <a href='#'>
                    <img src={MainLogo} alt="Logo" />
                </a>
            </S.LogoWrapper>
            <S.NavMenu>
                <Button 
                    label='Cafenele' 
                    $variant='outlined'
                    $color={theme.colors.white.base}
                    $background={theme.colors.white.base}
                    icon={<CoffeeIcon />}
                />
                <S.IconList>
                    <Button
                        $variant='simple'
                        $color={theme.colors.white.base}
                        icon={<QuestionMarkIcon />}
                    />
                    <Button
                        $variant='simple'
                        $color={theme.colors.white.base}
                        icon={<UserAccountIcon />}
                    />
                </S.IconList>
                <S.BurgerButton>
                    <Button
                        $variant='simple'
                        $color={theme.colors.white.base}
                        icon={<BurgerIcon />}
                    />
                </S.BurgerButton>

            </S.NavMenu>
        </S.Header>
    )
}