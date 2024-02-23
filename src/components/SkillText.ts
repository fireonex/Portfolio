import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const SkillText = styled.p `
    ${font({color: 'SecondTitleFont', weight: 400, lineHeight: '237%', letterSpacing: '-0.04em', Fmax: 17, Fmin: 15})}
    
    text-align: left;
    max-width: 600px;
`