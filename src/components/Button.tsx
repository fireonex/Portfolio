import styled from "styled-components";
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";
import React from "react";
import {Icon} from "./icon/Icon";


type ButtonPropsType = {
    text: string;
    iconId?: string; // Идентификатор иконки для Icon
    width?: string; // Ширина для Icon
    height?: string; // Высота для Icon
    viewBox?: string; // viewBox для Icon
    transform?: string; // transform для Icon
    typeButton?: 'button' | 'submit' | 'reset'; // Тип кнопки
    onClick?: () => void;
}


export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    return (
        <StyledButton type={props.typeButton} onClick={props.onClick}>
            {props.text}
            {props.iconId && <Icon iconId={props.iconId} width={props.width} height={props.height} viewBox={props.viewBox} transform={props.transform}/>}
        </StyledButton>
    )

}


export const StyledButton = styled.button`
    ${font({weight: 400, lineHeight: '23px', letterSpacing: '2px', Fmax: 17, Fmin: 12})}

    background-color: ${Theme.colors.HeaderColor};
    text-align: center;
    text-transform: uppercase;
    padding: 10px 50px;
    //max-width: 204px;
    White-space: nowrap
    //max-height: 46px;
`


