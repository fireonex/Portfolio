import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Main_Styles"
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container>
                <FlexWrapper align={'center'} justify={'flex-start'} >
                    <S.MainTextWrapper>
                        <S.SmallText>hi! everyone</S.SmallText>
                        <S.MyName>Maria Krulikovskaya</S.MyName>
                        {/*<S.MainTitle>Front-end Developer</S.MainTitle>*/}
                        <S.MainTitle>
                            <p>Front-end Developer</p>
                            <Typewriter
                                options={{
                                    strings: ['Front-end Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 120
                                }}
                            />
                        </S.MainTitle>
                        <S.MainText>Bringing designs to life with clean code and creative solutions</S.MainText>
                    </S.MainTextWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};


