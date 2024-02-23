import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";



const Slogan = styled.section`
    height: fit-content;
    background: ${Theme.colors.QuoteBg};
    padding: 0;
    
    svg {
        max-width: 100%;
        height: auto;
    }
    
    ${Container} {
        padding: 0;
    }
`

const TitleSlogan = styled.h3`
    position: relative;
    ${font({family: "'Jost', sans-serif", weight: 300, lineHeight: '150%', letterSpacing: '-4%', Fmax: 95, Fmin: 30})}

    color: ${Theme.colors.QuoteTitle};
    text-align: center;
    text-transform: uppercase;
    margin: 80px 10px;
    white-space: nowrap;


    &::before {
        content: '';
        display: inline-block;
        position: absolute;
        background-color: ${Theme.colors.SecondaryBg};
        left: 40%;
        bottom: 3px;
        height: 3px;
        width: 22%;

        @media ${Theme.media.mobile} {
            height: 2px;
        }
    }

    @media screen and (max-width: 1000px) and (min-width: 576px) {
        margin: 50px 10px;
    }

    @media ${Theme.media.mobile} {
        margin: 25px 5px;
    }
`

const Quote = styled.p`
    ${font({weight: 300, lineHeight: '175%', Fmax: 30, Fmin: 15})}

    color: ${Theme.colors.SecondaryBg};
    text-align: center;
    margin: 0 80px;
    max-height: 200px;
    height: 100%;

    @media screen and (max-width: 1170px) and (min-width: 360px) {
        margin: 0 10px;
    }
`

const NameQuoting = styled.p`
    ${font({weight: 700, lineHeight: '180%', Fmax: 18, Fmin: 10})}

    color: ${Theme.colors.LittleFont};
    text-align: center;
    margin: 50px 0;

    @media ${Theme.media.tablet} {
        margin: 20px 0;
    }

    @media screen and (max-width: 1000px) and (min-width: 576px) {
        margin: 20px 0;
    }
`

const FirstIconWrapper = styled.div`
    align-self: flex-start;
    margin-left: 70px;

    @media ${Theme.media.tablet} {
        margin-left: 20px;
    }

    @media ${Theme.media.mobile} {
        margin-left: 5px;
        margin-top: 5px;
    }
`

const SecondIconWrapper = styled.div`
    align-self: flex-end;
    margin-right: 60px;

    @media ${Theme.media.tablet} {
        margin-right: 15px;
    }

    @media ${Theme.media.mobile} {
        margin-right: 5px;
        margin-bottom: 5px;
    }
`


export const S = {
    Slogan,
    TitleSlogan,
    Quote,
    NameQuoting,
    FirstIconWrapper,
    SecondIconWrapper
}