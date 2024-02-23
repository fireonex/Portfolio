import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Slogan_Styles"


export const Slogan: React.FC = () => {
    return (
        <S.Slogan id={'slogan'}>
            <Container>
                <FlexWrapper>
                    <S.FirstIconWrapper>
                        <Icon iconId={'quotes'} height={'320'} viewBox={'0 0 385 321'} width={'385'}/>
                    </S.FirstIconWrapper>
                    <FlexWrapper direction={'column'}>
                        <S.TitleSlogan>quote of the day</S.TitleSlogan>
                        <S.Quote>“Success is not final;
                            failure is not fatal: it is the courage to
                            continue that counts.”
                        </S.Quote>
                        <S.NameQuoting>-Winston Churchill</S.NameQuoting>
                    </FlexWrapper>
                    <S.SecondIconWrapper>
                        <Icon iconId={'quotes'} height={'320'} viewBox={'0 0 385 321'} width={'385'}
                              transform={"scale(-1,-1)"}/>
                    </S.SecondIconWrapper>
                </FlexWrapper>
            </Container>
        </S.Slogan>
    );
};

