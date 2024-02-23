import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
            <StyledLogo onClick={() => {scroll.scrollToTop()}}>Maria</StyledLogo>
    );
};


export const StyledLogo = styled.p `
    
    color: ${Theme.colors.SecondaryBg};
    font-family: Manrope, sans-serif;
    font-size: 36px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: -2px;
    text-transform: capitalize;
    &::after {
        content: ".";
        color: ${Theme.colors.DotColor};
        font-family: Georgia, serif;
    }
`

export default Logo;