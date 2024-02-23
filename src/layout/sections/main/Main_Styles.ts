import styled from "styled-components";
import {Theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import MainBgPic from "../../../images/img_2.png"
import {FlexWrapper} from "../../../components/FlexWrapper";

const Main = styled.div `
    // background-color: ${Theme.colors.HeaderColor};
    // display: flex;
    // min-height: 100vh;


    background: url(${MainBgPic}) no-repeat center center;
    background-size: cover;
    display: flex;
    width: 100%;
    max-width: 1920px;
    min-height: 100vh;

    @media ${Theme.media.mobile} {
        min-height: 70vh; /* Уменьшаем высоту блока */
        background-size: auto 100%; /* Задаем ширину изображения так, чтобы оно занимало всю высоту блока */
        margin-top: 80px;
    }

    @media ${Theme.media.tablet} {
        background-position: 70% 30%; 
    }

    @media screen and (max-width: 1120px) and (min-width: 769px) {
        background-position: 60% 50%; 
    }
`
const MainTextWrapper = styled.div `
    @media ${Theme.media.mobile} {
        margin: 170px 0 0 0;
    }
`

const MainTitle = styled.h1 `
    ${font({weight: 800, lineHeight: '111%', letterSpacing: '-4%', Fmax: 82, Fmin: 32})};
    
    p {
        display: none;
    }
`

const MyName = styled.h2 `
    ${font({weight: 800, lineHeight: '111%', letterSpacing: '-4%', Fmax: 70, Fmin: 28})}
    
    margin-top: 30px;
    
    @media ${Theme.media.mobile} {
        margin-top: 10px;
    }
`

const SmallText = styled.h4 `
    ${font({family: "'Inconsolata', sans-serif", weight: 400, lineHeight: '111%', letterSpacing: '6px', Fmax: 25, Fmin: 10})}
    
    background-color: #ECECEC2B;
    display: inline-block;
    text-transform: uppercase;
`

const MainText = styled.h2 `
    ${font({weight: 400, lineHeight: '198%', letterSpacing: '1px', Fmax: 28, Fmin: 12})}

    margin-top: 30px;
    max-width: 720px;

    @media ${Theme.media.mobile} {
        margin-top: 15px;
    }
`

export const S = {
    Main,
    MainTextWrapper,
    MainTitle,
    MyName,
    SmallText,
    MainText
}