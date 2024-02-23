import styled from "styled-components";
import {StyledLogo} from "../../../components/logo/Logo";
import {Theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {font} from "../../../styles/Common";
import {StyledButton} from "../../../components/Button";


const Contacts = styled.section`

    ${StyledLogo} {
        color: ${Theme.colors.HeaderColor};
    }

    ${Link} {
        ${font({weight: 300, lineHeight: '183%', Fmax: 35, Fmin: 17})}
        color: ${Theme.colors.SecondTitleFont};
        position: relative;
    }

    ${Link}::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -3px; 
        width: 100%;
        height: 4px; 
        background-color: ${Theme.colors.DotColor};
    }

    ${Link}:hover::before {
        height: 0; /* Удаляем эффект hover */
    }

    ${Link}::before {
        @media ${Theme.media.tablet} {
            height: 0;
        }
    }

    ${StyledButton} {
        text-align: center;
        padding: 10px 40px;
        align-self: center; 
        margin-top: 20px;

        @media ${Theme.media.mobile} {
            padding: 5px 20px;
        }
    }

    @media ${Theme.media.mobile} {
        padding: 50px 0;
    }
`

const TitleContacts = styled.h3`
    ${font({weight: 600, lineHeight: '115%', letterSpacing: '4px', Fmax: 90, Fmin: 35})}

    color: ${Theme.colors.SecondTitle};
    text-align: left;
    text-transform: none;
    max-width: 700px;

    @media ${Theme.media.mobile} {
        text-align: center;
        margin-bottom: 20px;
    }
`

const BottomRightWrapper = styled.div`
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    
    @media ${Theme.media.mobile} {
        align-items: center;
    }
`

const LinkWrapper = styled.div `
    display: flex;
    flex-direction: column;
    position: relative;
`

export const S = {
    Contacts,
    TitleContacts,
    BottomRightWrapper,
    LinkWrapper
}