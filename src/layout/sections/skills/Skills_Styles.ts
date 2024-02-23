import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {StyledButton} from "../../../components/Button";

//Skills

const Skills = styled.section`
    ${Container} {
        @media screen and (max-width: 1170px) and (min-width: 585px) {
            padding: 0 80px;
        }
    }

    ${StyledButton} {
        background-color: ${Theme.colors.ButtonColor};
        padding: 10px 40px;
        margin: 60px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        max-width: 200px;
        text-transform: uppercase;
        text-align: center;

        @media screen and (max-width: 1170px) and (min-width: 360px) {
            svg {
                transform: rotate(90deg);
                max-width: 100%;
                height: auto;
            }
        }

        @media ${Theme.media.mobile} {
            padding: 10px 30px;
            gap: 5px;
        }
    }
`


const SkillBox = styled.div`
    width: 492px;
`


//Skill

const Skill = styled.div `
  
`

const SkillTitle = styled.h3 `
    font-weight: 400;
    text-align: left;
    margin-bottom: 10px;
`

const SkillLineBox = styled.div `
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    margin-bottom: 30px;
`

export const S = {
    Skills,
    SkillBox,
    Skill,
    SkillTitle,
    SkillLineBox
}