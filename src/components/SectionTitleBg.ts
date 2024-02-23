import styled from "styled-components";
import {font} from "../styles/Common";

export const SectionTitleBg = styled.h2`
    ${font({color: 'rgb(248, 248, 248)', family: "'Jost', sans-serif", weight: 300, lineHeight: '150%', letterSpacing: '-4px', Fmax: 123, Fmin: 60})}
    
    display: inline-block;
    position: relative;
    text-align: left;
    text-transform: uppercase;
    margin-bottom: 20px;
`