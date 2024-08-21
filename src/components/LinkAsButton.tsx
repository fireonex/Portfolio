
import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const LinkAsButton = styled.a`
    ${font({weight: 400, lineHeight: '23px', letterSpacing: '2px', Fmax: 17, Fmin: 12})}

    background-color: ${Theme.colors.HeaderColor};
    text-align: center;
    text-transform: uppercase;
    padding: 10px 5px;
    margin: 15px 25%;
    
    max-width: 204px;
    White-space: nowrap;
    max-height: 46px;
    
`


