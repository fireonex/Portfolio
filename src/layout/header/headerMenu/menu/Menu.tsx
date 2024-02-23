import React from 'react';
import {S} from "../HeaderMenu_Styles";
import {MenuItem} from "../../Header"


export const Menu: React.FC<{menuItems: MenuItem[]}> = ({ menuItems }) => {
    return (
        <ul>
            {menuItems.map((item, index) => (
                <S.MenuItem key={index}>
                    <S.NavLink to={item.href}
                               smooth={true}
                               activeClass="active"
                               spy={true}
                               offset={-5}
                    >
                        {item.title}</S.NavLink>
                </S.MenuItem>
            ))}
        </ul>
    );
};


// export const Menu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
//     return (
//         <ul>
//             {props.menuItems.map((item, index) => {
//                 return <S.MenuItem key={index}>
//                     <S.Link href={''}>{item}</S.Link>
//                 </S.MenuItem>
//             })}
//         </ul>
//     );
// };


