import React, {useState} from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"
import {MenuItem} from "../../Header"

export const MobileMenu: React.FC<{menuItems: MenuItem[]}> = ({ menuItems }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => { setMenuIsOpen(!menuIsOpen); };
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => {setMenuIsOpen(false)}}>
                <Menu menuItems={menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

// export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
//     const [menuIsOpen, setmenuIsOpen] = useState(false)
//     const onBurgerBtnClick = () => { setmenuIsOpen( !menuIsOpen ) }
//     return (
//         <S.MobileMenu>
//             <S.BurgerButton isOpen={menuIsOpen} onClick={ onBurgerBtnClick }>
//                 <span></span>
//             </S.BurgerButton>
//             <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ ()=> {setmenuIsOpen(false)}}>
//                 <Menu menuItems={props.menuItems}/>
//             </S.MobileMenuPopup>
//         </S.MobileMenu>
//     );
// };



