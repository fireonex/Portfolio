import styled, {css} from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";


export const Link = styled.a<{ active?: boolean }>`

    ${font({weight: 400, lineHeight: '111%', Fmax: 28, Fmin: 15})}

    color: ${Theme.colors.SecondTitleFont};
    text-transform: lowercase;
    padding-top: 10px;
    position: relative;
    z-index: 0;

    &:hover {
        &::before {
            content: '';
            height: 3px;
            display: inline-block;
            position: absolute;
            background-color: ${Theme.colors.DotColor};
            left: -10px;
            right: -10px;
            bottom: 3px;
            z-index: -1;
        }
    }


    &::before {
        content: '';
        //height: 3px;
        display: inline-block;
        position: absolute;
        background-color: ${Theme.colors.DotColor};
        left: -10px;
        right: -10px;
        bottom: 1px;
        z-index: -1;

        ${props => props.active && css<{ active?: boolean }>`
            height: 3px;
        `}
    }

`