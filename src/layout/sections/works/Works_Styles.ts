import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {StyledButton} from "../../../components/Button";

//Works

const Works = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }
`

//Work

const Work = styled.div`
    background-color: ${Theme.colors.QuoteTitle};
    max-width: 500px;
    width: 330px;
    flex-grow: 1;

    ${Link} {
        padding: 10px 0;

        & + ${Link} {
            margin-left: 20px;
            
            @media ${Theme.media.tablet} {
                margin-left: 40px;
            }
        }
    }

`

const ImageWrapper = styled.div`
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(4px);
        opacity: 0;
    }

    &:hover {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }

    ${StyledButton} {
        opacity: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    
    @media ${Theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
        }
    }

`

const Image = styled.img`
    width: 100%;
`

const Title = styled.h3`
    font-size: calc( (100vw - 360px)/(1920 - 360) * (21 - 16) + 16px);
`

const Text = styled.p`
    font-size: calc( (100vw - 360px)/(1920 - 360) * (17 - 12) + 12px);
    margin: 14px 0 10px 0;
`

const Description = styled.div`
    padding: 25px 20px;
`


export const S = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Title,
    Text,
    Description
}