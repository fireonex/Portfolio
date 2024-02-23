import React from 'react';
import styled from "styled-components";
import {S} from "../Skills_Styles"

type SkillPropsType = {
    iconId?: string;
    titleProps: string;
}

type SkillLinePropsType = {
    bottomWidth?: string;
    topWidth?: string;
}

export const Skill: React.FC<SkillPropsType & SkillLinePropsType> = (props: SkillPropsType & SkillLinePropsType) => {
    return (
        <S.Skill>
            <S.SkillTitle>{props.titleProps}</S.SkillTitle>
            <S.SkillLineBox>
               <SkillLineBottom bottomWidth={props.bottomWidth}/>
               <SkillLineTop topWidth={props.topWidth}/>
            </S.SkillLineBox>
        </S.Skill>
    );
};


const SkillLineBottom = styled.hr<SkillLinePropsType> `
    border: 1px solid rgb(219, 219, 219);
    width: ${props => props.bottomWidth};
    height: 0;
`

const SkillLineTop = styled.hr<SkillLinePropsType> `
    width: ${props =>  props.topWidth};
    height: 0;
    border: 2px solid #3A3422;
`

