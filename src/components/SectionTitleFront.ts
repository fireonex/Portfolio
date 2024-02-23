import {Theme} from "../styles/Theme";
import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionTitleFront = styled.p`
    ${font({family: "'Inconsolata', sans-serif", weight: 400, lineHeight: '126%', letterSpacing: '2px', Fmax: 26, Fmin: 15})}

    color: ${Theme.colors.SecondTitle};
    text-transform: uppercase;
    position: absolute;
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    border: 2px solid rgb(248, 248, 248);
    background: rgb(255, 255, 255);
`