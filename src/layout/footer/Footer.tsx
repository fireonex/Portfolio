import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {Container} from "../../components/Container";
import {S} from "./Footer_Styles"

const socialItemData = [
    {
        iconId: 'vk'
    },
    {
        iconId: 'git'
    },
    {
        iconId: 'youtube'
    },
    {
        iconId: 'telegram'
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <S.FlexWrapperCentered justify={'space-between'} wrap={'wrap'}>
                    <S.SocialList>

                        {socialItemData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLink>
                                        <Icon iconId={s.iconId} width={'50px'} height={'30px'} viewBox={'0 0 25 25'}/>
                                    </S.SocialLink>
                                </S.SocialItem>
                            )
                        })}

                    </S.SocialList>
                    <S.Copyright>© 2024 Maria Krulikovskaya, All Rights Reserved.</S.Copyright>
                </S.FlexWrapperCentered>
            </Container>
        </S.Footer>
    );
};



