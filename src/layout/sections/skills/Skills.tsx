import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillText} from "../../../components/SkillText";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Skills_Styles"
import {Button} from "../../../components/Button";
import {Fade} from "react-awesome-reveal";



export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle BgTitle={'About'} FrontTitle={'Who am i'}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <FlexWrapper direction={'column'}>
                        <SkillText>
                            I am a front-end Developer with a strong focus on creating clean,
                            efficient, and visually appealing web interfaces. With a solid foundation
                            in HTML, CSS, and JavaScript, I specialize in building modern, responsive
                            applications using React, TypeScript, and Redux. My skills extend to unit
                            testing and storybook testing, ensuring that every component is robust and reliable.

                            I have experience working with popular libraries such as Material-UI,
                            Ant Design, Styled-Components, Axios, Formik, and Redux-Form.
                            I strive to deliver high-quality user experiences by combining
                            creativity with functionality.
                        </SkillText>
                        <Button text={'About me'} iconId={'arrow'} height={'30'} viewBox={'-4 0 40 30'}/>
                    </FlexWrapper>

                    <S.SkillBox>
                        <FlexWrapper direction={'column'}>
                            <Fade cascade={true} damping={0.3}>
                                <Skill topWidth={'80%'} bottomWidth={'20%'} titleProps={'HTML'}/>
                                <Skill topWidth={'75%'} bottomWidth={'25%'} titleProps={'CSS'}/>
                                <Skill topWidth={'189%'} bottomWidth={'45%'} titleProps={'JavaScript'}/>
                                <Skill topWidth={'94%'} bottomWidth={'45%'} titleProps={'TypeScript'}/>
                                <Skill topWidth={'108%'} bottomWidth={'32%'} titleProps={'REACT'}/>
                                <Skill topWidth={'190%'} bottomWidth={'32%'} titleProps={'REDUX & RTK'}/>
                            </Fade>
                        </FlexWrapper>
                    </S.SkillBox>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};







