import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "./Testimony_Styles"

export const Testimony: React.FC = () => {
    return (
        <S.Testimony id={'testimony'}>
            <Container>
                <FlexWrapper align={'center'} justify={'center'}>
                    <SectionTitle BgTitle={'testimonials'} FrontTitle={'what clients says'}/>
                </FlexWrapper>

                <FlexWrapper justify={'space-around'}>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </S.Testimony>
    );
};


