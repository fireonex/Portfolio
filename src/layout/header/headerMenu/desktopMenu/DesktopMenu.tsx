import React from 'react';
import {Menu} from "../menu/Menu";
import {S} from "../HeaderMenu_Styles"
import {MenuItem} from "../../Header"

export const DesktopMenu: React.FC<{menuItems: MenuItem[]}> = ({ menuItems }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={menuItems}/>
        </S.DesktopMenu>
    );
};


// export const DesktopMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
//     return (
//         <S.DesktopMenu>
//             <Menu menuItems={props.menuItems}/>
//         </S.DesktopMenu>
//     );
// };




