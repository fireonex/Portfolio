import React from 'react';
import IconSprite from '../../images/Sprite.svg'


type IconPropsType = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
    transform?: string;
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <svg width={props.width || "40"} height={props.height || "40"} viewBox={props.viewBox || "0 0 40 40"} fill="none"
             xmlns="http://www.w3.org/2000/svg" transform={props.transform}>
            <use xlinkHref={ `${IconSprite}#${props.iconId}` }/>
        </svg>
    );
};

