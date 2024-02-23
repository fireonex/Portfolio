import styled from "styled-components";
import {Theme} from "../../styles/Theme";
import {Container} from "../../components/Container";

const Header = styled.header `
   background-color: ${Theme.colors.HeaderColor};
   padding: 20px 0;
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 9999; 
    
    ${Container} {
        max-width: 1600px;
        width: 100%;
    }
`

export const S = {
    Header
}