import styled from "styled-components";
import {font} from "../../styles/Common";
import {Theme} from "../../styles/Theme";

const Slider = styled.div `
    max-width: 900px;
    width: 100%;
`

const Slide = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
    

    @media screen and (max-width: 1170px) and (min-width: 360px) {
        margin-top: 20px;
    }
`

const Text = styled.p`
    ${font({weight: 400, lineHeight: '183%', letterSpacing: '1px', Fmax: 28, Fmin: 14})};
    
    padding: 0 10px;
    text-align: center;
`

const Name = styled.span`
    ${font({weight: 500, lineHeight: '225%', letterSpacing: '-0.04em', Fmax: 21, Fmin: 12})}

    text-align: center;
    text-transform: capitalize;
`

const UserPic = styled.img`
    margin: 50px 0 10px 0;
    max-width: 65px;
    
    @media ${Theme.media.mobile} {
        max-width: 45px;
        margin: 30px 0 5px 0;
    }
`


export const S = {
    Slider,
    Slide,
    Text,
    Name,
    UserPic
}


// renderNextButton({ isDisabled }): Функция рендеринга - создание пользовательского компонента.
// renderPlayPauseButton({ isPlaying }): Функция рендеринга - создание пользовательского компонента.

//    position: absolute;
//     top: 50%;
//     left: -40px;
//     width: 30px;
//     height: 30px;
//     background-color: antiquewhite;
//     padding: 0;
//     display:flex
//     justify-content: center
//      align-items:center