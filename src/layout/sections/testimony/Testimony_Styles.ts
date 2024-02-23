import styled from "styled-components";
import TestimonyBg from "../../../images/TestimonyBg.png";
import {Theme} from "../../../styles/Theme";
import {SectionTitleBg} from "../../../components/SectionTitleBg";
import {SectionTitleFront} from "../../../components/SectionTitleFront";

//Testimony

const Testimony = styled.section`
    background: url(${TestimonyBg}), ${Theme.colors.HeaderColor};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    min-height: 200px;
    

    ${SectionTitleBg} {
        color: #333333;
    }

    ${SectionTitleFront} {
        background: ${Theme.colors.HeaderColor};
        color: ${Theme.colors.SecondaryBg};
        border: ${Theme.colors.HeaderColor};
    }

    @media ${Theme.media.tablet} {
        padding: 50px 0;
    }
`

export const S = {
    Testimony
}