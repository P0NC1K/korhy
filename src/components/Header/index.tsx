import { FC } from 'react';
import { MainLogo } from '../../public/icons/MainLogo';
import * as S from './styled';

export const Header: FC = () => {

    return (
        <S.Header
            className='main-header-container'
        >
            hello
            <MainLogo />
        </S.Header>
    )
}