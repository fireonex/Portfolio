import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SkillText} from "../../../components/SkillText";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {S} from "./Skills_Styles"
import {Button} from "../../../components/Button";


export const Skills: React.FC = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle BgTitle={'About'} FrontTitle={'Who am i'}/>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <FlexWrapper direction={'column'}>
                        <SkillText>
                            Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                            reiciendis voluptatibus maiores alias consequatur aut perferendis
                            doloribus asperiores repellat quia voluptas sit aspernatur te natus accusan.
                            maiores alias consequatur aut equatur aut perferendi.
                        </SkillText>
                        <Button text={'About me'} iconId={'arrow'}  height={'30'} viewBox={'-4 0 40 30'}/>


                                {/**/}
                                {/*<Icon iconId={}  transform={'translate(0, 16)'}/>*/}

                    </FlexWrapper>

                    <S.SkillBox>
                        <FlexWrapper direction={'column'}>
                            <Skill topWidth={'80%'} bottomWidth={'20%'} titleProps={'HTML'}/>
                            <Skill topWidth={'75%'} bottomWidth={'25%'} titleProps={'CSS'}/>
                            <Skill topWidth={'55%'} bottomWidth={'45%'} titleProps={'JS'}/>
                            <Skill topWidth={'68%'} bottomWidth={'32%'} titleProps={'REACT'}/>
                        </FlexWrapper>
                    </S.SkillBox>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};







