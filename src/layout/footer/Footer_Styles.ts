import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/FlexWrapper";
import {font} from "../../styles/Common";


const Footer = styled.footer`
    background-color: ${Theme.colors.FooterColor};
    padding: 58px;

    @media ${Theme.media.tablet} {
        padding: 30px;
    }

    @media ${Theme.media.mobile} {
        padding: 15px;
    }
`

const FlexWrapperCentered = styled(FlexWrapper)`

    @media screen and (max-width: 720px) {
        flex-direction: column;
        align-items: center;
    }
`

const SocialList = styled.ul`
    display: flex;
    align-items: center;
    gap: 30px;
    padding-right: 15px;
    align-self: center;

    @media screen and (max-width: 720px) {
        flex-direction: row;
        justify-content: center;
        padding: 0;
    }
`

const SocialLink = styled.a`
    color: ${Theme.colors.LittleFont};

    svg {
        max-width: 100%;
        height: auto;

        @media screen and (max-width: 720px) {
            max-width: 70%;
            width: 40px;
        }
    }
`

const Copyright = styled.small`
    ${font({weight: 500, lineHeight: '212%', Fmax: 17, Fmin: 12})}

    color: ${Theme.colors.LittleFont};
    padding-right: 15px;
    align-self: flex-start;

    @media screen and (max-width: 720px) {
        margin-top: 15px;
        align-self: center;
        text-align: left;
    }
`

const SocialItem = styled.li`
    &:hover {
        transform: translateY(-4px);
    }
`

export const S = {
    Footer,
    FlexWrapperCentered,
    SocialList,
    SocialLink,
    Copyright,
    SocialItem
}