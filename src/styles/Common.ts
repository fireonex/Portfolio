import {Theme} from "./Theme";

type FontPropsType = {
    family?: string
    weight?: number
    color?: string
    lineHeight?: string
    letterSpacing?: string
    Fmin?: number
    Fmax?: number
}


export const font = ({family, weight, color, lineHeight, letterSpacing, Fmin, Fmax}: FontPropsType) => `
    font-family: ${family || "Manrope"};
    font-weight: ${weight || 400};
    color: ${color || Theme.colors.SecondaryBg};
    line-height: ${lineHeight || '180%'};
    letter-spacing: ${letterSpacing || '0'};
    font-size: calc( (100vw - 360px)/(1920 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`

// 80/40