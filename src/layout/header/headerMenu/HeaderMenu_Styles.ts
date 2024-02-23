import styled, {css} from "styled-components";
import {Theme} from "../../../styles/Theme";
import {Link} from "react-scroll";


const MenuItem = styled.li `
    
`
//Menu

const NavLink = styled(Link) `
    color: ${Theme.colors.SecondaryBg};
    font-family: Manrope, sans-serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 234.52%;
    letter-spacing: 5px;
    text-align: center;
    text-transform: uppercase;
    cursor: pointer;
    
    &:hover, &.active {
        background-color: ${Theme.colors.DotColor}; 
        color:  ${Theme.colors.HeaderColor}; 
    }
`

//Mobile Menu

const MobileMenu = styled.nav`
    
`

const MobileMenuPopup = styled.div<{isOpen: boolean}> `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99999;
    background-color: rgba(26, 26, 26);
    display: none;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
        display: flex;
        justify-content: center;
        align-items: center;
    `}
    
    ul {
        display: flex;
        gap: 30px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const BurgerButton = styled.button<{isOpen: boolean}> `
    position: fixed;
    top: -100px;
    width: 200px;
    height: 200px;
    right: -100px;
    z-index: 999999;
    
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.SecondaryBg};
        position: absolute;
        left: 40px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: rgba(255, 255, 255, 0);
        `}
        &::before {
            content: '';
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${Theme.colors.SecondaryBg};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(-45deg) translateY(0);

            `}
        }

        &::after {
            content: '';
            display: block;
            width: 24px;
            height: 2px;
            background-color: ${Theme.colors.SecondaryBg};
            position: absolute;
            transform: translateY(10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: rotate(45deg) translateY(0);
                width: 36px;

            `}
        }
    }
`

//Desktop Menu

const DesktopMenu = styled.nav `
   ul {
       display: flex;
       gap: 30px;
       justify-content: center;
   }
`

export const S = {
    MenuItem,
    NavLink,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu
}